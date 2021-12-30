import React, { useState, useEffect } from 'react'
import { MainLayout } from 'src/layouts'
import {
  Box,
  Select,
  Button,
  Collapse,
  Text,
  Stack,
  HStack,
  useTheme,
  useColorModeValue,
  Flex,
  Divider,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SimpleGrid,
  Center,
  Spacer,
} from '@chakra-ui/react'
import { ReactComponent as GlobalIcon } from 'src/assets/svgs/global-icon.svg'
import { ReactComponent as TwitterIcon } from 'src/assets/svgs/twitter-custom-icon.svg'
import { ReactComponent as TelegramCustomIcon } from 'src/assets/svgs/telegram-custom-icon.svg'
import { ReactComponent as FacebookCustomIcon } from 'src/assets/svgs/facebook-custom-icon.svg'
import { ReactComponent as MockupIcon } from 'src/assets/svgs/mockup-icon.svg'
import { Colors } from 'src/styles'
import { useHistory } from 'react-router-dom'

const Item = () => {
  return (
    <Box
      flex="1"
      maxW="460px"
      w="full"
      bg={useColorModeValue(Colors.bg_card_light, Colors.bg_card_dark)}
      p="24px"
      borderRadius="8px"
    >
      <Box display="flex" alignItems="flex-start">
        <Box>
          <MockupIcon />
        </Box>
        <Box flex="1" ml="20px">
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color={useColorModeValue('#000', '#fff')}
          >
            CrossSwap
          </Text>

          <HStack spacing={3} mt="10px">
            <GlobalIcon />
            <FacebookCustomIcon />
            <TwitterIcon />
            <TelegramCustomIcon />
            <Button
              boxShadow="none"
              outline="none"
              borderColor="#6E69F7"
              borderWidth={1}
              borderStyle="solid"
              bg="#21213A"
              fontSize="12px"
              _active={{
                background: 'transparent !important',
              }}
              _focus={{
                background: 'transparent !important',
              }}
            >
              Opening
            </Button>
          </HStack>
        </Box>

        <Text fontSize="16px" color="#F4C31C" decoration="underline">
          View details
        </Text>
      </Box>
      <Box mt="30px">
        <HStack>
          <Text fontSize="16px" fontWeight={500} w="60px">
            Raised:
          </Text>
          <Text fontWeight="bold" fontSize="22px" w="75px">
            0
          </Text>
          <HStack>
            <Text fontWeight={500} fontSize="12px">
              FIM
            </Text>
            <Text fontWeight={500} color="#7878AE" fontSize="12px">
              (~500,000,000 USD)
            </Text>
          </HStack>
        </HStack>
        <HStack mt="17px">
          <Text fontSize="16px" fontWeight={500} w="60px">
            Goal:
          </Text>
          <Text fontWeight="bold" fontSize="22px" w="75px">
            50M
          </Text>
          <Text fontWeight={500} fontSize="12px">
            FIM
          </Text>
          <Text fontWeight={500} color="#7878AE" fontSize="12px">
            (~500,000,000 USD)
          </Text>
        </HStack>

        <Flex mt="17px" justifyContent="space-between">
          <Text fontSize="10px" fontWeight={500}>
            Start Date: 2021-12-12 22:00:00 UTC +7
          </Text>
          <Box h="15px" w="1px" bg="white" />
          <Text fontSize="10px" fontWeight={500}>
            End Date: 2021-12-12 22:00:00 UTC +7
          </Text>
        </Flex>
      </Box>
      <Divider mt="26px" mb="16px" />
      <Flex justifyContent="space-between">
        <Text fontSize="12px" fontWeight={500} color="#7878AE">
          Allocation: Whitelist 10%, Membership 90%
        </Text>
        <Text fontSize="12px" fontWeight={500} color="#7878AE">
          Investors: 0
        </Text>
      </Flex>

      <Box>
        <Slider aria-label="slider-ex-2" defaultValue={30}>
          <SliderTrack bg="white">
            <SliderFilledTrack bg="#6E69F7" />
          </SliderTrack>
          <SliderThumb bg="#6E69F7" />
        </Slider>
      </Box>

      <Flex justifyContent="space-between">
        <Text fontSize="12px" fontWeight={500} color="#7878AE">
          0%
        </Text>
        <Text fontSize="12px" fontWeight={500} color="#7878AE">
          0/20000 FIM
        </Text>
      </Flex>
    </Box>
  )
}

const Home = () => {
  const [isOpenFirstSection, setIsOpenFirstSection] = useState(true)
  const history = useHistory()

  useEffect(() => {
    history.push('/membership-vault')
  }, [history])

  return (
    <MainLayout>
      <Box display="flex" flex="1" flexDirection="column" mx="32px">
        <Box display="flex" justifyContent="flex-end">
          <div>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>

          <div>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>
        </Box>
        <Box>
          <Flex alignItems="center">
            <Text bgGradient="linear(to-l, #A26DF7, #7269F8)" bgClip="text">
              Opening (04)
            </Text>
            <Spacer />
            <Button
              onClick={() => {
                setIsOpenFirstSection(
                  (isOpenFirstSection) => !isOpenFirstSection,
                )
              }}
              variant="ghost"
            >
              Click Me
            </Button>
          </Flex>

          <Divider />

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 5, lg: 8 }}
            mt="28px"
          >
            <Center>
              <Item />
            </Center>

            <Center>
              <Item />
            </Center>
            <Center>
              <Item />
            </Center>
            <Center>
              <Item />
            </Center>
          </SimpleGrid>
        </Box>
      </Box>
    </MainLayout>
  )
}

export default Home
