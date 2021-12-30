import React from 'react'

import { MainLayout } from 'src/layouts'
import {
  Box,
  Flex,
  Spacer,
  SimpleGrid,
  Text,
  HStack,
  useTheme,
} from '@chakra-ui/react'
import { ReactComponent as CIcon } from 'src/assets/svgs/c-white-icon.svg'

const ProjectDetail = () => {
  const colors = useTheme()
  console.log(colors)

  return (
    <MainLayout>
      <Box mx="32px">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 5, lg: 8 }}
          mt="28px"
        >
          <Box></Box>
          <Box
            background="red"
            backdropFilter="blur(120px)"
            maxW="492px"
            maxH="420px"
          >
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              // spacing={{ base: 5, lg: 8 }}
              mt="28px"
            >
              <Box>
                <Text>Your Balance:</Text>
                <HStack>
                  <CIcon />
                  <Text>100,000 FAM</Text>
                </HStack>
              </Box>
              <Box></Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Box>
    </MainLayout>
  )
}

export default ProjectDetail
