import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Index from './index'
import Home from './containers/home'
import Encode from './components/encode'
import Decode from './components/decode'

const routes = (
  <Route path='/' component={Index}>
    <IndexRoute component={Encode}/>
    <Route path='/encode' component={Encode}/>
    <Route path='/decode' component={Decode}/>
  </Route>
)

export default routes
