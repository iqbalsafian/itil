import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import jwtDecode from 'jwt-decode';
import rootReducer from './rootReducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { setCurrentUser } from './actions/authentication';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.jwtToken) {
  // setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <App />
    </LocaleProvider>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
