import { useMemo, useState } from 'react'
import {
  CardTitle,
  CardBody,
  Button,
  Form,
  Input,
  FormGroup,
  Label,
  Badge
} from 'reactstrap'
import { Formik } from 'formik'

import { Plus, XCircle } from 'react-feather'

import useLocation from '../../../../utility/hooks/useLocation'
import { validations } from './validations'
import ErrorMessage from '../../../../components/ErrorMessage'
import SelectImg from '../../../../components/SelectImg'

const initialValues = {
  lugar: ''
}

const Sedes = ({ stepper, state, setState }) => {
  const [direccion, setDireccion] = useState('')

  const [direcciones, setDirecciones] = useState([])

  const [errorList, setErrorList] = useState(false)

  function agregarDireccion() {
    setDirecciones([...direcciones, direccion])

    setDireccion('')
  }

  function eliminar(index, e) {
    const list = JSON.parse(JSON.stringify(direcciones))

    list.splice(index, 1)

    setDirecciones([...list])
  }

  return (
    <>
      <CardTitle tag="h4" className="mb-0">
        Nueva Tienda
      </CardTitle>
      <CardBody>
        <Formik
          initialValues={initialValues}
          validationSchema={validations}
          onSubmit={(values, { validateForm }) => {
            if (!direcciones.length) {
              setErrorList(true)
            }

            if (validateForm(values) && direcciones.length) {
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
                          <Label for="nombre">Lugar</Label>
                          <Input
                            id="nombre"
                            name="lugar"
                            placeholder="Lima"
                            onBlur={handleBlur}
                            value={values.lugar}
                            onChange={handleChange}
                          />
                          <ErrorMessage
                            {...{ errors, touched, name: 'lugar' }}
                          />
                        </FormGroup>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="row align-items-center">
                          <div className="col-9">
                            <FormGroup>
                              <div>
                                <Label for="direcciones">Direcciones</Label>
                                <Input
                                  id="direcciones"
                                  name="direcciones"
                                  placeholder="Direcciones"
                                  onBlur={handleBlur}
                                  value={direccion}
                                  onChange={(e) => setDireccion(e.target.value)}
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
                              disabled={!direccion}
                              onClick={agregarDireccion}
                            >
                              <Plus />
                            </Button.Ripple>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-9">
                            {!direcciones.length && errorList ? (
                              <Badge color="light-danger">
                                Debe agregar al menos una dirección para
                                continuar
                              </Badge>
                            ) : (
                              ''
                            )}

                            <ul className="pl-2">
                              {direcciones.map((item, index) => {
                                return (
                                  <li key={index}>
                                    <Badge color="light-secondary">
                                      {item}
                                    </Badge>

                                    <Button.Ripple
                                      type="button"
                                      className="btn-icon ml-1"
                                      color="flat-danger"
                                      onClick={(e) => eliminar(index, e)}
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
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </CardBody>
    </>
  )
}

export default Sedes
