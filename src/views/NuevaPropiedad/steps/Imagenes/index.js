import { useEffect, useState } from 'react'
import { Plus, Trash, Edit } from 'react-feather'
import Modal from './Modal'

import { Button, ButtonGroup } from 'reactstrap'
import Imagen from '../../../../components/Imagen'
import useDisclosure from '../../../../utility/hooks/useDisclosure'

import styles from './styles.module.css'

const Imagenes = ({ stepper, state, setState, reset, handleCreatePropi }) => {
  const [imgs, setImgs] = useState([])
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
    if (imgs.length === 0) {
    }

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
    await handleCreatePropi(propMap)
    reset()
    stepper.next()
  }

  return (
    <div className={styles['image-container']}>
      <div className="d-flex mb-1">
        <div>
          <h1 className="flex-fill">Imagenes</h1>
          <small className="text-muted">
            Para poder avanzar debes agregar fotos a la propiedad
          </small>
        </div>
      </div>

      <div className={styles['imageGrid']}>
        {imgs.map(({ id, url, descripcion }) => {
          const foto1 = state.fotoPrincipal === parseInt(id)
          const foto2 = state.fotoSecundaria === parseInt(id)

          return (
            <Imagen key={id} src={url} alt={descripcion}>
              <ButtonGroup className={styles['pos-absolute']}>
                <Button.Ripple onClick={() => deleteImg(id)}>
                  <Trash size={14} />
                </Button.Ripple>
                <Button.Ripple
                  onClick={() => imgPrincipal(id)}
                  color={foto1 ? 'primary' : 'dark'}
                >
                  1
                </Button.Ripple>
                <Button.Ripple
                  color={foto2 ? 'primary' : 'dark'}
                  onClick={() => imgSecundaria(id)}
                >
                  2
                </Button.Ripple>
              </ButtonGroup>
            </Imagen>
          )
        })}
        <div
          onClick={onToggle}
          className={`${styles['image-box']} btn-unstyled`}
        >
          <Plus size={50} />
        </div>
      </div>
      <div className="align-self-end mt-2">
        <Button.Ripple
          color="primary"
          onClick={handleNext}
          disabled={imgs.length === 0}
        >
          Crear propiedad
        </Button.Ripple>
      </div>
      <Modal {...{ open, onToggle, imgs, setImgs }} />
    </div>
  )
}

export default Imagenes
