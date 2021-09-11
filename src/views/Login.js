import { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  Row,
  Col,
  Form,
  Alert,
  Label,
  Input,
  Button,
  Spinner,
  CardTitle,
  FormGroup,
  CustomInput
} from 'reactstrap'

// Components
import { useSkin } from '@hooks/useSkin'
import InputPasswordToggle from '@components/input-password-toggle'

// utils
import { handleLogin } from '../redux/actions/auth'
import { useLoginMutation } from '../generated/graphql'

import LOGO from '../assets/images/logo/logo.svg'

// Styles
import '@styles/base/pages/page-auth.scss'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Formato de correo es invalido.')
    .required('El correo es obligatorio.'),
  password: Yup.string().required('La contraseña es obligatoria')
})

const Login = ({ history }) => {
  const dispatch = useDispatch()
  const [skin, setSkin] = useSkin()
  const [error, setError] = useState({ ok: true, msg: '' })
  const [login, { loading }] = useLoginMutation({
    onError: (err) => {}
  })

  const onDismiss = () => setError({ ok: true, msg: '' })

  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  return (
    <div className="auth-wrapper auth-v2">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/">
          <img width={120} src={LOGO} alt="" />
          <h2 className="brand-text text-primary ml-1">Dashboard</h2>
        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login V2" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="font-weight-bold mb-1">
              Bienvenido! 👋
            </CardTitle>
            <Formik
              validationSchema={loginSchema}
              initialValues={{ email: '', password: '', holdConnect: false }}
              onSubmit={async ({ holdConnect, ...input }) => {
                const { data, errors } = await login({ variables: { input } })

                if (errors) {
                  const errorMsg = errors.graphQLErrors[0].debugMessage
                  console.log(errorMsg)
                  if (
                    errorMsg === 'CONTRASEÑA_INCORRECTA' ||
                    errorMsg === 'NO_EXISTE'
                  ) {
                    setError({
                      ok: false,
                      msg: 'Correo o contraseña invalida.'
                    })
                  } else {
                    setError({
                      ok: false,
                      msg: 'Por favor contactar con el administrador.'
                    })
                  }
                  return
                }

                console.log('LOGIN', data.login)

                dispatch(handleLogin({ ...data.login, holdConnect }))

                history.push('/')
              }}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                handleChange,
                isSubmitting
              }) => {
                const valid = (field) => {
                  return errors[field] && touched[field] && errors[field]
                }
                return (
                  <Form
                    onSubmit={handleSubmit}
                    className="auth-login-form mt-2"
                  >
                    <Alert isOpen={!error.ok} toggle={onDismiss} color="danger">
                      <div className="p-1">{error.msg}</div>
                    </Alert>
                    <FormGroup>
                      <Label className="form-label" for="login-email">
                        Correo
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        autoComplete="off"
                        id="login-email"
                        invalid={valid('email')}
                        onBlur={(e) => {
                          onDismiss()
                          handleBlur(e)
                        }}
                        value={values.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        autoFocus
                      />
                      <small className="text-danger">
                        {errors.email && touched.email && errors.email}
                      </small>
                    </FormGroup>
                    <FormGroup>
                      <div className="d-flex justify-content-between">
                        <Label className="form-label" for="login-password">
                          Contraseña
                        </Label>
                        <Link to="/">
                          <small>Recuperar contraseña</small>
                        </Link>
                      </div>
                      <InputPasswordToggle
                        id="login-password"
                        name="password"
                        onBlur={(e) => {
                          onDismiss()
                          handleBlur(e)
                        }}
                        value={values.password}
                        onChange={handleChange}
                        invalid={valid('password')}
                        className="input-group-merge"
                      />
                      <small className="text-danger">
                        {errors.password && touched.password && errors.password}
                      </small>
                    </FormGroup>
                    <FormGroup>
                      <CustomInput
                        type="checkbox"
                        id="remember-me"
                        name="holdConnect"
                        onChange={handleChange}
                        value={values.holdConnect}
                        label="Mantenerme conectado"
                        className="custom-control-Primary"
                      />
                    </FormGroup>
                    <Button.Ripple
                      block
                      type="submit"
                      color="primary"
                      disabled={loading}
                    >
                      {loading ? <Spinner size="sm" className="mr-1" /> : null}
                      Ingresar
                    </Button.Ripple>
                  </Form>
                )
              }}
            </Formik>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
