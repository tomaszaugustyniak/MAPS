import React, {useState, useEffect} from 'react'
import { Typography,  CssBaseline,  Container, Input, TextField, Grid, Paper, makeStyles } from '@material-ui/core'


const initialValues = {
    startingPoint :'',
    destinationPoint: '',
}

const useStyle = makeStyles(theme =>({
    root: {
        '& .MuiFormControl-root' : {
        width: '80%',
        margin:theme.spacing(1)
        }
    }
}))



export default function Main() {

    const [values, setValues] = useState(initialValues);
    const classes =  useStyle();

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
                <Paper>
                
                    <Container maxWidth='md' className='menu'>
                        <form className='classes.root'>
                            
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
                </Paper>
            </div>
        </main>
    </>
  )
}
