import { Flex, Image } from '@chakra-ui/react'
import { Textos, Input, Link, Botao } from 'componentes'

export const TelaLogin = () => {
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
        marginTop={['50px', '138px']}
        marginLeft={['30px', '443px']}
        borderRadius="16px"
        justifyContent="center"
        alignItems="center"
        backgroundColor="brand.principal"
      >
        <Image
          src="/img/Logo_partelaranja.svg"
          alt="CMA Logo"
          w="250px"
          h="213px"
        ></Image>
        <Textos color="brand.branco" mt="10px">
          Bem-vindo!
        </Textos>
        <Textos.Subtitulo color="brand.branco" mt="6px">
          Acesse com seu login e senha
        </Textos.Subtitulo>
        <Input.Email borderRadius="50px"></Input.Email>
        <Input.Senha></Input.Senha>
        <Link
          color="brand.branco"
          paddingLeft={['150px', '230px']}
          fontSize="14px"
          mt="8px"
        >
          Esqueci minha senha
        </Link>
        <Botao
          color="brand.branco"
          borderStyle="solid"
          borderColor="brand.branco"
          borderWidth="2px"
          backgroundColor="brand.principal"
          _hover={{ backgroundColor: 'brand.principal' }}
          mt="10px"
        >
          Entrar
        </Botao>
      </Flex>
    </Flex>
  )
}
