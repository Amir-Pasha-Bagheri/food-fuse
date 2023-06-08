import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Yekan',
    },
    subtitle1: {
      fontSize: 15,
    },
    subtitle2: {
      fontSize: 13,
      color: '#B5B6B7',
    },
    h6: {
      fontWeight: 'bolder',
      fontSize: 18,
      color: '#475069',
    },
  },
  palette: {
    success: {
      main: '#7DCA81',
    },
    secondary: {
      main: '#878C95',
      light: '#B5B6B7',
      dark: '#475069',
    },
    info: {
      main: '#FFF',
    },
  },
  breakpoints: {
    values: {
      xs: 0, // Default MUI value
      sm: 480,
      md: 900, // Default MUI value
      lg: 1200, // Default MUI value
      xl: 1536, // Default MUI value
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'large',
        sx: {
          fontSize: 15,
          paddingX: '0px',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        dir: 'rtl',
      },
    },
    MuiFormControlLabel: {
      defaultProps: {
        dir: 'rtl',
      },
    },
  },
})

export default theme
