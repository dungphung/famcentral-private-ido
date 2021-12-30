import React from 'react'
import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalCloseButton,
  HStack,
  Text,
  ModalHeader,
  ModalBody,
  Center,
  Button,
  useClipboard,
} from '@chakra-ui/react'

import CopyIcon from 'src/components/Svg/Icons/CopyIcon'
import OpenNew from 'src/components/Svg/Icons/OpenNew'
import { useWeb3React } from '@web3-react/core'
import { connectorLocalStorageKey } from 'src/config/WalletConfig'

interface IAccountModal {
  isOpen: boolean
  onDismiss: () => void
  login: (connectorId: string) => void
}

const AccountModal: React.FC<IAccountModal> = ({
  logout,
  isOpen,
  onDismiss: onClose,
}) => {
  const { account } = useWeb3React()
  const { hasCopied, onCopy } = useClipboard(account)
  console.log(account)

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg="#232539">
          <Text
            fontSize="20px"
            lineHeight="20px"
            color="white"
            fontWeight="extrabold"
          >
            Manage
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody bg="#232539">
          <Text fontSize="18px" fontWeight="bold" lineHeight="20px" mt="20px">
            {account}
          </Text>
          <HStack mt="20px">
            <HStack>
              <Text
                cursor="pointer"
                fontSize="16px"
                lineHeight="16px"
                color="#00A3FF"
                _hover={{ textDecoration: 'underline' }}
                onClick={() => {
                  window.open(`https://bscscan.com/address/${account}`)
                }}
              >
                View on BscScan
              </Text>
              <OpenNew size={24} color="#00A3FF" />
            </HStack>
            <HStack>
              <Text
                cursor="pointer"
                onClick={onCopy}
                fontSize="16px"
                lineHeight="16px"
                color="white"
              >
                Copy Address
              </Text>
              <CopyIcon onClick={onCopy} />
            </HStack>
          </HStack>
          <Center mt="40px" mb="20px">
            <Button
              bg="linear-gradient(90deg, #B19122 0%, #F4C31C 39.48%)"
              // ml="15px"
              minW="189px"
              color="black"
              fontSize="16px"
              _focus={{
                backgroundColor:
                  'linear-gradient(90deg, #B19122 0%, #F4C31C 39.48%)',
              }}
              _hover={{
                backgroundColor:
                  'linear-gradient(90deg, #B19122 0%, #F4C31C 39.48%)',
              }}
              _active={{
                backgroundColor:
                  'linear-gradient(90deg, #B19122 0%, #F4C31C 39.48%)',
              }}
              onClick={() => {
                if (logout) {
                  logout()
                  window.localStorage.removeItem(connectorLocalStorageKey)
                  onClose()
                }
              }}
            >
              Logout
            </Button>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AccountModal
