import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import AboutUs from './components/AboutUs'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Team from './components/Team'
import Customers from './components/Customers'


export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={AboutUs} />
      <Route path='/technologies' component={Technologies} />
      <Route path='/projects' component={Projects} />
      <Route path='/team' component={Team} />
      <Route path='/customers' component={Customers} />
    </Route>
  </div>
)
