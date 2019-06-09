import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App.js'
import Confettis from './components/Confettis/Confettis'
import Comingsoon from './components/Comingsoon/Comingsoon'
import NotFound from './components/NotFound/NotFound.js'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/confettis" component={Confettis} />
            <Route exact path="/spacejs" component={Comingsoon} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router