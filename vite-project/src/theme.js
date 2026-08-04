import { teal, deepOrange, cyan, orange } from '@mui/material/colors'
import { extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  webCustom: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  }
})

export default theme