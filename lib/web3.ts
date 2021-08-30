import Web3 from "web3";

// Defining window to make things work for TypeScript
declare const window: Window &
    typeof globalThis & {
        ethereum: any,
        localStorage: any
    }

export function initWeb3(): Promise<any> {
    return new Promise(async response => {
        console.log('Init new Web3 instance.')
        // Connecto to Web3
        let web3 = await new Web3(window.ethereum)
        // Return Web3 instance
        response(web3)
    })
}

export function checkWallet(): Promise<any> {
    return new Promise(async response => {
        // Be sure we're on the client
        if (typeof window !== 'undefined') {
            // Check if wallet exists in localStorage
            const connected = window.localStorage.getItem('wallet')
            if (connected !== null && connected.indexOf('0x') === 0) {
                response(connected)
            } else {
                response(false)
            }
        }
    })
}

export function connectWallet(): Promise<any> {
    return new Promise(async response => {
        // Connecto to Web3
        console.log('Trying connecting wallet.')
        let web3 = await initWeb3()
        // Read network to be sure we're in Ethereum network (id: 1)
        let network = await web3.eth.net.getId();
        console.log('Web3 network is:', network)
        if (network !== 1) {
            alert('Please switch network to Ethereum Mainnet!')
            response(false)
        } else {
            try {
                // Request accounts
                await window.ethereum.send("eth_requestAccounts");
                // Read accounts
                const accounts = await web3.eth.getAccounts();
                // Saving wallet to localstorage
                localStorage.setItem('wallet', accounts[0])
                console.log('Connected account is:', accounts[0])
                response(accounts[0])
            } catch (e) {
                console.log('Web3 errored:', e.message)
                response(false)
            }
        }
    })
}

export function disconnectWallet(): Promise<any> {
    return new Promise(async response => {
        localStorage.setItem("wallet", "")
        response(true)
    })
}