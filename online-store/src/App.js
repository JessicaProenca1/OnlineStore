import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Detalhes from './components/Detalhes';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/:id" component={Detalhes}/>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;