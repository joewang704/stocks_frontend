import * as React from 'react'
import Landing from './Landing'
import Browse from './Browse'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="full-screen">
        <Header/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/browse" component={Browse}/>
        </Switch>
      </div>
    )
  }
}

export default App
