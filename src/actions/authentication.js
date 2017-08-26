import { SET_CURRENT_USER } from './types';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const backendURL = 'http://localhost:4000';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function userLoginRequest(userData) {
  return dispatch => {
    return axios.post(backendURL + '/api/login', userData)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('jwtToken', token);
        // setAuthorization(token);
        console.log(jwtDecode(token));
        dispatch(setCurrentUser(jwtDecode(token)));
        return {
          retStatus: true,
          errors: {}
        }
      })
      .catch(errors => {
        return {
          retStatus: true,
          errors: errors.response.data
        }
      })
  }
}
