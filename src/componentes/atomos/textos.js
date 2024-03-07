import { Text as ChakraText } from '@chakra-ui/react'

export const Textos = ({ children, ...props }) => (
  <ChakraText fontWeight="extrabold" fontSize="28px" {...props}>
    {children}
  </ChakraText>
)

Textos.Subtitulo = ({ children, ...props }) => (
  <ChakraText fontWeight="regular" fontSize="16px" {...props}>
    {children}
  </ChakraText>
)

Textos.Subtitulo.displayName = 'Subtitulo'
