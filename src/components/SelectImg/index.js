import { useEffect, useState } from 'react'
import { Plus } from 'react-feather'
import { Spinner } from 'reactstrap'

import ModalIMG from '../ModalIMG'
import useDisclosure from '../../utility/hooks/useDisclosure'

import styles from './styles.module.css'
import { useGetImagenesQuery } from '../../generated/graphql'

const SelectImg = ({
  value,
  onChange = () => {},
  className = styles['img_select']
}) => {
  const [img, setImg] = useState({})
  const { open, onToggle } = useDisclosure()
  const { data, loading } = useGetImagenesQuery()

  /*eslint-disable */
  const [imagen] = data
    ? data.GetImagenes.filter((i) => i.id === value)
    : [{ id: null, url: null, descripcion: null }]
  /* eslint-enable */

  useEffect(() => {
    if (img.id) onChange(img.id)
  }, [img])

  useEffect(() => {
    if (value !== 0 && !loading && imagen) {
      return setImg(imagen)
    }
  }, [imagen])

  return (
    <>
      <div onClick={onToggle} className={className}>
        {loading ? <Spinner /> : img.url ? <img src={img.url} /> : <Plus />}
      </div>
      <ModalIMG {...{ open, onToggle, setImg }} />
    </>
  )
}

export default SelectImg
