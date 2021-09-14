// ** React Imports
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

// ** Third Party Components
import { MoreVertical, Edit, Trash, Image } from 'react-feather'
import {
  Row,
  Col,
  Card,
  Label,
  Button,
  CustomInput,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Table as TableBasic,
  UncontrolledDropdown,
  UncontrolledTooltip as Tooltip
} from 'reactstrap'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { propiEditMap } from '../../utility/propiEditMap'

import {
  GetAllPropiedadesDocument as GET_ALL_PROPI,
  useGetAllPropiedadesQuery,
  useDeletePropiedadesMutation,
  useUpdatePropiedadesMutation,
  useGetSlugPropiedadesLazyQuery
} from '../../generated/graphql'

// ** Styles
import 'animate.css/animate.css'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import styles from './styles.module.css'

const MySwal = withReactContent(Swal)

const ListaPropiedades = () => {
  const history = useHistory()

  const [deletePropi] = useDeletePropiedadesMutation({
    onError: ({ graphQLErrors }) => console.log(graphQLErrors),
    onCompleted: ({ DeletePropiedades }) => console.log(DeletePropiedades)
  })

  // ** Handle Alert
  const HandleDelete = (propiedadId) => {
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
        await deletePropi({ variables: { input: { propiedadId } } })
        refetch()
        MySwal.fire({
          icon: 'success',
          title: 'Eliminada!',
          text: 'La Propiedad ha sido eliminada.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }

  const imagenes = [
    {
      id: 1,
      imagenPrincipal:
        'https://cotizaya.pe/wp-content/uploads/2020/01/COTIZA.PE-WEB-NOMBRE-CABECERA.png',
      titulo: 'Imagen de banner'
    },
    {
      id: 2,
      imagenPrincipal:
        'https://cotizaya.pe/wp-content/uploads/2020/01/COTIZA.PE-WEB-NOMBRE-CABECERA.png',
      titulo: 'Imagen de banner 2'
    },
    {
      id: 3,
      imagenPrincipal:
        'https://cotizaya.pe/wp-content/uploads/2020/01/COTIZA.PE-WEB-NOMBRE-CABECERA.png',
      titulo: 'Imagen de banner 3'
    }
  ]

  return (
    <>
      <Card>
        <div className="mx-3">
          <div className="invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75">
            <Row>
              <Col xl="6" className="d-flex align-items-center p-0">
                <div className="d-flex align-items-center w-100">
                  <Label for="rows-per-page">Mostrar</Label>
                  <CustomInput
                    className="form-control mx-50"
                    type="select"
                    id="rows-per-page"
                    style={{
                      width: '5rem',
                      padding: '0 0.8rem',
                      backgroundPosition:
                        'calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0'
                    }}
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </CustomInput>
                  <Label for="rows-per-page">elementos</Label>
                </div>
              </Col>
              <Col
                xl="6"
                className="d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1"
              >
                <Button.Ripple
                  onClick={() => history.push('/agregar-slider')}
                  color="primary"
                  outline
                  // onClick={toggleSidebar}
                >
                  Registrar slider
                </Button.Ripple>
              </Col>
            </Row>
          </div>
        </div>
        <TableBasic className="w-full" responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th className="px-0">Imagen</th>
              <th className="px-0">Título</th>
              <th className="px-0">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {imagenes.map((p, i) => (
              <tr key={p.id}>
                <td>
                  <span className="align-middle font-weight-bold">#{p.id}</span>
                </td>
                <td className="px-0">
                  <div>
                    <img src={p.imagenPrincipal} width="70px" />
                  </div>
                </td>
                <td className="px-0">
                  <div className={styles['cell-titulo']}>
                    <p className="text-truncate mb-0">{p.titulo}</p>
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
                      <DropdownItem
                        className="w-100"
                        onClick={(e) => {
                          e.preventDefault()
                          history.push(
                            `/editar-propiedad/${p.slug}`,
                            propiEditMap(p)
                          )
                        }}
                      >
                        <Edit className="mr-50" size={15} />{' '}
                        <span className="align-middle">Editar</span>
                      </DropdownItem>
                      <DropdownItem
                        className="w-100"
                        onClick={(e) => {
                          e.preventDefault()
                          HandleDelete(p.propiedadId)
                        }}
                      >
                        <Trash className="mr-50" size={15} />
                        <span className="align-middle">Borrar</span>
                      </DropdownItem>
                      <DropdownItem
                        href="/"
                        onClick={(e) => {
                          e.preventDefault()
                          onToggle()
                        }}
                      >
                        <Image className="mr-50" size={15} />{' '}
                        <span className="align-middle">Ver detalles</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </TableBasic>
      </Card>
    </>
  )
}

export default ListaPropiedades
