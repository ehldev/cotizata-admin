import { useEffect, useState } from 'react'
import { ChevronRight } from 'react-feather'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'

import styles from './styles.module.css'

const Item = ({ tag, deleteItem }) => (
  <div className={styles['keyword_ouput-tag']}>
    <span>{tag}</span>
    <Button.Ripple
      className="btn-icon p-0"
      color="rgba(0, 127, 128, 0.12)"
      onClick={() => deleteItem(tag)}
    >
      <svg
        height="14"
        width="14"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 20 20"
      >
        <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
      </svg>
    </Button.Ripple>
  </div>
)

const Tags = ({
  valid,
  value = '',
  onChange = () => {},
  onBlur = () => {}
}) => {
  const [tag, setTag] = useState('')
  const [error, setError] = useState(false)
  const [tags, setTags] = useState(() => {
    if (value === '') return []
    return value.split(',')
  })

  useEffect(() => {
    onChange(tags.join())
  }, [tags])

  const deleteItem = (tag) => {
    setTags((tags) => tags.filter((t) => t !== tag))
  }

  const addItem = () => {
    setError('')
    if (tags.includes(tag)) {
      setError('La keyword ingresada ya existe.')
      return setTag('')
    }
    if (tag === '') {
      setError('Este campo es requerido.')
      return setTag('')
    }
    setTags((tags) => [...tags, tag])
    setTag('')
  }

  return (
    <>
      <InputGroup>
        <Input
          value={tag}
          invalid={valid}
          onBlur={() => setError(false)}
          placeholder="Ingresa las keywords"
          className={styles['keyword_input']}
          onChange={({ target }) => setTag(target.value)}
          onKeyPress={({ code }) => {
            if (code === 'Enter' || code === 'NumpadEnter') addItem()
          }}
        />
        <InputGroupAddon addonType="append">
          <Button
            type="button"
            color="primary"
            className="btn-icon"
            onClick={() => addItem()}
          >
            <ChevronRight size={15} />
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <div className={styles['keyword_ouput']}>
        {tags.length === 0 ? (
          <p className="text-muted p-0 m-0">Keywords</p>
        ) : (
          tags.map((tag, i) => <Item key={tag + i} {...{ tag, deleteItem }} />)
        )}
      </div>

      <small className="text-danger fs-6">{error}</small>
    </>
  )
}

export default Tags
