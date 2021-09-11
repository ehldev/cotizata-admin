import { useMemo, useState } from 'react'
import {
  CardTitle,
  CardBody,
  Button,
  Form,
  Input,
  FormGroup,
  Label,
  Col,
  CustomInput
} from 'reactstrap'
import { Formik } from 'formik'

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
  CONTRATO: {
    value: 0,
    label: 'Seleccione tipo de contrato'
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
    label: 'Seleccione una Categoria'
  },
  ASESOR: {
    value: 0,
    label: 'Seleccione un asesor'
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

const NuevaPropiedad = ({ stepper, state, setState }) => {
  const [DepCode, setDepCode] = useState(0)
  const [ProCode, setProCode] = useState(0)
  const { depar, provincia, distrito } = useLocation({
    DepCode,
    ProCode
  })

  const [banks, setBanks] = useState([])

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
            if (validateForm(values)) {
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
                        <ErrorMessage {...{ errors, touched, name: 'RUC' }} />
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
                          {...{ errors, touched, name: 'RAZON_SOCIAL' }}
                        />
                      </FormGroup>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <FormGroup>
                          <Label for="asesor">Bancos</Label>
                          <Input
                            id="banco"
                            name="banco"
                            placeholder="Banco"
                            onBlur={handleBlur}
                            value={values.banco}
                            onChange={handleChange}
                          />
                          <ErrorMessage
                            {...{ errors, touched, name: 'BANCO' }}
                          />
                        </FormGroup>
                      </div>
                    </div>

                    <FormGroup className="d-flex mb-0">
                      <Button.Ripple
                        type="submit"
                        color="primary"
                        className="mr-1"
                      >
                        Siguiente
                      </Button.Ripple>
                    </FormGroup>
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
