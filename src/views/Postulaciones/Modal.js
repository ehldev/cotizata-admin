import {
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Modal as ModalForm
} from 'reactstrap'
import { postulante } from '.'

const Modal = ({ open, onToggle, active = postulante }) => {
  const handleCloseModal = () => onToggle()
  return (
    <ModalForm scrollable isOpen={open} toggle={handleCloseModal}>
      <ModalHeader toggle={handleCloseModal}>Postulación</ModalHeader>
      <ModalBody>
        <p>
          <strong>Nombre:</strong> {active.nombre} {active.apellidos}
        </p>
        <p>
          <strong>Ciudad:</strong> {active.ciudad}
        </p>
        <p>
          <strong>Telefono:</strong>{' '}
          <a href={`tel:+51${active.celular}`}>{active.celular}</a>
        </p>
        <p>
          <strong>Correo:</strong>{' '}
          <a href={`mailto:${active.email}`}>{active.email}</a>{' '}
        </p>

        <p>{active.descripcion}</p>
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
