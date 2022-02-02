import React,{useEffect} from 'react'
import Search from './Search'
import { makeStyles } from '@material-ui/core/styles';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
   
  }
}))
const SecondJab = () => {

  const [cookies] = useCookies('')
  let history = useHistory()
  useEffect(() => {
    if (cookies.token) {
      history.push('/')
    }

  }, [history, cookies.token])
  const classes = useStyles()
    return (
   
        <div className={classes.root}>
          <Search />  
        </div>
    )
}

export default SecondJab
