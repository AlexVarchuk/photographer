import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact';
import Portfolio from './Portfolio';
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/sendMail' component={Contact}/>
    </Switch>
  </main>
)


export default Main;
