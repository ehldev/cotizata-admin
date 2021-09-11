import { useState } from 'react'
import {
  Button,
  Modal as ModalForm,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import { Check } from 'react-feather'

import './index.css'
import { useGetImagenesQuery } from '../../../../generated/graphql'

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

  return <button onClick={handleIMG}>{state && <Check size={15} />}</button>
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
      className="image-modal"
    >
      <ModalHeader toggle={onToggle}>
        Selecciona las imagenes de la propiedad
      </ModalHeader>
      <ModalBody>
        <div className="d-flex flex-wrap justify-content-center">
          {imagenes.map((img) => {
            const [check] = imgs.filter(({ id }) => id === img.id)
            return (
              <div key={img.id} className="image-box pos-relative">
                <img src={img.url} alt={img.descripcion} />
                <Selected
                  checked={check}
                  addImg={() => addImg(img)}
                  removeImg={() => removeImg(img)}
                />
              </div>
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
