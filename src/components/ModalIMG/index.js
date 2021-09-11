import {
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Modal as ModalForm
} from 'reactstrap'
import { useGetImagenesQuery } from '../../generated/graphql'

import styles from './styles.module.css'

const Modal = ({ open, onToggle, setImg = () => {} }) => {
  const { loading, data } = useGetImagenesQuery()

  const imagenes = data ? data.GetImagenes : []

  return (
    <ModalForm
      scrollable
      isOpen={open}
      toggle={onToggle}
      className={styles['image-modal']}
    >
      <ModalHeader toggle={onToggle}>
        Selecciona las imagenes de la propiedad
      </ModalHeader>
      <ModalBody>
        <div className={styles['image-container']}>
          <div className="d-flex flex-wrap">
            {imagenes.map(({ id, url, descripcion }) => (
              <figure
                key={id}
                className={styles['image-box']}
                onClick={() => {
                  setImg({ id, url, descripcion })
                  onToggle()
                }}
              >
                <img src={url} alt={descripcion} />
              </figure>
            ))}
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onToggle}>
          Accept
        </Button>
      </ModalFooter>
    </ModalForm>
  )
}
export default Modal
