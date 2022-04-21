import React, {useState, useEffect} from 'react'

import { Typography,  CssBaseline,  Container, Input, TextField, Grid, } from '@material-ui/core'
const initialValues = {
    startingPoint :'',
    destinationPoint: '',
}



export default function Main() {

    const [values, setValues] = useState(initialValues);

  return (
    <>
        <main>
            <div>
                <Container maxWidth="sm" gutterBottom>
                <Typography variant="h2" align="center" gutterBottom>
                         Hello, and Welcome to MAPS
                         <Typography paragraph>
                            an affordable transportation app
                         </Typography>
                    </Typography>
                </Container>
                
                <CssBaseline/>
                <Container maxWidth='md' className='menu'>
                    <form>
                        
                    <Grid container align="center">
                        <Grid item xs >
                            <TextField variant="outlined" label="Starting Point" value={values.startingPoint}/>
                        </Grid>
                        <Grid item xs>
                            <TextField variant="outlined" label="Destination Point" value={values.destinationPoint}/>
                        </Grid>
                    </Grid>
                    </form>
                </Container>
            </div>
        </main>
    </>
  )
}
