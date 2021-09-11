import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Badge,
  Button,
  CustomInput,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Table as TableBasic,
  UncontrolledDropdown,
  UncontrolledTooltip as Tooltip
} from 'reactstrap'
import { MoreVertical, Edit, Trash, Image } from 'react-feather'

import styles from './styles.module.css'

const Table = ({ propiedades = [] }) => {
  return (
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
                  disabled
                />
              </div>
              <Button.Ripple outline disabled color="primary">
                Nueva propiedad
              </Button.Ripple>
            </Col>
          </Row>
        </div>
      </div>
      <TableBasic className="w-full" responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th className="px-0">Titulo</th>
            <th className="px-0">Slug</th>
            <th className="px-1 px-xl-0 text-center">Baños</th>
            <th className="px-1 px-xl-0 text-center">Cuartos</th>
            <th className="px-1 px-xl-0 text-center">Pisos</th>
            <th>Contrato</th>
            <th>Direccion</th>
            {/* <th className="px-0 text-center">Estado</th>
            <th className="px-0 text-center">Destacar</th> */}
            <th className="px-0 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {propiedades.map((p, i) => (
            <tr key={p.propiedadId}>
              <td>
                <span className="align-middle font-weight-bold">
                  #{p.propiedadId}
                </span>
              </td>
              <td className="px-0">
                <div className={styles['cell-titulo']}>
                  <p className="text-truncate mb-0">{p.titulo}</p>
                </div>
              </td>
              <td className="px-0">
                <div className={styles['cell-titulo']}>
                  <p className="text-truncate mb-0">{p.slug}</p>
                </div>
              </td>
              <td className="text-center px-0">{p.banios}</td>
              <td className="text-center px-0">{p.cuartos}</td>
              <td className="text-center px-0">{p.pisos}</td>
              <td>
                <Badge color="success">
                  {p.tipoContrato === 1 ? 'Venta' : 'Alquiler'}
                </Badge>
              </td>
              <td className={styles['cell-direccion']}>
                <p className="text-truncate mb-0" id="direccion">
                  {p.direccion}
                </p>
                <Tooltip
                  className="d-block d-xl-none"
                  placement="bottom"
                  target="direccion"
                >
                  {p.direccion}
                </Tooltip>
              </td>
              {/* <td className="text-center px-0">
                <CustomInput
                  inline
                  type="switch"
                  name="estado"
                  className="ml-2"
                  id={`primary-${i}`}
                  checked={p.estado === 1}
                  onChange={({ target: { checked } }) => {
                    handleChangeEstado(p, checked)
                  }}
                />
              </td> */}
              {/* <td className="text-center px-0">
                <CustomInput
                  inline
                  type="switch"
                  className="ml-2"
                  id={`secundary-${i}`}
                  name="primary"
                  checked={p.destacado === 1}
                  onChange={({ target: { checked } }) => {
                    handleChangeDestacado(p, checked)
                  }}
                />
              </td> */}
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
                    {/* <DropdownItem
                      className="w-100"
                      onClick={(e) => {
                        e.preventDefault()
                        history.push(
                          `/editar-propiedad/${p.propiedadId}`,
                          propiEditMap(p)
                        )
                      }}
                    >
                      <Edit className="mr-50" size={15} />{' '}
                      <span className="align-middle">Editar</span>
                    </DropdownItem> */}
                    {/* <DropdownItem
                      className="w-100"
                      onClick={(e) => {
                        e.preventDefault()
                        HandleDelete(p.propiedadId)
                      }}
                    >
                      <Trash className="mr-50" size={15} />
                      <span className="align-middle">Borrar</span>
                    </DropdownItem> */}
                    <DropdownItem
                      href="/"
                      onClick={(e) => {
                        e.preventDefault()
                        // onToggle()
                      }}
                    >
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
    </Card>
  )
}

export default Table
