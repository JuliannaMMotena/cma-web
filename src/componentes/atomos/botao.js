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

Botao.Sublinhado = ({ children, ...props }) => (
  <ChakraButton
    w="250px"
    h="48px"
    color="brand.branco"
    borderBottom="2px solid white"
    backgroundColor="transparent"
    _hover={{ backgroundColor: 'transparent' }}
    alignItems="center"
    borderRadius="0px"
    {...props}
  >
    {children}
  </ChakraButton>
)

Botao.BordaLaranja = ({ children, ...props }) => (
  <ChakraButton
    w="250px"
    h="48px"
    color="brand.rosa"
    borderStyle="solid"
    borderColor="brand.laranja"
    borderWidth="2px"
    borderRadius="50px"
    backgroundColor="brand.branco"
    _hover={{ backgroundColor: 'brand.laranja' }}
    mt="18px"
    alignItems="center"
    {...props}
  >
    {children}
  </ChakraButton>
)

Botao.BordaLaranjaMenor = ({ children, ...props }) => (
  <ChakraButton
    w="231px"
    h="30px"
    color="brand.rosa"
    borderStyle="solid"
    borderColor="brand.laranja"
    borderWidth="2px"
    borderRadius="50px"
    backgroundColor="brand.branco"
    _hover={{ backgroundColor: 'brand.laranja' }}
    alignItems="center"
    {...props}
  >
    {children}
  </ChakraButton>
)

Botao.BordaCinza = ({ children, ...props }) => (
  <ChakraButton
    w="346px"
    h="36px"
    color="brand.cinzaescuro"
    borderStyle="solid"
    borderColor="brand.cinzaescuro"
    borderWidth="2px"
    borderRadius="50px"
    backgroundColor="transparent"
    _hover={{ backgroundColor: 'brand.laranja' }}
    mt="18px"
    alignItems="center"
    {...props}
  >
    {children}
  </ChakraButton>
)

Botao.Sublinhado.displayName = 'Sublinhado'
Botao.BordaLaranja.displayName = 'BordaLaranja'
Botao.BordaLaranjaMenor.displayName = 'BordaLaranjaMenor'
Botao.BordaCinza.displayName = 'BordaCinza'
