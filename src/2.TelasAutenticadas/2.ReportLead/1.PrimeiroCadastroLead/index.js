import { Flex, Image, Icon } from '@chakra-ui/react'
import { Textos, Botao, Campo, Input } from 'componentes'
import { CiEdit } from 'react-icons/ci'
import { RiSave3Fill } from 'react-icons/ri'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export const TelaPrimeiroCadastroLead = () => {
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
      <></>
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
        <Flex>
          <Textos.titulo>Cadastro de Atendimento</Textos.titulo>
        </Flex>
      </Flex>
      <Flex
        w="87vw"
        h="20px"
        backgroundColor="#007861"
        position="absolute"
        top="210px"
        left="95px"
        borderRadius="16px"
      />
      <Flex
        flexDir="column"
        w="100vw"
        h="608px"
        top="210px"
        alignItems="center"
        position="absolute"
        fontSize="14px"
      >
        <Flex color="brand.branco">
          <span>DADOS PESSOAIS</span>
        </Flex>
        <Flex w="87vw" flexDir="column">
          <Flex h="0px" marginBottom="0px" marginLeft="52px" marginTop="5px">
            <Textos.Subtitulo2 marginTop="5px" color="#007861">
              CNPJ/CPF:
            </Textos.Subtitulo2>
          </Flex>
          <Input.Campo left="137px" w="160px"></Input.Campo>
          <Flex h="0px" marginTop=" 0px" marginLeft="1170">
            <Textos.Subtitulo2 color="#007861">
              DATA DO CONTATO:
            </Textos.Subtitulo2>
          </Flex>
          <Campo marginLeft="637px" top="45px" w="130px"></Campo>
          <Flex position="absolute" paddingLeft="1345px" paddingTop="15px">
            <Textos.Subtitulo2>00/00/00</Textos.Subtitulo2>
          </Flex>
          <Flex h="0px" marginBottom="0px" marginTop="-12px" marginLeft="350px">
            <Textos.Subtitulo2 color="#007861">
              NOME COMPLETO <br /> OU RAZÃO SOCIAL:
            </Textos.Subtitulo2>
            <Textos.Subtitulo2 color="brand.laranja">*</Textos.Subtitulo2>
          </Flex>
          <Campo top="45px" left="915px" w="630px"></Campo>
          <Flex position="absolute" paddingLeft="510px" paddingTop="15px">
            <Textos.Subtitulo2>Instituto Mouta Motena</Textos.Subtitulo2>
          </Flex>
          <Flex h="0px" marginTop="45px" marginLeft="27px">
            <Textos.Subtitulo2 color="#007861">
              ENDEREÇO DE <br /> COBRANÇA:
            </Textos.Subtitulo2>
            <Textos.Subtitulo2 color="brand.laranja"> *</Textos.Subtitulo2>
          </Flex>
          <Campo top="90px" left="596px" w="41vw"></Campo>
          <Flex position="absolute" paddingLeft="155px" paddingTop="60px">
            <Textos.Subtitulo2>Alameda das Angélicas</Textos.Subtitulo2>
          </Flex>
          <Flex h="0px" marginTop="12px" marginLeft="880">
            <Textos.Subtitulo2 color="#007861">NÚMERO:</Textos.Subtitulo2>
            <Textos.Subtitulo2 color="brand.laranja">*</Textos.Subtitulo2>
          </Flex>
          <Campo marginLeft="257px" top="90px" w="92px"></Campo>
          <Flex position="absolute" paddingLeft="985px" paddingTop="60px">
            <Textos.Subtitulo2>257</Textos.Subtitulo2>
          </Flex>
          <Flex h="0px" marginTop="0px" marginLeft="1090px">
            <Textos.Subtitulo2 color="#007861">COMPLEMENTO:</Textos.Subtitulo2>
            <Textos.Subtitulo2 color="gray" marginLeft="5px">
              Exemplo de texto
            </Textos.Subtitulo2>
          </Flex>
          <Campo marginLeft="587px" top="90px" w="238px"></Campo>
          <Flex position="absolute" paddingLeft="1220px" paddingTop="60px">
            <Textos.Subtitulo2></Textos.Subtitulo2>
          </Flex>
          <Flex
            h="0px"
            w="10px"
            marginTop="44px"
            marginLeft="90"
            right="0px"
            marginRight="0px"
          >
            <Textos.Subtitulo2 color="#007861">CEP:</Textos.Subtitulo2>
            <Textos.Subtitulo2 color="brand.laranja">*</Textos.Subtitulo2>
          </Flex>
          <Campo top="135px" left="300px" w="6vw"></Campo>
          <Flex position="absolute" paddingLeft="155px" paddingTop="105px">
            <Textos.Subtitulo2>18.055-130</Textos.Subtitulo2>
          </Flex>
          <Flex h="0px" marginTop="0px" marginLeft="285px">
            <Textos.Subtitulo2 color="#007861">BAIRRO:</Textos.Subtitulo2>
          </Flex>
          <Campo top="135px" left="655px" w="400px"></Campo>
          <Flex position="absolute" paddingLeft="360px" paddingTop="105px">
            <Textos.Subtitulo2>Jardim Simus</Textos.Subtitulo2>
          </Flex>
          <Flex h="0px" marginTop="0px" marginLeft="790px">
            <Textos.Subtitulo2 color="#007861">CIDADE:</Textos.Subtitulo2>
            <Textos.Subtitulo2 color="brand.laranja">*</Textos.Subtitulo2>
          </Flex>
          <Campo top="135px" w="400px" left="1170px"></Campo>
          <Flex position="absolute" marginLeft="880px" marginTop="105px">
            <Textos.Subtitulo2>Sorocaba</Textos.Subtitulo2>
          </Flex>
          <Flex h="0px" marginTop="0px" marginLeft="1300px">
            <Textos.Subtitulo2 color="#007861">ESTADO:</Textos.Subtitulo2>
            <Textos.Subtitulo2 color="brand.laranja">*</Textos.Subtitulo2>
          </Flex>
          <Campo top="135px" w="70px" left="1520px"></Campo>
          <Flex position="absolute" marginLeft="1385px" marginTop="105px">
            <Textos.Subtitulo2>SP</Textos.Subtitulo2>
          </Flex>
          <Flex h="0px" marginTop="42px" marginLeft="58px">
            <Textos.Subtitulo2 color="#007861">TELEFONE:</Textos.Subtitulo2>
          </Flex>
          <Campo top="180px" w="160px" left="330px"></Campo>
          <Flex paddingLeft="155px" position="absolute" paddingTop="150px">
            <Textos.Subtitulo2>Não possui</Textos.Subtitulo2>
          </Flex>
          <Flex h="0px" marginTop="0px" marginLeft="358px">
            <Textos.Subtitulo2 color="#007861">CELULAR:</Textos.Subtitulo2>
            <Textos.Subtitulo2 color="brand.laranja">*</Textos.Subtitulo2>
          </Flex>
          <Campo top="180px" w="160px" left="630px"></Campo>
          <Flex paddingLeft="455px" position="absolute" paddingTop="150px">
            <Textos.Subtitulo2>+55 15 99116-6336</Textos.Subtitulo2>
          </Flex>
          <Flex h="0px" marginTop="0px" marginLeft="658px">
            <Textos.Subtitulo2 color="#007861">E-MAIL:</Textos.Subtitulo2>
            <Textos.Subtitulo2 color="brand.laranja">*</Textos.Subtitulo2>
          </Flex>
          <Campo top="180px" w="720px" left="1198px"></Campo>
          <Flex paddingLeft="750px" position="absolute" paddingTop="150px">
            <Textos.Subtitulo2>juliannacmota@yahoo.com.br</Textos.Subtitulo2>
          </Flex>
          <Flex h="0px" marginTop="17px" marginLeft="870px" paddingTop="25px">
            <Textos.Subtitulo2 color="#007861">
              MESMO ENDEREÇO DE ENTREGA
            </Textos.Subtitulo2>
          </Flex>
          <Flex h="0px" marginTop="0px" marginLeft="1160px" p>
            <Textos.Subtitulo2 color="#007861">
              CADASTRAR NOVO ENDEREÇO DE ENTREGA
            </Textos.Subtitulo2>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="87vw"
        h="20px"
        backgroundColor="#007861"
        position="absolute"
        top="450px"
        left="95px"
        borderRadius="16px"
      />
      <Flex
        flexDir="column"
        w="100vw"
        h="0px"
        top="450px"
        alignItems="center"
        position="absolute"
        fontSize="14px"
      >
        <Flex color="brand.branco">
          <span>INFORMAÇÕES DO EQUIPAMENTO</span>
        </Flex>
        <Flex w="87vw" flexDir="column">
          <Flex
            h="0px"
            marginBottom="0px"
            marginTop="2px"
            textAlign="right"
            marginLeft="44px"
          >
            <Textos.Subtitulo2 color="#007861">
              DEFEITO <br /> INFORMADO:
            </Textos.Subtitulo2>
          </Flex>
          <Campo top="45px" left="388px" w="275px"></Campo>
          <Flex position="absolute" paddingLeft="155px" paddingTop="15px">
            <Textos.Subtitulo2>Instalação</Textos.Subtitulo2>
          </Flex>
          <Flex
            h="0px"
            marginBottom="0px"
            marginTop="2px"
            textAlign="right"
            marginLeft="454px"
          >
            <Textos.Subtitulo2 color="#007861">
              TIPO DE <br /> EQUIPAMENTO:
            </Textos.Subtitulo2>
            <Textos.Subtitulo2 color="brand.laranja">*</Textos.Subtitulo2>
          </Flex>
          <Campo top="45px" left="815px" w="275px"></Campo>
          <Flex position="absolute" paddingLeft="580px" paddingTop="15px">
            <Textos.Subtitulo2>Gerador</Textos.Subtitulo2>
          </Flex>
          <Flex
            h="0px"
            marginBottom="0px"
            marginTop="12px"
            textAlign="right"
            marginLeft="900px"
          >
            <Textos.Subtitulo2 color="#007861">MARCA:</Textos.Subtitulo2>
            <Textos.Subtitulo2 color="brand.laranja">*</Textos.Subtitulo2>
          </Flex>
          <Campo top="45px" left="1165px" w="180px"></Campo>
          <Flex
            position="absolute"
            paddingLeft="985px"
            paddingTop="15px"
            h="0px"
          >
            <Textos.Subtitulo2>MWM</Textos.Subtitulo2>
          </Flex>
          <Flex
            h="0px"
            marginBottom="0px"
            marginTop="0px"
            textAlign="right"
            marginLeft="1195px"
          >
            <Textos.Subtitulo2 color="#007861">MODELO:</Textos.Subtitulo2>
            <Textos.Subtitulo2 color="brand.laranja">*</Textos.Subtitulo2>
          </Flex>
          <Campo top="45px" left="1470px" w="180px"></Campo>
          <Flex
            position="absolute"
            paddingLeft="1285px"
            paddingTop="15px"
            h="0px"
          >
            <Textos.Subtitulo2>40 KVA</Textos.Subtitulo2>
          </Flex>
          <Flex
            position="absolute"
            paddingLeft="90px"
            paddingTop="30px"
            h="0px"
            marginBottom="0px"
            marginTop="32px"
            textAlign="right"
          >
            <Textos.Subtitulo2 color="#007861">PEÇA:</Textos.Subtitulo2>
          </Flex>
          <Campo top="90px" left="612px" w="725px"></Campo>
          <Flex position="absolute" paddingLeft="155px" paddingTop="60px">
            <Textos.Subtitulo2>Filtro de Ar</Textos.Subtitulo2>
          </Flex>
          <Flex
            position="absolute"
            paddingLeft="915px"
            paddingTop="30px"
            h="0px"
            marginBottom="0px"
            marginTop="32px"
            textAlign="right"
          >
            <Textos.Subtitulo2 color="#007861">QUANTIDADE:</Textos.Subtitulo2>
            <Textos.Subtitulo2 color="brand.laranja">*</Textos.Subtitulo2>
          </Flex>
          <Campo top="90px" left="1165px" w="70px"></Campo>
          <Flex position="absolute" paddingLeft="1048px" paddingTop="60px">
            <Textos.Subtitulo2>01</Textos.Subtitulo2>
          </Flex>
          <Flex
            position="absolute"
            paddingLeft="1150px"
            paddingTop="30px"
            h="0px"
            marginBottom="0px"
            marginTop="32px"
            textAlign="right"
          >
            <Textos.Subtitulo2 color="#007861">
              VALOR DA PEÇA:
            </Textos.Subtitulo2>
            <Textos.Subtitulo2 color="brand.laranja">*</Textos.Subtitulo2>
          </Flex>
          <Campo top="90px" left="1470px" w="180px"></Campo>
          <Flex position="absolute" paddingLeft="1285px" paddingTop="60px">
            <Textos.Subtitulo2>R$ 2.000,00</Textos.Subtitulo2>
          </Flex>
          <Flex
            position="absolute"
            paddingLeft="48px"
            paddingTop="17px"
            h="0px"
            marginBottom="0px"
            marginTop="75px"
            textAlign="right"
          >
            <Textos.Subtitulo2 color="#007861">
              VALOR MÃO- <br /> -DE-OBRA:
            </Textos.Subtitulo2>
            <Textos.Subtitulo2 color="brand.laranja">*</Textos.Subtitulo2>
          </Flex>
          <Campo top="135px" left="388px" w="275px"></Campo>
          <Flex position="absolute" paddingLeft="155px" paddingTop="105px">
            <Textos.Subtitulo2>R$ 2.000,00</Textos.Subtitulo2>
          </Flex>
          <Flex
            position="absolute"
            paddingLeft="458px"
            paddingTop="92px"
            h="0px"
            marginBottom="0px"
            marginTop="2px"
            textAlign="right"
          >
            <Textos.Subtitulo2 color="#007861">
              DATA DE VISITA <br /> PREVISTA:
            </Textos.Subtitulo2>
            <Textos.Subtitulo2 color="brand.laranja">*</Textos.Subtitulo2>
          </Flex>
          <Input.Campo
            placeholder="dd/mm/aa"
            top="82px"
            left="570px"
            w="275px"
          ></Input.Campo>
          <Flex position="absolute" paddingLeft="580px" paddingTop="105px">
            <Textos.Subtitulo2></Textos.Subtitulo2>
          </Flex>
          <Flex
            position="absolute"
            paddingLeft="1150px"
            paddingTop="65px"
            h="0px"
            marginBottom="0px"
            marginTop="28px"
            textAlign="right"
          >
            <Textos.Subtitulo2 fontWeight="bold" color="#007861">
              VALOR TOTAL DO <br /> ORÇAMENTO*:
            </Textos.Subtitulo2>
          </Flex>
          <Flex
            position="absolute"
            top="117px"
            right="135px"
            borderStyle="solid"
            borderColor="brand.laranja"
            borderWidth="3px"
            borderRadius="50px"
            backgroundColor="brand.branco"
            h="36px"
            w="180px"
          ></Flex>
          <Flex>
            <Textos.Subtitulo2
              position="absolute"
              color="brand.laranja"
              fontWeight="bold"
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              paddingLeft="1290px"
              paddingTop="88px"
            >
              R$ 2.600,00
            </Textos.Subtitulo2>
          </Flex>
          <Flex
            cursor="pointer"
            color="brand.laranja"
            paddingLeft="1340px"
            paddingTop="120px"
            alignItems="baseline"
          >
            <Icon boxSize="28px" as={CiEdit}></Icon>
            <Icon paddingLeft="10px" boxSize="34px" as={RiSave3Fill}></Icon>
            <Icon
              onClick={() => navigate('/tela-inicial')}
              paddingLeft="10px"
              boxSize="34px"
              as={IoArrowBack}
            ></Icon>
          </Flex>
          <Flex marginTop="-12px" paddingLeft="1110px">
            <Botao.BordaCinza fontSize="16px">
              GERAR O.S. DE ORÇAMENTO APROVADO
            </Botao.BordaCinza>
          </Flex>
          <Flex marginTop="-35px" fontSize="10px" h="51px" w="70%">
            <span>
              Os dados serão utilizados para fins de cadastro da empresa CMA -
              Companhia de Manutenção Avançada. Segundo Lei Geral de Proteção de
              Dados Pessoais (LGPDP): <br /> BRASÍLIA, Lei nº 13.709, 14 de
              agosto de 2018, Diário Oficial da União: Seção 1, Brasília, DF,
              Página 59, 197º da Independencia e 130º da República, 15 de agosto
              de 2018.
            </span>
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
        <Botao.Sublinhado onClick={() => navigate('/tela-inicial')}>
          MENU PRINCIPAL
        </Botao.Sublinhado>
      </Flex>
    </Flex>
  )
}
