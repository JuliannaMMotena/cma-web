import { AbsoluteCenter as ChakraAbsoluteCenter } from '@chakra-ui/react'

export const Campo = ({ children, ...props }) => (
  <div>
    <ChakraAbsoluteCenter
      h="36px"
      borderRadius="16px"
      bg="brand.branco"
      px="4"
      {...props}
    >
      {children}
    </ChakraAbsoluteCenter>
  </div>
)
