import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import './App.css';
import OqueComprar from './components/OqueComprar';

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Switch> 
        <Route exact path="/" component={ Search } />       
        </Switch>
      </BrowserRouter>
      </>
    );
  }
}

export default App;