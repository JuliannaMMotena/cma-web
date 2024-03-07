import { Button as ChakraButton } from '@chakra-ui/react'

export const Botao = ({ children, ...props }) => (
  <ChakraButton
    borderRadius="50px"
    width="150px"
    height="48px"
    fontSize="16px"
    {...props}
  >
    {children}
  </ChakraButton>
)
