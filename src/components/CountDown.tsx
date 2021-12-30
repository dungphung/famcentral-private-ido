import React from 'react'
import { HStack, Box, Center, Text } from '@chakra-ui/react'

const CountDown = ({ days, hours, minutes, seconds }) => {
  return (
    <HStack spacing="28px">
      <Box>
        <Box p="9px" bg="#2C3138" borderRadius="8px" w="64px">
          <Center>
            <Text
              fontSize="36px"
              lineHeight="46px"
              color="#EFBF1C"
              fontWeight="bold"
            >
              {days < 10 ? `0${days}` : days}
            </Text>
          </Center>
        </Box>
        <Center>
          <Text fontSize="20px" lineHeight="30px" mt="8px" color="#838383">
            Day
          </Text>
        </Center>
      </Box>
      <Box>
        <Box p="9px" bg="#2C3138" borderRadius="8px" w="64px">
          <Center>
            <Text
              fontSize="36px"
              lineHeight="46px"
              color="#EFBF1C"
              fontWeight="bold"
            >
              {hours < 10 ? `0${hours}` : hours}
            </Text>
          </Center>
        </Box>
        <Center>
          <Text fontSize="20px" lineHeight="30px" mt="8px" color="#838383">
            Hour
          </Text>
        </Center>
      </Box>
      <Box>
        <Box
          p="9px"
          bg="#2C3138"
          borderRadius="8px"
          w="64px"
          textAlign="center"
        >
          <Center>
            <Text
              fontSize="36px"
              lineHeight="46px"
              color="#EFBF1C"
              fontWeight="bold"
            >
              {minutes < 10 ? `0${minutes}` : minutes}
            </Text>
          </Center>
        </Box>
        <Center>
          <Text fontSize="20px" lineHeight="30px" mt="8px" color="#838383">
            Minute
          </Text>
        </Center>
      </Box>
      <Box>
        <Box p="9px" bg="#2C3138" borderRadius="8px" w="64px">
          <Center>
            <Text
              fontSize="36px"
              lineHeight="46px"
              color="#EFBF1C"
              fontWeight="bold"
            >
              {seconds < 10 ? `0${seconds}` : seconds}
            </Text>
          </Center>
        </Box>
        <Center>
          <Text fontSize="20px" lineHeight="30px" mt="8px" color="#838383">
            Seconds
          </Text>
        </Center>
      </Box>
    </HStack>
  )
}

export default CountDown
