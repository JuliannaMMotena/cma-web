import { ChakraProvider } from '@chakra-ui/react'
import { tema } from 'styles'
import { RouterProvider } from 'react-router-dom'
import { roteador } from 'roteador'

function App() {
  return (
    <ChakraProvider theme={tema}>
      <RouterProvider router={roteador} />
    </ChakraProvider>
  )
}

export default App
