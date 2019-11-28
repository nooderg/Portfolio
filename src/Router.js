import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App.jsx'
import Confettis from './components/Confettis'
import NotFound from './components/NotFound'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/confettis" component={Confettis} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router