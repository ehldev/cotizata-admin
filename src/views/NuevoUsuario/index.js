import { useMemo, useState } from 'react'
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
import Select from 'react-select'
import { toast } from 'react-toastify'

import SelectImg from '../../components/SelectImg'
import useLocation from '../../utility/hooks/useLocation'
import {
  useCrearUsuarioMutation,
  GetAllUsersDocument as GET_ALL_USERS
} from '../../generated/graphql'

import styles from './styles.module.css'

const initialValues = {
  tipoUsuario: {
    value: '1',
    label: 'Administrador'
  },
  alias: '',
  nombres: '',
  apellidos: '',
  Documento: {
    value: '0',
    label: 'DNI'
  },
  nroDocumento: '',
  email: '',
  foto: 0,
  estado: 1,
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
  },
  password: '',
  whatsapp: '',
  facebook: '',
  celular: '',
  confirmPassword: '',
  fechaNacimiento: ''
}

const NuevoAsesor = ({ history }) => {
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
            Nuevo asesor
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
                  <div className="col-12 col-xl-3">
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
                  <div className="col-12 col-xl-9">
                    <div className="row">
                      <FormGroup className="col-12 col-sm-6">
                        <Label for="tipoUsuario">
                          Tipo de usuario <span className="text-danger">*</span>
                        </Label>
                        <Select
                          name="tipoUsuario"
                          id="tipoUsuario"
                          value={values.tipoUsuario}
                          onBlur={handleBlur}
                          onChange={(e) => {
                            setFieldValue('tipoUsuario', e)
                          }}
                          options={[
                            { value: '1', label: 'Administrador' },
                            { value: '2', label: 'Asesor' }
                          ]}
                          className="react-select"
                          classNamePrefix="select"
                          placeholder="Tipo de usuario"
                        />
                      </FormGroup>

                      <FormGroup className="col-12 col-sm-6">
                        <Label for="nombres">Nombres</Label>
                        <Input
                          id="nombres"
                          name="nombres"
                          placeholder="John ..."
                          value={values.nombres}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </div>

                    <div className="row">
                      <FormGroup className="col-12 col-md-6">
                        <Label for="correo">
                          Correo <span className="text-danger">*</span>
                        </Label>
                        <Input
                          id="correo"
                          type="email"
                          name="email"
                          placeholder="john.doe@example.com"
                          onBlur={handleBlur}
                          value={values.email}
                          onChange={handleChange}
                        />
                      </FormGroup>
                      <FormGroup className="col-12 col-md-6">
                        <Label for="telefono">
                          Telefono <span className="text-danger">*</span>
                        </Label>
                        <Input
                          id="telefono"
                          name="celular"
                          placeholder="999 999 999"
                          value={values.celular}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </div>

                    <div className="row">
                      <FormGroup className="col-12 col-sm-6">
                        <Label for="contraseña">
                          Contraseña <span className="text-danger">*</span>
                        </Label>
                        <Input
                          id="contraseña"
                          type="password"
                          name="password"
                          onBlur={handleBlur}
                          value={values.password}
                          onChange={handleChange}
                        />
                      </FormGroup>
                      <FormGroup className="col-12 col-sm-6">
                        <Label for="confirmPassword">
                          Confirmar contraseña{' '}
                          <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.confirmPassword}
                        />
                      </FormGroup>
                    </div>
                  </div>
                </div>
                <FormGroup className="d-flex justify-content-end mb-0">
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

export default NuevoAsesor
