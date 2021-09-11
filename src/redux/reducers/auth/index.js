import { LOGIN, LOGOUT } from '../../types'

// **  Initial State
const initialState = {
  userData: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        userData: { ...action.payload }
      }

    case LOGOUT:
      return {
        userData: {}
      }

    default:
      return state
  }
}

export default authReducer
