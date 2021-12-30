import React, { useCallback } from 'react'
import * as ethers from 'ethers'
import {
  Box,
  Flex,
  Text,
  Divider,
  HStack,
  Button,
  SimpleGrid,
  Spacer,
} from '@chakra-ui/react'
import { ReactComponent as MockupIcon } from 'src/assets/svgs/mockup-icon.svg'
import { ReactComponent as OpenLinkIcon } from 'src/assets/svgs/open-link-icon.svg'
import { ReactComponent as CalculatorIcon } from 'src/assets/svgs/calculator-icon.svg'
import useWithDrawModal from 'src/hooks/useWithDrawModal'
import useDepositModal from 'src/hooks/useDepositModal'

import useMembershipVault from 'src/hooks/useMembershipVault'
import useActiveWeb3React from 'src/hooks/useActiveWeb3React'
import useClaimModal from 'src/hooks/useClaimModal'
import { ReactComponent as PlusIcon } from 'src/assets/svgs/PlusIcon.svg'
import { ReactComponent as MinusIcon } from 'src/assets/svgs/MinusIcon.svg'

const ItemMembershipVault = ({ refreshData }) => {
  const {
    refreshData: refreshInItem,
    approve,
    isApprove,
    isLoading,
    pendingReward,
    userInfo,
  } = useMembershipVault()
  const { account } = useActiveWeb3React()

  const { formatEther } = ethers.utils

  const refresh = useCallback(() => {
    refreshData()
    refreshInItem()
  }, [refreshData, refreshInItem])

  const { onPresentClaimModal } = useClaimModal({ refreshData: refresh })
  const { onPresentWithDrawModal } = useWithDrawModal({ refreshData: refresh })
  const { onPresentDepositModal } = useDepositModal({ refreshData: refresh })

  const renderButton = useCallback(() => {
    if (isApprove) {
      return (
        <div style={{ width: '100%' }}>
          {userInfo.amount.gt('0') ? (
            <HStack>
              <Text>{formatEther(userInfo.amount)} FAM</Text>
              <Spacer />

              <Button
                bg="white"
                _focus={{
                  backgroundColor: 'white',
                }}
                _hover={{
                  backgroundColor: 'white',
                }}
                _active={{
                  backgroundColor: 'white',
                }}
                onClick={onPresentWithDrawModal}
              >
                <MinusIcon />
              </Button>
              <Button
                bg="white"
                _focus={{
                  backgroundColor: 'white',
                }}
                _hover={{
                  backgroundColor: 'white',
                }}
                _active={{
                  backgroundColor: 'white',
                }}
                onClick={onPresentDepositModal}
              >
                <PlusIcon />
              </Button>
            </HStack>
          ) : (
            <Button
              w="100%"
              color="white"
              fontSize="16px"
              bg="#7169F8"
              _focus={{
                backgroundColor: '#5C52FF',
              }}
              _hover={{
                backgroundColor: '#5C52FF',
              }}
              _active={{
                backgroundColor: '#5C52FF',
              }}
              onClick={onPresentDepositModal}
              disabled={!account}
            >
              Deposit
            </Button>
          )}
        </div>
      )
    }
    return (
      <Button
        w="100%"
        color="white"
        fontSize="16px"
        bg="#7169F8"
        disabled={!account}
        _focus={{
          backgroundColor: '#5C52FF',
        }}
        _hover={{
          backgroundColor: '#5C52FF',
        }}
        _active={{
          backgroundColor: '#5C52FF',
        }}
        onClick={approve}
        isLoading={isLoading}
      >
        Enable
      </Button>
    )
  }, [
    account,
    approve,
    formatEther,
    isApprove,
    isLoading,
    onPresentDepositModal,
    onPresentWithDrawModal,
    userInfo.amount,
  ])

  return (
    <Box bg="#2B2D50" borderRadius="5px" py="16px" px="22px">
      <HStack>
        <Box>
          <Box
            bg="#DEFFEB"
            borderRadius="2px"
            display="inline-block"
            py="1px"
            px="5px"
          >
            <Text color="#007930" fontSize="12" lineHeight="12px">
              Live
            </Text>
          </Box>

          <HStack>
            <MockupIcon style={{ width: 24 }} />
            <Text fontSize="20px" lineHeight="20px" fontWeight="bold">
              COINCC
            </Text>
          </HStack>
        </Box>
        <Box style={{ marginLeft: 55 }}>
          <Text fontSize="14px" lineHeight="14px">
            Earn
          </Text>
          <Box mt="20px">
            <Text
              fontSize="16px"
              lineHeight="16px"
              color="#5D6879"
              fontWeight="bold"
            >
              0.000
            </Text>
          </Box>
        </Box>
        <Box style={{ marginLeft: 55 }}>
          <Text fontSize="14px" lineHeight="14px">
            APR{' '}
          </Text>
          <Box mt="20px">
            <HStack>
              <Text
                fontSize="16px"
                lineHeight="16px"
                color="white"
                fontWeight="bold"
              >
                6%
              </Text>
              <CalculatorIcon />
            </HStack>
          </Box>
        </Box>
      </HStack>
      <Divider marginY="22px" />
      <SimpleGrid columns={3} spacingX={5}>
        <Box>
          <HStack>
            <Text
              color="blueLinkColor"
              fontWeight="bold"
              fontSize="16px"
              lineHeight="16px"
            >
              See token info
            </Text>
            <OpenLinkIcon />
          </HStack>
          <HStack mt="10px">
            <Text
              color="blueLinkColor"
              fontWeight="bold"
              fontSize="16px"
              lineHeight="16px"
            >
              View project site
            </Text>
            <OpenLinkIcon />
          </HStack>
          <HStack mt="10px">
            <Text
              color="blueLinkColor"
              fontWeight="bold"
              fontSize="16px"
              lineHeight="16px"
            >
              View contract
            </Text>
            <OpenLinkIcon />
          </HStack>
        </Box>

        <Box className="box" bg="#1A1A29" padding="25px" borderRadius="5px">
          <Text
            fontSize="16px"
            color="white"
            lineHeight="16px"
            fontWeight="bold"
          >
            ONE EARNED
          </Text>
          <Flex mt="20px">
            <Text
              color="#5D6879"
              fontWeight="bold"
              fontSize="20px"
              lineHeight="20px"
            >
              {pendingReward}
            </Text>

            <Button
              onClick={onPresentClaimModal}
              bg="#94A5BF"
              ml="15px"
              w="100%"
              fontSize="16px"
              _active={{
                backgroundColor: '#94A5BF',
              }}
              _hover={{
                backgroundColor: '#B9B9BA',
              }}
              _focus={{
                backgroundColor: '#94A5BF',
              }}
              disabled={!account || isLoading}
            >
              Claim
            </Button>
          </Flex>
        </Box>
        <Box className="box" bg="#1A1A29" padding="25px" borderRadius="5px">
          <Text
            fontSize="16px"
            color="white"
            lineHeight="16px"
            fontWeight="bold"
          >
            START STAKING
          </Text>
          <Flex mt="20px">{renderButton()}</Flex>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default ItemMembershipVault
