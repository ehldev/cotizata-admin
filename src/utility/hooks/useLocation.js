import { useEffect } from 'react'
import {
  useGetDepartamentosQuery as getDep,
  useGetDistritosLazyQuery as getDistLazy,
  useGetProvinciasLazyQuery as getProvLazy
} from '../../generated/graphql'

const useLocation = ({ DepCode = null, ProCode = null }) => {
  const { data, ...rest } = getDep()
  const [getDist, { data: dataDist, ...distrito }] = getDistLazy()
  const [getProv, { data: dataProv, ...provincia }] = getProvLazy()

  useEffect(() => {
    if (DepCode) getProv({ variables: { DepCode } })
  }, [DepCode])

  useEffect(() => {
    if (ProCode) getDist({ variables: { ProCode } })
  }, [ProCode])

  const depar = data ? data.GetDepartamentos : []
  const dist = dataDist ? dataDist.GetDistritos : []
  const prov = dataProv ? dataProv.GetProvincias : []

  return {
    depar: { data: depar, ...rest },
    distrito: { data: dist, ...distrito },
    provincia: { data: prov, ...provincia }
  }
}

export default useLocation
