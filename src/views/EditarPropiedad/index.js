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
  GetAllPropiedadesDocument as GET_ALL_PROPI,
  useGetSlugPropiedadesLazyQuery,
  useUpdatePropiedadesMutation
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

const EditarPropiedad = ({ location }) => {
  const { slug } = useParams()
  // ** Ref & State
  const ref = useRef(null)
  const [stepper, setStepper] = useState(null)
  const [state, setState] = useState(() => {
    if (!location.state) return initialValues
    return location.state
  })
  const [propiedadId, setPropiedadId] = useState(null)

  const [updatePropi] = useUpdatePropiedadesMutation({
    onError: ({ graphQLErrors }) => console.log(graphQLErrors),
    onCompleted: ({ UpdatePropiedades }) => {
      if (UpdatePropiedades) {
        setPropiedadId(UpdatePropiedades.propiedadId)
      }
    }
  })

  const [GetBySlug] = useGetSlugPropiedadesLazyQuery({
    onCompleted: ({ GetSlugPropiedades }) => {
      setState(GetSlugPropiedades)
      console.log(GetSlugPropiedades)
    }
  })

  useEffect(() => {
    console.log(location.state)
    if (!location.state) {
      GetBySlug({ variables: { slug } })
    }
  }, [])

  const handleUpdatePropi = async (propiedad) => {
    await updatePropi({
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
              data: GetAllPropiedades.data.map((p) => {
                /* eslint-disable */
                return p.propiedadId === data.UpdatePropiedades.propiedadId
                  ? data.UpdatePropiedades
                  : p
                /* eslint-enable */
              })
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
      subtitle: 'Informacion de la Propiedad',
      icon: <Home size={18} />,
      content: <Detalles {...{ stepper, state, setState, reset }} />
    },

    {
      id: 'imagenes',
      title: 'Imagenes',
      subtitle: 'Imagenes de la propiedad',
      icon: <Image size={18} />,
      content: (
        <Imagenes {...{ stepper, state, setState, reset, handleUpdatePropi }} />
      )
    },
    {
      id: 'planos',
      title: 'Planos',
      subtitle: 'Planos de la propiedad',
      icon: <FilePlus size={18} />,
      content: <Planos {...{ stepper, state, setState, reset, propiedadId }} />
    }
  ]

  return (
    <Fragment>
      <Wizard
        ref={ref}
        steps={steps}
        options={{ linear: false }}
        className="checkout-tab-steps"
        instance={(el) => setStepper(el)}
      />
    </Fragment>
  )
}

export default EditarPropiedad
