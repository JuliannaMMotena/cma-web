import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'

export const tema = extendTheme({
  colors: {
    brand: colors
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Roboto',
        padding: 0,
        margin: 0,
        backgroundColor: colors.branco
      }
    }
  }
})
