import React from 'react'

import {
  Box,
  HStack,
  Flex,
  Text,
  Image,
  VStack,
  Divider,
} from '@chakra-ui/react'
import InvesmentImg from 'src/assets/images/investment-img.png'
import Avatar from 'src/assets/images/avatar.png'
import { useHistory } from 'react-router-dom'

const TimeContainer = ({ number, title }) => {
  return (
    <VStack>
      <Text fontSize="20px" color="#F5D800" fontWeight="bold">
        {number}
      </Text>
      <Text fontSize="12px" color="#CCCCCC">
        {title}
      </Text>
    </VStack>
  )
}

const ItemInvestment = () => {
  const history = useHistory()
  return (
    <Box
      bg="#2C3138"
      borderRadius="12px"
      position="relative"
      cursor="pointer"
      onClick={() => history.push('/investments/1')}
    >
      <Box
        bg="#3A3A3A"
        display="inline-block"
        position="absolute"
        right="10px"
        top="15px"
        px="10px"
        py="2px"
        borderRadius="30px"
        border="1px solid #838383"
      >
        <Text fontSize="12px" lineHeight="22px">
          Preparation
        </Text>
      </Box>
      <Image
        src={InvesmentImg}
        alt="InvesmentImg"
        w="100%"
        borderTopLeftRadius="12px"
        borderTopRightRadius="12px"
      />

      <Box p="16px">
        <Flex>
          <Box>
            <img src={Avatar} alt="Avatar" />
          </Box>
          <Box ml="16px">
            <Text fontSize="24px" lineHeight="34px" fontWeight="bold">
              Luna Rush (LUS)
            </Text>
            <Text mt="16px" fontSize="16px" lineHeight="26px" color="#CCCCCC">
              Community Pool
            </Text>
            <HStack mt="16px" spacing="14px">
              <TimeContainer number="03" title="Day" />
              <Divider
                orientation="vertical"
                style={{ borderWidth: 1, height: 12, borderColor: '#51537C' }}
              />
              <Box>
                <TimeContainer number="03" title="Hour" />
              </Box>
              <Divider
                orientation="vertical"
                style={{ borderWidth: 1, height: 12, borderColor: '#51537C' }}
              />
              <Box>
                <TimeContainer number="03" title="Minute" />
              </Box>
              <Divider
                orientation="vertical"
                style={{ borderWidth: 1, height: 12, borderColor: '#51537C' }}
              />
              <Box>
                <TimeContainer number="03" title="Seconds" />
              </Box>

              <Text fontSize="14px" lineHeight="22px">
                to start join pool
              </Text>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default ItemInvestment
