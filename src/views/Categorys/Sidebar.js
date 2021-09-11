import * as Yup from 'yup'
import { Formik } from 'formik'
import { Button, FormGroup, Label, Input, Form, Spinner } from 'reactstrap'

import Tags from '../../components/Tags'
import SelectImg from '../../components/SelectImg'
import SidebarBasic from '../../components/Sidebar'
import {
  useCrearCategoriasMutation,
  useUpdateCategoriasMutation,
  GetCategoriaDocument as GET_ALL_CAT
} from '../../generated/graphql'

const initialValues = {
  categoriaId: 0,
  nombreCategoria: '',
  ImagenPrincipal: 0,
  ImagenSecundaria: 0,
  KeywordsCategoria: '',
  descripcionCategoria: ''
}

const categorySchema = Yup.object().shape({
  nombreCategoria: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  KeywordsCategoria: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  descripcionCategoria: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  ImagenPrincipal: Yup.number().min(1, 'No has seleccionado una imagen.'),
  ImagenSecundaria: Yup.number().min(1, 'No has seleccionado una imagen.')
})

const Sidebar = ({ activeCat = initialValues, setActiveCat, ...props }) => {
  const [updateCategory, update] = useUpdateCategoriasMutation({
    onError: () => {}
  })
  const [addCategory, { loading }] = useCrearCategoriasMutation()

  const isEditing = Object.keys(activeCat).length !== 0

  const handleSubmit = async (values) => {
    values.ImagenPrincipal = parseInt(values.ImagenPrincipal)
    values.ImagenSecundaria = parseInt(values.ImagenSecundaria)
    if (!isEditing) {
      await addCategory({
        variables: { input: values },
        update: (cache, { data }) => {
          const { GetAllCategorias } = cache.readQuery({ query: GET_ALL_CAT })
          cache.writeQuery({
            query: GET_ALL_CAT,
            data: {
              GetAllCategorias: [data.CrearCategorias, ...GetAllCategorias]
            }
          })
        }
      })
    }

    if (isEditing) {
      await updateCategory({
        variables: { input: values },
        update: (cache, { data }) => {
          const { GetAllCategorias } = cache.readQuery({ query: GET_ALL_CAT })
          cache.writeQuery({
            query: GET_ALL_CAT,
            data: {
              GetAllCategorias: GetAllCategorias.map((cat) => {
                /* eslint-disable */
                return cat.categoriaId === activeCat.categoriaId
                  ? {
                      ...data
                    }
                  : cat
                /* eslint-enable */
              })
            }
          })
        }
      })
    }

    setActiveCat({})
    props.onToggle()
  }

  /* eslint-disable */
  const values = isEditing
    ? {
        categoriaId: activeCat.categoriaId,
        nombreCategoria: activeCat.nombreCategoria,
        ImagenPrincipal: activeCat?.ImagenPrincipal?.id ?? 0 ,
        ImagenSecundaria: activeCat?.ImagenSecundaria?.id ?? 0,
        KeywordsCategoria: activeCat.KeywordsCategoria,
        descripcionCategoria: activeCat.descripcionCategoria
      }
    : initialValues

  /*eslint-enable */

  return (
    <>
      <SidebarBasic {...props}>
        <Formik
          initialValues={values}
          onSubmit={handleSubmit}
          validationSchema={categorySchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            setFieldValue,
            submitForm
          }) => {
            const valid = (f) => errors[f] && touched[f] && errors[f]
            return (
              <Form
                className="d-flex flex-column h-100"
                onSubmit={(e) => e.preventDefault()}
              >
                <FormGroup>
                  <Label className="form-label" for="nombreCategoria">
                    Nombre
                  </Label>
                  <Input
                    type="text"
                    autoComplete="off"
                    id="nombreCategoria"
                    name="nombreCategoria"
                    placeholder="Nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.nombreCategoria}
                    invalid={!!valid('nombreCategoria')}
                  />
                  <small className="text-danger">
                    {valid('nombreCategoria')}
                  </small>
                </FormGroup>
                <FormGroup>
                  <Label className="form-label" for="descripcionCategoria">
                    Descripcion
                  </Label>
                  <Input
                    id="descripcionCategoria"
                    type="textarea"
                    autoComplete="off"
                    name="descripcionCategoria"
                    placeholder="Descripcion"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.descripcionCategoria}
                    invalid={!!valid('descripcionCategoria')}
                  />
                  <small className="text-danger">
                    {valid('descripcionCategoria')}
                  </small>
                </FormGroup>
                <FormGroup>
                  <Label className="form-label" for="nombreCategoria">
                    Keywords
                  </Label>
                  <Tags
                    value={values.KeywordsCategoria}
                    valid={!!valid('KeywordsCategoria')}
                    onChange={(tags) => {
                      setFieldValue('KeywordsCategoria', tags)
                    }}
                  />
                  <small className="text-danger">
                    {valid('KeywordsCategoria')}
                  </small>
                </FormGroup>

                <div className="row flex-fill">
                  <div className="col">
                    <Label className="form-label">Imagen principal</Label>
                    <SelectImg
                      value={values.ImagenPrincipal}
                      onChange={(id) => setFieldValue('ImagenPrincipal', id)}
                    />
                    <small className="text-danger">
                      {valid('ImagenPrincipal')}
                    </small>
                  </div>
                  <div className="col">
                    <Label className="form-label">Imagen secundaria</Label>
                    <SelectImg
                      value={values.ImagenSecundaria}
                      onChange={(id) => setFieldValue('ImagenSecundaria', id)}
                    />
                    <small className="text-danger">
                      {valid('ImagenSecundaria')}
                    </small>
                  </div>
                </div>

                <Button.Ripple
                  block
                  type="button"
                  color="primary"
                  className="my-2 "
                  onClick={submitForm}
                  disabled={loading || update.loading}
                >
                  {loading || update.loading ? (
                    <Spinner size="sm" className="mr-1" />
                  ) : null}
                  {isEditing ? 'Editar' : 'Agregar'}
                </Button.Ripple>
              </Form>
            )
          }}
        </Formik>
      </SidebarBasic>
    </>
  )
}

export default Sidebar
