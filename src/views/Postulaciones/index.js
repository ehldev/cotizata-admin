import { useState } from 'react'
import {
  Card,
  CardBody,
  Table,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'
import Modal from './Modal'
import { MoreVertical, Edit, Trash, File } from 'react-feather'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import {
  useDeletePostulanteMutation,
  useGetAllPostulantesQuery
} from '../../generated/graphql'
import useDisclosure from '../../utility/hooks/useDisclosure'

// ** Styles
import 'animate.css/animate.css'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'

const postulantes = {
  GetAllPostulantes: {
    data: [],
    NroItems: 0
  }
}

export const postulante = {
  apellidos: '',
  celular: '',
  ciudad: '',
  descripcion: '',
  direccion: '',
  email: '',
  estado: 1,
  nombre: ''
}

const MySwal = withReactContent(Swal)

const Postulaciones = () => {
  const { open, onToggle } = useDisclosure()
  const [active, setActive] = useState(postulante)

  const [deletePostulacion] = useDeletePostulanteMutation({
    onError: ({ graphQLErrors }) => console.log(graphQLErrors[0])
  })
  const { data = postulantes, refetch } = useGetAllPostulantesQuery({
    variables: { estado: '1', page: 1, numberPaginate: 10 }
  })

  console.log(data)

  const HandleDelete = async (email) => {
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
        await deletePostulacion({
          variables: {
            input1: { email }
          }
        })
        MySwal.fire({
          icon: 'success',
          title: 'Eliminado!',
          text: 'El Asesor ha sido eliminado.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
        refetch({
          variables: {
            page: 1,
            estado: '1',
            numberPaginate: 10
          }
        })
      }
    })
  }

  return (
    <>
      <Modal {...{ open, onToggle, active }} />
      <Card>
        <CardBody>
          <h1>Postulaciones</h1>
        </CardBody>
        <Table responsive>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>Ciudad</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.GetAllPostulantes.data.map((form, i) => (
              <tr key={i}>
                <td>
                  {form.nombre} {form.apellidos}
                </td>
                <td>{form.celular}</td>
                <td>{form.email}</td>
                <td>{form.ciudad}</td>
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
                          HandleDelete(form.email)
                        }}
                      >
                        <Trash className="mr-50" size={15} />{' '}
                        <span className="align-middle">Borrar</span>
                      </DropdownItem>
                      <DropdownItem
                        onClick={(e) => {
                          e.preventDefault()
                          onToggle()
                          setActive(form)
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

export default Postulaciones
