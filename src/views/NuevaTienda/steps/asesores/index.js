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
  nombre: '',
  url: ''
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
                          <Label for="nombre">Nombre</Label>
                          <Input
                            id="nombre"
                            name="nombre"
                            placeholder="Lima"
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
                      <div className="col-md-12">
                        <FormGroup>
                          <Label for="url">URL whatsapp</Label>
                          <Input
                            id="url"
                            name="url"
                            placeholder="Url"
                            onBlur={handleBlur}
                            value={values.url}
                            onChange={handleChange}
                          />
                          <ErrorMessage {...{ errors, touched, name: 'url' }} />
                        </FormGroup>
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
