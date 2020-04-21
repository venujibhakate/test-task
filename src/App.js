import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Switch } from  'react-router-dom';
import HomePage from './component/homePage'
import Weather from './component/Weather'
class App extends Component {
  render() {
    return (
      <Router>
      <div className='container my-3'>
        <Switch>
        <Route path='/Weather' component={Weather}/>
          <Route path='/'>
        <HomePage/>
        </Route>
      
      </Switch>
      </div>
      </Router>
    )
  }
}
export default App;
