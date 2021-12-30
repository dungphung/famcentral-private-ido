import React from 'react'
import { Button } from '@chakra-ui/react'
import useAuth from 'src/hooks/useAuth'
import useWalletModal from 'src/hooks/useWalletModal'

const ConnectWalletButton = () => {
  const { login } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login)

  return (
    <Button
      bg="linear-gradient(90deg, #B19122 0%, #F4C31C 39.48%)"
      minW="120px"
      color="black"
      fontSize="16px"
      _focus={{
        backgroundColor: 'linear-gradient(90deg, #B19122 0%, #F4C31C 39.48%)',
      }}
      _hover={{
        backgroundColor: 'linear-gradient(90deg, #B19122 0%, #F4C31C 39.48%)',
      }}
      _active={{
        backgroundColor: 'linear-gradient(90deg, #B19122 0%, #F4C31C 39.48%)',
      }}
      onClick={onPresentConnectModal}
    >
      Connect
    </Button>
  )
}

export default ConnectWalletButton
