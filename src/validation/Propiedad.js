import * as Yup from 'yup'

const actualYear = new Date().getFullYear()

export const PropiedadSchema = Yup.object().shape({
  lat: Yup.string().required('Requerido'),
  log: Yup.string().required('Requerido'),
  video: Yup.string().required('Requerido'),
  titulo: Yup.string().required('Requerido'),
  estado: Yup.number().required('Requerido'),
  destacado: Yup.number().required('Requerido'),
  ambientes: Yup.string().required('Requerido'),
  direccion: Yup.string().required('Requerido'),
  dimensiones: Yup.string().required('Requerido'),
  areaConstruida: Yup.string().required('Requerido'),
  descripcionCorta: Yup.string().required('Requerido'),
  descripcionCompleta: Yup.string().required('Requerido'),
  pisos: Yup.number()
    .min(1, 'Debe tener por lo menos un piso')
    .required('Requerido'),
  banios: Yup.number()
    .min(1, 'Debe tener por lo menos un baño')
    .required('Requerido'),
  cuartos: Yup.number()
    .min(1, 'Debe tener por lo menos un cuarto')
    .required('Requerido'),
  antiguedad: Yup.number()
    .min(1500, 'Debe ser mayor a 1500')
    .max(actualYear, `Debe ser menor a ${actualYear}`)
    .required('Requerido'),
  CONTRATO: Yup.object().shape({
    label: Yup.string().required('Requerido'),
    value: Yup.number()
      .min(1, 'Debes seleccionar un tipo de contrato')
      .required('Requerido')
  }),
  CATEGORIA: Yup.object().shape({
    label: Yup.string().required('Requerido'),
    value: Yup.number()
      .min(1, 'Debes seleccionar una categoria')
      .required('Requerido')
  }),
  ASESOR: Yup.object().shape({
    label: Yup.string().required('Requerido'),
    value: Yup.number()
      .min(1, 'Debes seleccionar un asesor')
      .required('Requerido')
  }),
  Prov: Yup.object().shape({
    label: Yup.string().required('Requerido'),
    value: Yup.number()
      .min(1, 'Debes seleccionar una provincia')
      .required('Requerido')
  }),
  Dist: Yup.object().shape({
    label: Yup.string().required('Requerido'),
    value: Yup.number()
      .min(1, 'Debes seleccionar un distrito')
      .required('Requerido')
  }),
  Depar: Yup.object().shape({
    label: Yup.string().required('Requerido'),
    value: Yup.number()
      .min(1, 'Debes seleccionar un departamento')
      .required('Requerido')
  })
})
