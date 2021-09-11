import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Card from 'reactstrap/lib/Card'
import Button from 'reactstrap/lib/Button'
import CardBody from 'reactstrap/lib/CardBody'

import Modal from './Modal'
import ModalDelete from './ModalDelete'
import { Trash } from 'react-feather'
import useDisclosure from '../../utility/hooks/useDisclosure'

import styles from './styles.module.css'
import Imagen from '../../components/Imagen'
import {
  GetImagenesDocument as GET_ALL_IMG,
  useGetImagenesQuery,
  useDeleteImageMutation
} from '../../generated/graphql'

const ImagenesView = () => {
  const { data } = useGetImagenesQuery()
  const { open, onToggle } = useDisclosure()

  const [modalDelete, setModalDelete] = useState(false)

  const onOpenModalDelete = () => setModalDelete(true)
  const onToggleModalDelete = () => setModalDelete(!modalDelete)

  const [deleteImg] = useDeleteImageMutation({
    onError: ({ graphQLErrors }) => console.log(graphQLErrors),
    onCompleted: ({ DeleteImage }) => console.log(DeleteImage)
  })

  const imagenes = data ? data.GetImagenes : []

  const handleDeleteImg = async ({ id }) => {
    await deleteImg({
      variables: { input: { id: parseInt(id) } },
      update: (cache) => {
        cache.writeQuery({
          query: GET_ALL_IMG,
          data: {
            GetImagenes: imagenes.filter((img) => img.id !== id)
          }
        })
      }
    })
  }

  return (
    <>
      <Card>
        <CardBody>
          <div className={styles.container}>
            <div className="d-block d-sm-flex mb-1">
              <h1 className="flex-fill">Sliders</h1>
              <Link to="crear-slider">
                <Button color="primary">Agregar Slider</Button>
              </Link>
            </div>

            <div className="row row--sliders mt-3">
              {imagenes.map(({ id, url, descripcion }) => (
                <div className="col-md-6 mb-3" key={id}>
                  <Imagen src={url} alt={descripcion}>
                    <button onClick={onOpenModalDelete}>
                      <Trash size={15} />
                    </button>
                  </Imagen>

                  <div className="mt-1">
                    <p>Descripción de slider</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>

      <Modal {...{ open, toggleModal: onToggle }} />
      <ModalDelete
        {...{ open: modalDelete, toggleModal: onToggleModalDelete }}
      />
    </>
  )
}

export default ImagenesView
