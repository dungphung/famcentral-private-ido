import React, { useState } from 'react'
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
} from 'react-pro-sidebar'
import LogoFullIcon from 'src/assets/images/logo-full-icon.png'
import {
  Box,
  HStack,
  Text,
  Flex,
  Spacer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
} from '@chakra-ui/react'
import { ReactComponent as BuyFamIcon } from 'src/assets/svgs/buy-fam-icon.svg'
import { ReactComponent as MembershipVaultIcon } from 'src/assets/svgs/membership-vault-icon.svg'
import { ReactComponent as ProjectsIcon } from 'src/assets/svgs/projects-icon.svg'
import { ReactComponent as PoolsIcon } from 'src/assets/svgs/pools-icon.svg'
import { ReactComponent as ShoppingCartIcon } from 'src/assets/svgs/shopping-cart-icon.svg'
import { ReactComponent as FamCircleIcon } from 'src/assets/svgs/fam-circle-icon.svg'
import { ReactComponent as TelegramIcon } from 'src/assets/svgs/telegram-icon.svg'
import { ReactComponent as FaceBookIcon } from 'src/assets/svgs/facebook-icon.svg'
import { ReactComponent as TwitterIcon } from 'src/assets/svgs/twitter-icon.svg'
import { ReactComponent as DarkModeIcon } from 'src/assets/svgs/ic_brightness-icon.svg'
import { ReactComponent as LightModeIcon } from 'src/assets/svgs/ic_wb_sunny.svg'
import { ReactComponent as GlobalIcon } from 'src/assets/svgs/language-icon.svg'
import { ReactComponent as WalletIcon } from 'src/assets/svgs/wallet-icon.svg'
import { ReactComponent as Investment } from 'src/assets/svgs/investment-icon.svg'
import { ReactComponent as CollapsedIcon } from 'src/assets/svgs/collapse-menu-icon.svg'
import { Link, useLocation } from 'react-router-dom'
import useGetFAMInfo from 'src/hooks/useGetFAMInfo'

import ConnectWalletButton from './ConnectWalletButton'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'src/hooks/useAuth'
import useWalletModal from 'src/hooks/useWalletModal'
import BgImage from 'src/assets/images/bg_website.png'

const ListMenu = [
  {
    id: 1,
    link: '/',
    title: 'Buy FAM',
    Icon: BuyFamIcon,
  },
  {
    id: 2,
    link: '/membership-vault',
    title: 'Membership Vault',
    Icon: MembershipVaultIcon,
  },
  {
    id: 3,
    link: '/investments',
    title: 'Investment',
    Icon: Investment,
  },
  {
    id: 4,
    link: '#',
    title: 'Farms',
    Icon: ShoppingCartIcon,
  },
  {
    id: 5,
    link: '#',
    title: 'Pools',
    Icon: PoolsIcon,
  },
]

const MainLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true)
  const location = useLocation()
  const { priceFormat } = useGetFAMInfo()
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { onPresentAccountModal } = useWalletModal(login, logout, account)

  return (
    <Box display="flex" overflow="hidden" position="relative" bg="#181826">
      <Box h="100vh">
        <Box
          style={{
            opacity: collapsed ? 0 : 1,
            display: collapsed ? 'none' : 'block',
            transition: 'opacity 0.2s',
          }}
          p="16px"
          position="absolute"
          bottom="0px"
          left="0px"
          zIndex={1010}
        >
          <HStack spacing="13px">
            <FamCircleIcon />
            <Text color="white" fontSize="24px" fontWeight="bold">
              {priceFormat}
            </Text>
          </HStack>
          <HStack mt="23px">
            <Text color="white" fontSize="20px" fontWeight="bold" mr="26px">
              Media:
            </Text>
            <HStack spacing="26px">
              <FaceBookIcon
                onClick={() => {
                  window.open('https://www.facebook.com/famcentralofficial')
                }}
              />
              <TelegramIcon
                onClick={() => {
                  window.open('https://t.me/famcentralchatgroup')
                }}
              />
              <TwitterIcon
                onClick={() => {
                  window.open('https://twitter.com/fam_central')
                }}
              />
            </HStack>
          </HStack>
          <Flex mt="23px" flex="1">
            <HStack>
              <LightModeIcon /> <Text>/</Text> <DarkModeIcon />
            </HStack>
            <Spacer />

            <Popover
              placement="top-start"
              strategy="absolute"
              preventOverflow={false}
            >
              <PopoverTrigger>
                <HStack>
                  <GlobalIcon />
                  <Text color="white" fontSize="20px" fontWeight="bold">
                    ENG
                  </Text>
                </HStack>
              </PopoverTrigger>
              <PopoverContent width="100px">
                <PopoverBody>
                  <Text>English</Text>
                  <Text>Vietnam</Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Box>
      </Box>

      <Box
        bg="rgba(24, 24, 38, 0.8)"
        backgroundImage={BgImage}
        backgroundSize="cover"
        width="100%"
        style={{
          height: '100vh',
          overflowY: 'scroll',
          backgroundImage: BgImage,
        }}
      >
        <HStack flexDir="row" px="44px" mt="20px">
          <div />
          <Spacer />
          {!account ? (
            <ConnectWalletButton />
          ) : (
            <Button
              px="15px"
              m="0"
              bg="white"
              color="#000"
              _focus={{
                backgroundColor: 'white',
              }}
              _hover={{
                backgroundColor: 'white',
              }}
              _active={{
                backgroundColor: 'white',
              }}
            >
              <WalletIcon />{' '}
              <Text
                fontSize="16px"
                lineHeight="16px"
                ml="5px"
                onClick={onPresentAccountModal}
              >
                Connected: {account?.substring(0, 12) ?? ''}...
              </Text>
            </Button>
          )}
        </HStack>
        {children}
      </Box>
    </Box>
  )
}

export default MainLayout
