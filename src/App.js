import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import './index.css';

class App extends Component {
  reRender() {
    this.render()
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    console.log('auth', isAuthenticated);
    const authenticatedUserLinks = (
      <div>
        <MainPage />
      </div>
    )
    return (
      <div>
        { isAuthenticated ? authenticatedUserLinks : <LoginPage reRender={() => this.reRender} /> }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App);
