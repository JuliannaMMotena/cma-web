import { Flex, Image, Icon } from '@chakra-ui/react'
import { Textos, Botao, Footer, Input } from 'componentes'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

export const TelaBuscaLeadPorNome = () => {
  const navigate = useNavigate()

  return (
    <Flex flexDir="column" position="relative">
      <Flex
        flexDir="row"
        backgroundColor="brand.principal"
        backgroundImage="url('/img/fotofundo_telalogin.svg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        w="100vw"
        h="14vh"
        position="fixed"
      >
        <Flex pt="0px" pl="170px" left="0" top="0" flexDir="row">
          <Image
            src="/img/logotipo_horizontal_CMAbranca.svg"
            alt="CMA Logo"
            w="200px"
            h="122px"
          ></Image>
        </Flex>
        <Flex pt="30px" pl="1050px" justifyContent="flex-end" flexDir="row">
          <Textos.Subtitulo color="brand.branco">
            Usuário: Yasmin Alves
          </Textos.Subtitulo>
        </Flex>
      </Flex>
      <Flex
        flexDir="row"
        display="flex"
        alignItems="baseline"
        fontSize="28px"
        position="absolute"
      >
        <Flex paddingTop="350px">
          <Textos.titulo>Buscar Lead por Nome:</Textos.titulo>
        </Flex>
        <Flex marginLeft="10px" top="160px">
          <Input.Campo
            backgroundColor="brand.cinzamedio"
            w="547px"
            h="48px"
            focusBorderColor="brand.principal"
            color="brand.laranja"
            type="text"
            fontSize="20px"
          ></Input.Campo>
        </Flex>
      </Flex>
      <Flex paddingTop="550px" paddingLeft="1400px">
        <Icon
          cursor="pointer"
          onClick={() => navigate('/tela-inicial')}
          paddingLeft="10px"
          boxSize="44px"
          as={IoArrowBack}
          position="absolute"
          color="brand.laranja"
        ></Icon>
      </Flex>
      <Flex>
        <Footer />
      </Flex>
      <Flex>
        <Flex
          pb="40px"
          pl="170px"
          left="0"
          bottom="0"
          position="fixed"
          justifyContent="flex-end"
          flexDir="row"
        >
          <Botao.Sublinhado onClick={() => navigate('/tela-inicial')}>
            MENU PRINCIPAL
          </Botao.Sublinhado>
        </Flex>
      </Flex>
    </Flex>
  )
}
