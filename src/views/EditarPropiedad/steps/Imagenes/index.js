import { useEffect, useState } from 'react'
import { Plus, Trash, Edit } from 'react-feather'
import Modal from './Modal'

import './index.css'
import { Button, ButtonGroup } from 'reactstrap'

import useDisclosure from '../../../../utility/hooks/useDisclosure'

const Imagenes = ({ stepper, state, setState, reset, handleUpdatePropi }) => {
  const [imgs, setImgs] = useState(state.galeria)
  const { open, onToggle } = useDisclosure()

  useEffect(() => {
    setState((prev) => ({ ...prev, galeria: imgs }))
  }, [imgs])

  const deleteImg = (id) => {
    setImgs((prev) => prev.filter((i) => i.id !== id))
  }

  const imgPrincipal = (id) => {
    setState((prev) => ({ ...prev, fotoPrincipal: parseInt(id) }))
  }

  const imgSecundaria = (id) => {
    setState((prev) => ({ ...prev, fotoSecundaria: parseInt(id) }))
  }

  const handleNext = async () => {
    const { CONTRATO, ASESOR, CATEGORIA, Prov, Dist, Depar, galeria, ...rest } =
      state
    const propMap = {
      ...rest,
      DistCodi: parseInt(Dist.value),
      ProvCodi: parseInt(Prov.value),
      asesorId: parseInt(ASESOR.value),
      DeparCodi: parseInt(Depar.value),
      categoriaId: parseInt(CATEGORIA.value),
      tipoContrato: parseInt(CONTRATO.value),
      galeria: galeria.map(({ id }) => parseInt(id))
    }
    console.log(propMap)
    await handleUpdatePropi(propMap)
    reset()
    stepper.next()
  }

  return (
    <div className="image-container">
      <div className="d-flex mb-1">
        <h1 className="flex-fill">Imagenes</h1>
      </div>

      <div className="d-flex flex-wrap justify-content-center justify-content-md-start mb-2">
        {imgs.map(({ id, url, descripcion }) => {
          const foto1 = state.fotoPrincipal === parseInt(id)
          const foto2 = state.fotoSecundaria === parseInt(id)

          return (
            <div key={id} className="image-box pos-relative">
              <img src={url} alt={descripcion} />
              <ButtonGroup className="radiosButtons">
                <Button.Ripple
                  onClick={() => deleteImg(id)}
                  className="btn-icon imagenes_button-delete"
                >
                  <Trash size={14} />
                </Button.Ripple>
                <Button.Ripple
                  onClick={() => imgPrincipal(id)}
                  color={foto1 ? 'primary' : 'dark'}
                  className="btn-icon imagenes_button-delete"
                >
                  1
                </Button.Ripple>
                <Button.Ripple
                  color={foto2 ? 'primary' : 'dark'}
                  onClick={() => imgSecundaria(id)}
                  className="btn-icon imagenes_button-delete"
                >
                  2
                </Button.Ripple>
              </ButtonGroup>
            </div>
          )
        })}
        <div onClick={onToggle} className="btn-unstyled image-box">
          <Plus size={50} />
        </div>
      </div>
      <Button.Ripple
        color="primary"
        className="propiedad-step"
        onClick={handleNext}
      >
        Guardar propiedad
      </Button.Ripple>
      <Modal {...{ open, onToggle, imgs, setImgs }} />
    </div>
  )
}

export default Imagenes
