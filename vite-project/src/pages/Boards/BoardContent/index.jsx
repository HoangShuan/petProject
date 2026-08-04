import { Box } from '@mui/material'

function BoardContent () {
  return (
    <Box sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          height: (theme) => `calc(100vh - ${theme.webCustom.appBarHeight} - ${theme.webCustom.boardBarHeight})`,
          display: 'flex',
          alignItems: 'center',
        }}>

    </Box>
  )
}

export default BoardContent