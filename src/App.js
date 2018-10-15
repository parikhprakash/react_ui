import React, { Component } from 'react';
import Header from './components/Header'
import { CssBaseline } from '@material-ui/core';
import AppDrawer from './components/LeftDrawer'
class App extends Component {
  
  render(){
    return (<div>
      <CssBaseline/>
      <div><Header></Header>
      </div>
      <AppDrawer></AppDrawer>
    </div>);
  }
}

export default App;
