import { Link as ChakraLink } from '@chakra-ui/react'

export const Link = ({ children, ...props }) => (
  <ChakraLink {...props}>
    {children}
  </ChakraLink>
)
