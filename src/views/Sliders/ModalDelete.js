import {
  Button,
  Modal as ModalForm,
  ModalHeader,
  ModalFooter
} from 'reactstrap'

const Modal = ({ open, toggleModal }) => {
  const handleCloseModal = () => {
    toggleModal()
  }

  return (
    <ModalForm scrollable centered isOpen={open} toggle={handleCloseModal}>
      <ModalHeader toggle={handleCloseModal}>
        ¿Está seguro de eliminar el slider?
      </ModalHeader>
      <ModalFooter>
        <Button color="danger" onClick={handleCloseModal}>
          Salir
        </Button>

        <Button color="success" outline onClick={handleCloseModal}>
          Confirmar
        </Button>
      </ModalFooter>
    </ModalForm>
  )
}
export default Modal
