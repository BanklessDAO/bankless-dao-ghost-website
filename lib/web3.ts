import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID;

/* ERC-20 address for the BanklessDAO token */
export const BANKLESS_DAO_TOKEN_ADDRESS =
  '0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198';

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
    localStorage: WindowLocalStorage;
  };

export function hasWeb3(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  if (window.ethereum) {
    return true;
  } else {
    // Checking if we're in a mobile browser, if not we can display just WalletConnect
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      return false;
    } else {
      return true;
    }
  }
}

export function getWalletAddress(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }
  const connected = window.localStorage.getItem('wallet');
  if (connected !== null && connected.indexOf('0x') === 0) {
    return connected;
  }
  return null;
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

/**
 * Launces the web3 modal and resolves to the connected wallet address or false if not successful
 *
 * @returns {false | string} Returns the connected wallet address or false if not connected
 */
export async function connectWallet(): Promise<false | string> {
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
    return false;
  } else {
    try {
      // Request accounts
      await window.ethereum.send('eth_requestAccounts');
      // Read accounts
      const accounts = await web3.eth.getAccounts();
      // Saving wallet to localstorage
      localStorage.setItem('wallet', accounts[0]);
      console.log('Connected account is:', accounts[0]);
      return accounts[0];
    } catch (e) {
      console.log('Web3 errored:', e.message);
      return false;
    }
  }
}

export function disconnectWallet(): Promise<any> {
  return new Promise(async (response) => {
    localStorage.setItem('wallet', '');
    response(true);
  });
}

/**
 * Get the bankless dao token balance of the connected wallet
 *
 * @returns {Promise<number>} total value (in ether) of $BANK tokens in wallet
 */
export async function getBankBalance(): Promise<number> {
  const web3Client = await initWeb3(window.ethereum);
  // The minimum ABI required to get the ERC20 Token balance
  const MIN_ABI = [
    // balanceOf
    {
      constant: true,
      inputs: [{ name: '_owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: 'balance', type: 'uint256' }],
      type: 'function',
    },
  ];
  const contract = new web3Client.eth.Contract(
    MIN_ABI,
    BANKLESS_DAO_TOKEN_ADDRESS,
  );
  const wallet = getWalletAddress();
  const result = await contract.methods.balanceOf(wallet).call(); // 29803630997051883414242659

  return Number(Web3.utils.fromWei(result)); // 29803630.997051883414242659
}
