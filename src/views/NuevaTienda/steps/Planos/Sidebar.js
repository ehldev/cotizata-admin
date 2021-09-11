// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Third Party Components
import classnames from 'classnames'
import { Formik } from 'formik'
import { Button, FormGroup, Label, Form, Input } from 'reactstrap'

import './styles.css'
import SelectImg from '../../../../components/SelectImg'
import { useCrearPlanosMutation } from '../../../../generated/graphql'

const initialValues = {
  foto: 0,
  propiedadId: 0,
  tituloPlano: '',
  descripcionCortaPlano: '',
  descripcionLargaPlano: ''
}

const SidebarNuevosPlanos = ({
  open,
  state,
  setPlanos,
  propiedadId,
  toggleSidebar
}) => {
  const [createPlanos] = useCrearPlanosMutation({
    onError: ({ graphQLErrors }) => console.log(graphQLErrors[0].debugMessage),
    onCompleted: ({ CrearPlanos }) => {
      console.log(CrearPlanos)
      if (CrearPlanos) setPlanos((prev) => [CrearPlanos, ...prev])
    }
  })

  return (
    <Sidebar
      size="lg"
      open={open}
      title="Agregar plano"
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={toggleSidebar}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          console.log({ ...values, propiedadId })
          await createPlanos({
            variables: { input: { ...values, propiedadId } }
          })
          toggleSidebar()
        }}
      >
        {({
          values,
          handleBlur,
          handleSubmit,
          handleChange,
          setFieldValue
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="tituloPlano">
                Titulo <span className="text-danger">*</span>
              </Label>
              <Input
                id="tituloPlano"
                name="tituloPlano"
                placeholder="Nombre plano"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tituloPlano}
              />
            </FormGroup>
            <FormGroup>
              <Label for="descripcionCortaPlano">
                Descripcion corta <span className="text-danger">*</span>
              </Label>
              <Input
                type="textarea"
                id="descripcionCortaPlano"
                name="descripcionCortaPlano"
                placeholder="lorem*5"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.descripcionCortaPlano}
              />
            </FormGroup>
            <FormGroup>
              <Label for="descripcionLargaPlano">
                Descripcion <span className="text-danger">*</span>
              </Label>
              <Input
                type="textarea"
                id="descripcionLargaPlano"
                name="descripcionLargaPlano"
                placeholder="lorem*5"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.descripcionLargaPlano}
              />
            </FormGroup>
            <FormGroup>
              <Label className="form-label">Imagen plano</Label>
              <SelectImg
                value={values.foto}
                className="plano__img"
                onChange={(id) => setFieldValue('foto', id)}
              />
            </FormGroup>

            <div className="mt-5 row">
              <Button type="submit" className="mx-1 col" color="primary">
                Guardar
              </Button>
              <Button
                outline
                type="reset"
                color="secondary"
                className="mx-1 col"
                onClick={toggleSidebar}
              >
                Cancelar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Sidebar>
  )
}

export default SidebarNuevosPlanos
