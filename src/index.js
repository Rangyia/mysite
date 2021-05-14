// components
import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, Grid } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './components/nav/Header'
import grey from '@material-ui/core/colors/grey';

// views
import { MainView, AboutView, ProjectsView } from './components/views';

// styles
import './index.css'

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: grey[900]
      }
    },
    typography: {
      fontFamily: [
        'Montserrat',
        'Poppins',
        'Roboto',
      ].join(','),
    },
  })

  theme.typography.h1 = {
    fontSize: '4rem',
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem',
      fontWeight: '900',
    },
  }

  theme.typography.h2 = {
    fontFamily: 'Poppins',
    fontSize: '54px',
  }

  theme.typography.h3 = {
    fontFamily: 'Poppins',
    fontSize: '24px',
    fontWeight: '400',
    color: 'rgba(198,201,216,.75)',
    letterSpacing: '4px'
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid className="container" container direction="column" alignItems="center">
        <Grid item className="header">
          <Header />
        </Grid>
        <Grid item className="content">
          <MainView />
          <AboutView />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));