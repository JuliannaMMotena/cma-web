import {
  TelaLogin,
  TelaEsqueceuSenha,
  TelaNovaSenha
} from '1.telasAntesDaAutenticacao'
import {
  TelaInicial,
  TelaCadastroLead,
  TelaBuscaLeadPorNome
} from '2.TelasAutenticadas'
import { TelaOrçamentoCliente } from '2.TelasAutenticadas/3.ReportCliente/OrcamentoCliente'

export const Rotas = [
  { path: `/`, element: <TelaLogin /> },
  { path: `/esqueceu-senha`, element: <TelaEsqueceuSenha /> },
  { path: `/nova-senha`, element: <TelaNovaSenha /> },
  { path: `/tela-inicial`, element: <TelaInicial /> },
  { path: `/cadastro-lead`, element: <TelaCadastroLead /> },
  { path: `/busca-lead`, element: <TelaBuscaLeadPorNome /> },
  { path: `/orçamento-cliente`, element: <TelaOrçamentoCliente /> }
]
