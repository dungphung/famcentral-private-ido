import React from 'react'

import { Button } from '@chakra-ui/react'

const CustomButton = ({
  textColor = 'white',
  activeColor = '#5C52FF',
  bgColor = '#7169F8',
  onClick,
  textButton,
}) => {
  return (
    <Button
      bg={bgColor}
      // ml="15px"
      w="100%"
      color={textColor}
      fontSize="16px"
      _focus={{
        backgroundColor: bgColor,
      }}
      _hover={{
        backgroundColor: bgColor,
      }}
      _active={{
        backgroundColor: bgColor,
      }}
      onClick={onClick}
    >
      {textButton}
    </Button>
  )
}

export default CustomButton
