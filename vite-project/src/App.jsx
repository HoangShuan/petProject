import { Box, Container } from '@mui/material'
import ModeSelect from './components/ModeSelect'

function App() {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <ModeSelect />
      </Box>
    </Container>
  )
}

export default App
