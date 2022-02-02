import React from 'react'
import Search from './Search'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        direction: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))
const RegisterHealthWorker = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Search />
        </div>
    )
}

export default RegisterHealthWorker
