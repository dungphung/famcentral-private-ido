import React from 'react'
import useModal from './useModal'
import ModalConnectWallet from 'src/layouts/ModalConnectWallet'
import AccountModal from 'src/layouts/AccountModal'

const useWalletModal = (
  login: (id: string) => {},
  logout?: () => void,
  account?: string,
) => {
  const [onPresentConnectModal] = useModal(<ModalConnectWallet login={login} />)
  const [onPresentAccountModal] = useModal(
    <AccountModal account={account || ''} logout={logout} />,
  )
  return { onPresentConnectModal, onPresentAccountModal }
}

export default useWalletModal
