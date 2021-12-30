import React from 'react'
import {
  Box,
  SimpleGrid,
  Center,
  Text,
  Grid,
  GridItem,
  HStack,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Spacer,
  Tag,
  TagLabel,
  TagLeftIcon,
  Image,
  Flex,
} from '@chakra-ui/react'
import Avatar from 'src/assets/images/avatar.png'
import DemoImg from 'src/assets/images/demo-img.png'
import RocketIcon from 'src/components/Svg/Icons/RocketIcon'
import SymbolDemo from 'src/components/Svg/Icons/SymbolDemo'
import DemoPinkIcon from 'src/components/Svg/Icons/DemoPinkIcon'
import DemoYellowIcon from 'src/components/Svg/Icons/DemoYellowIcon'
import CheckIcon from 'src/components/Svg/Icons/CheckIcon'
import WarningIcon from 'src/components/Svg/Icons/WarningIcon'
import OpenLinkIcon from 'src/components/Svg/Icons/OpenLink'
import { useTimer } from 'react-timer-hook'
import CountDown from 'src/components/CountDown'
import TableRightInvestment from 'src/layouts/investment/TableRightInvestment'

const dataAllocationByTiers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
].map((item) => ({ id: item, title: `Vip ${item}`, content: '100 CT' }))

const time = new Date()
time.setSeconds(time.getSeconds() + 600)

const InvestmentDetail = () => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.warn('onExpire called'),
  })

  return (
    <Box px="160px">
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem
          colSpan={1}
          // bgImage={DemoImg}
          // bgRepeat="no-repeat"
          // bgSize="contain"
        >
          <Center>
            <img src={DemoImg} alt="DemoImg" />
          </Center>
        </GridItem>
        <GridItem colSpan={4}>
          <Box ml="36px">
            <Flex>
              <Box>
                <Image src={Avatar} />
              </Box>
              <Box flex={1} ml="36px">
                <Text
                  fontWeight="bold"
                  fontSize="24px"
                  lineHeight="34px"
                  color="#EFBF1C"
                >
                  Luna Rush (LUS)
                </Text>
                <SimpleGrid
                  columns={{
                    base: 4,
                    xl: 6,
                    '2xl': 8,
                  }}
                  mt="16px"
                >
                  {[
                    {
                      id: 1,
                      title: 'WebSite',
                      href: '#',
                    },
                    {
                      id: 2,
                      title: 'WebSite',
                      href: '#',
                    },
                    {
                      id: 3,
                      title: 'WebSite',
                      href: '#',
                    },
                    {
                      id: 4,
                      title: 'WebSite',
                      href: '#',
                    },
                    {
                      id: 5,
                      title: 'WebSite',
                      href: '#',
                    },
                  ].map((item) => (
                    <HStack
                      key={item.id}
                      border="1px solid #3A3A3A"
                      maxW="106px"
                      spacing="6px"
                    >
                      <OpenLinkIcon size={12} />
                      <Text fontSize="12px" color="white">
                        {item.title}
                      </Text>
                      <OpenLinkIcon size={12} />
                    </HStack>
                  ))}
                </SimpleGrid>
              </Box>
            </Flex>

            <Text mt="16px" fontSize="16px" lineHeight="28px" color="#838383">
              Total Supply: 1,000,000,000 SPT
            </Text>

            <HStack mt="16px">
              <Text fontSize="16px" lineHeight="26px" color="#838383">
                Address:
              </Text>
              <Text fontSize="16px" lineHeight="26px" color="#838383">
                0x95B31f10de21d723A534B7581cd4f0
              </Text>
            </HStack>
            <Text mt="16px" fontSize="16px" lineHeight="26px" color="#838383">
              Dragon Kart is a 3D racing e-sport game built on the Blockchain
              platform, the characters in the game are taken from a Pikalong
              series by a Vietnamese well-known artist named Thang Fly.
            </Text>
          </Box>
        </GridItem>
      </Grid>
      <Text mt="24px" fontSize="24px" lineHeight="34px" fontWeight="bold">
        Community Pool
      </Text>
      <SimpleGrid columns={2} mt="20px">
        <Box mr="15px">
          <Box>
            <HStack spacing={4}>
              <Tag
                size="md"
                variant="subtle"
                bg="#3A3A3A"
                border="1px solid #CCCCCC"
              >
                <TagLeftIcon boxSize="16px" as={DemoYellowIcon} />
                <TagLabel>
                  <Text fontSize="12px" lineHeight="22px" color="white">
                    BUSD
                  </Text>
                </TagLabel>
              </Tag>
              <Tag
                size="md"
                variant="subtle"
                bg="#3A3A3A"
                border="1px solid #CCCCCC"
              >
                <TagLabel>
                  <Text fontSize="12px" lineHeight="22px" color="white">
                    Apply Whitelist Required
                  </Text>
                </TagLabel>
              </Tag>
            </HStack>
            <Text text="16px" lineHeight="26px" mt="24px" color="#838383">
              Pool is open to join in
            </Text>

            <Box mt="12px">
              <CountDown
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
            </Box>
          </Box>

          <TableRightInvestment />
        </Box>
        <Box
          ml="15px"
          bg="#0C0A00"
          px="12px"
          py="24px"
          borderRadius="8px"
          border="1px solid #3A3A3A"
        >
          <HStack>
            <Text fontSize="16px" lineHeight="26px" color="#838383">
              Pool Allocation:
            </Text>
            <Spacer />
            <Text fontSize="16px" lineHeight="26px" color="white">
              10,000 LUS
            </Text>
          </HStack>
          <HStack mt="20px">
            <Text fontSize="16px" lineHeight="26px" color="#838383">
              Swap Rate:
            </Text>
            <Spacer />
            <Text fontSize="16px" lineHeight="26px" color="white">
              1 LUS = 0.06 BUSD
            </Text>
          </HStack>
          <Divider my="32px" borderColor="#3A3A3A" />
          <Text fontSize="16px" lineHeight="26px" color="#838383">
            Swap progress
          </Text>
          <Slider aria-label="slider-ex-4" defaultValue={30}>
            <SliderTrack bg="#E3E3E3">
              <SliderFilledTrack bg="#EFBF1C" />
            </SliderTrack>
            <SliderThumb boxSize={6} bg="transparent">
              <RocketIcon />
            </SliderThumb>
          </Slider>
          <HStack>
            <Text fontSize="12px" lineHeight="22px" color="#838383">
              00%
            </Text>
            <Spacer />
            <Text fontSize="12px" lineHeight="22px" color="#838383">
              50%
            </Text>
            <Spacer />
            <Text fontSize="12px" lineHeight="22px" color="#838383">
              100%
            </Text>
          </HStack>
          <Divider my="32px" borderColor="#3A3A3A" />
          <Text
            fontSize="16px"
            lineHeight="30px"
            fontWeight="bold"
            color="#838383"
          >
            Your Balance:
          </Text>
          <HStack mt="12px">
            <DemoPinkIcon />
            <Text fontSize="16px" lineHeight="26px">
              <strong>1,000,000</strong> FAM
            </Text>
          </HStack>
          <HStack mt="12px">
            <DemoYellowIcon />
            <Text fontSize="16px" lineHeight="26px">
              <strong>1,000,000</strong> FIM
            </Text>
          </HStack>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default InvestmentDetail
