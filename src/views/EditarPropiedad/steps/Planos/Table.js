import { MoreVertical, Edit, Trash, Image } from 'react-feather'
import {
  Table as TableBasic,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'

import './styles.css'

const Table = ({ planos = [] }) => {
  return (
    <>
      <TableBasic className="w-full" responsive>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descripcion Larga</th>
            <th>Descripcion Corta</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {planos.map((p, i) => (
            <tr key={i}>
              <td>
                <span className="align-middle font-weight-bold">
                  {p.tituloPlano}
                </span>
              </td>
              <td>
                <div className="desc-corta">
                  <p className="text-truncate">{p.descripcionCortaPlano}</p>
                </div>
              </td>
              <td>
                <div className="desc-completa">
                  <p className="text-truncate">{p.descripcionLargaPlano}</p>
                </div>
              </td>
              <td>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="icon-btn hide-arrow"
                    color="transparent"
                    size="sm"
                    caret
                  >
                    <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                      <Edit className="mr-50" size={15} />{' '}
                      <span className="align-middle">Editar</span>
                    </DropdownItem>
                    <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                      <Trash className="mr-50" size={15} />{' '}
                      <span className="align-middle">Borrar</span>
                    </DropdownItem>
                    <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                      <Image className="mr-50" size={15} />{' '}
                      <span className="align-middle">Ver Imagenes</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </TableBasic>
    </>
  )
}

export default Table
