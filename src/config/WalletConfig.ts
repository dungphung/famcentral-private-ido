import Metamask from 'src/components/Svg/Icons/Metamask'
import WalletConnect from 'src/components/Svg/Icons/WalletConnect'
import TrustWallet from 'src/components/Svg/Icons/TrustWallet'
import MathWallet from 'src/components/Svg/Icons/MathWallet'
import TokenPocket from 'src/components/Svg/Icons/TokenPocket'
import BinanceChain from 'src/components/Svg/Icons/BinanceChain'
import SafePal from 'src/components/Svg/Icons/SafePal'
import Coin98 from 'src/components/Svg/Icons/Coin98'

import { ConnectorNames } from './WalletNames'

const connectors = [
  {
    title: 'Metamask',
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
  },
  {
    title: 'WalletConnect',
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    priority: 2,
  },
  {
    title: 'Trust Wallet',
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
    priority: 3,
  },
  {
    title: 'MathWallet',
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: 'TokenPocket',
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },

  {
    title: 'Binance Chain',
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
    priority: 999,
  },
  {
    title: 'SafePal',
    icon: SafePal,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
  {
    title: 'Coin98',
    icon: Coin98,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
]

export default connectors
export const connectorLocalStorageKey = 'connectorIdv2'
export const walletLocalStorageKey = 'wallet'
