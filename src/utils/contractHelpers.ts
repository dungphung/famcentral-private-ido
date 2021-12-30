// Addresses
import { ethers } from 'ethers'
import { simpleRpcProvider } from './providers'
import { getMulticallAddress } from './addressHelpers'
import MultiCallAbi from 'src/config/abi/Multicall.json'

const getContract = (abi, address, signer) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getMulticallContract = (signer) => {
  return getContract(MultiCallAbi, getMulticallAddress(), signer)
}
