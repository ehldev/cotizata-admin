// ** React Imports
import { Fragment, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
// ** Custom Components
import Wizard from '@components/wizard'
import BreadCrumbs from '@components/breadcrumbs'

// ** Steps
import Planos from './steps/Planos/index'
import Detalles from './steps/Detalles'
import Imagenes from './steps/Imagenes/index'

// ** Third Party Components
import { Home, Image, FilePlus } from 'react-feather'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'
import {
  useCrearPropiedadesMutation,
  GetAllPropiedadesDocument as GET_ALL_PROPI
} from '../../generated/graphql'

const initialValues = {
  propiedadId: 0,
  titulo: '',
  CONTRATO: {
    value: 0,
    label: ''
  },
  descripcionCorta: '',
  descripcionCompleta: '',
  video: '',
  estado: 1,
  destacado: 0,
  fotoPrincipal: 0,
  fotoSecundaria: 0,
  galeria: [],
  lat: '',
  log: '',
  cuartos: 0,
  banios: 0,
  pisos: 0,
  dimensiones: '',
  antiguedad: 0,
  areaConstruida: '',
  ambientes: '1',
  direccion: '',
  CATEGORIA: {
    value: 0,
    label: ''
  },
  ASESOR: {
    value: 0,
    label: ''
  },
  Prov: {
    value: 0,
    label: 'Seleccione provincia'
  },
  Dist: {
    value: 0,
    label: 'Seleccione distrito'
  },
  Depar: {
    value: 0,
    label: 'Seleccione departamento'
  }
}

const NuevaPropiedad = () => {
  // ** Ref & State
  const ref = useRef(null)
  const [stepper, setStepper] = useState(null)
  const [state, setState] = useState(initialValues)
  const [propiedadId, setPropiedadId] = useState(null)

  const [createProp] = useCrearPropiedadesMutation({
    onError: ({ graphQLErrors }) => console.log(graphQLErrors),
    onCompleted: ({ CrearPropiedades }) => {
      if (CrearPropiedades) setPropiedadId(CrearPropiedades.propiedadId)
    }
  })

  const handleCreatePropi = async (propiedad) => {
    await createProp({
      variables: { input: propiedad },
      update: (cache, { data }) => {
        const { GetAllPropiedades } = cache.readQuery({
          query: GET_ALL_PROPI,
          variables: {
            page: 1,
            estado: '',
            destacado: '',
            numberPaginate: 10
          }
        })

        cache.writeQuery({
          query: GET_ALL_PROPI,
          variables: {
            page: 1,
            estado: '',
            destacado: '',
            numberPaginate: 10
          },
          data: {
            GetAllPropiedades: {
              ...GetAllPropiedades,
              data: [data.CrearPropiedades, ...GetAllPropiedades.data]
            }
          }
        })
      }
    })
  }

  const reset = () => setState(initialValues)

  const steps = [
    {
      id: 'detalles',
      title: 'Detalles',
      icon: <Home size={18} />,
      subtitle: 'Informacion de la Propiedad',
      content: <Detalles {...{ stepper, state, setState, reset }} />
    },

    {
      id: 'imagenes',
      title: 'Imagenes',
      icon: <Image size={18} />,
      subtitle: 'Imagenes de la propiedad',
      content: (
        <Imagenes {...{ stepper, state, setState, reset, handleCreatePropi }} />
      )
    },
    {
      id: 'planos',
      title: 'Planos',
      icon: <FilePlus size={18} />,
      subtitle: 'Planos de la propiedad',
      content: <Planos {...{ stepper, state, setState, reset, propiedadId }} />
    }
  ]

  return (
    <div className="horizontal-wizard">
      <Wizard ref={ref} steps={steps} instance={(el) => setStepper(el)} />
    </div>
  )
}

export default NuevaPropiedad
