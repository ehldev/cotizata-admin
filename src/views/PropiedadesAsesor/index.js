import Table from './Table'
import { useGetAsesorPropiedadesQuery } from '../../generated/graphql'

const PropiedadesAsesor = () => {
  const { data } = useGetAsesorPropiedadesQuery({
    fetchPolicy: 'network-only',
    variables: { page: 1, numberPaginate: 10 }
  })

  const nro = data ? data.GetAsesorPropiedades.NroItems : 0
  const propiedades = data ? data.GetAsesorPropiedades.data : []

  return (
    <div>
      <Table {...{ nro, propiedades }} />
    </div>
  )
}

export default PropiedadesAsesor
