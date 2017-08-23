import React, { Component } from 'react';
import 'antd/dist/antd.css';
import LoginPage from './components/LoginPage'
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }
}

export default App;
