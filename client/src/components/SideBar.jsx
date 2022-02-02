import React from 'react'
import {useHistory,useLocation} from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useDispatch,useSelector} from 'react-redux'
import { handleDrawerClose} from '../features/reducers/navigation'
import {menu} from '../utils/menu'


export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    active:{
        backgroundColor:'blue',
        color:'white'
    }
}))
const SideBar = () => {
    const classes = useStyles();
    const theme = useTheme()
    const dispatch = useDispatch()
    const location = useLocation()

    const history = useHistory()
    const open = useSelector((state)=>state.navigation.isOpen) 
    return (
        <>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={()=>{dispatch(handleDrawerClose())}}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
            
                <Divider />
                <List>
                    {
                        menu.map((item, key) => {
                            return (
                                <ListItem
                                    className={location.pathname === item.path? classes.active:null}
                                    button
                                    key={item.text}
                                    onClick={() => history.push(item.path)}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            )
                        })
                    }
                
                </List>
                <Divider />
            </Drawer>
            
        </>
    )
}

export default SideBar
