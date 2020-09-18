import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Credits from './pages/Credits'

import OtherLogos from './pages/OtherLogos'

function App () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>

        <Route path='/other-logos'>
          <OtherLogos />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/credits'>
          <Credits />
        </Route>
        <Route path='*'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
