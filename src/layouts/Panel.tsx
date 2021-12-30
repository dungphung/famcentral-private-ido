import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Panel = () => {
  return (
    <Box
      px="32px"
      py="22px"
      bg="linear-gradient(267.31deg, #6466F8 -0.49%, #C26FF4 65.26%, #6867F8 100%)"
      borderRadius="8px"
      mt="32px"
    >
      <Text fontSize="36px" lineHeight="46px">
        Investment
      </Text>
      <Text fontSize="20px" lineHeight="30px" mt="2px">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </Text>
    </Box>
  )
}

export default Panel
