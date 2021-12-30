import React from 'react'

import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'

import StepInvestments from '../StepInvestments/container'

const dataPoolAllocation = [
  {
    id: 1,
    items: 'NFT Genesis',
    amount: '50',
    swapRate: '50 CT',
  },
  {
    id: 2,
    items: 'NFT Fanvestor - SSR',
    amount: '500',
    swapRate: '50 CT',
  },
  {
    id: 3,
    items: 'NFT Fanvestor - SR',
    amount: '50',
    swapRate: '50 CT',
  },
  {
    id: 4,
    items: 'NFT Fanvestor - S',
    amount: '500',
    swapRate: '50 CT',
  },
  {
    id: 5,
    items: 'NFT Legend',
    amount: '500',
    swapRate: '50 CT',
  },
]

const TableRightInvestment = () => {
  return (
    <Tabs mt="45px">
      <TabList>
        <Tab
          fontSize="16px"
          lineHeight="26px"
          fontWeight="bold"
          _selected={{
            color: 'white',
            borderBottomColor: '#EFBF1C',
            borderBottomWidth: '4px',
          }}
        >
          Steps
        </Tab>
        {/* <Tab
          fontSize="16px"
          lineHeight="26px"
          fontWeight="bold"
          _selected={{ color: 'white', borderBottomColor: '#EFBF1C' }}
        >
          Pool Allocation
        </Tab> */}
        <Tab
          fontSize="16px"
          lineHeight="26px"
          fontWeight="bold"
          _selected={{
            color: 'white',
            borderBottomColor: '#EFBF1C',
            borderBottomWidth: '4px',
          }}
        >
          Discovering
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <StepInvestments />
        </TabPanel>
        {/* <TabPanel>
          <Box bg="#080739" px="24px" py="32px">
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>
                    <Text
                      fontWeight="bold"
                      fontSize="16px"
                      lineHeight="26px"
                      color="white"
                    >
                      Items
                    </Text>
                  </Th>
                  <Th>
                    <Text
                      fontWeight="bold"
                      fontSize="16px"
                      lineHeight="26px"
                      color="white"
                    >
                      Amount
                    </Text>
                  </Th>
                  <Th>
                    <Text
                      fontWeight="bold"
                      fontSize="16px"
                      lineHeight="26px"
                      color="white"
                    >
                      Swap rate
                    </Text>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {dataPoolAllocation.map((item) => {
                  return (
                    <Tr key={item.id}>
                      <Td>
                        <Text
                          fontWeight="bold"
                          fontSize="16px"
                          lineHeight="26px"
                        >
                          {item.items}
                        </Text>
                      </Td>
                      <Td>
                        <Text
                          fontWeight="bold"
                          fontSize="16px"
                          lineHeight="26px"
                        >
                          {item.amount}
                        </Text>
                      </Td>
                      <Td>
                        <Text
                          fontWeight="bold"
                          fontSize="16px"
                          lineHeight="26px"
                        >
                          {item.swapRate}
                        </Text>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </Box>
        </TabPanel> */}
        <TabPanel>
          <Box bg="white" color="#000" borderRadius="8px" p="24px">
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, b
            </Text>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default TableRightInvestment
