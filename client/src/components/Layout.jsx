import React,{useEffect} from 'react'
import clsx from 'clsx';
import Appbar from './Appbar'
import SideBar from './SideBar'
import { makeStyles } from '@material-ui/core/styles';
import { drawerWidth } from './SideBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box } from '@material-ui/core';
import { useSelector } from 'react-redux'
import LandingPage from './LandingPage';
import { useLocation,useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        minHeight: '85vh',
        display: 'flex',
        direction: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: theme.spacing(4),
    },
    display: theme.mixins.toolbar,
}));


const Layout = ({ children }) => {

    const token = useSelector((state)=>state.auth.token)
    let history = useHistory()
    useEffect(() => {
        if(!token){
            history.push('/signin')
        }
    })
    const location = useLocation()
    const classes = useStyles()
    const open = useSelector((state) => state.navigation.isOpen)
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Appbar />
            <SideBar />

            <Box my={8}
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >  
             { location.pathname === '/' && <LandingPage />}
             {children}
            </Box>
        </div>
    );
}

export default Layout