import { Box } from '@mui/material'

function BoardBar() {
  return (
    <Box sx={{
          backgroundColor: 'primary.dark',
          width: '100%',
          height: (theme) => theme.webCustom.boardBarHeight,
          display: 'flex',
          alignItems: 'center',
        }}>
    </Box>
  )
}

export default BoardBar