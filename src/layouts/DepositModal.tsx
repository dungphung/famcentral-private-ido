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
  SimpleGrid,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { ReactComponent as OpenLinkIcon } from 'src/assets/svgs/open-link-icon.svg'

import useMembershipVault from 'src/hooks/useMembershipVault'
import getEnv from 'src/utils/getEnv'
import bigNumber from 'bignumber.js'

interface IDepositModal {
  isOpen: boolean
  onDismiss: () => void
  refreshData?: () => void
}

const DepositModal: React.FC<IDepositModal> = ({
  isOpen,
  onDismiss,
  refreshData,
}) => {
  const { REACT_APP_BSCSCAN } = getEnv()
  const { formatEther } = ethers.utils
  const {
    tiers,
    balance,
    deposit,
    isDepositSuccess: isSuccess,
    amount,
    onChangeInput,
    selectTier,
    rankName,
    txDeposit,
    isLoading,
  } = useMembershipVault()

  const onClose = useCallback(() => {
    onDismiss()
    if (refreshData) {
      refreshData()
    }
  }, [refreshData, onDismiss])

  const onPressMax = useCallback(() => {
    console.log(formatEther(balance))
    onChangeInput({
      target: {
        value: formatEther(balance),
      },
    })
  }, [balance, formatEther, onChangeInput])

  const renderBody = useCallback(() => {
    return (
      <ModalBody bg="#1B1B30">
        <HStack mt="12px">
          <Text fontSize="14px" lineHeight="16px">
            Join FAM
          </Text>
          <Spacer />
          <Text
            color="#FFFFFF"
            fontSize="10px"
            lineHeight="12px"
            fontWeight="500"
          >
            Balance: {formatEther(balance)} FAM
          </Text>
        </HStack>
        <InputGroup size="lg" mt="10px">
          <Input
            focusBorderColor="transparent"
            bg="white"
            color="#000"
            value={amount}
            onChange={onChangeInput}
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

        <SimpleGrid columns={4} spacing="13px" mt="25px">
          {tiers.map((item, index) => {
            return (
              <Box
                key={index}
                w="100%"
                bg="#2B2D50"
                textAlign="center"
                py="13px"
                borderRadius="5px"
                fontSize="14px"
                fontWeight="bold"
                cursor="pointer"
                onClick={() => {
                  if (isLoading) return
                  selectTier(item)
                }}
              >
                <Text
                  onClick={() => {
                    if (isLoading) return
                    selectTier(item)
                  }}
                  cursor="pointer"
                >
                  {item.title}
                </Text>
              </Box>
            )
          })}
        </SimpleGrid>

        <Box mt="41px">
          <Text fontSize="12px" lineHeight="16px" color="#C8C8C8">
            APR: 6%
          </Text>
          <Text fontSize="12px" lineHeight="16px" color="#C8C8C8">
            Deposit fee: 0
          </Text>
        </Box>
      </ModalBody>
    )
  }, [
    amount,
    balance,
    formatEther,
    onChangeInput,
    selectTier,
    tiers,
    isLoading,
    onPressMax,
  ])

  const renderBodySuccess = useCallback(() => {
    return (
      <VStack bg="#1B1B30">
        <HStack mt="46px">
          <Text
            cursor="pointer"
            color="white"
            fontWeight="extrabold"
            fontSize="16px"
            lineHeight="26px"
            onClick={() => {
              const url = `${REACT_APP_BSCSCAN}/tx/${txDeposit}`
              window.open(url, '_blank')
            }}
          >
            View on bscscan
          </Text>
          <OpenLinkIcon
            onClick={() => {
              const url = `${REACT_APP_BSCSCAN}/tx/${txDeposit}`
              window.open(url, '_blank')
            }}
          />
        </HStack>
        <Box style={{ marginTop: 30 }}>
          <Text
            fontWeight="extrabold"
            fontSize="36px"
            lineHeight="46px"
            bgGradient="linear-gradient(261.28deg, #806AF7 5.42%, #C070F5 46.61%, #8169F7 90.83%)"
            bgClip="text"
          >
            Your tier will be
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight="extrabold"
            fontSize="36px"
            lineHeight="46px"
            bgGradient="linear-gradient(261.28deg, #806AF7 5.42%, #C070F5 46.61%, #8169F7 90.83%)"
            bgClip="text"
          >
            {rankName}
          </Text>
        </Box>
        <Text fontSize="12px" lineHeight="14px" style={{ marginTop: 15 }}>
          From 10:00:00 - 10, August 2021
        </Text>
        <Text
          fontSize="12px"
          lineHeight="14px"
          style={{ marginTop: 8, marginBottom: 30 }}
        >
          To 10:00:00 - 10, August 2021
        </Text>
      </VStack>
    )
  }, [REACT_APP_BSCSCAN, rankName, txDeposit])

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
            {isSuccess ? 'Deposit Successfully' : 'Vault Deposit'}
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
              onClick={deposit}
              isLoading={isLoading}
            >
              DEPOSIT
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DepositModal
