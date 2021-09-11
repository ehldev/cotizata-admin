import { MoreVertical, File, Trash } from 'react-feather'
import { Table, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Card, CardBody } from 'reactstrap'

const Clientes = () => {
  return (
    <Card>
      <CardBody>
        <h1>Clientes</h1>
      </CardBody>
      <Table responsive>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Joe Doe
          </td>
          <td>+51 999 999 999</td>
          <td>
            example@example.com
          </td>
          <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='mr-50' size={15} /> <span className='align-middle'>Borrar</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <File className='mr-50' size={15} /> <span className='align-middle'>Ver mensaje</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        
      </tbody>
    </Table>
    </Card>
  )
}

export default Clientes
