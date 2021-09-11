// ** React Imports
import { Fragment, useMemo, useState } from 'react'

// ** Store & Actions
import { useSelector } from 'react-redux'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import { selectThemeColors } from '@utils'
import { useApolloClient } from '@apollo/client'
import { MoreVertical, Edit, Trash } from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  CustomInput,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table as TableBasic,
  Button
} from 'reactstrap'
import Swal from 'sweetalert2'
import { CustomHeader } from './CustomHeader'
import withReactContent from 'sweetalert2-react-content'

// ** Styles
import 'animate.css/animate.css'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'
import { useHistory } from 'react-router-dom'
import {
  useDeleteUsuarioMutation,
  useUpdateUsuarioMutation,
  GetAllUsersDocument as GET_ALL_USERS,
  useGetBusquedaAsesoresQuery
} from '../../generated/graphql'
import useLocation from '../../utility/hooks/useLocation'

import styles from './styles.module.css'

const MySwal = withReactContent(Swal)

const UsersList = () => {
  const history = useHistory()
  const cache = useApolloClient()
  const [variables, setVariables] = useState({
    page: 1,
    asesor: '',
    distrito: '',
    provincia: '',
    departamento: '',
    numberPaginate: 10,
    orden: 'desc'
  })
  const [DepCode, setDepCode] = useState({ value: 0, label: 'Departamento' })
  const [ProCode, setProCode] = useState({ value: 0, label: 'Provincia' })
  const [DistCode, setDistCode] = useState({ value: 0, label: 'Distrito' })
  const { depar, provincia, distrito } = useLocation({
    DepCode: DepCode.value,
    ProCode: ProCode.value
  })

  // QUERY para lista de usuarios
  const { data, refetch } = useGetBusquedaAsesoresQuery({ variables })

  // Mutation para actualizar
  const [updateUser] = useUpdateUsuarioMutation({
    onCompleted: ({ UpdateUsuario }) => console.log(UpdateUsuario)
  })

  // Mutation para eliminar
  const [deleteUser] = useDeleteUsuarioMutation({
    onError: ({ graphQLErrors }) => console.log(graphQLErrors),
    onCompleted: ({ DeleteUsuario }) => {
      if (DeleteUsuario === 'ELIMINADO') {
        console.log(DeleteUsuario)
        toast.success('Usuario eliminado con exito.')
      }
    }
  })

  const users = data ? data.GetBusquedaAsesores.data : []

  const handleFilter = () => {
    const prov = parseInt(ProCode.value)
    const depar = parseInt(DepCode.value)
    const dist = parseInt(DistCode.value)

    setVariables((v) => ({
      ...v,
      distrito: dist === 0 ? '' : dist,
      provincia: prov === 0 ? '' : prov,
      departamento: depar === 0 ? '' : depar
    }))
  }

  // ** Handle Alert
  const HandleDelete = (user) => {
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
    }).then(async function (result) {
      if (result.value) {
        const {
          Provincia,
          Distrito,
          Departamento,
          Documento,
          tipoUsuario,
          apiToken,
          confirmPassword,
          ...rest
        } = user
        const payload = {
          ...rest,
          ProvCodi: parseInt(Provincia.ProvCodi),
          DistCodi: parseInt(Distrito.DistCodi),
          DeparCodi: parseInt(Departamento.DeparCodi)
          // tipoDocumento: parseInt(Documento.value),
          // tipoUsuario: parseInt(tipoUsuario.value)
        }
        const input = {
          ...rest,
          foto: user.foto.id
        }
        await deleteUser({
          variables: {
            input: { ...input }
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
          page: 1,
          asesor: '',
          distrito: '',
          provincia: '',
          departamento: '',
          numberPaginate: 10,
          orden: 'desc'
        })
      }
    })
  }

  return (
    <Fragment>
      <Card>
        <div className="mx-3">
          <CustomHeader />
        </div>
        <TableBasic className={styles['table']} responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombres</th>
              <th>Documento</th>
              <th>Email</th>
              <th className="text-center">Celular</th>
              <th className="text-center">Tipo</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              /* eslint-disable */
              const documento =
                user.tipoDocumento === 0
                  ? 'DNI'
                  : user.tipoDocumento === 1
                  ? 'PAS'
                  : 'CE'
              /* eslint-enable */
              return (
                <tr key={user.userId}>
                  <td>
                    <span className="align-middle font-weight-bold">
                      #{user.userId}
                    </span>
                  </td>
                  <td>
                    <div>
                      {user.nombres} {user.apellidos}
                    </div>
                  </td>
                  <td>
                    {documento} - {user.nroDocumento}
                  </td>
                  <td>{user.email}</td>
                  <td className="text-center">{user.celular}</td>
                  <td className="text-center">
                    <span>Administrador</span>
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
                        <DropdownItem
                          className="w-100"
                          onClick={(e) => {
                            e.preventDefault()
                            history.push(`/editar-asesor/${user.userId}`, user)
                          }}
                        >
                          <Edit className="mr-50" size={15} />{' '}
                          <span className="align-middle">Editar</span>
                        </DropdownItem>
                        <DropdownItem
                          className="w-100"
                          onClick={(e) => {
                            e.preventDefault()
                            HandleDelete(user)
                          }}
                        >
                          <Trash className="mr-50" size={15} />
                          <span className="align-middle">Borrar</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TableBasic>
      </Card>
    </Fragment>
  )
}

export default UsersList
