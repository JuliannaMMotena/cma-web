import { Flex, Image } from '@chakra-ui/react'
import { Textos, Botao } from 'componentes'
import { useNavigate } from 'react-router-dom'

export const TelaInicial = () => {
  const navigate = useNavigate()
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
        backgroundColor="brand.branco"
      >
        <Flex w="500px">
          <Image
            src="/img/logotipo_horizontal_CMAverde.svg"
            alt="CMA Logo"
            w="250px"
            h="213px"
          ></Image>
        </Flex>
        <Flex flexDir="column">
          <Textos
            paddingLeft="130px"
            paddingBottom="0px"
            color="brand.principal"
          >
            Bem-vinda, Yasmin!
          </Textos>
          <Flex paddingLeft="130px" flexDir="column">
            <Botao
              w="250px"
              h="48px"
              color="brand.rosa"
              borderStyle="solid"
              borderColor="brand.laranja"
              borderWidth="2px"
              backgroundColor="brand.branco"
              _hover={{ backgroundColor: 'brand.laranja' }}
              mt="18px"
              alignItems="center"
            >
              REPORT LEAD
            </Botao>
            <Botao
              w="250px"
              h="48px"
              color="brand.rosa"
              borderStyle="solid"
              borderColor="brand.laranja"
              borderWidth="2px"
              backgroundColor="brand.branco"
              _hover={{ backgroundColor: 'brand.laranja' }}
              mt="18px"
              alignItems="center"
            >
              REPORT CLIENTE
            </Botao>
            <Botao
              w="250px"
              h="48px"
              color="brand.rosa"
              borderStyle="solid"
              borderColor="brand.laranja"
              borderWidth="2px"
              backgroundColor="brand.branco"
              _hover={{ backgroundColor: 'brand.laranja' }}
              mt="18px"
              alignItems="center"
            >
              REPORT FECHAMENTO
            </Botao>
            <Botao
              w="250px"
              h="48px"
              color="brand.rosa"
              borderStyle="solid"
              borderColor="brand.laranja"
              borderWidth="2px"
              backgroundColor="brand.branco"
              _hover={{ backgroundColor: 'brand.laranja' }}
              mt="18px"
              alignItems="center"
            >
              RELATÓRIOS OPERACIONAIS
            </Botao>
            <Botao
              w="250px"
              h="48px"
              color="brand.rosa"
              borderStyle="solid"
              borderColor="brand.laranja"
              borderWidth="2px"
              backgroundColor="brand.branco"
              _hover={{ backgroundColor: 'brand.laranja' }}
              mt="18px"
              alignItems="center"
            >
              DASHBOARD
            </Botao>
          </Flex>
        </Flex>
        <Flex flexDir="column" paddingLeft="20px" h="250px">
          <Botao
            w="231px"
            h="30px"
            color="brand.rosa"
            borderStyle="solid"
            borderColor="brand.laranja"
            borderWidth="2px"
            backgroundColor="brand.branco"
            _hover={{ backgroundColor: 'brand.laranja' }}
            alignItems="center"
            onClick={() => navigate('/primeiro-cadastro-lead')}
          >
            CADASTRAR NOVO LEAD
          </Botao>
          <Botao
            w="231px"
            h="30px"
            color="brand.rosa"
            borderStyle="solid"
            borderColor="brand.laranja"
            borderWidth="2px"
            backgroundColor="brand.branco"
            _hover={{ backgroundColor: 'brand.laranja' }}
            alignItems="center"
            marginBottom="6px"
          >
            BUSCAR LEAD POR NOME
          </Botao>
          <Botao
            w="231px"
            h="30px"
            color="brand.rosa"
            borderStyle="solid"
            borderColor="brand.laranja"
            borderWidth="2px"
            backgroundColor="brand.branco"
            _hover={{ backgroundColor: 'brand.laranja' }}
            alignItems="center"
          >
            AVALIAÇÃO TÉCNICA
          </Botao>
          <Botao
            w="231px"
            h="30px"
            color="brand.branco"
            borderStyle="solid"
            borderColor="brand.laranja"
            borderWidth="2px"
            backgroundColor="brand.branco"
            _hover={{ backgroundColor: 'brand.laranja' }}
            alignItems="center"
            marginBottom="6px"
          >
            ORÇAMENTOS
          </Botao>
          <Botao
            w="231px"
            h="30px"
            color="brand.branco"
            borderStyle="solid"
            borderColor="brand.laranja"
            borderWidth="2px"
            backgroundColor="brand.branco"
            _hover={{ backgroundColor: 'brand.laranja' }}
            alignItems="center"
          >
            EMITIR RECIBO
          </Botao>
        </Flex>
      </Flex>
      <Flex
        pb="30px"
        pr="40px"
        right="0"
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
          marginRight="30px"
        >
          VISITAS DO DIA
        </Botao>
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
          MANUTENÇÃO PREVENTIVA
        </Botao>
      </Flex>
    </Flex>
  )
}
