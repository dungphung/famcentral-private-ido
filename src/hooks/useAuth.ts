import { useCallback } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'

import { connectorLocalStorageKey } from 'src/config/WalletConfig'
import { connectorsByName } from 'src/utils/web3React'
import { setupNetwork } from 'src/utils/wallet'
// import useToast from './useToastCustom'
import { useHistory } from 'react-router'
import { useToast } from '@chakra-ui/react'
// import useToast from 'hooks/useToast'
// import { profileClear } from 'state/profile'
// import { useAppDispatch } from 'state'
// import { useTranslation } from 'contexts/Localization'

const useAuth = () => {
  const toast = useToast
  //   const { t } = useTranslation()
  //   const dispatch = useAppDispatch()
  const { activate, deactivate } = useWeb3React()
  //   const { toastError } = useToast();
  const history = useHistory()

  const login = useCallback(
    (connectorID) => {
      const connector = connectorsByName[connectorID]

      if (connector) {
        activate(connector, async (error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetwork()
            if (hasSetup) {
              activate(connector)
            }
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey)
            if (
              error instanceof NoEthereumProviderError ||
              error instanceof NoBscProviderError
            ) {
              toast({
                title: 'Provider Error',
                description: 'No provider was found',
                position: 'top-right',
                isClosable: true,
                status: 'error',
              })
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector
                walletConnector.walletConnectProvider = null
              }

              toast({
                title: 'Authorization Error',
                description: 'Please authorize to access your account',
                position: 'top-right',
                isClosable: true,
                status: 'error',
              })
            } else {
              console.log(error.name, error.message)
              toast({
                title: error.name,
                description: error.message,
                position: 'top-right',
                isClosable: true,
                status: 'error',
              })
            }
          }
        })
      } else {
        console.log('Unable to find connector')

        toast({
          title: 'Unable to find connector',
          description: 'The connector config is wrong',
          position: 'top-right',
          isClosable: true,
          status: 'error',
        })
      }
    },
    [activate, toast],
  )

  const logout = useCallback(() => {
    // dispatch(profileClear())
    deactivate()
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem('walletconnect')) {
      connectorsByName.walletconnect.close()
      connectorsByName.walletconnect.walletConnectProvider = null
    }
    history.replace('/')
  }, [deactivate, history])

  return { login, logout }
}

export default useAuth
