export const propiEditMap = (p) => {
  const {
    Provincia,
    Distrito,
    Departamento,
    Categorias,
    Asesor,
    fotoPrincipal,
    fotoSecundaria,
    tipoContrato,
    ...rest
  } = p
  return {
    ...rest,
    fotoPrincipal: parseInt(fotoSecundaria.id),
    fotoSecundaria: parseInt(fotoSecundaria.id),
    CATEGORIA: {
      value: Categorias.categoriaId,
      label: Categorias.nombreCategoria
    },
    ASESOR: {
      label: Asesor.alias,
      value: Asesor.userId
    },
    CONTRATO: {
      value: tipoContrato,
      label: tipoContrato === 1 ? 'Venta' : 'Alquiler'
    },
    Dist: { value: Distrito.DistCodi, label: Distrito.DistNom },
    Prov: { value: Provincia.ProvCodi, label: Provincia.ProvNom },
    Depar: { value: Departamento.DeparCodi, label: Departamento.DeparNom }
  }
}
