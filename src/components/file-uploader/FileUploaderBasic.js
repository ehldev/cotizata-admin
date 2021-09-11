import Uppy from '@uppy/core'
import { DragDrop } from '@uppy/react'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import {
  GetImagenesDocument as GET_IMGS,
  useCreateImageMutation
} from '../../generated/graphql'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'

const FileUploaderBasic = ({ setImgs, maxFiles = 1 }) => {
  const [mutate] = useCreateImageMutation()

  const uppy = new Uppy({
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: maxFiles },
    autoProceed: true
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', async (file, preview) => {
    await mutate({
      variables: {
        input: { descripcion: 'TEST' },
        imagen: file.data
      },
      update: (cache, { data }) => {
        const { GetImagenes } = cache.readQuery({ query: GET_IMGS })
        if (!GetImagenes) GetImagenes = []
        cache.writeQuery({
          query: GET_IMGS,
          data: { GetImagenes: [data.CreateImage, ...GetImagenes] }
        })
      }
    })
    setImgs([file.name])
  })

  const locale = {
    strings: {
      dropHereOr: 'Deja caer la foto aqui o %{browse}',
      browse: 'seleccionala'
    }
  }
  return (
    <div className="mb-2">
      <DragDrop locale={locale} uppy={uppy} />
    </div>
  )
}

export default FileUploaderBasic
