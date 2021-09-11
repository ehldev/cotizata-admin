import styles from './styles.module.css'

const ErrorMessage = ({ errors, touched, name }) => {
  const inValid = errors[name] && touched[name]
  if (errors[name]?.value) {
    return (
      <>
        {inValid ? (
          <p className={`text-danger ${styles['error-message']}`}>
            {errors[name].value}
          </p>
        ) : null}
      </>
    )
  }
  return (
    <>
      {inValid ? (
        <p className={`text-danger ${styles['error-message']}`}>
          {errors[name]}
        </p>
      ) : null}
    </>
  )
}

export default ErrorMessage
