import { TelaLogin, TelaEsqueceuSenha } from '1.telasAntesDaAutenticacao'

export const RotasAntesDaAutenticacao = [
  { path: `/`, element: <TelaLogin /> },
  { path: `/esqueceu-senha`, element: <TelaEsqueceuSenha /> }
]
