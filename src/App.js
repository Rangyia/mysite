// components
import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import Header from './components/nav/Header'

// styles
import './App.css';

export default function App() {
  return (
    <Grid className="container" container direction="column" alignItems="center">
      <Grid item className="header">
        <Header />
      </Grid>
      <Grid item className="content">
        <Typography variant="h1">Content</Typography>
        <Typography variant="h1">Content</Typography>
        <Typography variant="h1">Content</Typography>
        <Typography variant="h1">Content</Typography>
        <Typography variant="h1">Content</Typography>
        <Typography variant="h1">Content</Typography>
        <Typography variant="h1">Content</Typography>
        <Typography variant="h1">Content</Typography>
        <Typography variant="h1">Content</Typography>
        <Typography variant="h1">Content</Typography>
        <Typography variant="h1">Content</Typography>

      </Grid>
    </Grid>
  );
}
