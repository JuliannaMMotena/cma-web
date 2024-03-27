import { Flex, Image } from '@chakra-ui/react'
import { Textos, Botao } from 'componentes'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const TelaInicial = () => {
  const navigate = useNavigate()
  const [mostrarCadastrarNovoLead, setMostrarCadastrarNovoLead] =
    useState(false)
  const [mostrarBuscarLeadPorNome, setMostrarBuscarLeadPorNome] =
    useState(false)
  const [mostrarAvaliacaoTecnica, setMostrarAvaliacaoTecnica] = useState(false)
  const [mostrarOrçamentos, setMostrarOrçamentos] = useState(false)
  const [mostrarEmitirRecibo, setMostrarEmitirRecibo] = useState(false)
  const [mostrarBotoes, setMostrarBotoes] = useState(false)
  const [botoesFixos, setBotoesFixos] = useState(false)

  const handleClickReportLead = () => {
    if (botoesFixos) {
      // Se os botões estão fixos, então oculte-os
      setMostrarBotoes(false)
      setMostrarCadastrarNovoLead(false)
      setMostrarBuscarLeadPorNome(false)
      setBotoesFixos(false)
    } else {
      // Se os botões não estão fixos, então mostre-os
      setMostrarBotoes(true)
      setMostrarCadastrarNovoLead(true)
      setMostrarBuscarLeadPorNome(true)
      setBotoesFixos(true)
    }
  }

  const handleClickReportCliente = () => {
    if (botoesFixos) {
      // Se os botões estão fixos, então oculte-os
      setMostrarBotoes(false)
      setMostrarAvaliacaoTecnica(false)
      setMostrarOrçamentos(false)
      setBotoesFixos(false)
    } else {
      // Se os botões não estão fixos, então mostre-os
      setMostrarBotoes(true)
      setMostrarAvaliacaoTecnica(true)
      setMostrarOrçamentos(true)
      setBotoesFixos(true)
    }
  }

  const handleClickReportFechamento = () => {
    if (botoesFixos) {
      // Se os botões estão fixos, então oculte-os
      setMostrarBotoes(false)
      setMostrarEmitirRecibo(false)
      setBotoesFixos(false)
    } else {
      // Se os botões não estão fixos, então mostre-os
      setMostrarBotoes(true)
      setMostrarEmitirRecibo(true)
      setBotoesFixos(true)
    }
  }

  const handleMouseEnterReportLead = () => {
    if (!botoesFixos) {
      setMostrarBotoes(true)
      setMostrarCadastrarNovoLead(true)
      setMostrarBuscarLeadPorNome(true)
    }
  }

  const handleMouseEnterReportCliente = () => {
    if (!botoesFixos) {
      setMostrarBotoes(true)
      setMostrarAvaliacaoTecnica(true)
      setMostrarOrçamentos(true)
    }
  }

  const handleMouseEnterReportFechamento = () => {
    if (!botoesFixos) {
      setMostrarBotoes(true)
      setMostrarEmitirRecibo(true)
    }
  }

  const handleMouseLeave = () => {
    if (!botoesFixos) {
      setMostrarBotoes(false)
      setMostrarCadastrarNovoLead(false)
      setMostrarBuscarLeadPorNome(false)
      setMostrarAvaliacaoTecnica(false)
      setMostrarOrçamentos(false)
      setMostrarEmitirRecibo(false)
    }
  }

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
            <Flex
              onMouseEnter={handleMouseEnterReportLead}
              onMouseLeave={handleMouseLeave}
            >
              <Botao.BordaLaranja onClick={handleClickReportLead}>
                REPORT LEAD
              </Botao.BordaLaranja>
            </Flex>
            <Flex
              onMouseEnter={handleMouseEnterReportCliente}
              onMouseLeave={handleMouseLeave}
            >
              <Botao.BordaLaranja onClick={handleClickReportCliente}>
                REPORT CLIENTE
              </Botao.BordaLaranja>
            </Flex>
            <Flex
              onMouseEnter={handleMouseEnterReportFechamento}
              onMouseLeave={handleMouseLeave}
            >
              <Botao.BordaLaranja onClick={handleClickReportFechamento}>
                REPORT FECHAMENTO
              </Botao.BordaLaranja>
            </Flex>

            <Botao.BordaLaranja>RELATÓRIOS OPERACIONAIS</Botao.BordaLaranja>
            <Botao.BordaLaranja>DASHBOARD</Botao.BordaLaranja>
          </Flex>
        </Flex>
        <Flex flexDir="column" paddingLeft="20px" h="250px">
          {mostrarBotoes && (
            <>
              {mostrarCadastrarNovoLead && (
                <Botao.BordaLaranjaMenor
                  onClick={() => navigate('/cadastro-lead')}
                >
                  CADASTRAR NOVO LEAD
                </Botao.BordaLaranjaMenor>
              )}
              {mostrarBuscarLeadPorNome && (
                <Botao.BordaLaranjaMenor
                  onClick={() => navigate('/busca-lead')}
                >
                  BUSCAR LEAD POR NOME
                </Botao.BordaLaranjaMenor>
              )}
            </>
          )}
          <Flex flexDir="column" paddingTop="70px">
            {mostrarBotoes && (
              <>
                {mostrarAvaliacaoTecnica && (
                  <Botao.BordaLaranjaMenor>
                    AVALIAÇÃO TÉCNICA
                  </Botao.BordaLaranjaMenor>
                )}
                {mostrarOrçamentos && (
                  <Botao.BordaLaranjaMenor>ORÇAMENTOS</Botao.BordaLaranjaMenor>
                )}
              </>
            )}
          </Flex>
          <Flex paddingTop="60px">
            {mostrarBotoes && (
              <>
                {mostrarEmitirRecibo && (
                  <Botao.BordaLaranjaMenor>
                    EMITIR RECIBO
                  </Botao.BordaLaranjaMenor>
                )}
              </>
            )}
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
