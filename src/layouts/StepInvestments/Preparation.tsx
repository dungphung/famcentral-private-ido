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

const Preparation = ({ isActive = false }) => {
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
                    Preparation
                  </Text>
                </HStack>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Divider mb="20px" borderColor="#51537C" />
            <Text fontSize="12px" lineHeight="22px" color="white">
              To prepare for the IDO, you should:
            </Text>
            <Text fontSize="12px" lineHeight="22px" color="white">
              1.{' '}
              <strong style={{ textDecoration: 'underline' }}>Buy FAM</strong>{' '}
              and stake FAM in to{' '}
              <strong style={{ textDecoration: 'underline' }}>
                Membership Vault
              </strong>{' '}
              to get tier if needed.
            </Text>
            <Text fontSize="12px" lineHeight="22px" color="white">
              2. <strong style={{ textDecoration: 'underline' }}>Go KYC</strong>{' '}
              your account if needed
            </Text>
            <Text fontSize="12px" lineHeight="22px" color="white">
              3. Apply Whitelist to become a winner if needed
            </Text>

            <Box mt="20px">
              <Button
                bg="#3A3A3A"
                borderRadius="18px"
                fontSize="12px"
                lineHeight="22px"
                color="white"
              >
                Apply Whitelist
              </Button>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

export default Preparation
