import React from 'react'
import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalCloseButton,
  HStack,
  Text,
  Spacer,
  Input,
  Flex,
  ModalHeader,
  ModalFooter,
  Button,
  Box,
  ModalBody
} from '@chakra-ui/react'

const BaseModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg="#0B0B17">Vault Deposit</ModalHeader>
        <ModalCloseButton />
        <ModalBody bg="#1B1B30">
          <HStack mt="12px">
            <Text fontSize="14px" lineHeight="16px">
              Join FAM
            </Text>
            <Spacer />
            <Text color="#F4C31C" fontSize="10px" lineHeight="12px">
              Balance: 11,000,000 FAM
            </Text>
          </HStack>
          <Input
            focusBorderColor="transparent"
            className="input-radiant"
            mt="10px"
          />
          <Flex flexWrap="wrap">
            {[].map((item) => {
              return (
                <Box
                  key={item.id}
                  w="63px"
                  bg="#2B2D50"
                  ml="10px"
                  mt="15px"
                  textAlign="center"
                  py="13px"
                  borderRadius="5px"
                  fontSize="14px"
                  fontWeight="bold"
                >
                  <Text>{item.title}</Text>
                </Box>
              )
            })}
          </Flex>
          <Box mt="41px">
            <Text fontSize="12px" lineHeight="16px" color="#C8C8C8">
              APR: 6%
            </Text>
            <Text fontSize="12px" lineHeight="16px" color="#C8C8C8">
              Deposit fee: 0
            </Text>
          </Box>
        </ModalBody>

        <ModalFooter bg="#1B1B30">
          <Button
            bg="linear-gradient(90deg, #B19122 0%, #F4C31C 39.48%)"
            color="black"
            width="100%"
            borderRadius="4px"
            fontWeight="extrabold"
          >
            DEPOSIT
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default BaseModal
