import React from 'react'
import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalCloseButton,
  HStack,
  Text,
  Spacer,
  ModalHeader,
  Box,
  ModalBody,
  VStack,
} from '@chakra-ui/react'
import {
  connectorLocalStorageKey,
  walletLocalStorageKey,
} from 'src/config/WalletConfig'
import config from 'src/config/WalletConfig'

import { ReactComponent as ArrowRightIcon } from 'src/assets/svgs/arrow-right-icon.svg'
import { ReactComponent as InfoIcon } from 'src/assets/svgs/info-icon.svg'
import { ConnectorNames } from 'src/config/WalletNames'

interface IConnectorWalletModal {
  isOpen: boolean
  onDismiss: () => void
  login: (connectorId: string) => void
}

const ConnectorWalletModal: React.FC<IConnectorWalletModal> = ({
  login,
  isOpen,
  onDismiss: onClose,
  ...rest
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxWidth="336px" w="366px">
        <ModalHeader bg="#232539">
          <Text
            fontSize="20px"
            lineHeight="20px"
            color="white"
            fontWeight="extrabold"
          >
            Connect to a wallet
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody bg="#232539">
          {config.map(({ title, icon: Icon, connectorId }) => (
            <Box
              cursor="pointer"
              key={title}
              onClick={() => {
                const isIOS =
                  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !window.MSStream

                // Since iOS does not support Trust Wallet we fall back to WalletConnect

                if (title === 'Trust Wallet' && isIOS) {
                  login(ConnectorNames.WalletConnect)
                } else {
                  login(connectorId)
                }
                localStorage.setItem(walletLocalStorageKey, title)
                localStorage.setItem(connectorLocalStorageKey, connectorId)
                onClose()
              }}
              mt="2px"
              bg="#27283E"
              px="22px"
              py="12px"
              role="group"
            >
              <HStack>
                <Text fontSize="16px" lineHeight="16px" color="white">
                  {title}
                </Text>
                <Spacer />
                <Box position="relative" display="block" opacity={1}>
                  <Box _groupHover={{ opacity: 0 }}>
                    <Icon style={{ width: 24 }} />
                  </Box>

                  <Box
                    position="absolute"
                    top="0"
                    zIndex="10"
                    opacity={0}
                    _groupHover={{ opacity: 1 }}
                  >
                    <ArrowRightIcon style={{ width: 24 }} />
                  </Box>
                </Box>
              </HStack>
            </Box>
          ))}

          <VStack mt="23px">
            <HStack
              cursor="pointer"
              onClick={() => {
                window.open(
                  'https://docs.pancakeswap.finance/help/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain',
                )
              }}
            >
              <InfoIcon />
              <Text fontSize="16px" lineHeight="16px" color="white">
                Learn how to connect
              </Text>
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ConnectorWalletModal
