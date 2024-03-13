import { Flex, Image } from '@chakra-ui/react'
import { Textos, Input, Botao } from 'componentes'

export const TelaNovaSenha = () => {
  return (
    <Flex
      flexDir="row"
      backgroundColor="brand.principal"
      backgroundImage="url('/img/fotofundo_telalogin.svg')"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      bgImage="linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.5)), url('/img/fotofundo_telalogin.svg')"
      w="100vw"
      h="100vh"
    >
      <Flex
        flexDir="column"
        w={['85vw', '894px']}
        h={['85vh', '608px']}
        marginTop={['50px', '108px']}
        marginLeft={['30px', '395px']}
        borderRadius="16px"
        justifyContent="flex-start"
        alignItems="center"
        backgroundColor="brand.branco"
      >
        <Image
          marginTop="60px"
          src="/img/logotipo_horizontal.svg"
          alt="CMA Logo"
          w="304px"
          h="80px"
        ></Image>
        <Textos
          paddingLeft="80px"
          paddingTop="20px"
          w="300px"
          h="43px"
          color="brand.principal"
          mt="10px"
        >
          Nova Senha
        </Textos>
        <Textos.Subtitulo
          paddingLeft="40px"
          paddingTop="20px"
          paddingBottom="20px"
          w="300px"
          fontSize="14px"
          color="brand.principal"
        >
          Digite o código enviado no seu email e <br /> uma nova senha nos
          campos abaixo:
        </Textos.Subtitulo>
        <Input
          w={['290px', '370px']}
          h="48px"
          placeholder="Código"
          borderRadius="50px"
        ></Input>
        <Input.Senha></Input.Senha>
        <Input.ConfirmarSenha></Input.ConfirmarSenha>
        <Botao
          color="brand.branco"
          borderStyle="solid"
          borderColor="brand.branco"
          borderWidth="2px"
          backgroundColor="brand.principal"
          _hover={{ backgroundColor: 'brand.principal' }}
          mt="28px"
          w="184px"
        >
          REDEFINIR SENHA
        </Botao>
      </Flex>
    </Flex>
  )
}
