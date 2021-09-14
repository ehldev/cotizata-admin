import * as Yup from 'yup'

export const validations = Yup.object().shape({
  nombre: Yup.string().required('Requerido'),
  url: Yup.string().required('Requerido')
})
