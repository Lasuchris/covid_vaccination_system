import React, { useEffect,useState } from 'react'
import { Paper, makeStyles, Box } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import { handlePopUpOpen } from '../features/reducers/PopUp'
import PopUp from './PopUp'
import { setJabName } from '../features/reducers/jab'
import Pdf from "react-to-pdf";



const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        padding: theme.spacing(8)
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),

    },
    avator: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(3)
    },
    data: {
        display: 'flex',
        justifyContent: 'space-between',
        padding:'5px'
    },
    text: {
        textAlign: 'center'
    },
    vaccinationStatus:{

        marginTop: '15px',
        borderTop:'2px solid blue'
    }

}))

const ref = React.createRef();
const Records = () => {

    const classes = useStyles()
    
    const Clients = useSelector((state) => state.client.clients)
   // const jabs = useSelector((state)=>state.jab)
    const jabs = useSelector((state) => state.jab.jabs)
    let id = useSelector((state) => state.client.id)
    const dispatch = useDispatch()
    const [personJabs, setPersonJabs] = useState(jabs)



    
    
    useEffect(() =>{
        const filteredJabs = jabs.filter((jab) => jab.NationalId === id)
         setPersonJabs(filteredJabs)
    }, [jabs,id])

    const firstJabBtn = () =>{
       
        dispatch(setJabName('first'))
        dispatch(handlePopUpOpen())

    }
    const secondJabBtn = () => {
        dispatch(setJabName('second'))
        dispatch(handlePopUpOpen())
       
    }
    
    console.log(personJabs)
    return (
        <>
            <PopUp />
            <Paper
             ref={ref}
                className={classes.root}
                variant='outlined'>
                <Box className={classes.avator}>
                    <Avatar className={classes.large} />
                </Box>

                <Grid container
                    justifyContent="center"
                    alignItems="center">
                    <Grid item sm={8}>
                        <div className={classes.data}>
                            <Typography>NIN</Typography>
                            <Typography className={classes.text}>{Clients[id].nin}</Typography>
                        </div>
                        <div className={classes.data}>
                            <Typography>Name</Typography>
                            <Typography className={classes.text}>{Clients[id].personName}</Typography>
                        </div>
                        <div className={classes.data}>
                            <Typography>Age</Typography>
                            <Typography className={classes.text}>{Clients[id].age}</Typography>
                        </div>
                        <div className={classes.data}>
                            <Typography>Sex</Typography>
                            <Typography>{Clients[id].sex}</Typography>
                        </div>
                        <div className={classes.data}>
                            <Typography>Occupation</Typography>
                            <Typography>{Clients[id].occupation}</Typography>
                        </div>
                        <div className={classes.data}>
                            <Typography>Nationality</Typography>
                            <Typography>{Clients[id].nationality}</Typography>
                        </div>
                        <div className={classes.data}>
                            <Typography>District</Typography>
                            <Typography>{Clients[id].district}</Typography>
                        </div>
                        <div className={classes.data}>
                            <Typography>SubCounty</Typography>
                            <Typography>{Clients[id].subCounty}</Typography>
                        </div>
                        <div className={classes.data}>
                            <Typography>Parish </Typography>
                            <Typography>{Clients[id].parish}</Typography>
                        </div>
                        <div className={classes.data}>
                            <Typography>Village</Typography>
                            <Typography>{Clients[id].village}</Typography>
                        </div>

                       
                        <div className = {classes.vaccinationStatus}>
                            <Typography >Vaccination Status</Typography>
                            <div className={classes.data}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={personJabs.length >= 1}
                                        name="checkedA"
                                        disabled
                                        color="primary" />}
                                label="First Jab"
                            />
                                {personJabs.length === 0  && < Button
                                                variant="outlined"
                                                color="primary"
                                                onClick={() => { firstJabBtn() }}>
                                                Give Jab
                                            </Button>}
                                
                            </div>
                            <div className={classes.data}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={personJabs.length === 2}
                                        name="checkedA"
                                        disabled
                                        color="primary" />}
                                label="Second Jab"
                            />
                                {personJabs.length === 1 && <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => { secondJabBtn() }}>
                                    Give Jab
                                </Button>}  
                                {personJabs.length >= 2 && <Pdf targetRef={ref} filename="vaccination-card.pdf">
                                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                                </Pdf>}                              
                            </div>
                            
                        </div>                       

                    </Grid>

                </Grid>
            </Paper>
        </>
    )
}

export default Records
