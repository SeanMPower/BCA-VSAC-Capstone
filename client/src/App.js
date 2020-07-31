import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router'
import Header from './components/Header.js'
import Home from './components/Home.js'
import Vsac from './components/Vsac.js'
import Provider from './components/Provider.js'
import ErrorPage from './components/ErrorPage.js'
import Footer from './components/Footer.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    // this.state = {

    // }
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path ='/temporary-vsac' component={Vsac} />
          <Route path ='/temporary-provider' component={Provider} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
