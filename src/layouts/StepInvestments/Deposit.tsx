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

const Deposit = ({ isActive = false }) => {
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
                    Deposit
                  </Text>
                </HStack>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Divider mb="20px" />
            <Text fontSize="12px" lineHeight="22px" color="white">
              Pool is opening for winners to deposit
            </Text>
            <Text fontSize="12px" lineHeight="22px" color="white">
              From: 2021-10-12 22:00:00 UTC +7
            </Text>
            <Text fontSize="12px" lineHeight="22px" color="white">
              After that, if swap progress have not reached 100%, the pool would
              be open for everyone at:
            </Text>
            <Text fontSize="12px" lineHeight="22px" color="white">
              From: 2021-10-12 22:00:00 UTC +7
            </Text>
            <Text fontSize="12px" lineHeight="22px" color="white">
              To: 2021-10-12 22:00:00 UTC +7
            </Text>
            <Box mt="32px">
              <Text fontSize="12px" lineHeight="22px" color="white">
                Your Allocation: <strong>100,000 CT</strong>
              </Text>
              <Text fontSize="12px" lineHeight="22px" color="white">
                Your Deposited: <strong>100,000 CT</strong>
              </Text>
            </Box>

            <Box mt="20px">
              <Button
                bg="#6E69F7"
                borderRadius="18px"
                fontSize="12px"
                lineHeight="22px"
                color="white"
              >
                Deposit
              </Button>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default Deposit
