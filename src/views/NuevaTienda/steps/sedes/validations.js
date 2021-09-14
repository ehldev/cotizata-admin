import * as Yup from 'yup'

export const validations = Yup.object().shape({
  lugar: Yup.string().required('Requerido')
})
