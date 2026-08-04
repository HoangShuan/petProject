import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import App from './App.jsx'
import { CssVarsProvider } from '@mui/material/styles'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssVarsProvider theme={theme} colorSchemeSelector="class">
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </StrictMode>,
)
