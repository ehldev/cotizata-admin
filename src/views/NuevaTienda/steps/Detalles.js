import { useMemo, useState } from 'react'
import {
  CardTitle,
  CardBody,
  Button,
  Form,
  Input,
  FormGroup,
  Label,
  Badge,
  CustomInput
} from 'reactstrap'
import { Formik } from 'formik'

import { Plus, XCircle } from 'react-feather'

import {
  useGetAllUsersQuery,
  useGetCategoriaQuery
} from '../../../generated/graphql'
import useLocation from '../../../utility/hooks/useLocation'
import { PropiedadSchema } from '../../../validation/Propiedad'
import ErrorMessage from '../../../components/ErrorMessage'
import SelectImg from '../../../components/SelectImg'

const initialValues = {
  nombre: '',
  ruc: '',
  razonSocial: ''
}

const NuevaPropiedad = ({ stepper, state, setState }) => {
  const [banco, setBanco] = useState('')

  const [bancos, setBancos] = useState([])

  const [errorBancos, setErrorBancos] = useState(false)

  const [marca1, setMarca1] = useState(false)

  const [marca2, setMarca2] = useState(false)

  const [modelo2, setModelo2] = useState(false)
  const [modelo3, setModelo3] = useState(false)

  const [m1, setM1] = useState(false)
  const [m2, setM2] = useState(false)
  const [m3, setM3] = useState(false)
  const [m4, setM4] = useState(false)

  const [errorCheckbox, setErrorCheckbox] = useState(false)

  function agregarBanco() {
    setBancos([...bancos, banco])

    setBanco('')
  }

  function eliminarBanco(index, e) {
    const list = JSON.parse(JSON.stringify(bancos))

    list.splice(index, 1)

    setBancos([...list])
  }

  return (
    <>
      <CardTitle tag="h4" className="mb-0">
        Nueva Tienda
      </CardTitle>
      <CardBody>
        <Formik
          initialValues={initialValues}
          validationSchema={PropiedadSchema}
          onSubmit={(values, { validateForm }) => {
            if (!bancos.length) {
              setErrorBancos(true)
            } else {
              setErrorBancos(false)
            }

            if (!marca1 && !marca2) {
              setErrorCheckbox(true)
            } else {
              setErrorCheckbox(false)
            }

            if (validateForm(values) && bancos.length) {
              setState({ ...values })
              stepper.next()
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-12">
                        <FormGroup>
                          <Label for="nombre">Nombre</Label>
                          <Input
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre"
                            onBlur={handleBlur}
                            value={values.nombre}
                            onChange={handleChange}
                          />
                          <ErrorMessage
                            {...{ errors, touched, name: 'nombre' }}
                          />
                        </FormGroup>
                      </div>
                    </div>
                    <div className="row">
                      <FormGroup className="col-12 col-sm-6">
                        <Label for="categoria">Ruc</Label>
                        <Input
                          id="ruc"
                          name="ruc"
                          placeholder="Ruc"
                          onBlur={handleBlur}
                          value={values.ruc}
                          onChange={handleChange}
                        />
                        <ErrorMessage {...{ errors, touched, name: 'ruc' }} />
                      </FormGroup>
                      <FormGroup className="col-12 col-sm-6">
                        <Label for="asesor">Razón social</Label>
                        <Input
                          id="razonSocial"
                          name="razonSocial"
                          placeholder="Razón social"
                          onBlur={handleBlur}
                          value={values.razonSocial}
                          onChange={handleChange}
                        />
                        <ErrorMessage
                          {...{ errors, touched, name: 'razonSocial' }}
                        />
                      </FormGroup>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="row align-items-center">
                          <div className="col-9">
                            <FormGroup>
                              <div>
                                <Label for="asesor">Bancos</Label>
                                <Input
                                  id="banco"
                                  name="banco"
                                  placeholder="Banco"
                                  onBlur={handleBlur}
                                  value={banco}
                                  onChange={(e) => setBanco(e.target.value)}
                                />
                              </div>
                              <ErrorMessage
                                {...{ errors, touched, name: 'BANCO' }}
                              />
                            </FormGroup>
                          </div>

                          <div className="col-3">
                            <Button.Ripple
                              type="button"
                              color="success"
                              className="mt-1 mr-1 py-0"
                              disabled={!banco}
                              onClick={agregarBanco}
                            >
                              <Plus />
                            </Button.Ripple>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-9">
                            {!bancos.length && errorBancos ? (
                              <Badge color="light-danger">
                                Debe agregar al menos un banco para continuar
                              </Badge>
                            ) : (
                              ''
                            )}

                            <ul className="pl-2">
                              {bancos.map((item, index) => {
                                return (
                                  <li key={index}>
                                    <Badge color="light-secondary">
                                      {item}
                                    </Badge>

                                    <Button.Ripple
                                      type="button"
                                      className="btn-icon ml-1"
                                      color="flat-danger"
                                      onClick={(e) => eliminarBanco(index, e)}
                                    >
                                      <XCircle size={16} />
                                    </Button.Ripple>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="border-top mt-1 pt-2">
                          <CustomInput
                            type="checkbox"
                            className="custom-control-Primary"
                            id="volkswagen"
                            label="Volkswagen"
                            checked={marca1}
                            inline
                            onChange={(e) => setMarca1(e.target.checked)}
                          />

                          {marca1 ? (
                            <section className="mt-1 pl-2">
                              <Badge color="light-secondary">Modelo:</Badge>

                              <div className="mt-1">
                                <CustomInput
                                  type="checkbox"
                                  className="custom-control-Info"
                                  id="modelo1"
                                  label="17210od"
                                  checked="true"
                                  inline
                                />

                                <section className="mt-1 pl-2">
                                  <Badge color="light-secondary">Motor:</Badge>

                                  <div className="mt-1">
                                    <CustomInput
                                      type="checkbox"
                                      className="custom-control-Info"
                                      id="motor1"
                                      label="Cummins serie B-Gas"
                                      checked={m1}
                                      inline
                                      onChange={(e) => setM1(e.target.checked)}
                                    />
                                  </div>
                                </section>
                              </div>
                            </section>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>

                      <div className="col-md-12 border-top mt-1 pt-2">
                        <CustomInput
                          type="checkbox"
                          className="custom-control-Primary"
                          id="Mercedes"
                          label="Mercedes"
                          checked={marca2}
                          inline
                          onChange={(e) => setMarca2(e.target.checked)}
                        />

                        {marca2 ? (
                          <section className="mt-1 pl-2">
                            <Badge color="light-secondary">Modelos:</Badge>

                            <div className="mt-1">
                              <CustomInput
                                type="checkbox"
                                className="custom-control-Info"
                                id="modelo2"
                                label="of1722"
                                checked={modelo2}
                                inline
                                onChange={(e) => setModelo2(e.target.checked)}
                              />

                              <CustomInput
                                type="checkbox"
                                className="custom-control-Info"
                                id="modelo3"
                                label="of1722"
                                checked={modelo3}
                                inline
                                onChange={(e) => setModelo3(e.target.checked)}
                              />
                            </div>

                            <section className="mt-1 pl-2">
                              <Badge color="light-secondary">Motores:</Badge>

                              <div className="mt-1">
                                <CustomInput
                                  type="checkbox"
                                  className="custom-control-Info"
                                  id="motor2"
                                  label="OM 366 LA"
                                  checked={m2}
                                  inline
                                  onChange={(e) => setM2(e.target.checked)}
                                />

                                <CustomInput
                                  type="checkbox"
                                  className="custom-control-Info"
                                  id="motor3"
                                  label="OM 906"
                                  checked={m3}
                                  inline
                                  onChange={(e) => setM3(e.target.checked)}
                                />

                                <CustomInput
                                  type="checkbox"
                                  className="custom-control-Info"
                                  id="motor4"
                                  label="OM 924 LA"
                                  checked={m4}
                                  inline
                                  onChange={(e) => setM4(e.target.checked)}
                                />
                              </div>
                            </section>
                          </section>
                        ) : (
                          ''
                        )}
                      </div>

                      <div className="col-md-12 mt-2">
                        {errorCheckbox ? (
                          <Badge color="light-danger">
                            Debe agregar al menos una marca, modelo y motor.
                          </Badge>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>

                    <div className="d-flex justify-content-end">
                      <FormGroup className="d-flex mt-4 mb-0">
                        <Button.Ripple
                          type="submit"
                          color="primary"
                          className="mr-1"
                        >
                          Siguiente
                        </Button.Ripple>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <SelectImg
                        onChange={(id) => setFieldValue('foto', parseInt(id))}
                      />
                      <span className="text-muted">
                        Recomendable usar imagenes con resoluciones minimas de
                        250x300.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </CardBody>
    </>
  )
}

export default NuevaPropiedad
