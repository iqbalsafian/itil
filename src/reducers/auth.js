import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  loggedInUser: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      break;
    default:
      return state
  }
}
