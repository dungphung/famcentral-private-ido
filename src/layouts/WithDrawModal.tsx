import React, { useCallback } from 'react'
import * as ethers from 'ethers'
import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalCloseButton,
  HStack,
  Text,
  Spacer,
  Input,
  ModalHeader,
  ModalFooter,
  Button,
  Box,
  ModalBody,
  VStack,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

import { ReactComponent as OpenLinkIcon } from 'src/assets/svgs/open-link-icon.svg'
import useMembershipVault from 'src/hooks/useMembershipVault'
import getEnv from 'src/utils/getEnv'

interface IWithDrawModal {
  isOpen: boolean
  onDismiss: () => void
  refreshData?: () => void
}

const WithDrawModal: React.FC<IWithDrawModal> = ({
  isOpen,
  onDismiss,
  refreshData,
}) => {
  const { formatEther } = ethers.utils
  const {
    balance,
    isWithDrawSuccess: isSuccess,
    amountWithdraw,
    onChangeInputWithdraw,
    withdraw,
    txWithDraw,
    isLoading,
    userInfo,
  } = useMembershipVault()

  const onClose = useCallback(() => {
    onDismiss()
    if (refreshData) {
      refreshData()
    }
  }, [refreshData, onDismiss])

  const onPressMax = useCallback(() => {
    onChangeInputWithdraw({
      target: {
        value: formatEther(userInfo.amount),
      },
    })
  }, [userInfo, formatEther, onChangeInputWithdraw])

  const { REACT_APP_BSCSCAN } = getEnv()
  const renderBody = useCallback(() => {
    return (
      <ModalBody bg="#1B1B30">
        <HStack mt="12px">
          <Text fontSize="14px" lineHeight="16px">
            Withdraw FAM
          </Text>
          <Spacer />
          <Text fontSize="10px" lineHeight="12px" fontWeight="500">
            Balance: {formatEther(userInfo.amount)} FAM
          </Text>
        </HStack>

        <InputGroup size="lg" mt="10px">
          <Input
            focusBorderColor="transparent"
            bg="white"
            color="#000"
            value={amountWithdraw || ''}
            onChange={onChangeInputWithdraw}
            pattern={`^[0-9]*[.,]?[0-9]{0,10}$`}
            type="number"
            disabled={isLoading}
          />
          <InputRightElement width="4.5rem">
            <Button
              disabled={isLoading}
              onClick={onPressMax}
              color="#000000"
              fontSize="16px"
            >
              Max
            </Button>
          </InputRightElement>
        </InputGroup>

        <Box mt="16px">
          <Text fontSize="12px" lineHeight="16px" color="#C8C8C8">
            Withdraw fee: 0
          </Text>
        </Box>
      </ModalBody>
    )
  }, [
    onPressMax,
    amountWithdraw,
    formatEther,
    onChangeInputWithdraw,
    userInfo,
    isLoading,
  ])

  const renderBodySuccess = useCallback(() => {
    return (
      <VStack bg="#1B1B30">
        <HStack mt="50px" mb="50px">
          <Text
            cursor="pointer"
            fontWeight="extrabold"
            fontSize="12px"
            lineHeight="14px"
            onClick={() => {
              const url = `${REACT_APP_BSCSCAN}/tx/${txWithDraw}`
              window.open(url, '_blank')
            }}
          >
            View on bscscan
          </Text>
          <OpenLinkIcon
            onClick={() => {
              const url = `${REACT_APP_BSCSCAN}/tx/${txWithDraw}`
              window.open(url, '_blank')
            }}
          />
        </HStack>
      </VStack>
    )
  }, [REACT_APP_BSCSCAN, txWithDraw])

  return (
    <Modal isOpen={isOpen} onClose={isLoading ? () => {} : onClose} isCentered>
      <ModalOverlay />
      <ModalContent w="366px">
        <ModalHeader bg="#1B1B30">
          <Text
            fontSize="20px"
            lineHeight="20px"
            color="white"
            fontWeight="extrabold"
          >
            {isSuccess ? 'Withdraw Successfully' : 'Vault Withdraw'}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        {isSuccess ? renderBodySuccess() : renderBody()}

        <ModalFooter bg="#1B1B30">
          {isSuccess ? (
            <Button
              bg="#FF5252"
              color="white"
              width="100%"
              borderRadius="4px"
              _focus={{
                backgroundColor: '#FF5252',
              }}
              _hover={{
                backgroundColor: '#FF5252',
              }}
              _active={{
                backgroundColor: '#FF5252',
              }}
              onClick={onClose}
            >
              Close
            </Button>
          ) : (
            <Button
              bg="#7169F8"
              color="white"
              width="100%"
              borderRadius="4px"
              _focus={{
                backgroundColor: '#5C52FF',
              }}
              _hover={{
                backgroundColor: '#5C52FF',
              }}
              _active={{
                backgroundColor: '#5C52FF',
              }}
              onClick={withdraw}
              isLoading={isLoading}
            >
              WITH DRAW
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default WithDrawModal
