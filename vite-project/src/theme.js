import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export default function getTheme(mode = 'light') {
  return createTheme({
    cssVariables: true,
    palette: {
      mode,
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
      ...(mode === 'light'
        ? {
            background: {
              default: '#fafafa',
              paper: '#fff',
            },
          }
        : {
            background: {
              default: '#121212',
              paper: '#1d1d1d',
            },
          }),
    },
  });
}