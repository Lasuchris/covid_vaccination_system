import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { useSelector, useDispatch } from 'react-redux'
import { setId } from '../features/reducers/client'
import { useHistory } from 'react-router-dom'
import { setNationalId } from '../features/reducers/jab'
const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: "50%",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));
const Search = () => {
    const dispatch = useDispatch()
    const Clients = useSelector((state) => state.client.clients)
    //const id = useSelector((state) => state.client.id)
    const classes = useStyles()
    const [nin, setNin] = useState('')
    let history = useHistory()

    const handleSearch = () => {
        const client = Clients.find((client) => {
            return client.nin === nin.toUpperCase()
            
        })
        if (client) {
            dispatch(setId(client.id))
            dispatch(setNationalId(client.id))
            history.push('/records')
           
        } else {
            console.log('userser doesnot exist')
        }
        // setNin('')
    }
    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search using NIN"
                inputProps={{ 'aria-label': 'search using NIN' }}
                value={nin}
                onChange={(e) => { setNin(e.target.value) }}
            />
            <IconButton onClick={() => { handleSearch() }} className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
                color="primary"
                className={classes.iconButton}
                aria-label="directions"
                onClick={() => { setNin('') }}>
                <ClearIcon />
            </IconButton>
        </Paper>
    )
}
export default Search