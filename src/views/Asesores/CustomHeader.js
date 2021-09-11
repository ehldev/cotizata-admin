import { Input, Row, Col, Label, CustomInput, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'

// ** Table Header
export const CustomHeader = ({
  toggleSidebar,
  handlePerPage,
  rowsPerPage,
  handleFilter,
  searchTerm
}) => {
  const history = useHistory()

  return (
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
              // style={{
              //   width: '5rem',
              //   padding: '0 0.8rem',
              //   backgroundPosition:
              //     'calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0'
              // }}
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
              id="search-invoice"
              className="ml-50 w-100"
              type="text"
              // value={searchTerm}
              // onChange={(e) => handleFilter(e.target.value)}
            />
          </div>
          <Button.Ripple
            outline
            color="primary"
            onClick={() => history.push('/nuevo-asesor')}
          >
            Nuevo asesor
          </Button.Ripple>
        </Col>
      </Row>
    </div>
  )
}
