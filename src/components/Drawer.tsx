import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import { Star as StarIcon,Home as HomeIcon } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom'

function HeaderView() {
  const location = useLocation();
  if(location.pathname.includes("favourites")){
    return (<span>Favourites</span>)
  }
  return <span>Characters</span>
}

const drawerWidth = 200;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  background:'#17141f'
}));

export default function PersistentDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon color='secondary'/>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {HeaderView()}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
      PaperProps={{
        sx: {
          backgroundColor: '#17141f',
        }
      }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography>------SWAPI------</Typography>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon color='secondary'/>
          </IconButton>
        </DrawerHeader>
        <List>
          <NavLink to={"/"} key={"characters"} onClick={handleDrawerClose}  style={({ isActive }) =>isActive ? {color:"white",textDecoration:"underline"} : {color:"white",textDecoration:"none"}}>
            <ListItem >
              <ListItemIcon><HomeIcon color='secondary'/></ListItemIcon>
              <ListItemText primary={"Characters"} />
            </ListItem>
          </NavLink>
          <NavLink to={"/favourites"} key={"favourites"} onClick={handleDrawerClose} style={({ isActive }) =>isActive ? {color:"white",textDecoration:"underline"} : {color:"white",textDecoration:"none"}
            }>
            <ListItem >
              <ListItemIcon><StarIcon color='secondary'/></ListItemIcon>
              <ListItemText primary={"Favourites"} />
            </ListItem>
          </NavLink>
      </List>
     
      </Drawer>

    </Box>
  );
}