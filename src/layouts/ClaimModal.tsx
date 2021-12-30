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
  ModalHeader,
  ModalFooter,
  Button,
  Box,
  ModalBody,
  VStack,
} from '@chakra-ui/react'

import { ReactComponent as OpenLinkIcon } from 'src/assets/svgs/open-link-icon.svg'
import useMembershipVault from 'src/hooks/useMembershipVault'
import getEnv from 'src/utils/getEnv'

interface IClaimModal {
  isOpen: boolean
  onDismiss: () => void
  refreshData?: () => void
}

const ClaimModal: React.FC<IClaimModal> = ({
  isOpen,
  onDismiss,
  refreshData,
}) => {
  const {
    isPendingRewardSuccess: isSuccess,
    txPendingReward,
    isLoading,
    harvest,
    pendingReward,
  } = useMembershipVault()

  const { REACT_APP_BSCSCAN } = getEnv()

  const onClose = useCallback(() => {
    onDismiss()
    if (refreshData) {
      refreshData()
    }
  }, [refreshData, onDismiss])

  const renderBody = useCallback(() => {
    return (
      <ModalBody bg="#1B1B30">
        <HStack mt="12px">
          <Text fontSize="16px" lineHeight="28px">
            Claim:
          </Text>
          <Spacer />
          <Text fontSize="16px" lineHeight="28px" fontWeight="bold">
            {pendingReward} FAM
          </Text>
        </HStack>
        <HStack>
          <div />
          <Spacer />
          <Text
            textAlign="left"
            fontSize="12px"
            lineHeight="28px"
            color="#9091B0"
          >
            ~0,00 USD
          </Text>
        </HStack>
      </ModalBody>
    )
  }, [pendingReward])

  const renderBodySuccess = useCallback(() => {
    return (
      <VStack bg="#1B1B30">
        <HStack mt="50px" mb="50px">
          <Text
            onClick={() => {
              const url = `${REACT_APP_BSCSCAN}/tx/${txPendingReward}`
              window.open(url, '_blank')
            }}
            cursor="pointer"
            fontWeight="extrabold"
            fontSize="12px"
            lineHeight="14px"
          >
            View on bscscan
          </Text>
          <OpenLinkIcon
            onClick={() => {
              const url = `${REACT_APP_BSCSCAN}/tx/${txPendingReward}`
              window.open(url, '_blank')
            }}
          />
        </HStack>
      </VStack>
    )
  }, [REACT_APP_BSCSCAN, txPendingReward])

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
            {isSuccess ? 'Claim FAM Successfully' : 'Claim FAM'}
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
              onClick={harvest}
              isLoading={isLoading}
            >
              Confirm
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ClaimModal
