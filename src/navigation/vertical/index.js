import { Home, Users, Circle, Image, Settings } from 'react-feather'

export default [
  {
    id: 'inicio',
    title: 'Inicio',
    icon: <Home size={20} />,
    navLink: '/inicio'
  },
  {
    header: 'Administración'
  },
  {
    id: 'imagenes',
    title: 'Imagenes',
    meta: { restrict: true },
    icon: <Image size={20} />,
    navLink: '/imagenes'
  },
  {
    id: 'sliders',
    title: 'Sliders',
    meta: { restrict: true },
    icon: <Home size={20} />,
    children: [
      {
        id: 'Lista',
        title: 'Lista',
        icon: <Circle size={12} />,
        navLink: '/sliders'
      },
      {
        id: 'Agregar',
        title: 'Agregar',
        icon: <Circle size={12} />,
        navLink: '/crear-slider'
      }
    ]
  },
  {
    id: 'tiendas',
    title: 'Tiendas',
    meta: { restrict: true },
    icon: <Home size={20} />,
    children: [
      {
        id: 'Lista',
        title: 'Lista',
        icon: <Circle size={12} />,
        navLink: '/tiendas'
      },
      {
        id: 'Agregar',
        title: 'Agregar',
        icon: <Circle size={12} />,
        navLink: '/nueva-tienda'
      }
    ]
  },
  {
    id: 'usuarios',
    title: 'Usuarios',
    meta: { restrict: true },
    icon: <Users size={20} />,
    children: [
      {
        id: 'Lista',
        title: 'Lista',
        icon: <Circle size={12} />,
        navLink: '/usuarios'
      },
      {
        id: 'agregar',
        title: 'Agregar',
        icon: <Circle size={12} />,
        navLink: '/nuevo-usuario'
      }
    ]
  },
  /* {
    id: 'asesores',
    title: 'Asesores',
    meta: { restrict: true },
    icon: <Users size={20} />,
    children: [
      {
        id: 'Lista',
        title: 'Lista',
        icon: <Circle size={12} />,
        navLink: '/asesores'
      },
      {
        id: 'agregar',
        title: 'Agregar',
        icon: <Circle size={12} />,
        navLink: '/nuevo-asesor'
      }
    ]
  },
  {
    id: 'propiedades',
    title: 'Propiedades',
    meta: { restrict: true },
    icon: <Home size={20} />,
    children: [
      {
        id: 'Lista',
        title: 'Lista',
        icon: <Circle size={12} />,
        navLink: '/propiedades'
      },
      {
        id: 'Agregar',
        title: 'Agregar',
        icon: <Circle size={12} />,
        navLink: '/nueva-propiedad'
      }
    ]
  },
  {
    id: 'mis-propiedades',
    title: 'Mis Propiedades',
    icon: <Home size={20} />,
    navLink: '/mis-propiedades'
    // children: [
    //   {
    //     id: 'Lista',
    //     title: 'Lista',
    //     icon: <Circle size={12} />,
    //     navLink: '/mis-propiedades'
    //   }
    //   {
    //     id: 'Agregar',
    //     title: 'Agregar',
    //     icon: <Circle size={12} />,
    //     navLink: '/nueva-propiedad'
    //   }
    // ]
  },
  {
    id: 'categorias',
    title: 'Categorias',
    meta: { restrict: true },
    icon: <Home size={20} />,
    navLink: '/categorias'
  },
  {
    header: 'Cuenta'
  }, */
  {
    id: 'perfil',
    title: 'Perfil',
    icon: <Settings size={20} />,
    navLink: '/perfil'
  }
]
