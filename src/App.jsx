import React from 'react'
import Topbar from './components/Topbar';
import Main from './components/Main';
import { Typography, AppBar, Card, CardActions, CardMedia, CssBaseline, Grid, Toolbar} from '@material-ui/core'


const App = ( ) => {
  return(
    <>
    <Topbar/>
    <Main/>
    </>
  ); 
}

export default App;