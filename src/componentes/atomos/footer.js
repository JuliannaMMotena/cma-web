import { Box, Image, Flex } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Flex>
      <Box
        display="flex"
        justifyContent="center"
        position="fixed"
        bottom="0"
        bg="brand.principal"
        w="100vw"
        h="14vh"
      >
        <Image h="100vh" src="/img/fotofundo_telalogin.svg" alt="Imagem" />
      </Box>
    </Flex>
  )
}

export default Footer
