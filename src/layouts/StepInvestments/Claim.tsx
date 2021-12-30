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

const Claim = ({ isActive }) => {
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
                    Claim
                  </Text>
                </HStack>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Divider mb="20px" />
            <Text fontSize="12px" lineHeight="22px" color="white">
              Claim Start Date: 2021-10-12 22:00:00 UTC +7
            </Text>
            <Text fontSize="12px" lineHeight="22px" color="white">
              Claim Policy: 50% after deposit completed and 25% each month after
            </Text>

            <Box mt="20px">
              <Button
                bg="#6E69F7"
                borderRadius="18px"
                fontSize="12px"
                lineHeight="22px"
                color="white"
              >
                Claim
              </Button>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default Claim
