import React from 'react'
import Signin from './auth/Signin'
import SignUp from './auth/SignUp'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import DashBord from './components/DashBord'
import Layout from './components/Layout'
import Stats from './components/Stats'
import GiveJab from './components/GiveJab'
import Records from './components/Records'

const Routers = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/signin' exact component={Signin} />
                    <Route path='/signUp' exact component={SignUp} />
                    
                    <Layout>
                        
                        <Route path='/stats' exact component={Stats} />
                        <Route path='/dashbord' exact component={DashBord} />
                        <Route path='/giveJab' exact component={GiveJab} />
                        <Route path='/records' exact component={Records} />

                    </Layout>
                </Switch>
            </Router>
        </div>
    )
}

export default Routers
