import React from 'react'

import { Box, Text, Button } from '@chakra-ui/react'
import FamCircleIcon from 'src/components/Svg/Icons/FamCircleIcon'

const NotFound = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      flex="1"
      height="100%"
    >
      <FamCircleIcon />
      <Text fontSize="44px" fontWeight="bold" style={{ marginTop: 15 }}>
        404
      </Text>
      <Text fontSize="16px" mb="16px">
        Oops, page not found.
      </Text>
      <Button
        style={{ borderRadius: 4, color: '#000' }}
        as="a"
        href="/"
        scale="sm"
        bg="white"
      >
        Back Home
      </Button>
    </Box>
  )
}

export default NotFound
