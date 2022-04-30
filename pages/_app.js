import '../styles/global.css'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Component {...pageProps} />
    </React.Fragment>
  );
}