import { useState } from 'react'
import { MoreVertical, File, Trash } from 'react-feather'
import {
  Table,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Card,
  CardBody
} from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useDisclosure from '../../utility/hooks/useDisclosure'
import Modal from './Modal'

// ** Styles
import 'animate.css/animate.css'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'
import {
  useGetAllFormulariosQuery,
  useDeleteFormularioMutation,
  GetAllFormulariosDocument as GET_ALL_FORMS
} from '../../generated/graphql'

const MySwal = withReactContent(Swal)

const Clientes = () => {
  const [id, setId] = useState(null)
  const { open, onToggle } = useDisclosure()
  const [activeMsg, setActiveMsg] = useState({
    descripcion: '',
    Cliente: {
      correoCliente: '',
      nombresCliente: '',
      celularCliente: '',
      apellidosCliente: ''
    }
  })

  const { data } = useGetAllFormulariosQuery({
    fetchPolicy: 'network-only',
    variables: { numberPaginate: 10, estado: '1', page: 1 }
  })

  const [deleteForm, { client }] = useDeleteFormularioMutation({
    onError: ({ graphQLErrors }) => {
      const err = graphQLErrors[0].debugMessage
      if (err === 'ELIMINADO') {
        client.cache.writeQuery({
          query: GET_ALL_FORMS,
          variables: { numberPaginate: 10, estado: '1', page: 1 },
          data: {
            GetAllFormularios: {
              NroItems: data.GetAllFormularios.NroItems - 1,
              data: data.GetAllFormularios.data.filter((f) => {
                return f.formularioId !== id
              })
            }
          }
        })

        setId(null)
      }
    }
  })

  const forms = data ? data.GetAllFormularios.data : []

  // ** Handle Alert
  const HandleDelete = (id) => {
    return MySwal.fire({
      title: '¿Estas seguro?',
      text: 'No podras recuperar esta información!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ml-1'
      },
      buttonsStyling: false
    }).then(async (result) => {
      if (result.value) {
        setId(id)
        await deleteForm({
          variables: { input: { formularioId: id } }
        })
        MySwal.fire({
          icon: 'success',
          title: 'Eliminado!',
          text: 'Mensaje eliminado.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }

  return (
    <>
      <Modal {...{ open, onToggle, activeMsg }} />
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
            {forms.map((form, i) => (
              <tr key={i}>
                <td>
                  {form.Cliente.nombresCliente} {form.Cliente.apellidosCliente}
                </td>
                <td>{form.Cliente.celularCliente}</td>
                <td>{form.Cliente.correoCliente}</td>
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
                      <DropdownItem
                        onClick={(e) => {
                          e.preventDefault()
                          HandleDelete(form.formularioId)
                        }}
                      >
                        <Trash className="mr-50" size={15} />{' '}
                        <span className="align-middle">Borrar</span>
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => {
                          e.preventDefault()
                          onToggle()
                          setActiveMsg(form)
                        }}
                      >
                        <File className="mr-50" size={15} />{' '}
                        <span className="align-middle">Ver mensaje</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  )
}

export default Clientes
