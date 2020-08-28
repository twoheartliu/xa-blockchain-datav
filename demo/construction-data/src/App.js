import React from 'react'
import Hash from './pages/Hash'
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div id="app">
      {/* <DataV /> */}
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/hash/:project/:hash" children={<Hash />} />
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
