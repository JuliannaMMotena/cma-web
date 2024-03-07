import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles'
import { TelaLogin } from '1.telasAntesDaAutenticacao'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TelaLogin />
    </ChakraProvider>
  )
}

export default App
