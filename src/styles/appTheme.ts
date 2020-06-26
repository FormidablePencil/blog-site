import { green, orange, deepPurple, indigo, purple } from '@material-ui/core/colors';
import { createMuiTheme, Theme } from '@material-ui/core';
import { deepPurple800 } from 'material-ui/styles/colors';

interface NewTheme { // didn't work in appling to Typography component
  typography: {
    fontNew: {
      fontFamily: string
      fontSize: number
    }
  }
}

declare module "@material-ui/core/styles/createTypography" {
  interface Typography {
    fontNew: TypographyStyle
    // fontFamily: 'Tajawal-Bold',
  }

  interface TypographyOptions {
    fontNew: TypographyStyleOptions;
  }
}

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[900],
      dark: indigo[900],
      light: deepPurple[600],
    },
    secondary: indigo,
  },
  typography: {
    body1: { fontFamily: 'Tajawal-Medium' },
    h1: { fontFamily: 'Tajawal-Bold' },
    h2: { fontFamily: 'Tajawal-Bold' },
    h3: { fontFamily: 'Tajawal-Bold' },
    h4: { fontFamily: 'Tajawal-Bold' },
    h5: { fontFamily: 'Tajawal-Bold' },
    h6: { fontFamily: 'Tajawal-Bold' },
    subtitle2: {
      fontFamily: 'Tajawal-Regular',
    },
    fontNew: {
      fontFamily: 'Tajawal-Regular',
      fontSize: 10,
    }
  },
});

export default appTheme