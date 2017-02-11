import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import reducer from './reducers/index'

import routes from './routes'

const INIT_STATE = {}
const store = createStore(
  reducer,
  INIT_STATE,
  applyMiddleware(thunk)
)


// render(<Home />, document.getElementById('app'))

render((
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    {/* <MuiThemeProvider> */}
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>
), document.getElementById('app'))
