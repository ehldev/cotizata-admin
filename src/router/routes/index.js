import { lazy } from 'react'

// ** Document title
const TemplateTitle = 'Dashboard'

// ** Default Route
const DefaultRoute = '/inicio'

// ** Merge Routes
const Routes = [
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/inicio',
    component: lazy(() => import('../../views/Inicio'))
  },
  /* RUTAS SOLO ADMINISTRADOR */
  {
    path: '/imagenes',
    meta: { restrict: true },
    component: lazy(() => import('../../views/Imagenes'))
  },
  {
    path: '/sliders',
    meta: { restrict: true },
    component: lazy(() => import('../../views/Sliders'))
  },
  {
    path: '/agregar-slider',
    meta: { restrict: true },
    component: lazy(() => import('../../views/Sliders/create'))
  },
  {
    path: '/tiendas',
    meta: { restrict: true },
    component: lazy(() => import('../../views/Tiendas'))
  },
  {
    path: '/nueva-tienda',
    meta: { restrict: true },
    component: lazy(() => import('../../views/NuevaTienda'))
  },
  {
    path: '/usuarios',
    meta: { restrict: true },
    component: lazy(() => import('../../views/Usuarios'))
  },
  {
    path: '/nuevo-usuario',
    meta: { restrict: true },
    component: lazy(() => import('../../views/NuevoUsuario'))
  },
  {
    path: '/asesores',
    meta: { restrict: true },
    component: lazy(() => import('../../views/Asesores'))
  },
  {
    path: '/postulaciones',
    meta: { restrict: true },
    component: lazy(() => import('../../views/Postulaciones'))
  },
  {
    path: '/nuevo-asesor',
    meta: { restrict: true },
    component: lazy(() => import('../../views/NuevoAsesor'))
  },
  {
    path: '/editar-asesor/:id',
    meta: { restrict: true },
    component: lazy(() => import('../../views/EditarAsesor'))
  },
  {
    path: '/propiedades',
    meta: { restrict: true },
    component: lazy(() => import('../../views/Propiedades'))
  },
  {
    path: '/nueva-propiedad',
    meta: { restrict: true },
    component: lazy(() => import('../../views/NuevaPropiedad'))
  },
  {
    path: '/editar-propiedad/:slug',
    meta: { restrict: true },
    component: lazy(() => import('../../views/EditarPropiedad'))
  },
  {
    path: '/categorias',
    meta: { restrict: true },
    component: lazy(() => import('../../views/Categorys'))
  },
  /* RUTAS SOLO ADMINISTRADOR */
  {
    path: '/mis-propiedades',
    component: lazy(() => import('../../views/PropiedadesAsesor'))
  },
  {
    path: '/perfil',
    component: lazy(() => import('../../views/Perfil'))
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
