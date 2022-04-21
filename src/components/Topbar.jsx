import React from 'react'
import "./Topbar.css"
import { Typography, AppBar, CssBaseline, Toolbar} from '@material-ui/core'

export default function Topbar() {
  return (
    <>
    <CssBaseline/>
    <AppBar position='relative'>
      <Toolbar className='top'>
        <Typography variant="h4">MAPS</Typography>
      </Toolbar>
    </AppBar>
  </>
  )
}
