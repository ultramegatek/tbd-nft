import Image from 'next/image'

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import styles from './index.module.css'

const theme = createTheme({
  palette: {
    background: {
      default: "#1E4072"
    }
  }
});

export default function Dashboard() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div component="main" className={styles.root}>
        <AppBar className={styles.appBar}>
          <Grid container className={styles.menu} spacing={0}>
            <Grid item xs className={`${styles.menuItem} ${styles.rightBorderWhite}`}>
              <p>
                Placeholder Name
              </p>
            </Grid>
            <Grid item xs className={`${styles.menuItem} ${styles.rightBorderWhite}`}>
              <p>
                Search
              </p>
            </Grid>
            <Grid item xs className={`${styles.menuItem} ${styles.rightBorderWhite}`}>
              <p>
                Categories
              </p>
            </Grid>
            <Grid item xs className={`${styles.menuItem} ${styles.rightBorderWhite}`}>
              <p>
                History
              </p>
            </Grid>
            <Grid item xs className={styles.menuItem}>
              <p>
                Balance
              </p>
            </Grid>
          </Grid>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
