import React from 'react'

import Preparation from './Preparation'
import { Box } from '@chakra-ui/react'
import JoinPool from './JoinPool'
import Deposit from './Deposit'
import Claim from './Claim'

const Container = () => {
  return (
    <Box>
      <Preparation />
      <Box mt="48px">
        <JoinPool />
      </Box>
      <Box mt="48px">
        <Deposit />
      </Box>
      <Box mt="48px">
        <Claim />
      </Box>
    </Box>
  )
}

export default Container
