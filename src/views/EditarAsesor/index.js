import { useEffect, useMemo, useState } from 'react'
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
import { userEditMap } from '../../utility/userEditMap'
import useLocation from '../../utility/hooks/useLocation'
import {
  GetAllUsersDocument as GET_ALL_USERS,
  useGetAllUsersQuery,
  useUpdateUsuarioMutation
} from '../../generated/graphql'

import styles from './styles.module.css'

const EditarAsesor = ({ history, location }) => {
  const [DepCode, setDepCode] = useState(0)
  const [ProCode, setProCode] = useState(0)
  const { depar, provincia, distrito } = useLocation({
    DepCode,
    ProCode
  })

  const initialvalues = userEditMap(location.state)

  const { data: allUsers } = useGetAllUsersQuery({
    variables: { tipoUsuario: 2, estado: '' }
  })

  const [updateUser] = useUpdateUsuarioMutation({
    onError: (err) => {
      console.log(err)
      toast.success('Ha ocurrido un error')
    },
    onCompleted: () => {
      toast.success('Usuario modificado con exito¡¡¡')
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

    const gql = await updateUser({
      variables: { input: payload },
      update: (cache, { data }) => {
        const GetAllUsers = allUsers ? allUsers.GetAllUsers : []

        cache.writeQuery({
          query: GET_ALL_USERS,
          variables: { tipoUsuario: 2, estado: '' },
          data: {
            GetAllUsers: GetAllUsers.map((user) => {
              return user.userId === payload.userId ? data : user
            })
          }
        })
      }
    })

    console.log(gql)
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
            Editar asesor
          </CardTitle>
          <Formik enableReinitialize initialValues={initialvalues} onSubmit={onSubmit}>
            {({
              values,
              handleBlur,
              handleChange,
              setFieldValue,
              handleSubmit
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 col-xl-3">
                    <div className={styles['place-items-center']}>
                      <SelectImg
                        value={values.foto}
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
                      <FormGroup className="col-12 col-sm-4">
                        <Label for="alias">Alias</Label>
                        <Input
                          id="alias"
                          name="alias"
                          placeholder="Asesor123"
                          value={values.alias}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </FormGroup>
                      <FormGroup className="col-12 col-sm-4">
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
                      <FormGroup className="col-12 col-sm-4">
                        <Label for="fechaNacimiento">
                          Fecha de Nacimiento{' '}
                          <span className="text-danger">*</span>
                        </Label>
                        <Input
                          type="date"
                          id="fechaNacimiento"
                          name="fechaNacimiento"
                          value={values.fechaNacimiento}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Tipo de usuario"
                        />
                      </FormGroup>
                    </div>
                    <div className="row">
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
                      <FormGroup className="col-12 col-sm-6">
                        <Label for="apellidos">Apellidos</Label>
                        <Input
                          id="apellidos"
                          name="apellidos"
                          placeholder="Doe ..."
                          value={values.apellidos}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </div>
                    <div className="row">
                      <FormGroup className="col-12 col-md">
                        <Label for="tipoDocumento">
                          Tipo de documento{' '}
                          <span className="text-danger">*</span>
                        </Label>
                        <Select
                          name="Documento"
                          id="tipoDocumento"
                          isClearable={false}
                          value={values.Documento}
                          onBlur={handleBlur}
                          onChange={(e) => {
                            setFieldValue('Documento', e)
                          }}
                          options={[
                            { value: '0', label: 'DNI' },
                            { value: '1', label: 'Pasaporte' },
                            { value: '2', label: 'Carnet de extranjeria' }
                          ]}
                          className="react-select"
                          classNamePrefix="select"
                          placeholder="documento"
                        />
                      </FormGroup>
                      <FormGroup className="col-12 col-md">
                        <Label for="nroDocumento">
                          Nro. documento <span className="text-danger">*</span>
                        </Label>
                        <Input
                          id="nroDocumento"
                          name="nroDocumento"
                          placeholder="00354868"
                          value={values.nroDocumento}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </FormGroup>
                      <FormGroup className="col-12 col-md">
                        <Label for="telefono">
                          Telefono <span className="text-danger">*</span>
                        </Label>
                        <Input
                          id="telefono"
                          name="celular"
                          placeholder="00354868"
                          value={values.celular}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </div>
                    <div className="row">
                      <FormGroup className="col-12 col-md">
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
                      <FormGroup className="col-12 col-md">
                        <Label for="wsp">Whatsapp</Label>
                        <Input
                          id="wsp"
                          name="whatsapp"
                          placeholder="999 999 999"
                          value={values.whatsapp}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                      </FormGroup>
                      <FormGroup className="col-12 col-md">
                        <Label for="facebook">Facebook</Label>
                        <Input
                          id="facebook"
                          name="facebook"
                          placeholder="@JohnDoe"
                          onBlur={handleBlur}
                          value={values.facebook}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </div>
                    <div className="row">
                      <FormGroup className="col-12 col-md">
                        <Label for="departamento">
                          Departamento <span className="text-danger">*</span>
                        </Label>
                        <Select
                          name="Depar"
                          id="departamento"
                          className="react-select"
                          classNamePrefix="select"
                          placeholder="Seleccione Departamento"
                          onBlur={handleBlur}
                          value={values.Depar}
                          options={departamentos}
                          onChange={(e) => {
                            setFieldValue('Depar', e)
                            setFieldValue('Prov', initialValues.Prov)
                            setFieldValue('Dist', initialValues.Dist)
                            setDepCode(e.value)
                          }}
                        />
                      </FormGroup>
                      <FormGroup className="col-12 col-md">
                        <Label for="provincia">
                          Provincia <span className="text-danger">*</span>
                        </Label>
                        <Select
                          id="provincia"
                          name="Prov"
                          className="react-select"
                          classNamePrefix="select"
                          placeholder="Seleccione Provincia"
                          options={provincias}
                          value={values.Prov}
                          onBlur={handleBlur}
                          onChange={(e) => {
                            setFieldValue('Prov', e)
                            setProCode(e.value)
                          }}
                        />
                      </FormGroup>
                      <FormGroup className="col">
                        <Label for="distrito">
                          Distrito <span className="text-danger">*</span>
                        </Label>
                        <Select
                          id="distrito"
                          name="Dist"
                          className="react-select"
                          classNamePrefix="select"
                          placeholder="Seleccione Distrito"
                          options={distritos}
                          value={values.Dist}
                          onBlur={handleBlur}
                          onChange={(e) => {
                            setFieldValue('Dist', e)
                          }}
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
                    <div className="d-flex my-2 mx-auto">
                      <div className="d-flex">
                        <FormGroup className="col-12 d-flex flex-column justify-content-center">
                          <Label for="estado">Estado</Label>
                          <div style={{ zIndex: 0 }}>
                            <CustomInput
                              inline
                              id="estado"
                              type="switch"
                              name="estado"
                              onBlur={handleBlur}
                              checked={values.estado === 1}
                              onChange={({ target: { checked } }) => {
                                setFieldValue('estado', checked ? 1 : 0)
                              }}
                            />
                          </div>
                        </FormGroup>
                      </div>
                    </div>
                  </div>
                </div>
                <FormGroup className="d-flex mb-0">
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

export default EditarAsesor
