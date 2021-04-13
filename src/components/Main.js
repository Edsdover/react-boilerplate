import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import Profile from './Profile'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/home' component={Landing}/>
      <Route path='/profile' component={Profile}/>
    </Switch>
  </main>
)

export default Main
