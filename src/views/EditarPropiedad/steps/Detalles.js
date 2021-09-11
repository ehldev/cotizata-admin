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
import Select from 'react-select'
import { Formik } from 'formik'

import useLocation from '../../../utility/hooks/useLocation'
import {
  useGetAllUsersQuery,
  useGetCategoriaQuery
} from '../../../generated/graphql'

const initialValues = {
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

const EditarDetalles = ({ stepper, state, setState }) => {
  const [DepCode, setDepCode] = useState(0)
  const [ProCode, setProCode] = useState(0)
  const { depar, provincia, distrito } = useLocation({
    DepCode,
    ProCode
  })

  const { data: dataCat } = useGetCategoriaQuery()

  const { data } = useGetAllUsersQuery({
    variables: { estado: '', tipoUsuario: 2 }
  })

  const users = data ? data.GetAllUsers : []
  const cats = dataCat ? dataCat.GetAllCategorias : []

  const usersMap = useMemo(() => {
    return users.map(({ userId, alias }) => ({
      label: alias,
      value: userId
    }))
  }, [users, data])

  const departamentos = useMemo(() => {
    return depar.data.map((dep) => ({
      value: dep.DeparCodi,
      label: dep.DeparNom
    }))
  }, [depar])

  const categorias = useMemo(() => {
    return cats.map((cat) => ({
      value: cat.categoriaId,
      label: cat.nombreCategoria
    }))
  }, [cats])

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
      <CardTitle tag="h4" className="mb-0">
        Editar Propiedad
      </CardTitle>
      <CardBody>
        <Formik
          enableReinitialize
          initialValues={state}
          onSubmit={(values) => setState({ ...values })}
        >
          {({
            values,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue
          }) => (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="titulo">Titulo</Label>
                <Input
                  id="titulo"
                  name="titulo"
                  placeholder="Titulo"
                  onBlur={handleBlur}
                  value={values.titulo}
                  onChange={handleChange}
                />
              </FormGroup>
              <div className="row">
                <FormGroup className="col-12 col-sm-4">
                  <Label for="categoria">Categoria</Label>
                  <Select
                    id="categoria"
                    name="categoria"
                    options={categorias}
                    className="react-select"
                    classNamePrefix="select"
                    placeholder="Selecciona categoria"
                    onBlur={handleBlur}
                    value={values.CATEGORIA}
                    onChange={(e) => setFieldValue('CATEGORIA', e)}
                  />
                </FormGroup>
                <FormGroup className="col-12 col-sm-4">
                  <Label for="asesor">Asesor</Label>
                  <Select
                    id="asesor"
                    name="asesor"
                    options={usersMap}
                    className="react-select"
                    classNamePrefix="select"
                    placeholder="Selecciona asesor"
                    onBlur={handleBlur}
                    value={values.ASESOR}
                    onChange={(e) => setFieldValue('ASESOR', e)}
                  />
                </FormGroup>
                <FormGroup className="col-12 col-sm-4">
                  <Label for="video">Video de presentación</Label>
                  <Input
                    id="video"
                    name="video"
                    placeholder="www.youtube.com/embed/..."
                    onBlur={handleBlur}
                    value={values.video}
                    onChange={handleChange}
                  />
                </FormGroup>
              </div>
              <div className="row">
                <FormGroup className="col">
                  <Label for="banios">Baños</Label>
                  <Input
                    id="banios"
                    type="number"
                    name="banios"
                    placeholder="0"
                    onBlur={handleBlur}
                    value={values.banios}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="cuartos">Cuartos</Label>
                  <Input
                    id="cuartos"
                    type="number"
                    name="cuartos"
                    placeholder="0"
                    onBlur={handleBlur}
                    value={values.cuartos}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="pisos">Pisos</Label>
                  <Input
                    id="pisos"
                    name="pisos"
                    type="number"
                    placeholder="1"
                    onBlur={handleBlur}
                    value={values.pisos}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="antiguedad">Antiguedad</Label>
                  <Input
                    type="number"
                    id="antiguedad"
                    name="antiguedad"
                    placeholder="1998"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.antiguedad}
                  />
                </FormGroup>
                <FormGroup className="col col-md-3 col-lg-2">
                  <Label for="dimensiones">Dimensiones</Label>
                  <Input
                    type="text"
                    id="dimensiones"
                    name="dimensiones"
                    placeholder="5x70x10"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.dimensiones}
                  />
                </FormGroup>
                <FormGroup className="col col-md-3 col-lg-2">
                  <Label for="areaConstruida">Area Construida</Label>
                  <Input
                    type="number"
                    id="areaConstruida"
                    name="areaConstruida"
                    placeholder="70m2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.areaConstruida}
                  />
                </FormGroup>
              </div>
              <div className="row">
                <FormGroup className="col-12 col-sm-4">
                  <Label for="tipoContrato">Tipo de Contrato</Label>
                  <Select
                    id="tipoContrato"
                    name="tipoContrato"
                    isClearable={false}
                    options={[
                      { value: '1', label: 'Venta' },
                      { value: '2', label: 'Alquiler' }
                    ]}
                    className="react-select"
                    classNamePrefix="select"
                    placeholder="tipo de contrato"
                    onBlur={handleBlur}
                    value={values.CONTRATO}
                    onChange={(e) => setFieldValue('CONTRATO', e)}
                    // theme={selectThemeColors}
                  />
                </FormGroup>
                <FormGroup className="col-12 col-sm-4">
                  <Label for="direccion">Dirección</Label>
                  <Input
                    type="text"
                    id="direccion"
                    name="direccion"
                    placeholder="Av. Coronel Portillo #1076"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.direccion}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="lat">Latitud</Label>
                  <Input
                    id="lat"
                    name="lat"
                    type="number"
                    placeholder="-12.1864"
                    value={values.lat}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="log">Longitud</Label>
                  <Input
                    id="log"
                    name="log"
                    type="number"
                    placeholder="15.846"
                    value={values.log}
                    onBlur={handleBlur}
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
                <FormGroup className="col-12 col-xl-5">
                  <Label for="descripcionCorta">Breve descripción</Label>
                  <Input
                    type="textarea"
                    id="descripcionCorta"
                    name="descripcionCorta"
                    placeholder="....."
                    value={values.descripcionCorta}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="col-12 col-xl-7">
                  <Label for="descripcionCompleta">Descripción</Label>
                  <Input
                    type="textarea"
                    id="descripcionCompleta"
                    name="descripcionCompleta"
                    placeholder="....."
                    value={values.descripcionCompleta}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </FormGroup>
              </div>
              <div className="d-flex mb-2 mx-auto">
                <div className="d-flex" style={{ zIndex: 0 }}>
                  <FormGroup className="col-4 d-flex flex-column justify-content-center">
                    <Label for="estado">Estado</Label>
                    <CustomInput
                      inline
                      id="estado"
                      type="switch"
                      name="estado"
                      onBlur={handleBlur}
                      checked={values.estado}
                      onChange={({ target: { checked } }) => {
                        setFieldValue('estado', checked ? 1 : 0)
                      }}
                    />
                  </FormGroup>
                  <FormGroup className="d-flex flex-column justify-content-center">
                    <Label for="destacado">¿Deseas destacar?</Label>
                    <CustomInput
                      inline
                      type="switch"
                      id="destacado"
                      className="ml-3"
                      name="destacado"
                      onBlur={handleBlur}
                      checked={values.destacado}
                      onChange={({ target: { checked } }) => {
                        setFieldValue('destacado', checked ? 1 : 0)
                      }}
                    />
                  </FormGroup>
                </div>
              </div>
              <FormGroup className="d-flex mb-0">
                <Button.Ripple
                  onClick={() => stepper.next()}
                  type="submit"
                  color="primary"
                  className="mr-1"
                >
                  Siguiente
                </Button.Ripple>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </CardBody>
    </>
  )
}

export default EditarDetalles
