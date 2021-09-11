import { useState } from 'react'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'

import Table from './Table'
import Sidebar from './Sidebar'

const Planos = ({ state, propiedadId }) => {
  const history = useHistory()
  const [open, setOpen] = useState(false)
  const [planos, setPlanos] = useState([])

  const toggleSidebar = () => setOpen(!open)

  return (
    <div>
      <div className="d-flex mb-1">
        <h1 className="flex-fill">Planos</h1>
        <Button.Ripple outline onClick={toggleSidebar} color="primary">
          Agregar Plano
        </Button.Ripple>
      </div>
      <Table {...{ planos }} />
      <Button.Ripple
        onClick={() => history.push('/propiedades')}
        color="primary"
      >
        Siguiente
      </Button.Ripple>
      <Sidebar {...{ open, toggleSidebar, state, setPlanos, propiedadId }} />
    </div>
  )
}

export default Planos
