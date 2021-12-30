import React from 'react'

import { MainLayout } from 'src/layouts'
import { Box, Flex, VStack, Text, Spacer, Divider } from '@chakra-ui/react'

const Projects = () => {
  return (
    <MainLayout>
      <Box>
        <Flex>
          <div>
            <Text>Famfinance Membership</Text>
            <Text>
              Famfinance Membership is a special program for investors who owns
              FAM Token. By staking FAM Token to Membership Vault, investors
              will get the tier accordingly and will have the exclusive rights
              on Famcentral platform, included: Investing into the projects in
              Launchpad feature via Membership Pool and the other advantages on
              Famfinance.
            </Text>
          </div>
          <Spacer />
          <Box
            bg="linear-gradient(267.35deg, #6466F8 -17.11%, #C26FF4 50.74%, #6867F8 111.92%)"
            maxW="327px"
            h="137px"
            w="100%"
            py="16px"
            px="24px"
          >
            <Text>Your tier is</Text>
            <Text>VIP 1</Text>
          </Box>
        </Flex>
        <Divider my="20px" />
        <Text>Tier Mechanism:</Text>
      </Box>
    </MainLayout>
  )
}

export default Projects
