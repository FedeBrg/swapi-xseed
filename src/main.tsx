import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Characters from './pages/Characters'
import Favourites from './pages/Favourites'
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import PersistentDrawer from './components/Drawer'
import "@fontsource/urbanist";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Urbanist'
    ].join(','),
    
  },
  palette:{
    primary:{
      main:'#17141f',
      contrastText: '#fff',
    },
    secondary:{
      main:'#A2D1B1',
      light: '#A2D1B1',
      dark: '#A2D1B1',
      contrastText: '#fff',
    },

    text: {
      primary: "#ffffff"
    }
  }
});

const AppLayout = () => (
  <>
    <PersistentDrawer />
    <Outlet />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Characters />} />
      <Route path="/favourites" element={<Favourites />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

    
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
