import { LOGIN, LOGOUT } from '../../types'

// ** Handle User Login
export const handleLogin = ({ holdConnect, ...data }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN, payload: data })
    if (holdConnect) {
      localStorage.setItem('token', data.apiToken)
      localStorage.setItem('userData', JSON.stringify(data))
    }
  }
}

// ** Handle User Logout
export const handleLogout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT })

    localStorage.removeItem('token')
    localStorage.removeItem('userData')
  }
}
