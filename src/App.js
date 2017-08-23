import React, { Component } from 'react';
import 'antd/dist/antd.css';
import LoginPage from './components/LoginPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }
}

export default App;
