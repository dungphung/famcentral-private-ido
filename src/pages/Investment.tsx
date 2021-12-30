import React from 'react'
import { Box, SimpleGrid, Text, Center } from '@chakra-ui/react'
import { Panel } from 'src/layouts'
import Particles from 'react-particles-js'
import { ItemInvestment } from 'src/layouts/investment'

const Investments = () => {
  return (
    <Box px="20px" zIndex="1000">

      <Center mt={[10, 20, 30]}>
        <Text fontSize="36px" lineHeight="40px">
          On Going
        </Text>
      </Center>
      <SimpleGrid columns={[1, 2, 3]} spacing={[10, 20]} mt={10} mx={10}>
        <ItemInvestment />
        <ItemInvestment />
        <ItemInvestment />
        <ItemInvestment />
      </SimpleGrid>
      <Center mt={10}>
        <Text fontSize="36px" lineHeight="40px">
          Completed
        </Text>
      </Center>
      <SimpleGrid columns={[1, 2, 3]} spacing={10} mt={10} mx={10}>
        <ItemInvestment />
        <ItemInvestment />
        <ItemInvestment />
        <ItemInvestment />
      </SimpleGrid>
    </Box>
  )
}

export default Investments
