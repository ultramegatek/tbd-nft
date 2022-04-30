import Image from 'next/image'

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import AccountIcon from '@mui/icons-material/PermIdentityOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import styles from './index.module.css'

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#fff"
    },
    background: {
      default: "#1E4072"
    }
  }
});

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    marginThreshold='0'
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#1E4072',
    borderRadius: 0,
    marginTop: theme.spacing(0.8),
    border: "1px solid #A9A9A9",
    borderTopWidth: "0px",
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: '5em',
        color: '#000',
      },
      '&:active': {
        backgroundColor: '#1E4072',
      },
    },
  },
}));

const CustomizedMenus = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (    
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        fullWidth="true"
        variant="text"
        disableElevation
        onClick={handleClick}
        startIcon={<KeyboardArrowDownIcon />}
        sx={{ height: '5em' }}
      >
        Placeholder Name
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <SettingsIcon />
        </MenuItem>
        <Divider sx={{ my: 0.5, borderColor: "#A9A9A9" }} />
        <MenuItem onClick={handleClose} disableRipple>
          <AccountIcon />
        </MenuItem>
        <Divider sx={{ my: 0.5, borderColor: "#A9A9A9" }} />
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
        </MenuItem>
      </StyledMenu>
    </div>
  );
}

export default function Dashboard() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div component="main" className={styles.root}>
        <AppBar className={styles.appBar}>
          <Grid container className={styles.menu} spacing={0}>
            <Grid item xs className={`${styles.menuItem} ${styles.rightBorderWhite}`}>
              <CustomizedMenus />
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
