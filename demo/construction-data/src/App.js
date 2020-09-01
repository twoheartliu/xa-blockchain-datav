import React from 'react'
import Hash from './pages/Hash'
import DataV from './components/datav/index'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div id="app">
      {/* <DataV /> */}
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/hash/:project/:hash" component={Hash} />
            <Route path="/" exact component={DataV} />
            <Route path="*">
              <Redirect to={'/'} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
