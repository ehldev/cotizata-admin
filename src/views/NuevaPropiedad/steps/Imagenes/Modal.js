import { useState } from 'react'
import {
  Button,
  Modal as ModalForm,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import { Check } from 'react-feather'
import Imagen from '../../../../components/Imagen'
import { useGetImagenesQuery } from '../../../../generated/graphql'

import styles from './styles.module.css'

const Selected = ({ checked, addImg, removeImg }) => {
  const [state, setState] = useState(checked)

  const handleIMG = () => {
    setState(!state)
    if (!state) {
      addImg()
    } else {
      removeImg()
    }
  }

  return (
    <button className={state ? styles.visible : ''} onClick={handleIMG}>
      <Check size={15} color={state ? '#fff' : '#007f80'} />
    </button>
  )
}

const Modal = ({ open, onToggle, imgs, setImgs }) => {
  const { data } = useGetImagenesQuery()

  const imagenes = data ? data.GetImagenes : []

  const addImg = (img) => {
    setImgs((prevImgs) => [...prevImgs, img])
  }

  const removeImg = (img) => {
    setImgs((prevImgs) => prevImgs.filter(({ id }) => id !== img.id))
  }

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
        <div className={styles['imageGrid']}>
          {imagenes.map((img) => {
            const [check] = imgs.filter(({ id }) => id === img.id)
            return (
              <Imagen src={img.url} alt={img.descripcion}>
                <Selected
                  checked={check}
                  addImg={() => addImg(img)}
                  removeImg={() => removeImg(img)}
                />
              </Imagen>
            )
          })}
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
