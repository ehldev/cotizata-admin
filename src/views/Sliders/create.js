import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Form,
  Card,
  Label,
  Input,
  Button,
  CardBody,
  CardTitle,
  FormGroup,
  CustomInput
} from 'reactstrap'
import { Formik } from 'formik'
import { toast } from 'react-toastify'

import SelectImg from '../../components/SelectImg'
import useLocation from '../../utility/hooks/useLocation'
import {
  useCrearUsuarioMutation,
  GetAllUsersDocument as GET_ALL_USERS
} from '../../generated/graphql'

import styles from './styles.module.css'

const initialValues = {
  titulo: ''
}

const CreateSlider = ({ history }) => {
  const [DepCode, setDepCode] = useState(0)
  const [ProCode, setProCode] = useState(0)
  const { depar, provincia, distrito } = useLocation({
    DepCode,
    ProCode
  })

  const [createUser] = useCrearUsuarioMutation({
    onError: ({ graphQLErrors }) => {
      console.log(graphQLErrors)
      toast.success('Ha ocurrido un error')
    },
    onCompleted: () => {
      toast.success('Usuario creado con exito¡¡¡')
      history.push('/asesores')
    }
  })

  const onSubmit = async (values) => {
    const {
      Prov,
      Dist,
      Depar,
      Documento,
      tipoUsuario,
      confirmPassword,
      ...rest
    } = values
    const payload = {
      ...rest,
      ProvCodi: parseInt(Prov.value),
      DistCodi: parseInt(Dist.value),
      DeparCodi: parseInt(Depar.value),
      tipoDocumento: parseInt(Documento.value),
      tipoUsuario: parseInt(tipoUsuario.value)
    }

    await createUser({
      variables: { input: payload },
      update: (cache, { data }) => {
        const opts = {
          query: GET_ALL_USERS,
          variables: { tipoUsuario: 2, estado: '' }
        }
        const prevData = cache.readQuery(opts)
        console.log(prevData)
        if (!prevData) {
          return cache.writeQuery({
            ...opts,
            data: {
              GetAllUsers: [data.CrearUsuario]
            }
          })
        }

        cache.writeQuery({
          ...opts,
          data: {
            GetAllUsers: [data.CrearUsuario, ...prevData.GetAllUsers]
          }
        })
      }
    })
  }

  const departamentos = useMemo(() => {
    return depar.data.map((dep) => ({
      value: dep.DeparCodi,
      label: dep.DeparNom
    }))
  }, [depar])

  const provincias = useMemo(() => {
    return provincia.data.map((prov) => ({
      value: prov.ProvCodi,
      label: prov.ProvNom
    }))
  }, [DepCode, provincia])

  const distritos = useMemo(() => {
    return distrito.data.map((dist) => ({
      value: dist.DistCodi,
      label: dist.DistNom
    }))
  }, [DepCode, ProCode, distrito])

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h4" className="mb-2">
            <div className="d-block d-sm-flex justify-between mb-1">
              <div className="flex-fill">
                <Link to="/sliders">
                  <Button color="flat-danger">Regresar</Button>
                </Link>
              </div>

              <h1>Agregar slider</h1>
            </div>
          </CardTitle>

          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({
              values,
              handleChange,
              handleBlur,
              setFieldValue,
              handleSubmit
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 col-xl-5">
                    <div className={styles['place-items-center']}>
                      <SelectImg
                        className={styles.addAvatar}
                        onChange={(id) => setFieldValue('foto', parseInt(id))}
                      />
                      <span className="text-muted">
                        Recomendable usar imagenes con resoluciones minimas de
                        250x300.
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-xl-7">
                    <div className="row">
                      <FormGroup className="col-12">
                        <Label for="titulo">Título</Label>
                        <Input
                          id="titulo"
                          name="titulo"
                          required
                          placeholder="Título de slider"
                          value={values.titulo}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </div>
                  </div>
                </div>
                <FormGroup className="d-flex mb-0 justify-content-end">
                  <Button.Ripple className="mr-1" color="primary" type="submit">
                    Guardar
                  </Button.Ripple>
                </FormGroup>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </>
  )
}

export default CreateSlider
