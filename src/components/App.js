import React, { Component } from 'react';
import '../styles/App.css';
import Shop from './Shop';

//TODO: Customer authentication using Redux
//TODO: Create visitor if visitor_id does not exist in Redux store
class App extends Component {
  render() {
    return <Shop />;
  };
}

export default App;
