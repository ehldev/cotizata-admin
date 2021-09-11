// ** React Imports
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useApolloClient } from '@apollo/client'
// ** Third Party Components
import { toast } from 'react-toastify'
import ReactPaginate from 'react-paginate'
import { MoreVertical, Edit, Trash, Image } from 'react-feather'
import {
  Row,
  Col,
  Card,
  Input,
  Label,
  Button,
  CustomInput,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Table as TableBasic,
  UncontrolledDropdown
} from 'reactstrap'
import Swal from 'sweetalert2'
import Sidebar from './Sidebar'
import withReactContent from 'sweetalert2-react-content'

import useDisclosure from '../../utility/hooks/useDisclosure'

// ** Styles
import 'animate.css/animate.css'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'

import {
  useGetCategoriaQuery,
  useDeleteCategoriasMutation,
  useGetCategoriaSlugLazyQuery,
  GetCategoriaDocument as GET_ALL_CAT
} from '../../generated/graphql'

const MySwal = withReactContent(Swal)

const Categorys = () => {
  const history = useHistory()

  // ** States
  const { open, onToggle } = useDisclosure()
  const [activeCat, setActiveCat] = useState({})
  const [searchTerm, setSearchTerm] = useState('')

  const cache = useApolloClient()
  const { data } = useGetCategoriaQuery()
  const [getCatBySlug] = useGetCategoriaSlugLazyQuery({
    fetchPolicy: 'network-only',
    onCompleted: ({ GetCategoriaSlug }) => {
      if (!GetCategoriaSlug) {
        return toast.error('El slug ingresado no Existe.', {
          position: 'bottom-center'
        })
      }

      setActiveCat(GetCategoriaSlug)
      onToggle()
    }
  })
  const [deleteCategory] = useDeleteCategoriasMutation({
    onError: (err) => {}
  })

  const isEditing = Object.keys(activeCat).length === 0
  const categorias = data ? data.GetAllCategorias : []
  console.log(categorias)

  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentRole, setCurrentRole] = useState({
    value: '',
    label: 'Departamento'
  })
  const [currentPlan, setCurrentPlan] = useState({
    value: '',
    label: 'Provincia'
  })
  const [currentStatus, setCurrentStatus] = useState({
    value: '',
    label: 'Distrito'
  })

  const searchCategory = () => {
    getCatBySlug({
      variables: { slugCategoria: searchTerm }
    })
  }

  // ** Handle Alert
  const HandleDelete = (categoriaId) => {
    return MySwal.fire({
      title: '¿Estas seguro?',
      text: 'No podras recuperar esta categoria!',
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
        await deleteCategory({
          variables: { input: { categoriaId } }
        })
        const { GetAllCategorias } = cache.readQuery({ query: GET_ALL_CAT })
        cache.writeQuery({
          query: GET_ALL_CAT,
          data: {
            GetAllCategorias: GetAllCategorias.filter((cat) => {
              return cat.categoriaId !== categoriaId
            })
          }
        })
        MySwal.fire({
          icon: 'success',
          title: 'Eliminada!',
          text: 'La categoria ha sido eliminada.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }

  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Number(Math.ceil(3 / rowsPerPage))

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 1}
        activeClassName="active"
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={(page) => console.log(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousLinkClassName={'page-link'}
        previousClassName={'page-item prev'}
        containerClassName={
          'pagination react-paginate justify-content-end my-2 pr-1'
        }
      />
    )
  }

  return (
    <>
      <Card>
        <div className="mx-3 mt-2">
          <h1>Categorias</h1>
          <div className="invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75">
            <Row>
              <Col xl="6" className="d-flex align-items-center p-0">
                <div className="d-flex align-items-center w-100">
                  <Label for="rows-per-page">Mostrar</Label>
                  <CustomInput
                    className="form-control mx-50"
                    type="select"
                    id="rows-per-page"
                    // value={rowsPerPage}
                    // onChange={handlePerPage}
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
                    value={searchTerm}
                    id="search-invoice"
                    className="ml-50 w-100"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={({ code }) => {
                      if (code === 'Enter' || code === 'NumpadEnter') {
                        searchCategory()
                        setSearchTerm('')
                      }
                    }}
                  />
                </div>
                <Button.Ripple
                  outline
                  color="primary"
                  onClick={() => {
                    onToggle()
                    setActiveCat({})
                  }}
                >
                  Nueva Categoria
                </Button.Ripple>
              </Col>
            </Row>
          </div>
        </div>
        <TableBasic className="w-full" responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Slug</th>
              <th>Descripcion</th>
              <th>Keywords</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((cat, i) => (
              <tr key={cat.categoriaId}>
                <td>
                  <span className="align-middle font-weight-bold">
                    #{cat.categoriaId}
                  </span>
                </td>
                <td>{cat.nombreCategoria}</td>
                <td>{cat.slugCategoria}</td>
                <td>{cat.descripcionCategoria}</td>
                <td>{cat.KeywordsCategoria}</td>

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
                          setActiveCat(cat)
                          onToggle()
                        }}
                      >
                        <Edit className="mr-50" size={15} />{' '}
                        <span className="align-middle">Editar</span>
                      </DropdownItem>
                      <DropdownItem
                        className="w-100"
                        onClick={(e) => {
                          e.preventDefault()
                          HandleDelete(cat.categoriaId)
                        }}
                      >
                        <Trash className="mr-50" size={15} />
                        <span className="align-middle">Borrar</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </TableBasic>
        <CustomPagination />
      </Card>
      <Sidebar
        {...{
          open,
          onToggle,
          activeCat,
          setActiveCat,
          title: isEditing ? 'Nueva Categoria' : 'Editar Categoria',
          contentClassName: 'p-0',
          headerClassName: 'mb-2'
        }}
      />
    </>
  )
}

export default Categorys
