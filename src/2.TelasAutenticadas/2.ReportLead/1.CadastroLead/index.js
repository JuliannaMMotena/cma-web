import { Flex, Image, Icon, Button } from '@chakra-ui/react'
import { Textos, Input, Botao, Footer } from 'componentes'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { CiEdit } from 'react-icons/ci'
import { RiSave3Fill } from 'react-icons/ri'
import { IoArrowBack } from 'react-icons/io5'
import { CgAddR } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

export const TelaCadastroLead = () => {
  const navigate = useNavigate()
  const [openEndereco, setOpenEndereco] = useState(false)
  const [openAdicionarEqto, setOpenAdicionarEqto] = useState(false)
  const [openAdicionarPeca, setOpenAdicionarPeca] = useState(false)

  const handleEndereco = () => {
    setOpenEndereco(!openEndereco)
  }

  const handleAdicionarEqto = () => {
    setOpenAdicionarEqto(!openAdicionarEqto)
  }

  const handleAdicionarPeca = () => {
    setOpenAdicionarPeca(!openAdicionarPeca)
  }

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      CNPJCPF: '',
      NOME: '',
      DATACONTATO: '',
      ENDEREÇO: '',
      NUMERO: '',
      COMPLEMENTO: '',
      CEP: '',
      BAIRRO: '',
      CIDADE: '',
      ESTADO: '',
      TELEFONE: '',
      CELULAR: '',
      EMAIL: '',
      DATAVISITAPREVISTA: '',
      VALORTOTAL: '',
      TIPODEEQUIPAMENTO: '',
      DEFEITO: '',
      MARCA: '',
      MODELO: '',
      PEÇA: '',
      QUANTIDADE: '',
      VALORPEÇA: '',
      TIPOCONSERTO: ''
    },
    validationSchema: Yup.object({
      CNPJCPF: Yup.number()
        .min(11, 'Dado deve ter ao menos 11 caracteres.')
        .required('Preenchimento obrigatório.'),
      NOME: Yup.string().required('Preenchimento obrigatório.'),
      DATACONTATO: Yup.date().required('Preenchimento obrigatório.'),
      ENDEREÇO: Yup.string()
        .min(5, 'Endereço deve ter ao menos 5 caracteres.')
        .required('Preenchimento obrigatório.'),
      NUMERO: Yup.number().required('Preenchimento obrigatório.'),
      COMPLEMENTO: Yup.string(),
      CEP: Yup.number().min(8, 'CEP deve ter ao menos 8 caracteres.'),
      BAIRRO: Yup.string().min(3, 'Bairro deve ter ao menos 3 caracteres.'),
      CIDADE: Yup.string()
        .min(3, 'Cidade deve ter ao menos 3 caracteres.')
        .required('Preenchimento obrigatório.'),
      ESTADO: Yup.string()
        .min(3, 'Estado deve ter ao menos 3 caracteres.')
        .required('Preenchimento obrigatório.'),
      TELEFONE: Yup.number(),
      CELULAR: Yup.number()
        .min(11, 'Inserir DDD + número do celular.')
        .required('Preenchimento obrigatório.'),
      EMAIL: Yup.string().email('E-mail inválido.'),
      DATAVISITAPREVISTA: Yup.date(),
      VALORTOTAL: Yup.number(),
      TIPODEEQUIPAMENTO: Yup.string().required('Preenchimento obrigatório.'),
      DEFEITO: Yup.string().required('Preenchimento obrigatório.'),
      MARCA: Yup.string().required('Preenchimento obrigatório.'),
      MODELO: Yup.string().required('Preenchimento obrigatório.'),
      PEÇA: Yup.string(),
      QUANTIDADE: Yup.number(),
      VALORPEÇA: Yup.number(),
      TIPOCONSERTO: Yup.string()
    }),
    onSubmit: (dados) => {}
  })

  return (
    <Flex flexDir="column">
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
      <Flex overflowY="auto" overflowX="hidden">
        <Flex
          flexDir="row"
          w="100vw"
          h="100vh"
          paddingLeft="0px"
          justifyContent="flex-start"
          alignItems="center"
          backgroundColor="brand.cinza"
        >
          <Flex paddingTop="0px" paddingBottom="0px" paddingLeft="200px">
            <Textos.titulo>Cadastro de Atendimento</Textos.titulo>
          </Flex>
          <Flex
            w="87vw"
            h="20px"
            backgroundColor="brand.principal"
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
            <Flex paddingLeft="100px" flexDir="column">
              <Flex
                paddingLeft="0px"
                alignItems="baseline"
                w="90vw"
                flexDir="row"
              >
                <Flex w="285px">
                  <Flex w="120px" color="brand.principal">
                    <label htmlFor="CNPJCPF" style={{ textAlign: 'right' }}>
                      CNPJ OU <br /> CPF:
                    </label>
                  </Flex>
                  <Flex color="brand.laranja">
                    <label htmlFor="CNPJCPF" style={{ textAlign: 'right' }}>
                      *
                    </label>
                  </Flex>
                  <Input.Campo
                    focusBorderColor="brand.cinza"
                    marginLeft="0px"
                    id="CNPJCPF"
                    name="CNPJCPF"
                    value={values.CNPJCPF}
                    onChange={handleChange}
                    type="number"
                    error={errors.CNPJCPF}
                  />
                </Flex>
                <Flex marginLeft="35px" paddingTop="5px" w="750px">
                  <Flex w="220px" color="brand.principal">
                    <label htmlFor="NOME" style={{ textAlign: 'right' }}>
                      NOME COMPLETO OU <br /> RAZÃO SOCIAL:
                    </label>
                  </Flex>
                  <Flex marginTop="12px" color="brand.laranja">
                    <label htmlFor="NOME" style={{ textAlign: 'right' }}>
                      *
                    </label>
                  </Flex>
                  <Input.Campo
                    w="600px"
                    focusBorderColor="brand.cinza"
                    marginLeft="0px"
                    id="NOME"
                    name="NOME"
                    value={values.NOME}
                    onChange={handleChange}
                    type="text"
                    error={errors.NOME}
                  />
                </Flex>
                <Flex paddingRight="60px" paddingLeft="50px" w="350px">
                  <Flex w="120px" color="brand.principal">
                    <label htmlFor="DATACONTATO" style={{ textAlign: 'right' }}>
                      DATA DO CONTATO:
                    </label>
                  </Flex>
                  <Flex marginTop="12px" color="brand.laranja">
                    <label htmlFor="DATACONTATO" style={{ textAlign: 'right' }}>
                      *
                    </label>
                  </Flex>
                  <Input.Campo
                    focusBorderColor="brand.cinza"
                    marginLeft="10px"
                    id="DATACONTATO"
                    name="DATACONTATO"
                    value={values.DATACONTATO}
                    onChange={handleChange}
                    type="date"
                    error={errors.DATACONTATO}
                  />
                </Flex>
              </Flex>
              <Flex
                paddingTop="5px"
                paddingLeft="0px"
                alignItems="baseline"
                w="80vw"
                flexDir="row"
              >
                <Flex paddingLeft="17px">
                  <Flex color="brand.principal">
                    <label htmlFor="ENDEREÇO" style={{ textAlign: 'right' }}>
                      ENDEREÇO <br /> COBRANÇA:
                    </label>
                  </Flex>
                  <Flex color="brand.laranja">
                    <label htmlFor="ENDEREÇO" style={{ textAlign: 'right' }}>
                      *
                    </label>
                  </Flex>
                  <Input.Campo
                    focusBorderColor="brand.cinza"
                    w="630px"
                    marginLeft="10px"
                    id="ENDEREÇO"
                    name="ENDEREÇO"
                    value={values.ENDEREÇO}
                    onChange={handleChange}
                    type="text"
                    error={errors.ENDEREÇO}
                  />
                </Flex>
                <Flex>
                  <Flex paddingLeft="50px" w="100px" color="brand.principal">
                    <label htmlFor="NUMERO" style={{ textAlign: 'right' }}>
                      NÚMERO:
                    </label>
                  </Flex>
                  <Flex marginLeft="10px" color="brand.laranja">
                    <label htmlFor="NUMERO" style={{ textAlign: 'right' }}>
                      *
                    </label>
                  </Flex>
                  <Input.Campo
                    focusBorderColor="brand.cinza"
                    w="120px"
                    marginLeft="10px"
                    id="NUMERO"
                    name="NUMERO"
                    value={values.NUMERO}
                    onChange={handleChange}
                    type="number"
                    error={errors.NUMERO}
                  />
                </Flex>
                <Flex paddingLeft="50px">
                  <Flex w="120px" color="brand.principal">
                    <label htmlFor="COMPLEMENTO" style={{ textAlign: 'right' }}>
                      COMPLEMENTO:
                    </label>
                  </Flex>

                  <Input.Campo
                    focusBorderColor="brand.cinza"
                    w="225px"
                    marginLeft="20px"
                    right="25px"
                    id="COMPLEMENTO"
                    name="COMPLEMENTO"
                    value={values.COMPLEMENTO}
                    onChange={handleChange}
                    type="text"
                    placeholder="BLOCO/CASA/ANDAR"
                    error={errors.COMPLEMENTO}
                  />
                </Flex>
              </Flex>
              <Flex
                paddingTop="5px"
                alignItems="baseline"
                w="80vw"
                flexDir="row"
              >
                <Flex paddingLeft="65px">
                  <Flex color="brand.principal">
                    <label htmlFor="CEP" style={{ textAlign: 'right' }}>
                      CEP:
                    </label>
                  </Flex>
                  <Input.Campo
                    focusBorderColor="brand.cinza"
                    w="130px"
                    marginLeft="15px"
                    id="CEP"
                    name="CEP"
                    value={values.CEP}
                    onChange={handleChange}
                    type="number"
                    placeholder="00.000-000"
                    error={errors.CEP}
                  />
                </Flex>
                <Flex marginLeft="45px">
                  <Flex color="brand.principal">
                    <label htmlFor="BAIRRO" style={{ textAlign: 'right' }}>
                      BAIRRO:
                    </label>
                  </Flex>
                  <Input.Campo
                    focusBorderColor="brand.cinza"
                    w="360px"
                    marginLeft="10px"
                    id="BAIRRO"
                    name="BAIRRO"
                    value={values.BAIRRO}
                    onChange={handleChange}
                    type="text"
                    error={errors.BAIRRO}
                  />
                </Flex>
                <Flex marginLeft="45px">
                  <Flex color="brand.principal">
                    <label htmlFor="CIDADE" style={{ textAlign: 'right' }}>
                      CIDADE:
                    </label>
                  </Flex>
                  <Flex color="brand.laranja">
                    <label htmlFor="CIDADE" style={{ textAlign: 'right' }}>
                      *
                    </label>
                  </Flex>
                  <Input.Campo
                    focusBorderColor="brand.cinza"
                    w="360px"
                    marginLeft="10px"
                    id="CIDADE"
                    name="CIDADE"
                    value={values.CIDADE}
                    onChange={handleChange}
                    type="text"
                    error={errors.CIDADE}
                  />
                </Flex>
                <Flex marginLeft="45px">
                  <Flex color="brand.principal">
                    <label htmlFor="ESTADO" style={{ textAlign: 'right' }}>
                      ESTADO:
                    </label>
                  </Flex>
                  <Flex color="brand.laranja">
                    <label htmlFor="ESTADO" style={{ textAlign: 'right' }}>
                      *
                    </label>
                  </Flex>
                  <Input.Campo
                    focusBorderColor="brand.cinza"
                    w="80px"
                    marginLeft="10px"
                    id="ESTADO"
                    name="ESTADO"
                    value={values.ESTADO}
                    onChange={handleChange}
                    type="text"
                    error={errors.ESTADO}
                  />
                </Flex>
              </Flex>
              <Flex
                paddingTop="10px"
                alignItems="baseline"
                w="80vw"
                flexDir="row"
              >
                <Flex paddingLeft="30px">
                  <Flex color="brand.principal">
                    <label htmlFor="TELEFONE" style={{ textAlign: 'right' }}>
                      TELEFONE:
                    </label>
                  </Flex>
                  <Input.Campo
                    focusBorderColor="brand.cinza"
                    w="200px"
                    marginLeft="10px"
                    id="TELEFONE"
                    name="TELEFONE"
                    value={values.TELEFONE}
                    onChange={handleChange}
                    type="number"
                    placeholder="(DDD) 9999-9999"
                    error={errors.TELEFONE}
                  />
                </Flex>
                <Flex marginLeft="45px">
                  <Flex color="brand.principal">
                    <label htmlFor="CELULAR" style={{ textAlign: 'right' }}>
                      CELULAR:
                    </label>
                  </Flex>
                  <Flex color="brand.laranja">
                    <label htmlFor="CELULAR" style={{ textAlign: 'right' }}>
                      *
                    </label>
                  </Flex>
                  <Input.Campo
                    focusBorderColor="brand.cinza"
                    w="200px"
                    marginLeft="10px"
                    id="CELULAR"
                    name="CELULAR"
                    value={values.CELULAR}
                    onChange={handleChange}
                    type="number"
                    placeholder="(DDD) 99999-9999"
                    error={errors.CELULAR}
                  />
                </Flex>
                <Flex marginLeft="45px">
                  <Flex w="50px" color="brand.principal">
                    <label htmlFor="EMAIL" style={{ textAlign: 'right' }}>
                      E-MAIL:
                    </label>
                  </Flex>
                  <Flex color="brand.laranja">
                    <label htmlFor="EMAIL" style={{ textAlign: 'right' }}>
                      *
                    </label>
                  </Flex>
                  <Input.Campo
                    focusBorderColor="brand.cinza"
                    w="630px"
                    marginLeft="10px"
                    id="EMAIL"
                    name="EMAIL"
                    value={values.EMAIL}
                    onChange={handleChange}
                    type="text"
                    error={errors.EMAIL}
                  />
                </Flex>
              </Flex>
              <Flex
                display="flex"
                justifyContent="flex-end"
                alignItems="baseline"
                w="80vw"
                paddingTop="10px"
              >
                <Flex>
                  <input type="checkbox" />
                </Flex>
                <Flex paddingLeft="5px">
                  <Textos.Subtitulo2 color="brand.principal">
                    MESMO ENDEREÇO DE ENTREGA
                  </Textos.Subtitulo2>
                </Flex>
                <Flex paddingLeft="60px">
                  <input onChange={handleEndereco} type="checkbox" />
                </Flex>
                <Flex paddingLeft="5px">
                  <Textos.Subtitulo2 color="brand.principal">
                    CADASTRAR ENDEREÇO DE ENTREGA
                  </Textos.Subtitulo2>
                </Flex>
              </Flex>
              {openEndereco && (
                <Flex flexDir="column">
                  <Flex
                    w="87vw"
                    h="1px"
                    backgroundColor="brand.principal"
                    position="absolute"
                    top="242px"
                    left="95px"
                    borderRadius="16px"
                  />
                  <Flex
                    paddingTop="25px"
                    paddingLeft="0px"
                    alignItems="baseline"
                    w="80vw"
                    flexDir="row"
                  >
                    <Flex paddingLeft="17px">
                      <Flex color="brand.principal">
                        <label
                          htmlFor="ENDEREÇO"
                          style={{ textAlign: 'right' }}
                        >
                          ENDEREÇO <br /> COBRANÇA:
                        </label>
                      </Flex>
                      <Flex color="brand.laranja">
                        <label
                          htmlFor="ENDEREÇO"
                          style={{ textAlign: 'right' }}
                        >
                          *
                        </label>
                      </Flex>
                      <Input.Campo
                        focusBorderColor="brand.cinza"
                        w="630px"
                        marginLeft="10px"
                        id="ENDEREÇO"
                        name="ENDEREÇO"
                        value={values.ENDEREÇO}
                        onChange={handleChange}
                        type="text"
                        error={errors.ENDEREÇO}
                      />
                    </Flex>
                    <Flex>
                      <Flex
                        paddingLeft="50px"
                        w="100px"
                        color="brand.principal"
                      >
                        <label htmlFor="NUMERO" style={{ textAlign: 'right' }}>
                          NÚMERO:
                        </label>
                      </Flex>
                      <Flex marginLeft="10px" color="brand.laranja">
                        <label htmlFor="NUMERO" style={{ textAlign: 'right' }}>
                          *
                        </label>
                      </Flex>
                      <Input.Campo
                        focusBorderColor="brand.cinza"
                        w="120px"
                        marginLeft="10px"
                        id="NUMERO"
                        name="NUMERO"
                        value={values.NUMERO}
                        onChange={handleChange}
                        type="number"
                        error={errors.NUMERO}
                      />
                    </Flex>
                    <Flex paddingLeft="50px">
                      <Flex w="120px" color="brand.principal">
                        <label
                          htmlFor="COMPLEMENTO"
                          style={{ textAlign: 'right' }}
                        >
                          COMPLEMENTO:
                        </label>
                      </Flex>

                      <Input.Campo
                        focusBorderColor="brand.cinza"
                        w="220px"
                        marginLeft="20px"
                        right="25px"
                        id="COMPLEMENTO"
                        name="COMPLEMENTO"
                        value={values.COMPLEMENTO}
                        onChange={handleChange}
                        type="text"
                        error={errors.COMPLEMENTO}
                      />
                    </Flex>
                  </Flex>
                  <Flex
                    paddingTop="5px"
                    alignItems="baseline"
                    w="80vw"
                    flexDir="row"
                  >
                    <Flex paddingLeft="65px">
                      <Flex color="brand.principal">
                        <label htmlFor="CEP" style={{ textAlign: 'right' }}>
                          CEP:
                        </label>
                      </Flex>
                      <Input.Campo
                        focusBorderColor="brand.cinza"
                        w="130px"
                        marginLeft="15px"
                        id="CEP"
                        name="CEP"
                        value={values.CEP}
                        onChange={handleChange}
                        type="number"
                        error={errors.CEP}
                      />
                    </Flex>
                    <Flex marginLeft="45px">
                      <Flex color="brand.principal">
                        <label htmlFor="BAIRRO" style={{ textAlign: 'right' }}>
                          BAIRRO:
                        </label>
                      </Flex>
                      <Input.Campo
                        focusBorderColor="brand.cinza"
                        w="360px"
                        marginLeft="10px"
                        id="BAIRRO"
                        name="BAIRRO"
                        value={values.BAIRRO}
                        onChange={handleChange}
                        type="text"
                        error={errors.BAIRRO}
                      />
                    </Flex>
                    <Flex marginLeft="45px">
                      <Flex color="brand.principal">
                        <label htmlFor="CIDADE" style={{ textAlign: 'right' }}>
                          CIDADE:
                        </label>
                      </Flex>
                      <Flex color="brand.laranja">
                        <label htmlFor="CIDADE" style={{ textAlign: 'right' }}>
                          *
                        </label>
                      </Flex>
                      <Input.Campo
                        focusBorderColor="brand.cinza"
                        w="360px"
                        marginLeft="10px"
                        id="CIDADE"
                        name="CIDADE"
                        value={values.CIDADE}
                        onChange={handleChange}
                        type="text"
                        error={errors.CIDADE}
                      />
                    </Flex>
                    <Flex marginLeft="45px">
                      <Flex color="brand.principal">
                        <label htmlFor="ESTADO" style={{ textAlign: 'right' }}>
                          ESTADO:
                        </label>
                      </Flex>
                      <Flex color="brand.laranja">
                        <label htmlFor="ESTADO" style={{ textAlign: 'right' }}>
                          *
                        </label>
                      </Flex>
                      <Input.Campo
                        focusBorderColor="brand.cinza"
                        w="80px"
                        marginLeft="10px"
                        id="ESTADO"
                        name="ESTADO"
                        value={values.ESTADO}
                        onChange={handleChange}
                        type="text"
                        error={errors.ESTADO}
                      />
                    </Flex>
                  </Flex>
                </Flex>
              )}
            </Flex>
          </Flex>
          <Flex left="0px" top="200px">
            <Flex
              w="87vw"
              h="20px"
              backgroundColor="brand.principal"
              position="absolute"
              top={openEndereco ? '560px' : '470'}
              left="95px"
              borderRadius="16px"
            />
            <Flex
              left="0px"
              flexDir="column"
              w="100vw"
              h="0px"
              top={openEndereco ? '560px' : '470'}
              alignItems="center"
              position="absolute"
              fontSize="14px"
            >
              <Flex color="brand.branco">
                <span>INFORMAÇÕES DO EQUIPAMENTO</span>
              </Flex>
              {openAdicionarEqto && (
                <Flex flexDir="column">
                  <Flex
                    paddingTop="5px"
                    marginRight="0px"
                    display="flex"
                    alignItems="baseline"
                    w="90vw"
                    flexDir="row"
                  >
                    <Flex>
                      <Flex paddingLeft="55px" color="brand.principal">
                        <label
                          htmlFor="TIPODEEQUIPAMENTO"
                          style={{ textAlign: 'right' }}
                        >
                          TIPO DE <br /> EQUIPAMENTO:
                        </label>
                      </Flex>
                      <Flex color="brand.laranja">
                        <label
                          htmlFor="TIPODEEQUIPAMENTO"
                          style={{ textAlign: 'right' }}
                        >
                          *
                        </label>
                      </Flex>
                      <Input.Campo
                        focusBorderColor="brand.cinza"
                        w="235px"
                        marginLeft="5px"
                        id="TIPODEEQUIPAMENTO"
                        name="TIPODEEQUIPAMENTO"
                        value={values.TIPODEEQUIPAMENTO}
                        onChange={handleChange}
                        type="text"
                        error={errors.TIPODEEQUIPAMENTO}
                      />
                    </Flex>
                    <Flex marginLeft="40px">
                      <Flex color="brand.principal">
                        <label htmlFor="DEFEITO" style={{ textAlign: 'right' }}>
                          DEFEITO:
                        </label>
                      </Flex>
                      <Flex color="brand.laranja">
                        <label htmlFor="DEFEITO" style={{ textAlign: 'right' }}>
                          *
                        </label>
                      </Flex>
                      <Input.Campo
                        focusBorderColor="brand.cinza"
                        w="235px"
                        marginLeft="5px"
                        id="DEFEITO"
                        name="DEFEITO"
                        value={values.DEFEITO}
                        onChange={handleChange}
                        type="text"
                        error={errors.DEFEITO}
                      />
                    </Flex>
                    <Flex marginLeft="40px">
                      <Flex color="brand.principal">
                        <label htmlFor="MARCA" style={{ textAlign: 'right' }}>
                          MARCA:
                        </label>
                      </Flex>
                      <Flex color="brand.laranja">
                        <label htmlFor="MARCA" style={{ textAlign: 'right' }}>
                          *
                        </label>
                      </Flex>
                      <Input.Campo
                        focusBorderColor="brand.cinza"
                        w="235px"
                        marginLeft="5px"
                        id="MARCA"
                        name="MARCA"
                        value={values.MARCA}
                        onChange={handleChange}
                        type="text"
                        error={errors.MARCA}
                      />
                    </Flex>
                    <Flex marginLeft="40px">
                      <Flex color="brand.principal">
                        <label htmlFor="MODELO" style={{ textAlign: 'right' }}>
                          MODELO:
                        </label>
                      </Flex>
                      <Flex color="brand.laranja">
                        <label htmlFor="MODELO" style={{ textAlign: 'right' }}>
                          *
                        </label>
                      </Flex>
                      <Input.Campo
                        focusBorderColor="brand.cinza"
                        w="235px"
                        marginLeft="5px"
                        id="MODELO"
                        name="MODELO"
                        value={values.MODELO}
                        onChange={handleChange}
                        type="text"
                        error={errors.MODELO}
                      />
                    </Flex>
                  </Flex>
                  {openAdicionarPeca && (
                    <Flex flexDir="column">
                      <Flex
                        marginRight="0px"
                        display="flex"
                        alignItems="baseline"
                        w="90vw"
                        flexDir="row"
                        paddingTop="5px"
                      >
                        <Flex paddingLeft="110px">
                          <Flex paddingLeft="55px" color="brand.principal">
                            <label
                              htmlFor="PEÇA"
                              style={{ textAlign: 'right' }}
                            >
                              PEÇA:
                            </label>
                          </Flex>
                          <Input.Campo
                            focusBorderColor="brand.cinza"
                            w="235px"
                            marginLeft="5px"
                            id="PEÇA"
                            name="PEÇA"
                            value={values.PEÇA}
                            onChange={handleChange}
                            type="text"
                            error={errors.PEÇA}
                          />
                        </Flex>
                        <Flex marginLeft="40px">
                          <Flex color="brand.principal">
                            <label
                              htmlFor="QUANTIDADE"
                              style={{ textAlign: 'right' }}
                            >
                              QUANTIDADE:
                            </label>
                          </Flex>
                          <Input.Campo
                            focusBorderColor="brand.cinza"
                            w="75px"
                            marginLeft="5px"
                            id="QUANTIDADE"
                            name="QUANTIDADE"
                            value={values.QUANTIDADE}
                            onChange={handleChange}
                            type="number"
                            error={errors.QUANTIDADE}
                          />
                        </Flex>
                        <Flex marginLeft="40px">
                          <Flex color="brand.principal">
                            <label
                              htmlFor="VALORPEÇA"
                              style={{ textAlign: 'right' }}
                            >
                              VALOR DA PEÇA:
                            </label>
                          </Flex>

                          <Input.Campo
                            focusBorderColor="brand.cinza"
                            w="135px"
                            marginLeft="5px"
                            id="VALORPEÇA"
                            name="VALORPEÇA"
                            value={values.VALORPEÇA}
                            onChange={handleChange}
                            type="text"
                            error={errors.VALORPEÇA}
                          />
                        </Flex>
                        <Flex marginLeft="40px">
                          <Flex color="brand.principal">
                            <label
                              htmlFor="TIPOCONSERTO"
                              style={{ textAlign: 'right' }}
                            >
                              TIPO DE CONSERTO:
                            </label>
                          </Flex>
                          <Input.Campo
                            focusBorderColor="brand.cinza"
                            w="235px"
                            marginLeft="5px"
                            id="TIPOCONSERTO"
                            name="TIPOCONSERTO"
                            value={values.TIPOCONSERTO}
                            onChange={handleChange}
                            type="text"
                            error={errors.TIPOCONSERTO}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                  )}
                  <Flex
                    display="flex"
                    justifyContent="center"
                    marginRight="190px"
                    flexDir="row"
                    paddingTop={openAdicionarPeca ? '10px' : '5px'}
                  >
                    <CgAddR color="brand.laranja" />
                    <Flex marginLeft="15px">
                      <Button
                        fontWeight="regular"
                        h="16px"
                        w="196px"
                        fontSize="14px"
                        position="absolute"
                        color="brand.laranja"
                        backgroundColor="transparent"
                        onClick={handleAdicionarPeca}
                      >
                        ADICIONAR PEÇA
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              )}
              <Flex
                display="flex"
                justifyContent="center"
                marginRight="190px"
                flexDir="row"
                paddingTop="15px"
              >
                <CgAddR color="brand.laranja" />
                <Flex marginLeft="15px">
                  <Button
                    fontWeight="regular"
                    h="16px"
                    w="196px"
                    fontSize="14px"
                    position="absolute"
                    color="brand.laranja"
                    backgroundColor="transparent"
                    onClick={handleAdicionarEqto}
                  >
                    {openAdicionarEqto
                      ? 'ADICIONAR NOVO EQUIPAMENTO'
                      : 'ADICIONAR EQUIPAMENTO'}
                  </Button>
                </Flex>
              </Flex>
              <Flex
                w="87vw"
                h="1px"
                backgroundColor="brand.principal"
                position="absolute"
                top={
                  openAdicionarEqto && openAdicionarPeca
                    ? '140px'
                    : openAdicionarEqto && !openAdicionarPeca
                      ? '93px'
                      : '63px'
                }
                left="95px"
                borderRadius="16px"
              />
              <Flex flexDir="column">
                <Flex
                  paddingTop="35px"
                  display="flex"
                  justifyContent="center"
                  w="90vw"
                  flexDir="row"
                >
                  <Flex>
                    <Flex paddingLeft="55px" color="brand.principal">
                      <label
                        htmlFor="VALORMAODEOBRA"
                        style={{ textAlign: 'right' }}
                      >
                        VALOR MÃO- <br /> -DE-OBRA*:
                      </label>
                    </Flex>
                    <Flex color="brand.laranja">
                      <label
                        htmlFor="VALORMAODEOBRA"
                        style={{ textAlign: 'right' }}
                      >
                        *
                      </label>
                    </Flex>
                    <Input.Campo
                      focusBorderColor="brand.cinza"
                      fontWeight="extrabold"
                      w="135px"
                      marginLeft="5px"
                      id="VALORMAODEOBRA"
                      name="VALORMAODEOBRA"
                      value={values.VALORMAODEOBRA}
                      onChange={handleChange}
                      type="text"
                      error={errors.VALORMAODEOBRA}
                    />
                  </Flex>
                  <Flex marginLeft="40px">
                    <Flex color="brand.principal">
                      <label
                        htmlFor="DATAVISITA:"
                        style={{ textAlign: 'right' }}
                      >
                        DATA DE VISITA <br /> PREVISTA:
                      </label>
                    </Flex>
                    <Input.Campo
                      focusBorderColor="brand.cinza"
                      fontWeight="extrabold"
                      w="135px"
                      marginLeft="5px"
                      id="DATAVISITA"
                      name="DATAVISITA"
                      value={values.DATAVISITA}
                      onChange={handleChange}
                      type="date"
                      error={errors.DATAVISITA}
                    />
                  </Flex>
                  <Flex marginLeft="40px">
                    <Flex fontWeight="extrabold" color="brand.principal">
                      <label
                        htmlFor="VALORTOTAL:"
                        style={{ textAlign: 'right' }}
                      >
                        VALOR TOTAL DO <br /> ORÇAMENTO::
                      </label>
                    </Flex>
                    <Flex color="brand.laranja">
                      <label
                        htmlFor="VALORTOTAL"
                        style={{ textAlign: 'right' }}
                      >
                        *
                      </label>
                    </Flex>
                    <Input.Campo
                      focusBorderColor="brand.principal"
                      fontWeight="extrabold"
                      color="brand.laranja"
                      borderStyle="solid"
                      borderColor="brand.principal"
                      borderWidth="2px"
                      w="135px"
                      marginLeft="5px"
                      id="VALORTOTAL"
                      name="VALORTOTAL"
                      value={values.VALORTOTAL}
                      onChange={handleChange}
                      type="text"
                      error={errors.VALORTOTAL}
                    />
                  </Flex>
                  <Flex
                    marginLeft="40px"
                    color="brand.laranja"
                    alignItems="center"
                  >
                    <Icon cursor="pointer" boxSize="28px" as={CiEdit}></Icon>
                    <Icon
                      cursor="pointer"
                      onClick={handleSubmit}
                      paddingLeft="10px"
                      boxSize="34px"
                      as={RiSave3Fill}
                    ></Icon>
                    <Icon
                      cursor="pointer"
                      onClick={() => navigate('/tela-inicial')}
                      paddingLeft="10px"
                      boxSize="34px"
                      as={IoArrowBack}
                    ></Icon>
                  </Flex>
                </Flex>
              </Flex>
              <Flex w="87vw" flexDir="column" paddingBottom="150px">
                <Flex marginTop="5px" paddingLeft="1110px">
                  <Botao.BordaCinza fontSize="16px">
                    GERAR O.S. DE ORÇAMENTO APROVADO
                  </Botao.BordaCinza>
                </Flex>
                <Flex marginTop="-35px" fontSize="10px" h="51px" w="70%">
                  <span>
                    Os dados serão utilizados para fins de cadastro da empresa
                    CMA - Companhia de Manutenção Avançada. Segundo Lei Geral de
                    Proteção de Dados Pessoais (LGPDP): <br /> BRASÍLIA, Lei nº
                    13.709, 14 de agosto de 2018, Diário Oficial da União: Seção
                    1, Brasília, DF, Página 59, 197º da Independencia e 130º da
                    República, 15 de agosto de 2018.
                  </span>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
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
