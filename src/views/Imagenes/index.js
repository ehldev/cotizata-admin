import React from 'react'

import Card from 'reactstrap/lib/Card'
import Button from 'reactstrap/lib/Button'
import CardBody from 'reactstrap/lib/CardBody'

import Modal from './Modal'
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
              <h1 className="flex-fill">Imagenes</h1>
              <Button onClick={onToggle} className="mr-1" color="primary">
                Agregar Imagenes
              </Button>
            </div>

            <div className={styles.imageGrid}>
              {imagenes.map(({ id, url, descripcion }) => (
                <Imagen key={id} src={url} alt={descripcion}>
                  <button onClick={() => handleDeleteImg({ id })}>
                    <Trash size={15} />
                  </button>
                </Imagen>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
      <Modal {...{ open, toggleModal: onToggle }} />
    </>
  )
}

export default ImagenesView
