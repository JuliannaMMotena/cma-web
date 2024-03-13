import { Flex, Image } from '@chakra-ui/react'
import { Textos, Botao } from 'componentes'

export const TelaPrimeiroCadastroLead = () => {
  return (
    <Flex
      flexDir="row"
      backgroundColor="brand.principal"
      backgroundImage="url('/img/fotofundo_telalogin.svg')"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      w="100vw"
      h="100vh"
      position="relative"
    >
      <Flex
        pt="0px"
        pl="170px"
        left="0"
        top="0"
        position="absolute"
        flexDir="row"
      >
        <Image
          src="/img/logotipo_horizontal_CMAbranca.svg"
          alt="CMA Logo"
          w="200px"
          h="122px"
        ></Image>
      </Flex>
      <Flex
        pt="30px"
        pr="170px"
        right="0"
        top="0"
        position="absolute"
        justifyContent="flex-end"
        flexDir="row"
      >
        <Textos.Subtitulo color="brand.branco">
          Usuário: Yasmin Alves
        </Textos.Subtitulo>
      </Flex>

      <Flex
        flexDir="row"
        w="100vw"
        h={['85vh', '608px']}
        paddingLeft="200px"
        marginTop="110px"
        justifyContent="flex-start"
        alignItems="center"
        backgroundColor="brand.cinza"
      >
        <Flex
          flexDir="row"
          w="75vw"
          h="60vh"
          justifyContent="center"
          fontWeight="extrabold"
          fontSize="28px"
          color="#007861"
        >
          <span>Cadastro de Atendimento</span>
        </Flex>
      </Flex>
      <Flex
        w="97vw"
        h="20px"
        backgroundColor="#007861"
        position="absolute"
        top="210px"
        left="25px"
        borderRadius="16px"
      />
      <Flex
        flexDir="column"
        w="100vw"
        h="608px"
        top="208px"
        alignItems="center"
        position="absolute"
      >
        <Flex color="brand.branco">
          <span>DADOS PESSOAIS</span>
        </Flex>
        <Flex w="93vw" fontSize="14px" color="#007861">
          <span>CNPJ/CPF:</span>
          <Flex
            w="175px"
            h="36px"
            backgroundColor="brand.branco"
            top="20px"
            left="255px"
            borderRadius="16px"
          />
          <Flex position="absolute" paddingLeft="250px">
            <span>453466456456456</span>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        pb="30px"
        pl="170px"
        left="0"
        bottom="0"
        position="absolute"
        justifyContent="flex-end"
        flexDir="row"
      >
        <Botao
          w="250px"
          h="48px"
          color="brand.branco"
          borderBottom="2px solid white"
          backgroundColor="transparent"
          _hover={{ backgroundColor: 'transparent' }}
          alignItems="center"
          borderRadius="0px"
        >
          MENU PRINCIPAL
        </Botao>
      </Flex>
    </Flex>
  )
}
