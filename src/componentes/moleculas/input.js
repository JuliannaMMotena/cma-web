import { useState } from 'react'
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Button
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon, EmailIcon } from '@chakra-ui/icons'

export const Input = (props) => (
  <ChakraInput backgroundColor="brand.cinza" {...props} />
)

Input.Senha = (props) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <InputGroup
      paddingLeft={['10px', '264px']}
      size="md"
      paddingRight={['10px', '0px']}
    >
      <Input
        w={['290px', '370px']}
        h="48px"
        borderRadius="50px"
        mt="10px"
        backgroundColor="brand.cinza"
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Digite sua senha"
      />
      <InputRightElement
        paddingRight={['0px', '290px']}
        mt="15px"
        width="4.5rem"
      >
        <Button
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          h="1.75rem"
          size="sm"
          onClick={handleClick}
        >
          {show ? (
            <ViewOffIcon boxSize="18px" color="brand.laranja" />
          ) : (
            <ViewIcon boxSize="18px" color="brand.laranja" />
          )}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

Input.Email = () => {
  return (
    <InputGroup paddingLeft={['10px', '264px']} mt="20px">
      <InputRightElement
        mt="5px"
        paddingRight={['0px', '290px']}
        pointerEvents="none"
      >
        <EmailIcon
          marginRight={['33px', '0px']}
          boxSize="17px"
          color="brand.laranja"
        />
      </InputRightElement>
      <Input
        w={['290px', '370px']}
        h="48px"
        borderRadius="50px"
        type="email"
        placeholder="Digite seu e-mail"
      />
    </InputGroup>
  )
}

Input.Senha.displayName = 'InputSenha'
Input.Email.displayName = 'InputEmail'
