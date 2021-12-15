import { ethers } from 'ethers';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID;

/* ERC-20 address for the BanklessDAO token */
export const BANKLESS_DAO_TOKEN_ADDRESS =
  '0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198';
const BANKLESS_TOKEN_SYMBOL = 'BANK';
const BANKLESS_TOKEN_DECIMALS = 18;

/* ERC-20 address for the BED Index token */
export const BED_TOKEN_ADDRESS =
  '0x2aF1dF3AB0ab157e1E2Ad8F88A7D04fbea0c7dc6';
const BED_TOKEN_SYMBOL = 'BED';
const BED_TOKEN_DECIMALS = 18;

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

export function getENSName(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }
  const name = window.localStorage.getItem('ensName');
  if (name !== null && name.length && name !== 'null') {
    return name;
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
      const walletAddress = accounts[0];
      const name = await loadENSName(walletAddress);
      // Saving wallet to localstorage
      if (walletAddress) {
        localStorage.setItem('wallet', walletAddress);
      }
      if (name) {
        localStorage.setItem('ensName', name);
      }
      console.log('Connected account is:', walletAddress, name);
      return accounts[0];
    } catch (e) {
      console.log('Web3 errored:', e.message);
      return false;
    }
  }
}

export function disconnectWallet(): Promise<any> {
  return new Promise(async (response) => {
    localStorage.removeItem('wallet');
    localStorage.removeItem('ensName');
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

export async function loadENSName(address: string): Promise<string | null> {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const name = await provider.lookupAddress(address);
  console.log('loadENSName', name);
  if (name) {
    localStorage.setItem('ensName', name);
  }
  return name;
}

export async function addBankToMetaMask(): Promise<boolean> {
  if (!window.ethereum) {
    return false;
  }
  console.log(
    'Adding BANK TOKEN',
    `${window.location.origin}/images/token-metamask.svg`,
  );

  try {
    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
    const wasAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: BANKLESS_DAO_TOKEN_ADDRESS,
          symbol: 'BANK',
          decimals: 18,
          image: `${window.location.origin}/images/token-metamask.svg`,
        },
      },
    });

    if (wasAdded) {
      console.log('Thanks for your interest!');
    } else {
      console.log('Your loss!');
    }

    return wasAdded;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function addBedIndexToMetaMask(): Promise<boolean> {
  if (!window.ethereum) {
    return false;
  }
  console.log(
    'Adding BED TOKEN',
    `${window.location.origin}/images/bed-index.png`,
  );

  try {
    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
    const wasAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: BED_TOKEN_ADDRESS,
          symbol: BED_TOKEN_SYMBOL,
          decimals: BED_TOKEN_DECIMALS,
          image: `${window.location.origin}/images/bed-index.png`,
        },
      },
    });

    if (wasAdded) {
      console.log('Thanks for your interest!');
    } else {
      console.log('Your loss!');
    }

    return wasAdded;
  } catch (error) {
    console.log(error);
    return false;
  }
}