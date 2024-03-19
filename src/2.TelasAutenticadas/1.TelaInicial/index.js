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
            <Botao.BordaLaranja>REPORT LEAD</Botao.BordaLaranja>
            <Botao.BordaLaranja>REPORT CLIENTE</Botao.BordaLaranja>
            <Botao.BordaLaranja>REPORT FECHAMENTO</Botao.BordaLaranja>
            <Botao.BordaLaranja>RELATÓRIOS OPERACIONAIS</Botao.BordaLaranja>
            <Botao.BordaLaranja>DASHBOARD</Botao.BordaLaranja>
          </Flex>
        </Flex>
        <Flex flexDir="column" paddingLeft="20px" h="250px">
          <Botao.BordaLaranjaMenor
            onClick={() => navigate('/primeiro-cadastro-lead')}
          >
            CADASTRAR NOVO LEAD
          </Botao.BordaLaranjaMenor>
          <Botao.BordaLaranjaMenor>
            BUSCAR LEAD POR NOME
          </Botao.BordaLaranjaMenor>
          <Flex paddingTop="7px">
            <Botao.BordaLaranjaMenor>AVALIAÇÃO TÉCNICA</Botao.BordaLaranjaMenor>
          </Flex>
          <Botao.BordaLaranjaMenor>ORÇAMENTOS</Botao.BordaLaranjaMenor>
          <Flex paddingTop="7px">
            <Botao.BordaLaranjaMenor>EMITIR RECIBO</Botao.BordaLaranjaMenor>
          </Flex>
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
        <Botao.Sublinhado marginRight="15px">VISITAS DO DIA</Botao.Sublinhado>
        <Botao.Sublinhado>MANUTENÇÃO PREVENTIVA</Botao.Sublinhado>
      </Flex>
    </Flex>
  )
}
