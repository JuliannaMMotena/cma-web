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

Textos.Subtitulo2 = ({ children, ...props }) => (
  <ChakraText fontWeight="regular" fontSize="14px" {...props}>
    {children}
  </ChakraText>
)

Textos.titulo = ({ children, ...props }) => (
  <ChakraText
    h="60vh"
    paddingLeft="500px"
    fontWeight="extrabold"
    fontSize="28px"
    color="#007861"
    {...props}
  >
    {children}
  </ChakraText>
)

Textos.Subtitulo.displayName = 'Subtitulo'
Textos.Subtitulo2.displayName = 'Subtitulo2'
