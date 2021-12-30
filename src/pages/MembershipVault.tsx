import React from 'react'
import { ItemMembershipVault } from 'src/layouts'
import { Box, Flex, Text, Divider, HStack, Spacer } from '@chakra-ui/react'
import styled from '@emotion/styled'
import useMembershipVault from 'src/hooks/useMembershipVault'

const CustomFlex = styled(Flex)`
  flex-direction: row;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`

const WrapperItem = styled(Flex)`
  margin-top: 28px;
  margin-left: 0;
  @media screen and (min-width: 1080px) {
    margin-top: 0;
    margin-left: 28px;
  }
`

const MembershipVault = () => {
  const { tiers, rankName, refreshData } = useMembershipVault()

  return (
    <Box padding="44px">
      <Flex>
        <Flex flexDir="column">
          <Text
            bgGradient="linear-gradient(261.28deg, #806AF7 5.42%, #C070F5 46.61%, #8169F7 90.83%)"
            bgClip="text"
            fontSize="36px"
            lineHeight="36px"
            fontWeight="bold"
          >
            Famfinance Membership
          </Text>

          <Text fontSize="16px" lineHeight="26px" mt="8px">
            Famfinance Membership is a special program for investors who owns
            FAM Token. By staking FAM Token to Membership Vault, investors will
            get the tier accordingly and will have the exclusive rights on
            Famcentral platform, included: Investing into the projects in
            Launchpad feature via Membership Pool and the other advantages on
            Famfinance.
          </Text>
        </Flex>
        <Flex marginLeft="20px">
          <Box
            w="327px"
            h="136px"
            borderRadius="8px"
            bg="linear-gradient(267.35deg, #6466F8 -17.11%, #C26FF4 50.74%, #6867F8 111.92%)"
            paddingTop="16px"
            paddingLeft="24px"
          >
            <Text fontSize="16px" fontWeight="bold" lineHeight="16px">
              Your tier is
            </Text>
            <Text mt="12px" fontSize="36px" fontWeight="bold" lineHeight="36px">
              {rankName}
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Divider
        bg="transparent"
        marginTop="24px"
        marginBottom="24px"
        borderColor="transparent"
      />

      <CustomFlex>
        <Flex direction="column">
          <Text
            bgGradient="linear-gradient(261.28deg, #806AF7 5.42%, #C070F5 46.61%, #8169F7 90.83%)"
            bgClip="text"
            fontSize="18px"
            lineHeight="21px"
            fontWeight="bold"
          >
            Tier Policy:
          </Text>
          <Box
            marginTop="15px"
            bg="#27283E"
            borderRadius="5px"
            paddingX="24px"
            paddingY="17px"
          >
            {tiers.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <HStack minWidth="249px">
                    <Text fontSize="12px" lineHeight="14px" fontWeight="bold">
                      {item.title}
                    </Text>
                    <Spacer />
                    <Text fontSize="14px" lineHeight="16px" fontWeight="bold">
                      {item.description}
                    </Text>
                  </HStack>
                  {index !== tiers.length - 1 && (
                    <Divider marginTop="6px" marginBottom="6px" />
                  )}
                </div>
              )
            })}
          </Box>
        </Flex>

        <WrapperItem flex="1" flexDir="column">
          <Text
            bgGradient="linear-gradient(261.28deg, #806AF7 5.42%, #C070F5 46.61%, #8169F7 90.83%)"
            bgClip="text"
            fontSize="18px"
            lineHeight="21px"
            fontWeight="bold"
            mb="18px"
          >
            Tier Policy:
          </Text>

          <ItemMembershipVault refreshData={refreshData} />
        </WrapperItem>
      </CustomFlex>
    </Box>
  )
}

export default MembershipVault
