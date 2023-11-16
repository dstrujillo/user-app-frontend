import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ReactNode } from 'react';

interface ThemeConfigProps {
  children: ReactNode;
}

const ThemeConfig = ({ children }: ThemeConfigProps) => {
  const mode : 'light' | 'dark' = 'light';
  const theme = createTheme({
    palette: {
      primary: {
        main: '#614EFA',
        light: '#A294FD',
        dark: '#3327B3'
      },
      secondary: {
        main: '#FEB19A',
        light: '#FE6257',
        dark: '#B62B39'
      },
      background: {
        default: mode === 'light' ? '#F5F5F5' : '#212121'
      },
      mode: mode
    },
    typography: {
      fontFamily: 'Lexend, sans-serif'
    },
    components:{
      MuiButton:{
        styleOverrides: {
          root: {
            borderRadius: '500px'
          },
          sizeMedium: {
            height: 40
          }
        }
      },
      MuiOutlinedInput:{
        styleOverrides: {
          root: {
            borderRadius: '500px'
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
