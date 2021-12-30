import { BASE_BSC_SCAN_URL } from 'src/config'
import { nodes } from './getRpcUrl'

export const setupNetwork = async () => {
  const { REACT_APP_CHAIN_ID } = process.env
  // console.log('---------setupNetwork----------');
  // console.log({ nodes, REACT_APP_CHAIN_ID, BASE_BSC_SCAN_URL });
  // console.log('-------------------');
  const provider = window.ethereum
  if (provider) {
    const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Binance Smart Chain Mainnet',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'bnb',
              decimals: 18,
            },
            rpcUrls: nodes,
            blockExplorerUrls: [`${BASE_BSC_SCAN_URL}/`],
          },
        ],
      })
      return true
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error)
      return false
    }
  } else {
    console.error(
      "Can't setup the BSC network on metamask because window.ethereum is undefined",
    )
    return false
  }
}
