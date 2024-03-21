import {
  TelaLogin,
  TelaEsqueceuSenha,
  TelaNovaSenha
} from '1.telasAntesDaAutenticacao'
import { TelaInicial, TelaCadastroLead } from '2.TelasAutenticadas'

export const Rotas = [
  { path: `/`, element: <TelaLogin /> },
  { path: `/esqueceu-senha`, element: <TelaEsqueceuSenha /> },
  { path: `/nova-senha`, element: <TelaNovaSenha /> },
  { path: `/tela-inicial`, element: <TelaInicial /> },
  { path: `/cadastro-lead`, element: <TelaCadastroLead /> }
]
