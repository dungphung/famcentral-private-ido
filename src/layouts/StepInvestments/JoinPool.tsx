import React from 'react'

import {
  Box,
  HStack,
  Text,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from '@chakra-ui/react'

const JoinPool = ({ isActive }) => {
  return (
    <Box
      bg={isActive ? '#0C0A00' : '#0C0A00'}
      borderWidth="2px"
      borderStyle="solid"
      borderColor={isActive ? '#FFFFFF' : '#3A3A3A'}
      borderRadius="8px"
    >
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <HStack>
                  <Text
                    fontSize="24px"
                    lineHeight="34px"
                    fontWeight="bold"
                    color="white"
                  >
                    Join Pool
                  </Text>
                </HStack>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Divider mb="20px" />
            <Text fontSize="12px" lineHeight="22px" color="white">
              Pool is opening to join
            </Text>
            <Text fontSize="12px" lineHeight="22px" color="white">
              From: 2021-10-12 22:00:00 UTC +7
            </Text>
            <Text fontSize="12px" lineHeight="22px" color="white">
              To: 2021-10-12 22:00:00 UTC +7
            </Text>
            <Text fontSize="12px" lineHeight="22px" color="white">
              Winner Announcement: 2021-10-12 22:00:00 UTC +7
            </Text>
            <Text fontSize="12px" lineHeight="22px" color="white">
              Your Allocation: 100 <strong>FAM</strong>
            </Text>
            <Text fontSize="12px" lineHeight="22px" color="white">
              Your Staked: 100 <strong>FAM</strong>
            </Text>

            <Box mt="20px">
              <HStack>
                <Button
                  bg="#2C3138"
                  borderRadius="18px"
                  fontSize="12px"
                  lineHeight="22px"
                  color="white"
                >
                  Approve Token
                </Button>
                <Button
                  bg="#2C3138"
                  borderRadius="18px"
                  fontSize="12px"
                  lineHeight="22px"
                  color="white"
                >
                  Join Pool
                </Button>
              </HStack>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default JoinPool
