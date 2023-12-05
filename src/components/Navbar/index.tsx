import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogContentText,
  DialogContent,
  DialogActions,
  DialogTitle
} from '@mui/material';
// import  from '@mui/icons-material/menu';
import { LightMode, DarkMode, Menu } from '@mui/icons-material';
//import { Switch } from '@mui/material';

import { useAppSelector, useAppDispatch } from '@/hooks/reduxHooks';
import { setThemeMode } from '@/redux/slices/settings.slice';
import { setAccessToken } from '@/redux/slices/user.slice';

export default function ButtonAppBar() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const themeMode = useAppSelector((state) => state.settings.themeMode);
  const handleChangeTheme = () => {
    dispatch(setThemeMode(themeMode === 'light' ? 'dark' : 'light'));
  };

  const handleLogout = () => {
    dispatch(setAccessToken(null));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Users App
          </Typography>
          <IconButton onClick={handleChangeTheme}>
            {themeMode === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
          <Button color="inherit" onClick={handleOpen}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="responsive-dialog-title">
          {'Cerrar sesión'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>¿Desea cerrar sesión?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="outlined" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleLogout} autoFocus>
            Sí
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
