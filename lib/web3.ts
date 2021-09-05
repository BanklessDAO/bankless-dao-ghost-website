import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID;
const providerOptions = {
  injected: {
    package: null,
    connector: async () => {
      return 'injected';
    },
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: INFURA_ID,
    },
    connector: async () => {
      return 'walletconnect';
    },
  },
};

// Defining window to make things work for TypeScript
declare const window: Window &
  typeof globalThis & {
    ethereum: any;
    localStorage: any;
  };

export function checkWeb3(): Promise<any> {
  return new Promise(async (response) => {
    console.log('Checking Web3.');
    if (window.ethereum) {
      response(true);
    } else {
      // Checking if we're in a mobile browser, if not we can display just WalletConnect
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        )
      ) {
        response(false);
      } else {
        response(true);
      }
    }
  });
}

export function initWeb3(provider: any): Promise<any> {
  return new Promise(async (response) => {
    console.log('Init new Web3 instance.');
    // Connecto to Web3
    const web3 = await new Web3(provider);
    // Return Web3 instance
    response(web3);
  });
}

export function initWeb3Modal(): Promise<any> {
  return new Promise(async (response) => {
    console.log('Init new Web3Modal instance.');
    // Connecto to Web3
    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: false,
      providerOptions,
    });
    // Return Web3Modal instance
    response(web3Modal);
  });
}

export function checkWallet(): Promise<any> {
  return new Promise(async (response) => {
    // Be sure we're on the client
    if (typeof window !== 'undefined') {
      // Check if wallet exists in localStorage
      const connected = window.localStorage.getItem('wallet');
      if (connected !== null && connected.indexOf('0x') === 0) {
        response(connected);
      } else {
        response(false);
      }
    }
  });
}

export function connectWallet(): Promise<any> {
  return new Promise(async (response) => {
    // Connecto to Web3
    console.log('Init Web3Modal first.');
    let web3Modal = await initWeb3Modal();
    const provider = await web3Modal.connect();
    console.log('Now we have the provider connnecting to Web3.');
    const web3 = await initWeb3(provider);
    // Read network to be sure we're in Ethereum network (id: 1)
    let network = await web3.eth.net.getId();
    console.log('Web3 network is:', network);
    if (network !== 1) {
      alert('Please switch network to Ethereum Mainnet!');
      response(false);
    } else {
      try {
        // Request accounts
        await window.ethereum.send('eth_requestAccounts');
        // Read accounts
        const accounts = await web3.eth.getAccounts();
        // Saving wallet to localstorage
        localStorage.setItem('wallet', accounts[0]);
        console.log('Connected account is:', accounts[0]);
        response(accounts[0]);
      } catch (e) {
        console.log('Web3 errored:', e.message);
        response(false);
      }
    }
  });
}

export function disconnectWallet(): Promise<any> {
  return new Promise(async (response) => {
    localStorage.setItem('wallet', '');
    response(true);
  });
}
