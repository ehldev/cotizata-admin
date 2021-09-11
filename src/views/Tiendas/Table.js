// ** React Imports
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

// ** Third Party Components
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { useApolloClient } from '@apollo/client'
import ReactPaginate from 'react-paginate'
import { MoreVertical, Edit, Trash, Image } from 'react-feather'
import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Badge,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  CustomInput,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Table as TableBasic,
  UncontrolledDropdown,
  UncontrolledTooltip as Tooltip
} from 'reactstrap'
import {
  GetAllPropiedadesDocument as GET_ALL_PROPI,
  useGetAllPropiedadesQuery,
  useDeletePropiedadesMutation,
  useUpdatePropiedadesMutation,
  useGetSlugPropiedadesLazyQuery
} from '../../generated/graphql'

import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import withReactContent from 'sweetalert2-react-content'
import { propiEditMap } from '../../utility/propiEditMap'

// ** Styles
import 'animate.css/animate.css'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import styles from './styles.module.css'

const MySwal = withReactContent(Swal)

const ListaPropiedades = () => {
  const history = useHistory()
  const cache = useApolloClient()
  const [searchSlug, setSearchSlug] = useState('')

  const [getPropiBySlug] = useGetSlugPropiedadesLazyQuery({
    fetchPolicy: 'network-only',
    onError: ({ graphQLErrors }) => {
      console.log(graphQLErrors[0].debugMessage)
      return toast.error('El slug ingresado no Existe.', {
        position: 'bottom-center'
      })
    },
    onCompleted: ({ GetSlugPropiedades }) => {
      console.log(GetSlugPropiedades)
      if (!GetSlugPropiedades) {
        return toast.error('El slug ingresado no Existe.', {
          position: 'bottom-center'
        })
      }
      const id = GetSlugPropiedades.propiedadId
      history.push(`/editar-propiedad/${id}`, propiEditMap(GetSlugPropiedades))
    }
  })

  const [deletePropi] = useDeletePropiedadesMutation({
    onError: ({ graphQLErrors }) => console.log(graphQLErrors),
    onCompleted: ({ DeletePropiedades }) => console.log(DeletePropiedades)
  })

  const [updatePropi] = useUpdatePropiedadesMutation({
    onError: ({ graphQLErrors }) => console.log(graphQLErrors[0].message),
    onCompleted: ({ UpdatePropiedades }) => console.log(UpdatePropiedades)
  })

  const { data } = useGetAllPropiedadesQuery({
    variables: {
      page: 1,
      estado: '',
      destacado: '',
      numberPaginate: 10
    }
  })

  // const propiedades = data ? data.GetAllPropiedades.data : []
  // const nroPropiedades = data ? data.GetAllPropiedades.NroItems : 0

  const items = [
    {
      id: 1,
      nombre: 'Tienda',
      slug: 'tienda',
      imagenPrincipal: '',
      banco: 'BCP',
      correo: 'tienda@gmail.com',
      ruc: '123456789',
      razonSocial: 'Tienda SAC'
    },
    {
      id: 2,
      nombre: 'Tienda 2',
      slug: 'tienda-2',
      imagenPrincipal: '',
      banco: 'BCP',
      correo: 'tienda2@gmail.com',
      ruc: '123456789',
      razonSocial: 'Tienda 2 SAC'
    },
    {
      id: 3,
      nombre: 'Tienda 3',
      slug: 'tienda-3',
      imagenPrincipal: '',
      banco: 'BCP',
      correo: 'tienda3@gmail.com',
      ruc: '123456789',
      razonSocial: 'Tienda 3 SAC'
    }
  ]

  const searchPropi = () => {
    getPropiBySlug({ variables: { slug: searchSlug } })
    setSearchSlug('')
  }

  const handleChangeEstado = async ({ estado, ...p }, checked) => {
    const { GetAllPropiedades } = cache.readQuery({
      query: GET_ALL_PROPI,
      variables: {
        page: 1,
        estado: '',
        destacado: '',
        numberPaginate: 10
      }
    })

    cache.writeQuery({
      query: GET_ALL_PROPI,
      variables: {
        page: 1,
        estado: '',
        destacado: '',
        numberPaginate: 10
      },
      data: {
        GetAllPropiedades: {
          ...GetAllPropiedades,
          data: GetAllPropiedades.data.map((propi) => {
            /* eslint-disable*/
            return propi.propiedadId === p.propiedadId
              ? { ...p, estado: checked ? 1 : 0 }
              : propi
            /* eslint-enable */
          })
        }
      }
    })

    const {
      Asesor,
      galeria,
      Distrito,
      Provincia,
      Categorias,
      Departamento,
      fotoPrincipal,
      fotoSecundaria,
      ...rest
    } = p

    const input = {
      ...rest,
      estado: checked ? 1 : 0,
      asesorId: Asesor.userId,
      DistCodi: Distrito.DistCodi,
      ProvCodi: Provincia.ProvCodi,
      fotoPrincipal: fotoSecundaria.id,
      DeparCodi: Departamento.DeparCodi,
      fotoSecundaria: fotoSecundaria.id,
      categoriaId: Categorias.categoriaId,
      galeria: galeria.map(({ id }) => parseInt(id))
    }

    await updatePropi({ variables: { input } })
  }
  const handleChangeDestacado = async ({ destacado, ...p }, checked) => {
    const { GetAllPropiedades } = cache.readQuery({
      query: GET_ALL_PROPI,
      variables: {
        page: 1,
        estado: '',
        destacado: '',
        numberPaginate: 10
      }
    })

    cache.writeQuery({
      query: GET_ALL_PROPI,
      variables: {
        page: 1,
        estado: '',
        destacado: '',
        numberPaginate: 10
      },
      data: {
        GetAllPropiedades: {
          ...GetAllPropiedades,
          data: GetAllPropiedades.data.map((propi) => {
            /* eslint-disable*/
            return propi.propiedadId === p.propiedadId
              ? { ...p, destacado: checked ? 1 : 0 }
              : propi
            /* eslint-enable */
          })
        }
      }
    })

    const {
      Asesor,
      galeria,
      Distrito,
      Provincia,
      Categorias,
      Departamento,
      fotoPrincipal,
      fotoSecundaria,
      ...rest
    } = p

    const input = {
      ...rest,
      destacado: checked ? 1 : 0,
      asesorId: Asesor.userId,
      DistCodi: Distrito.DistCodi,
      ProvCodi: Provincia.ProvCodi,
      fotoPrincipal: fotoSecundaria.id,
      DeparCodi: Departamento.DeparCodi,
      fotoSecundaria: fotoSecundaria.id,
      categoriaId: Categorias.categoriaId,
      galeria: galeria.map(({ id }) => parseInt(id))
    }

    await updatePropi({ variables: { input } })
  }

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
                <div className="d-flex align-items-center mb-sm-0 mb-1 mr-1">
                  <Label className="mb-0" for="search-invoice">
                    Buscar:
                  </Label>
                  <Input
                    type="text"
                    id="search-invoice"
                    className="ml-50 w-100"
                    value={searchSlug}
                    onKeyPress={({ code }) => {
                      if (code === 'Enter' || code === 'NumpadEnter') {
                        searchPropi()
                        setSearchSlug('')
                      }
                    }}
                    onChange={({ target: { value } }) => setSearchSlug(value)}
                  />
                </div>
                <Button.Ripple
                  onClick={() => history.push('/nueva-tienda')}
                  color="primary"
                  outline
                  // onClick={toggleSidebar}
                >
                  Registrar tienda
                </Button.Ripple>
              </Col>
            </Row>
          </div>
        </div>
        <TableBasic className="w-full" responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th className="px-0">Nombre</th>
              <th className="px-0">Ruc</th>
              <th className="px-1 px-xl-0 text-center">Razón social</th>
              <th className="px-1 px-xl-0 text-center">Correo</th>
              <th className="px-1 px-xl-0 text-center">Banco</th>
              <th className="px-0 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p, i) => (
              <tr key={p.id}>
                <td>
                  <span className="align-middle font-weight-bold">#{p.id}</span>
                </td>
                <td className="px-0">
                  <div className={styles['cell-titulo']}>
                    <p className="text-truncate mb-0">{p.nombre}</p>
                  </div>
                </td>
                <td className="px-0">
                  <div className={styles['cell-titulo']}>
                    <p className="text-truncate mb-0">{p.ruc}</p>
                  </div>
                </td>
                <td className="text-center px-0">
                  <div className={styles['cell-titulo']}>
                    <p className="text-truncate mb-0">{p.razonSocial}</p>
                  </div>
                </td>
                <td className="text-center px-0">
                  <div className={styles['cell-titulo']}>
                    <p className="text-truncate mb-0">{p.correo}</p>
                  </div>
                </td>
                <td className="text-center px-0">
                  <div className={styles['cell-titulo']}>
                    <p className="text-truncate mb-0">{p.banco}</p>
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
