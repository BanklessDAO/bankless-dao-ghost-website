import { createContext, useContext, useEffect, useState } from 'react';
import * as libWeb3 from '../lib/web3';

type State = {
  hasWeb3: boolean;
  walletAddress: string | null;
  ensName: string | null;
  bankBalance: number | null;
};

interface ContextValue extends State {
  isConnected: boolean;
  connectWallet: () => void;
  disconnectWallet: () => void;
  loadBankBalance: () => void;
}

const Web3Context = createContext<ContextValue | undefined>(undefined);

function getInitialState(): State {
  return {
    walletAddress: libWeb3.getWalletAddress(),
    ensName: libWeb3.getENSName(),
    hasWeb3: libWeb3.hasWeb3(),
    bankBalance: null,
  };
}

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<State>(getInitialState());

  // run this once when the app first loads to check if someone has an already connected a wallet in
  // local storage but hasn't yet loaded the ENS name because maybe it's newly registered.
  useEffect(() => {
    if (state.walletAddress && !state.ensName) {
      libWeb3.loadENSName(state.walletAddress).then((ensName) => {
        setState({ ...state, ensName });
      });
    }
  }, []);

  async function connectWallet() {
    if (state.hasWeb3) {
      let connectResult = await libWeb3.connectWallet();
      if (connectResult !== false && connectResult.indexOf('0x') === 0) {
        setState({
          ...state,
          walletAddress: connectResult,
          ensName: libWeb3.getENSName(),
        });
      }
    } else {
      throw new Error('Browser is not Web3 enabled');
    }
  }

  async function disconnectWallet() {
    console.log('disconnectWallet');
    await libWeb3.disconnectWallet();
    setState(getInitialState());
  }

  async function loadBankBalance() {
    const balance = await libWeb3.getBankBalance();
    console.log('loadBankBalance', balance);
    setState({ ...state, bankBalance: balance });
  }

  const value: ContextValue = {
    connectWallet,
    disconnectWallet,
    loadBankBalance,
    isConnected: Boolean(state.walletAddress),
    ...state,
  };
  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
}

export function useWeb3() {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3Context must be used within a <Web3Provider>');
  }
  return context;
}
