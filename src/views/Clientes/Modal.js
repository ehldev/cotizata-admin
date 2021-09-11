import {
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Modal as ModalForm
} from 'reactstrap'

const Modal = ({ open, onToggle, activeMsg }) => {
  const handleCloseModal = () => onToggle()
  const { Cliente, descripcion, horarioContacto } = activeMsg
  return (
    <ModalForm scrollable isOpen={open} toggle={handleCloseModal}>
      <ModalHeader toggle={handleCloseModal}>Mensaje</ModalHeader>
      <ModalBody>
        <p>
          <strong>Nombre:</strong> {Cliente.nombresCliente}{' '}
          {Cliente.apellidosCliente}
        </p>
        <p>
          <strong>Horario:</strong> {horarioContacto}
        </p>
        <p>
          <strong>Telefono:</strong>{' '}
          <a href={`tel:+51${Cliente.celularCliente}`}>
            {Cliente.celularCliente}
          </a>
        </p>
        <p>
          <strong>Correo:</strong>{' '}
          <a href={`mailto:${Cliente.correoCliente}`}>
            {Cliente.correoCliente}
          </a>{' '}
        </p>

        <p>{descripcion}</p>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" outline onClick={handleCloseModal}>
          Salir
        </Button>
      </ModalFooter>
    </ModalForm>
  )
}
export default Modal
