import { Users, Home } from 'react-feather'

export default [
  {
    id: 'inicio',
    title: 'Inicio',
    icon: <Home size={20} />,
    navLink: '/inicio'
  },
  {
    id: 'clientes',
    title: 'Clientes',
    icon: <Users size={20} />,
    navLink: '/clientes'
  },
  {
    id: 'asesores',
    title: 'Asesores',
    icon: <Users size={20} />,
    navLink: '/asesores'
  },
  {
    id: 'propiedades',
    title: 'Propiedades',
    icon: <Home size={20} />,
    navLink: '/propiedades'
  }
]
