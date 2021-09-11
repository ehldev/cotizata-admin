import { useState } from 'react'
import {
  Button,
  Modal as ModalForm,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import { Check } from 'react-feather'
import IMGPlaceholder from '../../assets/images/pages/content-img-4.jpg'

import styles from './styles.module.css'

const Selected = () => {
  const [state, setstate] = useState(false)

  return (
    <button onClick={() => setstate(!state)}>
      {state && <Check size={15} />}
    </button>
  )
}

const Modal = ({ open, onToggle }) => {
  return (
    <ModalForm
      scrollable
      isOpen={open}
      className={styles.modal}
      toggle={() => onToggle(!open)}
    >
      <ModalHeader toggle={() => onToggle(!open)}>
        Selecciona las imagenes de la propiedad
      </ModalHeader>
      <ModalBody>
        <div className="d-flex flex-wrap justify-content-center">
          {Array(50)
            .fill(null)
            .map((_, i) => (
              <div key={i} className={styles.box}>
                <img src={IMGPlaceholder} />
                <Selected />
              </div>
            ))}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => onToggle(!open)}>
          Accept
        </Button>
      </ModalFooter>
    </ModalForm>
  )
}
export default Modal
