import { useSelector } from 'react-redux'

const useAuth = () => {
  const { userData } = useSelector((state) => state.auth)

  const isAuth =
    Object.keys(userData).length !== 0 || !!localStorage.getItem('userData')

  const isAdmin = userData.tipoUsuario === 1

  return { isAuth, isAdmin }
}

export default useAuth
