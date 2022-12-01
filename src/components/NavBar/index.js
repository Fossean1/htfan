import { useContext, useState } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { useTheme } from '@emotion/react';

import Logo from '../Logo';
import NavBarRoot from './NavBarRoot';
import NavLink from './NavLink'
import { hamburgerIconStyle, navLinkStyle } from './styles';
import { ModeContext } from '../../context';
import { navItems } from '../../data/constants';

const drawerWidth = 240;

export const NavBar = (props) => {
  const { window } = props;
  const colorMode = useContext(ModeContext)
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Logo sx={{ my: 2 }} />
      <Divider />
      <Box component='nav'>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton component={NavLink} to={item.href} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <NavBarRoot sx={{position: 'sticky', height: '64px'}}>
        <Container maxWidth='lg' sx={{height: 1}}>
          <Toolbar sx={{ justifyContent: 'space-between', columnGap: 3, height: 1}} disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon sx={hamburgerIconStyle(theme)}/>
            </IconButton>
            <Logo
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}
            />
            <Logo
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            />
            <Box component='nav' sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1}}>
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  component={NavLink}
                  to={item.href}
                  sx={navLinkStyle(theme)}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
            <IconButton onClick={colorMode.toggleColorMode} aria-label='switch color mode'>
              {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </NavBarRoot>
      <SwipeableDrawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onOpen={handleDrawerToggle}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            background: theme => theme.palette.background.navBar,
            backdropFilter: theme => theme.filters.background.blur,
          },
        }}
      >
        {drawer}
      </SwipeableDrawer>
    </>
  );
}

export default NavBar;
