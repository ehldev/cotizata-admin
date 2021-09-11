import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: any;
  /** Can be used as an argument to upload files using https://github.com/jaydenseric/graphql-multipart-request-spec */
  Upload: any;
};

export type BusquedaAvanzadaInput = {
  tipoContrato?: Maybe<Scalars['Int']>;
  slugCategoria?: Maybe<Scalars['String']>;
  DeparCodi?: Maybe<Scalars['Int']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  DistCodi?: Maybe<Scalars['Int']>;
  montoMinimo?: Maybe<Scalars['Float']>;
  montoMaximo?: Maybe<Scalars['Float']>;
  areaMinima?: Maybe<Scalars['String']>;
  areaMaxima?: Maybe<Scalars['String']>;
  antiguedad?: Maybe<Scalars['Int']>;
  cuartos?: Maybe<Scalars['Int']>;
  banios?: Maybe<Scalars['Int']>;
  destacado?: Maybe<Scalars['Int']>;
  ordenPrecio?: Maybe<Scalars['String']>;
  ordenCreacion?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type CambiarContrasenaInput = {
  userId?: Maybe<Scalars['ID']>;
  passwordNuevo?: Maybe<Scalars['String']>;
  passwordAntiguo?: Maybe<Scalars['String']>;
};

export type Categorias = {
  __typename?: 'Categorias';
  categoriaId?: Maybe<Scalars['Int']>;
  slugCategoria?: Maybe<Scalars['String']>;
  nombreCategoria?: Maybe<Scalars['String']>;
  descripcionCategoria?: Maybe<Scalars['String']>;
  ImagenPrincipal?: Maybe<Imagenes>;
  ImagenSecundaria?: Maybe<Imagenes>;
  KeywordsCategoria?: Maybe<Scalars['String']>;
};

export type CategoriasInput = {
  categoriaId?: Maybe<Scalars['Int']>;
  nombreCategoria?: Maybe<Scalars['String']>;
  descripcionCategoria?: Maybe<Scalars['String']>;
  ImagenPrincipal?: Maybe<Scalars['Int']>;
  ImagenSecundaria?: Maybe<Scalars['Int']>;
  KeywordsCategoria?: Maybe<Scalars['String']>;
};

export type Cliente = {
  __typename?: 'Cliente';
  clienteId?: Maybe<Scalars['Int']>;
  nombresCliente?: Maybe<Scalars['String']>;
  apellidosCliente?: Maybe<Scalars['String']>;
  celularCliente?: Maybe<Scalars['String']>;
  correoCliente?: Maybe<Scalars['String']>;
};

export type ClienteInput = {
  clienteId?: Maybe<Scalars['Int']>;
  nombresCliente?: Maybe<Scalars['String']>;
  apellidosCliente?: Maybe<Scalars['String']>;
  celularCliente?: Maybe<Scalars['String']>;
  correoCliente?: Maybe<Scalars['String']>;
};




export type Departamento = {
  __typename?: 'Departamento';
  DeparCodi?: Maybe<Scalars['ID']>;
  DeparNom?: Maybe<Scalars['String']>;
};

export type Distrito = {
  __typename?: 'Distrito';
  DistCodi?: Maybe<Scalars['ID']>;
  DistNom?: Maybe<Scalars['String']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  destacado?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['Int']>;
  estadoDistrito?: Maybe<Scalars['Int']>;
  imagenPrincipal?: Maybe<Imagenes>;
  imagenSecundaria?: Maybe<Imagenes>;
};

export type DistritoInput = {
  DistCodi?: Maybe<Scalars['ID']>;
  destacado?: Maybe<Scalars['Int']>;
  estadoDistrito?: Maybe<Scalars['Int']>;
  imagenPrincipal?: Maybe<Scalars['Int']>;
  imagenSecundaria?: Maybe<Scalars['Int']>;
};

export type Formulario = {
  __typename?: 'Formulario';
  formularioId?: Maybe<Scalars['Int']>;
  horarioContacto?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['Int']>;
  clienteId?: Maybe<Scalars['Int']>;
  propiedadId?: Maybe<Scalars['Int']>;
  Propiedades?: Maybe<Propiedades>;
  Cliente?: Maybe<Cliente>;
};

export type FormularioContacto = {
  __typename?: 'FormularioContacto';
  formContactoId?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  correo?: Maybe<Scalars['String']>;
  asunto?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['Int']>;
};

export type FormularioContactoInput = {
  formContactoId?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  correo?: Maybe<Scalars['String']>;
  asunto?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['Int']>;
};

export type FormularioInput = {
  formularioId?: Maybe<Scalars['Int']>;
  horarioContacto?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['Int']>;
  clienteId?: Maybe<Scalars['Int']>;
  propiedadId?: Maybe<Scalars['Int']>;
};

export type GetAsesorses = {
  __typename?: 'GetAsesorses';
  NroItems?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<User>>;
};

export type GetDistrito = {
  __typename?: 'GetDistrito';
  NroItems?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Distrito>>;
};

export type GetFormularioContacto = {
  __typename?: 'GetFormularioContacto';
  NroItems?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<FormularioContacto>>;
};

export type GetFormularios = {
  __typename?: 'GetFormularios';
  NroItems?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Formulario>>;
};

export type GetPlanos = {
  __typename?: 'GetPlanos';
  NroItems?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Planos>>;
};

export type GetPostulantes = {
  __typename?: 'GetPostulantes';
  NroItems?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Postulantes>>;
};

export type GetPropiedades = {
  __typename?: 'GetPropiedades';
  NroItems?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Propiedades>>;
};

export type Imagenes = {
  __typename?: 'Imagenes';
  id?: Maybe<Scalars['ID']>;
  descripcion?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ImagenesInput = {
  id?: Maybe<Scalars['ID']>;
  descripcion?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CrearPostulante?: Maybe<Postulantes>;
  UpdatePostulante?: Maybe<Postulantes>;
  DeletePostulante?: Maybe<Scalars['String']>;
  CrearFormularioContacto?: Maybe<FormularioContacto>;
  UpdateFormularioContacto?: Maybe<FormularioContacto>;
  DeleteFormularioContacto?: Maybe<Scalars['String']>;
  CrearFormulario?: Maybe<Formulario>;
  UpdateFormulario?: Maybe<Formulario>;
  DeleteFormulario?: Maybe<Scalars['String']>;
  CrearPlanos?: Maybe<Planos>;
  UpdatePlanos?: Maybe<Planos>;
  DeletePlanos?: Maybe<Scalars['String']>;
  CrearPropiedades?: Maybe<Propiedades>;
  UpdatePropiedades?: Maybe<Propiedades>;
  DeletePropiedades?: Maybe<Scalars['String']>;
  CrearCategorias?: Maybe<Categorias>;
  UpdateCategorias?: Maybe<Categorias>;
  DeleteCategorias?: Maybe<Scalars['String']>;
  RecuperarContraUsuario?: Maybe<Scalars['String']>;
  login?: Maybe<User>;
  CambiarContrasenaUsuario?: Maybe<User>;
  CrearUsuario?: Maybe<User>;
  UpdateUsuario?: Maybe<User>;
  DeleteUsuario?: Maybe<Scalars['String']>;
  UpdateDistrito?: Maybe<Distrito>;
  DeleteImage?: Maybe<Scalars['String']>;
  UpdateImage?: Maybe<Imagenes>;
  CreateImage?: Maybe<Imagenes>;
};


export type MutationCrearPostulanteArgs = {
  input1: PostulantesInput;
};


export type MutationUpdatePostulanteArgs = {
  input1?: Maybe<PostulantesInput>;
};


export type MutationDeletePostulanteArgs = {
  input1: PostulantesInput;
};


export type MutationCrearFormularioContactoArgs = {
  input1: FormularioContactoInput;
};


export type MutationUpdateFormularioContactoArgs = {
  input1?: Maybe<FormularioContactoInput>;
};


export type MutationDeleteFormularioContactoArgs = {
  input1: FormularioContactoInput;
};


export type MutationCrearFormularioArgs = {
  input: ClienteInput;
  input1: FormularioInput;
};


export type MutationUpdateFormularioArgs = {
  input: ClienteInput;
  input1?: Maybe<FormularioInput>;
};


export type MutationDeleteFormularioArgs = {
  input: FormularioInput;
};


export type MutationCrearPlanosArgs = {
  input: PlanosInput;
};


export type MutationUpdatePlanosArgs = {
  input?: Maybe<PlanosInput>;
};


export type MutationDeletePlanosArgs = {
  input: PlanosInput;
};


export type MutationCrearPropiedadesArgs = {
  input: PropiedadesInput;
};


export type MutationUpdatePropiedadesArgs = {
  input?: Maybe<PropiedadesInput>;
};


export type MutationDeletePropiedadesArgs = {
  input: PropiedadesInput;
};


export type MutationCrearCategoriasArgs = {
  input: CategoriasInput;
};


export type MutationUpdateCategoriasArgs = {
  input?: Maybe<CategoriasInput>;
};


export type MutationDeleteCategoriasArgs = {
  input: CategoriasInput;
};


export type MutationRecuperarContraUsuarioArgs = {
  input: UserInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationCambiarContrasenaUsuarioArgs = {
  input: CambiarContrasenaInput;
};


export type MutationCrearUsuarioArgs = {
  input: UserInput;
};


export type MutationUpdateUsuarioArgs = {
  input?: Maybe<UserInput>;
};


export type MutationDeleteUsuarioArgs = {
  input?: Maybe<UserInput>;
};


export type MutationUpdateDistritoArgs = {
  input?: Maybe<DistritoInput>;
};


export type MutationDeleteImageArgs = {
  input: ImagenesInput;
};


export type MutationUpdateImageArgs = {
  input?: Maybe<ImagenesInput>;
};


export type MutationCreateImageArgs = {
  imagen: Scalars['Upload'];
  input?: Maybe<ImagenesInput>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Planos = {
  __typename?: 'Planos';
  planoId?: Maybe<Scalars['Int']>;
  tituloPlano?: Maybe<Scalars['String']>;
  descripcionCortaPlano?: Maybe<Scalars['String']>;
  descripcionLargaPlano?: Maybe<Scalars['String']>;
  foto?: Maybe<Imagenes>;
  Propiedades?: Maybe<Propiedades>;
};

export type PlanosInput = {
  planoId?: Maybe<Scalars['Int']>;
  tituloPlano?: Maybe<Scalars['String']>;
  descripcionCortaPlano?: Maybe<Scalars['String']>;
  descripcionLargaPlano?: Maybe<Scalars['String']>;
  foto?: Maybe<Scalars['Int']>;
  propiedadId?: Maybe<Scalars['Int']>;
};

export type Postulantes = {
  __typename?: 'Postulantes';
  postulanteId?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  apellidos?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  ciudad?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['Int']>;
};

export type PostulantesInput = {
  postulanteId?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  apellidos?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  ciudad?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['Int']>;
};

export type Propiedades = {
  __typename?: 'Propiedades';
  propiedadId?: Maybe<Scalars['Int']>;
  titulo?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tipoContrato?: Maybe<Scalars['Int']>;
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionCompleta?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['Int']>;
  destacado?: Maybe<Scalars['Int']>;
  fotoPrincipal?: Maybe<Imagenes>;
  fotoSecundaria?: Maybe<Imagenes>;
  galeria?: Maybe<Array<Imagenes>>;
  lat?: Maybe<Scalars['String']>;
  log?: Maybe<Scalars['String']>;
  cuartos?: Maybe<Scalars['Int']>;
  banios?: Maybe<Scalars['Int']>;
  pisos?: Maybe<Scalars['Int']>;
  dimensiones?: Maybe<Scalars['String']>;
  antiguedad?: Maybe<Scalars['Int']>;
  precioOferta?: Maybe<Scalars['Float']>;
  precioReal?: Maybe<Scalars['Float']>;
  areaConstruida?: Maybe<Scalars['String']>;
  ambientes?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  Departamento?: Maybe<Departamento>;
  Provincia?: Maybe<Provincia>;
  Distrito?: Maybe<Distrito>;
  Categorias?: Maybe<Categorias>;
  Asesor?: Maybe<User>;
  Planos?: Maybe<Array<Planos>>;
};

export type PropiedadesInput = {
  propiedadId?: Maybe<Scalars['Int']>;
  titulo?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tipoContrato?: Maybe<Scalars['Int']>;
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionCompleta?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['Int']>;
  destacado?: Maybe<Scalars['Int']>;
  fotoPrincipal?: Maybe<Scalars['Int']>;
  fotoSecundaria?: Maybe<Scalars['Int']>;
  galeria?: Maybe<Array<Scalars['Int']>>;
  lat?: Maybe<Scalars['String']>;
  log?: Maybe<Scalars['String']>;
  cuartos?: Maybe<Scalars['Int']>;
  banios?: Maybe<Scalars['Int']>;
  pisos?: Maybe<Scalars['Int']>;
  dimensiones?: Maybe<Scalars['String']>;
  antiguedad?: Maybe<Scalars['Int']>;
  areaConstruida?: Maybe<Scalars['String']>;
  ambientes?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  precioOferta?: Maybe<Scalars['Float']>;
  precioReal?: Maybe<Scalars['Float']>;
  DeparCodi?: Maybe<Scalars['Int']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  DistCodi?: Maybe<Scalars['Int']>;
  categoriaId?: Maybe<Scalars['Int']>;
  asesorId?: Maybe<Scalars['Int']>;
};

export type Provincia = {
  __typename?: 'Provincia';
  ProvCodi?: Maybe<Scalars['ID']>;
  ProvNom?: Maybe<Scalars['String']>;
  DeparCodi?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  GetImagenes?: Maybe<Array<Imagenes>>;
  GetDepartamentos?: Maybe<Array<Departamento>>;
  GetProvincias?: Maybe<Array<Provincia>>;
  GetDistritos?: Maybe<Array<Distrito>>;
  GetAllUsers?: Maybe<Array<User>>;
  GetCategoria?: Maybe<Array<Maybe<Categorias>>>;
  GetCategoriaSlug?: Maybe<Categorias>;
  GetIdPlanos?: Maybe<Planos>;
  GetAllPropiedades?: Maybe<GetPropiedades>;
  GetAsesorPropiedades?: Maybe<GetPropiedades>;
  GetSlugPropiedades?: Maybe<Propiedades>;
  GetBusquedaAvanzada?: Maybe<GetPropiedades>;
  GetAliasAsesorPropiedades?: Maybe<GetPropiedades>;
  GetMontoMinimo?: Maybe<Scalars['Float']>;
  GetMontoMaximo?: Maybe<Scalars['Float']>;
  GetAreaMinimo?: Maybe<Scalars['String']>;
  GetAreaMaximo?: Maybe<Scalars['String']>;
  GetAntiguedad?: Maybe<Array<Maybe<Scalars['Int']>>>;
  GetCuartos?: Maybe<Array<Maybe<Scalars['Int']>>>;
  GetBanios?: Maybe<Array<Maybe<Scalars['Int']>>>;
  GetAllFormularios?: Maybe<GetFormularios>;
  GetBusquedaAsesores?: Maybe<GetAsesorses>;
  GetAllFormularioContacto?: Maybe<GetFormularioContacto>;
  GetIdFormularioContacto?: Maybe<FormularioContacto>;
  GetAllPostulantes?: Maybe<GetPostulantes>;
  GetIdPostulantes?: Maybe<Postulantes>;
  GetAllDistritos?: Maybe<GetDistrito>;
};


export type QueryGetProvinciasArgs = {
  DepCode?: Maybe<Scalars['String']>;
};


export type QueryGetDistritosArgs = {
  ProCode?: Maybe<Scalars['String']>;
};


export type QueryGetAllUsersArgs = {
  tipoUsuario?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
};


export type QueryGetCategoriaSlugArgs = {
  slugCategoria?: Maybe<Scalars['String']>;
};


export type QueryGetIdPlanosArgs = {
  planoId?: Maybe<Scalars['Int']>;
};


export type QueryGetAllPropiedadesArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
};


export type QueryGetAsesorPropiedadesArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryGetSlugPropiedadesArgs = {
  slug?: Maybe<Scalars['String']>;
};


export type QueryGetBusquedaAvanzadaArgs = {
  input?: Maybe<BusquedaAvanzadaInput>;
};


export type QueryGetAliasAsesorPropiedadesArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  aliasAsesor?: Maybe<Scalars['String']>;
  ordenPrecio?: Maybe<Scalars['String']>;
  ordenCreacion?: Maybe<Scalars['String']>;
};


export type QueryGetAllFormulariosArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
};


export type QueryGetBusquedaAsesoresArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  departamento?: Maybe<Scalars['String']>;
  provincia?: Maybe<Scalars['String']>;
  distrito?: Maybe<Scalars['String']>;
  asesor?: Maybe<Scalars['String']>;
  orden?: Maybe<Scalars['String']>;
};


export type QueryGetAllFormularioContactoArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
};


export type QueryGetIdFormularioContactoArgs = {
  correo?: Maybe<Scalars['String']>;
};


export type QueryGetAllPostulantesArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
};


export type QueryGetIdPostulantesArgs = {
  email?: Maybe<Scalars['String']>;
};


export type QueryGetAllDistritosArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  destacado?: Maybe<Scalars['String']>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}


export type User = {
  __typename?: 'User';
  userId?: Maybe<Scalars['ID']>;
  alias?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
  nombres?: Maybe<Scalars['String']>;
  apellidos?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['Int']>;
  nroDocumento?: Maybe<Scalars['String']>;
  fechaNacimiento?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  foto?: Maybe<Imagenes>;
  estado?: Maybe<Scalars['Int']>;
  apiToken?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  whatsapp?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  Departamento?: Maybe<Departamento>;
  Provincia?: Maybe<Provincia>;
  Distrito?: Maybe<Distrito>;
};

export type UserInput = {
  userId?: Maybe<Scalars['ID']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
  alias?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  apellidos?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['Int']>;
  nroDocumento?: Maybe<Scalars['String']>;
  fechaNacimiento?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  foto?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['Int']>;
  DeparCodi?: Maybe<Scalars['Int']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  DistCodi?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  whatsapp?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'alias' | 'email' | 'userId' | 'nombres' | 'apellidos' | 'tipoUsuario' | 'nroDocumento' | 'tipoDocumento' | 'fechaNacimiento' | 'estado' | 'apiToken'>
    & { foto?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'url' | 'descripcion'>
    )>, Departamento?: Maybe<(
      { __typename?: 'Departamento' }
      & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
    )>, Provincia?: Maybe<(
      { __typename?: 'Provincia' }
      & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
    )>, Distrito?: Maybe<(
      { __typename?: 'Distrito' }
      & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado'>
    )> }
  )> }
);

export type RegistroMutationVariables = Exact<{
  input: UserInput;
}>;


export type RegistroMutation = (
  { __typename?: 'Mutation' }
  & { registro?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'alias' | 'email' | 'userId' | 'nombres' | 'apellidos' | 'tipoUsuario' | 'nroDocumento' | 'tipoDocumento' | 'fechaNacimiento' | 'estado' | 'apiToken'>
    & { foto?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'url' | 'descripcion'>
    )>, Departamento?: Maybe<(
      { __typename?: 'Departamento' }
      & Pick<Departamento, 'DeparNom' | 'DeparCodi'>
    )>, Provincia?: Maybe<(
      { __typename?: 'Provincia' }
      & Pick<Provincia, 'ProvNom' | 'ProvCodi' | 'DeparCodi'>
    )>, Distrito?: Maybe<(
      { __typename?: 'Distrito' }
      & Pick<Distrito, 'DistNom' | 'DistCodi' | 'ProvCodi' | 'destacado'>
    )> }
  )> }
);

export type CrearCategoriasMutationVariables = Exact<{
  input: CategoriasInput;
}>;


export type CrearCategoriasMutation = (
  { __typename?: 'Mutation' }
  & { CrearCategorias?: Maybe<(
    { __typename?: 'Categorias' }
    & Pick<Categorias, 'categoriaId' | 'nombreCategoria' | 'slugCategoria' | 'descripcionCategoria' | 'KeywordsCategoria'>
    & { ImagenPrincipal?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, ImagenSecundaria?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )> }
  )> }
);

export type DeleteCategoriasMutationVariables = Exact<{
  input: CategoriasInput;
}>;


export type DeleteCategoriasMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'DeleteCategorias'>
);

export type UpdateCategoriasMutationVariables = Exact<{
  input: CategoriasInput;
}>;


export type UpdateCategoriasMutation = (
  { __typename?: 'Mutation' }
  & { UpdateCategorias?: Maybe<(
    { __typename?: 'Categorias' }
    & Pick<Categorias, 'categoriaId' | 'nombreCategoria' | 'slugCategoria' | 'descripcionCategoria' | 'KeywordsCategoria'>
    & { ImagenPrincipal?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, ImagenSecundaria?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )> }
  )> }
);

export type DeleteFormularioMutationVariables = Exact<{
  input: FormularioInput;
}>;


export type DeleteFormularioMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'DeleteFormulario'>
);

export type CreateImageMutationVariables = Exact<{
  input?: Maybe<ImagenesInput>;
  imagen: Scalars['Upload'];
}>;


export type CreateImageMutation = (
  { __typename?: 'Mutation' }
  & { CreateImage?: Maybe<(
    { __typename?: 'Imagenes' }
    & Pick<Imagenes, 'id' | 'url' | 'descripcion'>
  )> }
);

export type DeleteImageMutationVariables = Exact<{
  input: ImagenesInput;
}>;


export type DeleteImageMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'DeleteImage'>
);

export type CambiarContrasenaMutationVariables = Exact<{
  input: CambiarContrasenaInput;
}>;


export type CambiarContrasenaMutation = (
  { __typename?: 'Mutation' }
  & { CambiarContrasena?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'alias' | 'email' | 'userId' | 'nombres' | 'apellidos' | 'tipoUsuario' | 'nroDocumento' | 'tipoDocumento' | 'fechaNacimiento' | 'estado' | 'apiToken'>
    & { foto?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, Departamento?: Maybe<(
      { __typename?: 'Departamento' }
      & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
    )>, Provincia?: Maybe<(
      { __typename?: 'Provincia' }
      & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
    )>, Distrito?: Maybe<(
      { __typename?: 'Distrito' }
      & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado'>
    )> }
  )> }
);

export type RecuperarContraUsuarioMutationVariables = Exact<{
  input: UserInput;
}>;


export type RecuperarContraUsuarioMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'RecuperarContraUsuario'>
);

export type CrearPlanosMutationVariables = Exact<{
  input: PlanosInput;
}>;


export type CrearPlanosMutation = (
  { __typename?: 'Mutation' }
  & { CrearPlanos?: Maybe<(
    { __typename?: 'Planos' }
    & Pick<Planos, 'planoId' | 'tituloPlano' | 'descripcionCortaPlano' | 'descripcionLargaPlano'>
    & { foto?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, Propiedades?: Maybe<(
      { __typename?: 'Propiedades' }
      & Pick<Propiedades, 'propiedadId' | 'titulo' | 'slug' | 'tipoContrato' | 'descripcionCorta' | 'descripcionCompleta' | 'video' | 'estado' | 'destacado' | 'lat' | 'log' | 'cuartos' | 'banios' | 'pisos' | 'dimensiones' | 'antiguedad' | 'areaConstruida' | 'ambientes' | 'direccion'>
    )> }
  )> }
);

export type DeletePlanosMutationVariables = Exact<{
  input: PlanosInput;
}>;


export type DeletePlanosMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'DeletePlanos'>
);

export type UpdatePlanosMutationVariables = Exact<{
  input: PlanosInput;
}>;


export type UpdatePlanosMutation = (
  { __typename?: 'Mutation' }
  & { UpdatePlanos?: Maybe<(
    { __typename?: 'Planos' }
    & Pick<Planos, 'planoId' | 'tituloPlano' | 'descripcionCortaPlano' | 'descripcionLargaPlano'>
    & { foto?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, Propiedades?: Maybe<(
      { __typename?: 'Propiedades' }
      & Pick<Propiedades, 'propiedadId' | 'titulo' | 'slug' | 'tipoContrato' | 'descripcionCorta' | 'descripcionCompleta' | 'video' | 'estado' | 'destacado' | 'lat' | 'log' | 'cuartos' | 'banios' | 'pisos' | 'dimensiones' | 'antiguedad' | 'areaConstruida' | 'ambientes' | 'direccion'>
    )> }
  )> }
);

export type DeletePostulanteMutationVariables = Exact<{
  input1: PostulantesInput;
}>;


export type DeletePostulanteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'DeletePostulante'>
);

export type CrearPropiedadesMutationVariables = Exact<{
  input: PropiedadesInput;
}>;


export type CrearPropiedadesMutation = (
  { __typename?: 'Mutation' }
  & { CrearPropiedades?: Maybe<(
    { __typename?: 'Propiedades' }
    & Pick<Propiedades, 'propiedadId' | 'titulo' | 'slug' | 'tipoContrato' | 'descripcionCorta' | 'descripcionCompleta' | 'video' | 'estado' | 'destacado' | 'lat' | 'log' | 'cuartos' | 'banios' | 'pisos' | 'dimensiones' | 'antiguedad' | 'areaConstruida' | 'ambientes' | 'direccion'>
    & { fotoPrincipal?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, fotoSecundaria?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, galeria?: Maybe<Array<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>>, Departamento?: Maybe<(
      { __typename?: 'Departamento' }
      & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
    )>, Provincia?: Maybe<(
      { __typename?: 'Provincia' }
      & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
    )>, Distrito?: Maybe<(
      { __typename?: 'Distrito' }
      & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado'>
    )>, Categorias?: Maybe<(
      { __typename?: 'Categorias' }
      & Pick<Categorias, 'categoriaId' | 'slugCategoria' | 'nombreCategoria' | 'descripcionCategoria' | 'KeywordsCategoria'>
      & { ImagenPrincipal?: Maybe<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )>, ImagenSecundaria?: Maybe<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )> }
    )>, Asesor?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'alias' | 'tipoUsuario' | 'nombres' | 'apellidos' | 'tipoDocumento' | 'nroDocumento' | 'fechaNacimiento' | 'email' | 'estado' | 'apiToken'>
      & { foto?: Maybe<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )>, Departamento?: Maybe<(
        { __typename?: 'Departamento' }
        & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
      )>, Provincia?: Maybe<(
        { __typename?: 'Provincia' }
        & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
      )>, Distrito?: Maybe<(
        { __typename?: 'Distrito' }
        & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado' | 'estado'>
      )> }
    )> }
  )> }
);

export type DeletePropiedadesMutationVariables = Exact<{
  input: PropiedadesInput;
}>;


export type DeletePropiedadesMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'DeletePropiedades'>
);

export type UpdatePropiedadesMutationVariables = Exact<{
  input: PropiedadesInput;
}>;


export type UpdatePropiedadesMutation = (
  { __typename?: 'Mutation' }
  & { UpdatePropiedades?: Maybe<(
    { __typename?: 'Propiedades' }
    & Pick<Propiedades, 'propiedadId' | 'titulo' | 'slug' | 'tipoContrato' | 'descripcionCorta' | 'descripcionCompleta' | 'video' | 'estado' | 'destacado' | 'lat' | 'log' | 'cuartos' | 'banios' | 'pisos' | 'dimensiones' | 'antiguedad' | 'areaConstruida' | 'ambientes' | 'direccion'>
    & { fotoPrincipal?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, fotoSecundaria?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, galeria?: Maybe<Array<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>>, Departamento?: Maybe<(
      { __typename?: 'Departamento' }
      & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
    )>, Provincia?: Maybe<(
      { __typename?: 'Provincia' }
      & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
    )>, Distrito?: Maybe<(
      { __typename?: 'Distrito' }
      & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado'>
    )>, Categorias?: Maybe<(
      { __typename?: 'Categorias' }
      & Pick<Categorias, 'categoriaId' | 'slugCategoria' | 'nombreCategoria' | 'descripcionCategoria' | 'KeywordsCategoria'>
      & { ImagenPrincipal?: Maybe<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )>, ImagenSecundaria?: Maybe<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )> }
    )>, Asesor?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'alias' | 'tipoUsuario' | 'nombres' | 'apellidos' | 'tipoDocumento' | 'nroDocumento' | 'fechaNacimiento' | 'email' | 'estado' | 'apiToken'>
      & { foto?: Maybe<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )>, Departamento?: Maybe<(
        { __typename?: 'Departamento' }
        & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
      )>, Provincia?: Maybe<(
        { __typename?: 'Provincia' }
        & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
      )>, Distrito?: Maybe<(
        { __typename?: 'Distrito' }
        & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado' | 'estado'>
      )> }
    )> }
  )> }
);

export type CrearUsuarioMutationVariables = Exact<{
  input: UserInput;
}>;


export type CrearUsuarioMutation = (
  { __typename?: 'Mutation' }
  & { CrearUsuario?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'alias' | 'tipoUsuario' | 'nombres' | 'apellidos' | 'tipoDocumento' | 'nroDocumento' | 'fechaNacimiento' | 'email' | 'whatsapp' | 'facebook' | 'celular' | 'estado' | 'apiToken'>
    & { foto?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, Departamento?: Maybe<(
      { __typename?: 'Departamento' }
      & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
    )>, Provincia?: Maybe<(
      { __typename?: 'Provincia' }
      & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
    )>, Distrito?: Maybe<(
      { __typename?: 'Distrito' }
      & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado'>
    )> }
  )> }
);

export type DeleteUsuarioMutationVariables = Exact<{
  input?: Maybe<UserInput>;
}>;


export type DeleteUsuarioMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'DeleteUsuario'>
);

export type UpdateUsuarioMutationVariables = Exact<{
  input: UserInput;
}>;


export type UpdateUsuarioMutation = (
  { __typename?: 'Mutation' }
  & { UpdateUsuario?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'alias' | 'tipoUsuario' | 'nombres' | 'apellidos' | 'tipoDocumento' | 'nroDocumento' | 'fechaNacimiento' | 'email' | 'whatsapp' | 'facebook' | 'celular' | 'estado' | 'apiToken'>
    & { foto?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, Departamento?: Maybe<(
      { __typename?: 'Departamento' }
      & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
    )>, Provincia?: Maybe<(
      { __typename?: 'Provincia' }
      & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
    )>, Distrito?: Maybe<(
      { __typename?: 'Distrito' }
      & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado'>
    )> }
  )> }
);

export type GetCategoriaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriaQuery = (
  { __typename?: 'Query' }
  & { GetAllCategorias?: Maybe<Array<Maybe<(
    { __typename?: 'Categorias' }
    & Pick<Categorias, 'categoriaId' | 'slugCategoria' | 'nombreCategoria' | 'descripcionCategoria' | 'KeywordsCategoria'>
    & { ImagenPrincipal?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'url' | 'descripcion'>
    )>, ImagenSecundaria?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'url' | 'descripcion'>
    )> }
  )>>> }
);

export type GetCategoriaSlugQueryVariables = Exact<{
  slugCategoria?: Maybe<Scalars['String']>;
}>;


export type GetCategoriaSlugQuery = (
  { __typename?: 'Query' }
  & { GetCategoriaSlug?: Maybe<(
    { __typename?: 'Categorias' }
    & Pick<Categorias, 'categoriaId' | 'slugCategoria' | 'nombreCategoria' | 'descripcionCategoria' | 'KeywordsCategoria'>
    & { ImagenPrincipal?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, ImagenSecundaria?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )> }
  )> }
);

export type GetAllFormulariosQueryVariables = Exact<{
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
}>;


export type GetAllFormulariosQuery = (
  { __typename?: 'Query' }
  & { GetAllFormularios?: Maybe<(
    { __typename?: 'GetFormularios' }
    & Pick<GetFormularios, 'NroItems'>
    & { data?: Maybe<Array<(
      { __typename?: 'Formulario' }
      & Pick<Formulario, 'formularioId' | 'horarioContacto' | 'descripcion' | 'estado' | 'clienteId' | 'propiedadId'>
      & { Propiedades?: Maybe<(
        { __typename?: 'Propiedades' }
        & Pick<Propiedades, 'propiedadId' | 'titulo' | 'slug' | 'tipoContrato' | 'descripcionCorta' | 'descripcionCompleta' | 'video' | 'estado' | 'destacado' | 'lat' | 'log' | 'cuartos' | 'banios' | 'pisos' | 'dimensiones' | 'antiguedad' | 'areaConstruida' | 'ambientes' | 'direccion'>
        & { fotoPrincipal?: Maybe<(
          { __typename?: 'Imagenes' }
          & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
        )>, fotoSecundaria?: Maybe<(
          { __typename?: 'Imagenes' }
          & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
        )>, galeria?: Maybe<Array<(
          { __typename?: 'Imagenes' }
          & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
        )>>, Departamento?: Maybe<(
          { __typename?: 'Departamento' }
          & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
        )>, Provincia?: Maybe<(
          { __typename?: 'Provincia' }
          & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
        )>, Distrito?: Maybe<(
          { __typename?: 'Distrito' }
          & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado' | 'estado'>
        )>, Asesor?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'userId' | 'alias' | 'tipoUsuario' | 'nombres' | 'apellidos' | 'tipoDocumento' | 'nroDocumento' | 'fechaNacimiento' | 'email' | 'estado' | 'apiToken'>
        )> }
      )>, Cliente?: Maybe<(
        { __typename?: 'Cliente' }
        & Pick<Cliente, 'clienteId' | 'nombresCliente' | 'apellidosCliente' | 'celularCliente' | 'correoCliente'>
      )> }
    )>> }
  )> }
);

export type GetImagenesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetImagenesQuery = (
  { __typename?: 'Query' }
  & { GetImagenes?: Maybe<Array<(
    { __typename?: 'Imagenes' }
    & Pick<Imagenes, 'id' | 'url' | 'descripcion'>
  )>> }
);

export type GetDepartamentosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDepartamentosQuery = (
  { __typename?: 'Query' }
  & { GetDepartamentos?: Maybe<Array<(
    { __typename?: 'Departamento' }
    & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
  )>> }
);

export type GetDistritosQueryVariables = Exact<{
  ProCode?: Maybe<Scalars['String']>;
}>;


export type GetDistritosQuery = (
  { __typename?: 'Query' }
  & { GetDistritos?: Maybe<Array<(
    { __typename?: 'Distrito' }
    & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado'>
  )>> }
);

export type GetProvinciasQueryVariables = Exact<{
  DepCode?: Maybe<Scalars['String']>;
}>;


export type GetProvinciasQuery = (
  { __typename?: 'Query' }
  & { GetProvincias?: Maybe<Array<(
    { __typename?: 'Provincia' }
    & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
  )>> }
);

export type GetAllPostulantesQueryVariables = Exact<{
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
}>;


export type GetAllPostulantesQuery = (
  { __typename?: 'Query' }
  & { GetAllPostulantes?: Maybe<(
    { __typename?: 'GetPostulantes' }
    & Pick<GetPostulantes, 'NroItems'>
    & { data?: Maybe<Array<(
      { __typename?: 'Postulantes' }
      & Pick<Postulantes, 'postulanteId' | 'nombre' | 'apellidos' | 'direccion' | 'ciudad' | 'email' | 'celular' | 'descripcion' | 'estado'>
    )>> }
  )> }
);

export type GetAllPropiedadesQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
}>;


export type GetAllPropiedadesQuery = (
  { __typename?: 'Query' }
  & { GetAllPropiedades?: Maybe<(
    { __typename?: 'GetPropiedades' }
    & Pick<GetPropiedades, 'NroItems'>
    & { data?: Maybe<Array<(
      { __typename?: 'Propiedades' }
      & Pick<Propiedades, 'propiedadId' | 'titulo' | 'slug' | 'tipoContrato' | 'descripcionCorta' | 'descripcionCompleta' | 'video' | 'estado' | 'destacado' | 'lat' | 'log' | 'cuartos' | 'banios' | 'pisos' | 'dimensiones' | 'antiguedad' | 'areaConstruida' | 'ambientes' | 'direccion'>
      & { fotoPrincipal?: Maybe<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )>, fotoSecundaria?: Maybe<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )>, galeria?: Maybe<Array<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )>>, Departamento?: Maybe<(
        { __typename?: 'Departamento' }
        & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
      )>, Provincia?: Maybe<(
        { __typename?: 'Provincia' }
        & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
      )>, Distrito?: Maybe<(
        { __typename?: 'Distrito' }
        & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado'>
      )>, Categorias?: Maybe<(
        { __typename?: 'Categorias' }
        & Pick<Categorias, 'categoriaId' | 'slugCategoria' | 'nombreCategoria' | 'descripcionCategoria' | 'KeywordsCategoria'>
        & { ImagenPrincipal?: Maybe<(
          { __typename?: 'Imagenes' }
          & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
        )>, ImagenSecundaria?: Maybe<(
          { __typename?: 'Imagenes' }
          & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
        )> }
      )>, Asesor?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'userId' | 'alias' | 'tipoUsuario' | 'nombres' | 'apellidos' | 'tipoDocumento' | 'nroDocumento' | 'fechaNacimiento' | 'email' | 'estado' | 'apiToken'>
        & { foto?: Maybe<(
          { __typename?: 'Imagenes' }
          & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
        )>, Departamento?: Maybe<(
          { __typename?: 'Departamento' }
          & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
        )>, Provincia?: Maybe<(
          { __typename?: 'Provincia' }
          & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
        )>, Distrito?: Maybe<(
          { __typename?: 'Distrito' }
          & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado' | 'estado'>
        )> }
      )> }
    )>> }
  )> }
);

export type GetAsesorPropiedadesQueryVariables = Exact<{
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
}>;


export type GetAsesorPropiedadesQuery = (
  { __typename?: 'Query' }
  & { GetAsesorPropiedades?: Maybe<(
    { __typename?: 'GetPropiedades' }
    & Pick<GetPropiedades, 'NroItems'>
    & { data?: Maybe<Array<(
      { __typename?: 'Propiedades' }
      & Pick<Propiedades, 'lat' | 'log' | 'slug' | 'pisos' | 'video' | 'titulo' | 'estado' | 'banios' | 'cuartos' | 'ambientes' | 'destacado' | 'direccion' | 'antiguedad' | 'dimensiones' | 'propiedadId' | 'tipoContrato' | 'areaConstruida' | 'descripcionCorta' | 'descripcionCompleta'>
      & { fotoPrincipal?: Maybe<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )>, fotoSecundaria?: Maybe<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )>, galeria?: Maybe<Array<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )>>, Departamento?: Maybe<(
        { __typename?: 'Departamento' }
        & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
      )>, Provincia?: Maybe<(
        { __typename?: 'Provincia' }
        & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
      )>, Distrito?: Maybe<(
        { __typename?: 'Distrito' }
        & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado'>
      )>, Categorias?: Maybe<(
        { __typename?: 'Categorias' }
        & Pick<Categorias, 'categoriaId' | 'slugCategoria' | 'nombreCategoria' | 'descripcionCategoria' | 'KeywordsCategoria'>
        & { ImagenPrincipal?: Maybe<(
          { __typename?: 'Imagenes' }
          & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
        )>, ImagenSecundaria?: Maybe<(
          { __typename?: 'Imagenes' }
          & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
        )> }
      )>, Planos?: Maybe<Array<(
        { __typename?: 'Planos' }
        & Pick<Planos, 'planoId' | 'tituloPlano' | 'descripcionCortaPlano' | 'descripcionLargaPlano'>
      )>>, Asesor?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'userId' | 'alias' | 'tipoUsuario' | 'nombres' | 'apellidos' | 'tipoDocumento' | 'nroDocumento' | 'fechaNacimiento' | 'email' | 'estado' | 'apiToken'>
        & { foto?: Maybe<(
          { __typename?: 'Imagenes' }
          & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
        )>, Departamento?: Maybe<(
          { __typename?: 'Departamento' }
          & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
        )>, Provincia?: Maybe<(
          { __typename?: 'Provincia' }
          & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
        )>, Distrito?: Maybe<(
          { __typename?: 'Distrito' }
          & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado' | 'estado'>
        )> }
      )> }
    )>> }
  )> }
);

export type GetSlugPropiedadesQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetSlugPropiedadesQuery = (
  { __typename?: 'Query' }
  & { GetSlugPropiedades?: Maybe<(
    { __typename?: 'Propiedades' }
    & Pick<Propiedades, 'slug' | 'titulo' | 'propiedadId' | 'tipoContrato' | 'descripcionCorta' | 'descripcionCompleta' | 'video' | 'estado' | 'destacado' | 'lat' | 'log' | 'cuartos' | 'banios' | 'pisos' | 'dimensiones' | 'antiguedad' | 'areaConstruida' | 'ambientes' | 'direccion'>
    & { fotoPrincipal?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, fotoSecundaria?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, galeria?: Maybe<Array<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>>, Departamento?: Maybe<(
      { __typename?: 'Departamento' }
      & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
    )>, Provincia?: Maybe<(
      { __typename?: 'Provincia' }
      & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
    )>, Distrito?: Maybe<(
      { __typename?: 'Distrito' }
      & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado'>
    )>, Categorias?: Maybe<(
      { __typename?: 'Categorias' }
      & Pick<Categorias, 'categoriaId' | 'slugCategoria' | 'nombreCategoria' | 'descripcionCategoria' | 'KeywordsCategoria'>
      & { ImagenPrincipal?: Maybe<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )>, ImagenSecundaria?: Maybe<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )> }
    )>, Asesor?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'alias' | 'tipoUsuario' | 'nombres' | 'apellidos' | 'tipoDocumento' | 'nroDocumento' | 'fechaNacimiento' | 'email' | 'estado' | 'apiToken'>
      & { foto?: Maybe<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )>, Departamento?: Maybe<(
        { __typename?: 'Departamento' }
        & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
      )>, Provincia?: Maybe<(
        { __typename?: 'Provincia' }
        & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
      )>, Distrito?: Maybe<(
        { __typename?: 'Distrito' }
        & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado' | 'estado'>
      )> }
    )> }
  )> }
);

export type GetAllUsersQueryVariables = Exact<{
  tipoUsuario?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
}>;


export type GetAllUsersQuery = (
  { __typename?: 'Query' }
  & { GetAllUsers?: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'alias' | 'tipoUsuario' | 'nombres' | 'apellidos' | 'tipoDocumento' | 'nroDocumento' | 'fechaNacimiento' | 'email' | 'whatsapp' | 'facebook' | 'celular' | 'estado' | 'apiToken'>
    & { foto?: Maybe<(
      { __typename?: 'Imagenes' }
      & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
    )>, Departamento?: Maybe<(
      { __typename?: 'Departamento' }
      & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
    )>, Provincia?: Maybe<(
      { __typename?: 'Provincia' }
      & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
    )>, Distrito?: Maybe<(
      { __typename?: 'Distrito' }
      & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado'>
    )> }
  )>> }
);

export type GetBusquedaAsesoresQueryVariables = Exact<{
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  departamento?: Maybe<Scalars['String']>;
  provincia?: Maybe<Scalars['String']>;
  distrito?: Maybe<Scalars['String']>;
  asesor?: Maybe<Scalars['String']>;
  orden?: Maybe<Scalars['String']>;
}>;


export type GetBusquedaAsesoresQuery = (
  { __typename?: 'Query' }
  & { GetBusquedaAsesores?: Maybe<(
    { __typename?: 'GetAsesorses' }
    & Pick<GetAsesorses, 'NroItems'>
    & { data?: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'alias' | 'tipoUsuario' | 'nombres' | 'apellidos' | 'tipoDocumento' | 'nroDocumento' | 'fechaNacimiento' | 'email' | 'estado' | 'apiToken' | 'facebook' | 'whatsapp' | 'celular'>
      & { foto?: Maybe<(
        { __typename?: 'Imagenes' }
        & Pick<Imagenes, 'id' | 'descripcion' | 'url'>
      )>, Departamento?: Maybe<(
        { __typename?: 'Departamento' }
        & Pick<Departamento, 'DeparCodi' | 'DeparNom'>
      )>, Provincia?: Maybe<(
        { __typename?: 'Provincia' }
        & Pick<Provincia, 'ProvCodi' | 'ProvNom' | 'DeparCodi'>
      )>, Distrito?: Maybe<(
        { __typename?: 'Distrito' }
        & Pick<Distrito, 'DistCodi' | 'DistNom' | 'ProvCodi' | 'destacado' | 'estado'>
      )> }
    )>> }
  )> }
);


export const LoginDocument = gql`
    mutation login($input: loginInput!) {
  login(input: $input) {
    alias
    email
    userId
    nombres
    apellidos
    tipoUsuario
    nroDocumento
    tipoDocumento
    fechaNacimiento
    foto {
      id
      url
      descripcion
    }
    estado
    apiToken
    Departamento {
      DeparCodi
      DeparNom
    }
    Provincia {
      ProvCodi
      ProvNom
      DeparCodi
    }
    Distrito {
      DistCodi
      DistNom
      ProvCodi
      destacado
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegistroDocument = gql`
    mutation registro($input: UserInput!) {
  registro: CrearUsuario(input: $input) {
    alias
    email
    userId
    nombres
    apellidos
    tipoUsuario
    nroDocumento
    tipoDocumento
    fechaNacimiento
    foto {
      id
      url
      descripcion
    }
    estado
    apiToken
    Departamento {
      DeparNom
      DeparCodi
    }
    Provincia {
      ProvNom
      ProvCodi
      DeparCodi
    }
    Distrito {
      DistNom
      DistCodi
      ProvCodi
      destacado
    }
  }
}
    `;
export type RegistroMutationFn = Apollo.MutationFunction<RegistroMutation, RegistroMutationVariables>;

/**
 * __useRegistroMutation__
 *
 * To run a mutation, you first call `useRegistroMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegistroMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registroMutation, { data, loading, error }] = useRegistroMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegistroMutation(baseOptions?: Apollo.MutationHookOptions<RegistroMutation, RegistroMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegistroMutation, RegistroMutationVariables>(RegistroDocument, options);
      }
export type RegistroMutationHookResult = ReturnType<typeof useRegistroMutation>;
export type RegistroMutationResult = Apollo.MutationResult<RegistroMutation>;
export type RegistroMutationOptions = Apollo.BaseMutationOptions<RegistroMutation, RegistroMutationVariables>;
export const CrearCategoriasDocument = gql`
    mutation CrearCategorias($input: CategoriasInput!) {
  CrearCategorias(input: $input) {
    categoriaId
    nombreCategoria
    slugCategoria
    descripcionCategoria
    ImagenPrincipal {
      id
      descripcion
      url
    }
    ImagenSecundaria {
      id
      descripcion
      url
    }
    KeywordsCategoria
  }
}
    `;
export type CrearCategoriasMutationFn = Apollo.MutationFunction<CrearCategoriasMutation, CrearCategoriasMutationVariables>;

/**
 * __useCrearCategoriasMutation__
 *
 * To run a mutation, you first call `useCrearCategoriasMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCrearCategoriasMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [crearCategoriasMutation, { data, loading, error }] = useCrearCategoriasMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCrearCategoriasMutation(baseOptions?: Apollo.MutationHookOptions<CrearCategoriasMutation, CrearCategoriasMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CrearCategoriasMutation, CrearCategoriasMutationVariables>(CrearCategoriasDocument, options);
      }
export type CrearCategoriasMutationHookResult = ReturnType<typeof useCrearCategoriasMutation>;
export type CrearCategoriasMutationResult = Apollo.MutationResult<CrearCategoriasMutation>;
export type CrearCategoriasMutationOptions = Apollo.BaseMutationOptions<CrearCategoriasMutation, CrearCategoriasMutationVariables>;
export const DeleteCategoriasDocument = gql`
    mutation DeleteCategorias($input: CategoriasInput!) {
  DeleteCategorias(input: $input)
}
    `;
export type DeleteCategoriasMutationFn = Apollo.MutationFunction<DeleteCategoriasMutation, DeleteCategoriasMutationVariables>;

/**
 * __useDeleteCategoriasMutation__
 *
 * To run a mutation, you first call `useDeleteCategoriasMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoriasMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoriasMutation, { data, loading, error }] = useDeleteCategoriasMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCategoriasMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoriasMutation, DeleteCategoriasMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoriasMutation, DeleteCategoriasMutationVariables>(DeleteCategoriasDocument, options);
      }
export type DeleteCategoriasMutationHookResult = ReturnType<typeof useDeleteCategoriasMutation>;
export type DeleteCategoriasMutationResult = Apollo.MutationResult<DeleteCategoriasMutation>;
export type DeleteCategoriasMutationOptions = Apollo.BaseMutationOptions<DeleteCategoriasMutation, DeleteCategoriasMutationVariables>;
export const UpdateCategoriasDocument = gql`
    mutation UpdateCategorias($input: CategoriasInput!) {
  UpdateCategorias(input: $input) {
    categoriaId
    nombreCategoria
    slugCategoria
    descripcionCategoria
    ImagenPrincipal {
      id
      descripcion
      url
    }
    ImagenSecundaria {
      id
      descripcion
      url
    }
    KeywordsCategoria
  }
}
    `;
export type UpdateCategoriasMutationFn = Apollo.MutationFunction<UpdateCategoriasMutation, UpdateCategoriasMutationVariables>;

/**
 * __useUpdateCategoriasMutation__
 *
 * To run a mutation, you first call `useUpdateCategoriasMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoriasMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoriasMutation, { data, loading, error }] = useUpdateCategoriasMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCategoriasMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoriasMutation, UpdateCategoriasMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoriasMutation, UpdateCategoriasMutationVariables>(UpdateCategoriasDocument, options);
      }
export type UpdateCategoriasMutationHookResult = ReturnType<typeof useUpdateCategoriasMutation>;
export type UpdateCategoriasMutationResult = Apollo.MutationResult<UpdateCategoriasMutation>;
export type UpdateCategoriasMutationOptions = Apollo.BaseMutationOptions<UpdateCategoriasMutation, UpdateCategoriasMutationVariables>;
export const DeleteFormularioDocument = gql`
    mutation DeleteFormulario($input: FormularioInput!) {
  DeleteFormulario(input: $input)
}
    `;
export type DeleteFormularioMutationFn = Apollo.MutationFunction<DeleteFormularioMutation, DeleteFormularioMutationVariables>;

/**
 * __useDeleteFormularioMutation__
 *
 * To run a mutation, you first call `useDeleteFormularioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFormularioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFormularioMutation, { data, loading, error }] = useDeleteFormularioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteFormularioMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFormularioMutation, DeleteFormularioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFormularioMutation, DeleteFormularioMutationVariables>(DeleteFormularioDocument, options);
      }
export type DeleteFormularioMutationHookResult = ReturnType<typeof useDeleteFormularioMutation>;
export type DeleteFormularioMutationResult = Apollo.MutationResult<DeleteFormularioMutation>;
export type DeleteFormularioMutationOptions = Apollo.BaseMutationOptions<DeleteFormularioMutation, DeleteFormularioMutationVariables>;
export const CreateImageDocument = gql`
    mutation CreateImage($input: ImagenesInput, $imagen: Upload!) {
  CreateImage(input: $input, imagen: $imagen) {
    id
    url
    descripcion
  }
}
    `;
export type CreateImageMutationFn = Apollo.MutationFunction<CreateImageMutation, CreateImageMutationVariables>;

/**
 * __useCreateImageMutation__
 *
 * To run a mutation, you first call `useCreateImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createImageMutation, { data, loading, error }] = useCreateImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *      imagen: // value for 'imagen'
 *   },
 * });
 */
export function useCreateImageMutation(baseOptions?: Apollo.MutationHookOptions<CreateImageMutation, CreateImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateImageMutation, CreateImageMutationVariables>(CreateImageDocument, options);
      }
export type CreateImageMutationHookResult = ReturnType<typeof useCreateImageMutation>;
export type CreateImageMutationResult = Apollo.MutationResult<CreateImageMutation>;
export type CreateImageMutationOptions = Apollo.BaseMutationOptions<CreateImageMutation, CreateImageMutationVariables>;
export const DeleteImageDocument = gql`
    mutation DeleteImage($input: ImagenesInput!) {
  DeleteImage(input: $input)
}
    `;
export type DeleteImageMutationFn = Apollo.MutationFunction<DeleteImageMutation, DeleteImageMutationVariables>;

/**
 * __useDeleteImageMutation__
 *
 * To run a mutation, you first call `useDeleteImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteImageMutation, { data, loading, error }] = useDeleteImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteImageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteImageMutation, DeleteImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteImageMutation, DeleteImageMutationVariables>(DeleteImageDocument, options);
      }
export type DeleteImageMutationHookResult = ReturnType<typeof useDeleteImageMutation>;
export type DeleteImageMutationResult = Apollo.MutationResult<DeleteImageMutation>;
export type DeleteImageMutationOptions = Apollo.BaseMutationOptions<DeleteImageMutation, DeleteImageMutationVariables>;
export const CambiarContrasenaDocument = gql`
    mutation CambiarContrasena($input: CambiarContrasenaInput!) {
  CambiarContrasena: CambiarContrasenaUsuario(input: $input) {
    alias
    email
    userId
    nombres
    apellidos
    tipoUsuario
    nroDocumento
    tipoDocumento
    fechaNacimiento
    foto {
      id
      descripcion
      url
    }
    estado
    apiToken
    Departamento {
      DeparCodi
      DeparNom
    }
    Provincia {
      ProvCodi
      ProvNom
      DeparCodi
    }
    Distrito {
      DistCodi
      DistNom
      ProvCodi
      destacado
    }
  }
}
    `;
export type CambiarContrasenaMutationFn = Apollo.MutationFunction<CambiarContrasenaMutation, CambiarContrasenaMutationVariables>;

/**
 * __useCambiarContrasenaMutation__
 *
 * To run a mutation, you first call `useCambiarContrasenaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCambiarContrasenaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cambiarContrasenaMutation, { data, loading, error }] = useCambiarContrasenaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCambiarContrasenaMutation(baseOptions?: Apollo.MutationHookOptions<CambiarContrasenaMutation, CambiarContrasenaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CambiarContrasenaMutation, CambiarContrasenaMutationVariables>(CambiarContrasenaDocument, options);
      }
export type CambiarContrasenaMutationHookResult = ReturnType<typeof useCambiarContrasenaMutation>;
export type CambiarContrasenaMutationResult = Apollo.MutationResult<CambiarContrasenaMutation>;
export type CambiarContrasenaMutationOptions = Apollo.BaseMutationOptions<CambiarContrasenaMutation, CambiarContrasenaMutationVariables>;
export const RecuperarContraUsuarioDocument = gql`
    mutation RecuperarContraUsuario($input: UserInput!) {
  RecuperarContraUsuario(input: $input)
}
    `;
export type RecuperarContraUsuarioMutationFn = Apollo.MutationFunction<RecuperarContraUsuarioMutation, RecuperarContraUsuarioMutationVariables>;

/**
 * __useRecuperarContraUsuarioMutation__
 *
 * To run a mutation, you first call `useRecuperarContraUsuarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRecuperarContraUsuarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [recuperarContraUsuarioMutation, { data, loading, error }] = useRecuperarContraUsuarioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRecuperarContraUsuarioMutation(baseOptions?: Apollo.MutationHookOptions<RecuperarContraUsuarioMutation, RecuperarContraUsuarioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RecuperarContraUsuarioMutation, RecuperarContraUsuarioMutationVariables>(RecuperarContraUsuarioDocument, options);
      }
export type RecuperarContraUsuarioMutationHookResult = ReturnType<typeof useRecuperarContraUsuarioMutation>;
export type RecuperarContraUsuarioMutationResult = Apollo.MutationResult<RecuperarContraUsuarioMutation>;
export type RecuperarContraUsuarioMutationOptions = Apollo.BaseMutationOptions<RecuperarContraUsuarioMutation, RecuperarContraUsuarioMutationVariables>;
export const CrearPlanosDocument = gql`
    mutation CrearPlanos($input: PlanosInput!) {
  CrearPlanos(input: $input) {
    planoId
    tituloPlano
    descripcionCortaPlano
    descripcionLargaPlano
    foto {
      id
      descripcion
      url
    }
    Propiedades {
      propiedadId
      titulo
      slug
      tipoContrato
      descripcionCorta
      descripcionCompleta
      video
      estado
      destacado
      lat
      log
      cuartos
      banios
      pisos
      dimensiones
      antiguedad
      areaConstruida
      ambientes
      direccion
    }
  }
}
    `;
export type CrearPlanosMutationFn = Apollo.MutationFunction<CrearPlanosMutation, CrearPlanosMutationVariables>;

/**
 * __useCrearPlanosMutation__
 *
 * To run a mutation, you first call `useCrearPlanosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCrearPlanosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [crearPlanosMutation, { data, loading, error }] = useCrearPlanosMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCrearPlanosMutation(baseOptions?: Apollo.MutationHookOptions<CrearPlanosMutation, CrearPlanosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CrearPlanosMutation, CrearPlanosMutationVariables>(CrearPlanosDocument, options);
      }
export type CrearPlanosMutationHookResult = ReturnType<typeof useCrearPlanosMutation>;
export type CrearPlanosMutationResult = Apollo.MutationResult<CrearPlanosMutation>;
export type CrearPlanosMutationOptions = Apollo.BaseMutationOptions<CrearPlanosMutation, CrearPlanosMutationVariables>;
export const DeletePlanosDocument = gql`
    mutation DeletePlanos($input: PlanosInput!) {
  DeletePlanos(input: $input)
}
    `;
export type DeletePlanosMutationFn = Apollo.MutationFunction<DeletePlanosMutation, DeletePlanosMutationVariables>;

/**
 * __useDeletePlanosMutation__
 *
 * To run a mutation, you first call `useDeletePlanosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePlanosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlanosMutation, { data, loading, error }] = useDeletePlanosMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePlanosMutation(baseOptions?: Apollo.MutationHookOptions<DeletePlanosMutation, DeletePlanosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePlanosMutation, DeletePlanosMutationVariables>(DeletePlanosDocument, options);
      }
export type DeletePlanosMutationHookResult = ReturnType<typeof useDeletePlanosMutation>;
export type DeletePlanosMutationResult = Apollo.MutationResult<DeletePlanosMutation>;
export type DeletePlanosMutationOptions = Apollo.BaseMutationOptions<DeletePlanosMutation, DeletePlanosMutationVariables>;
export const UpdatePlanosDocument = gql`
    mutation UpdatePlanos($input: PlanosInput!) {
  UpdatePlanos(input: $input) {
    planoId
    tituloPlano
    descripcionCortaPlano
    descripcionLargaPlano
    foto {
      id
      descripcion
      url
    }
    Propiedades {
      propiedadId
      titulo
      slug
      tipoContrato
      descripcionCorta
      descripcionCompleta
      video
      estado
      destacado
      lat
      log
      cuartos
      banios
      pisos
      dimensiones
      antiguedad
      areaConstruida
      ambientes
      direccion
    }
  }
}
    `;
export type UpdatePlanosMutationFn = Apollo.MutationFunction<UpdatePlanosMutation, UpdatePlanosMutationVariables>;

/**
 * __useUpdatePlanosMutation__
 *
 * To run a mutation, you first call `useUpdatePlanosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlanosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlanosMutation, { data, loading, error }] = useUpdatePlanosMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePlanosMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlanosMutation, UpdatePlanosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlanosMutation, UpdatePlanosMutationVariables>(UpdatePlanosDocument, options);
      }
export type UpdatePlanosMutationHookResult = ReturnType<typeof useUpdatePlanosMutation>;
export type UpdatePlanosMutationResult = Apollo.MutationResult<UpdatePlanosMutation>;
export type UpdatePlanosMutationOptions = Apollo.BaseMutationOptions<UpdatePlanosMutation, UpdatePlanosMutationVariables>;
export const DeletePostulanteDocument = gql`
    mutation DeletePostulante($input1: PostulantesInput!) {
  DeletePostulante(input1: $input1)
}
    `;
export type DeletePostulanteMutationFn = Apollo.MutationFunction<DeletePostulanteMutation, DeletePostulanteMutationVariables>;

/**
 * __useDeletePostulanteMutation__
 *
 * To run a mutation, you first call `useDeletePostulanteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostulanteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostulanteMutation, { data, loading, error }] = useDeletePostulanteMutation({
 *   variables: {
 *      input1: // value for 'input1'
 *   },
 * });
 */
export function useDeletePostulanteMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostulanteMutation, DeletePostulanteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostulanteMutation, DeletePostulanteMutationVariables>(DeletePostulanteDocument, options);
      }
export type DeletePostulanteMutationHookResult = ReturnType<typeof useDeletePostulanteMutation>;
export type DeletePostulanteMutationResult = Apollo.MutationResult<DeletePostulanteMutation>;
export type DeletePostulanteMutationOptions = Apollo.BaseMutationOptions<DeletePostulanteMutation, DeletePostulanteMutationVariables>;
export const CrearPropiedadesDocument = gql`
    mutation CrearPropiedades($input: PropiedadesInput!) {
  CrearPropiedades(input: $input) {
    propiedadId
    titulo
    slug
    tipoContrato
    descripcionCorta
    descripcionCompleta
    video
    estado
    destacado
    fotoPrincipal {
      id
      descripcion
      url
    }
    fotoSecundaria {
      id
      descripcion
      url
    }
    galeria {
      id
      descripcion
      url
    }
    lat
    log
    cuartos
    banios
    pisos
    dimensiones
    antiguedad
    areaConstruida
    ambientes
    direccion
    Departamento {
      DeparCodi
      DeparNom
    }
    Provincia {
      ProvCodi
      ProvNom
      DeparCodi
    }
    Distrito {
      DistCodi
      DistNom
      ProvCodi
      destacado
    }
    Categorias {
      categoriaId
      slugCategoria
      nombreCategoria
      descripcionCategoria
      ImagenPrincipal {
        id
        descripcion
        url
      }
      ImagenSecundaria {
        id
        descripcion
        url
      }
      KeywordsCategoria
    }
    Asesor {
      userId
      alias
      tipoUsuario
      nombres
      apellidos
      tipoDocumento
      nroDocumento
      fechaNacimiento
      email
      foto {
        id
        descripcion
        url
      }
      estado
      apiToken
      Departamento {
        DeparCodi
        DeparNom
      }
      Provincia {
        ProvCodi
        ProvNom
        DeparCodi
      }
      Distrito {
        DistCodi
        DistNom
        ProvCodi
        destacado
        estado
      }
    }
  }
}
    `;
export type CrearPropiedadesMutationFn = Apollo.MutationFunction<CrearPropiedadesMutation, CrearPropiedadesMutationVariables>;

/**
 * __useCrearPropiedadesMutation__
 *
 * To run a mutation, you first call `useCrearPropiedadesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCrearPropiedadesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [crearPropiedadesMutation, { data, loading, error }] = useCrearPropiedadesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCrearPropiedadesMutation(baseOptions?: Apollo.MutationHookOptions<CrearPropiedadesMutation, CrearPropiedadesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CrearPropiedadesMutation, CrearPropiedadesMutationVariables>(CrearPropiedadesDocument, options);
      }
export type CrearPropiedadesMutationHookResult = ReturnType<typeof useCrearPropiedadesMutation>;
export type CrearPropiedadesMutationResult = Apollo.MutationResult<CrearPropiedadesMutation>;
export type CrearPropiedadesMutationOptions = Apollo.BaseMutationOptions<CrearPropiedadesMutation, CrearPropiedadesMutationVariables>;
export const DeletePropiedadesDocument = gql`
    mutation DeletePropiedades($input: PropiedadesInput!) {
  DeletePropiedades(input: $input)
}
    `;
export type DeletePropiedadesMutationFn = Apollo.MutationFunction<DeletePropiedadesMutation, DeletePropiedadesMutationVariables>;

/**
 * __useDeletePropiedadesMutation__
 *
 * To run a mutation, you first call `useDeletePropiedadesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePropiedadesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePropiedadesMutation, { data, loading, error }] = useDeletePropiedadesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePropiedadesMutation(baseOptions?: Apollo.MutationHookOptions<DeletePropiedadesMutation, DeletePropiedadesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePropiedadesMutation, DeletePropiedadesMutationVariables>(DeletePropiedadesDocument, options);
      }
export type DeletePropiedadesMutationHookResult = ReturnType<typeof useDeletePropiedadesMutation>;
export type DeletePropiedadesMutationResult = Apollo.MutationResult<DeletePropiedadesMutation>;
export type DeletePropiedadesMutationOptions = Apollo.BaseMutationOptions<DeletePropiedadesMutation, DeletePropiedadesMutationVariables>;
export const UpdatePropiedadesDocument = gql`
    mutation UpdatePropiedades($input: PropiedadesInput!) {
  UpdatePropiedades(input: $input) {
    propiedadId
    titulo
    slug
    tipoContrato
    descripcionCorta
    descripcionCompleta
    video
    estado
    destacado
    fotoPrincipal {
      id
      descripcion
      url
    }
    fotoSecundaria {
      id
      descripcion
      url
    }
    galeria {
      id
      descripcion
      url
    }
    lat
    log
    cuartos
    banios
    pisos
    dimensiones
    antiguedad
    areaConstruida
    ambientes
    direccion
    Departamento {
      DeparCodi
      DeparNom
    }
    Provincia {
      ProvCodi
      ProvNom
      DeparCodi
    }
    Distrito {
      DistCodi
      DistNom
      ProvCodi
      destacado
    }
    Categorias {
      categoriaId
      slugCategoria
      nombreCategoria
      descripcionCategoria
      ImagenPrincipal {
        id
        descripcion
        url
      }
      ImagenSecundaria {
        id
        descripcion
        url
      }
      KeywordsCategoria
    }
    Asesor {
      userId
      alias
      tipoUsuario
      nombres
      apellidos
      tipoDocumento
      nroDocumento
      fechaNacimiento
      email
      foto {
        id
        descripcion
        url
      }
      estado
      apiToken
      Departamento {
        DeparCodi
        DeparNom
      }
      Provincia {
        ProvCodi
        ProvNom
        DeparCodi
      }
      Distrito {
        DistCodi
        DistNom
        ProvCodi
        destacado
        estado
      }
    }
  }
}
    `;
export type UpdatePropiedadesMutationFn = Apollo.MutationFunction<UpdatePropiedadesMutation, UpdatePropiedadesMutationVariables>;

/**
 * __useUpdatePropiedadesMutation__
 *
 * To run a mutation, you first call `useUpdatePropiedadesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePropiedadesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePropiedadesMutation, { data, loading, error }] = useUpdatePropiedadesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePropiedadesMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePropiedadesMutation, UpdatePropiedadesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePropiedadesMutation, UpdatePropiedadesMutationVariables>(UpdatePropiedadesDocument, options);
      }
export type UpdatePropiedadesMutationHookResult = ReturnType<typeof useUpdatePropiedadesMutation>;
export type UpdatePropiedadesMutationResult = Apollo.MutationResult<UpdatePropiedadesMutation>;
export type UpdatePropiedadesMutationOptions = Apollo.BaseMutationOptions<UpdatePropiedadesMutation, UpdatePropiedadesMutationVariables>;
export const CrearUsuarioDocument = gql`
    mutation CrearUsuario($input: UserInput!) {
  CrearUsuario(input: $input) {
    userId
    alias
    tipoUsuario
    nombres
    apellidos
    tipoDocumento
    nroDocumento
    fechaNacimiento
    email
    whatsapp
    facebook
    celular
    foto {
      id
      descripcion
      url
    }
    estado
    apiToken
    Departamento {
      DeparCodi
      DeparNom
    }
    Provincia {
      ProvCodi
      ProvNom
      DeparCodi
    }
    Distrito {
      DistCodi
      DistNom
      ProvCodi
      destacado
    }
  }
}
    `;
export type CrearUsuarioMutationFn = Apollo.MutationFunction<CrearUsuarioMutation, CrearUsuarioMutationVariables>;

/**
 * __useCrearUsuarioMutation__
 *
 * To run a mutation, you first call `useCrearUsuarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCrearUsuarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [crearUsuarioMutation, { data, loading, error }] = useCrearUsuarioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCrearUsuarioMutation(baseOptions?: Apollo.MutationHookOptions<CrearUsuarioMutation, CrearUsuarioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CrearUsuarioMutation, CrearUsuarioMutationVariables>(CrearUsuarioDocument, options);
      }
export type CrearUsuarioMutationHookResult = ReturnType<typeof useCrearUsuarioMutation>;
export type CrearUsuarioMutationResult = Apollo.MutationResult<CrearUsuarioMutation>;
export type CrearUsuarioMutationOptions = Apollo.BaseMutationOptions<CrearUsuarioMutation, CrearUsuarioMutationVariables>;
export const DeleteUsuarioDocument = gql`
    mutation DeleteUsuario($input: UserInput) {
  DeleteUsuario(input: $input)
}
    `;
export type DeleteUsuarioMutationFn = Apollo.MutationFunction<DeleteUsuarioMutation, DeleteUsuarioMutationVariables>;

/**
 * __useDeleteUsuarioMutation__
 *
 * To run a mutation, you first call `useDeleteUsuarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUsuarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUsuarioMutation, { data, loading, error }] = useDeleteUsuarioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUsuarioMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUsuarioMutation, DeleteUsuarioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUsuarioMutation, DeleteUsuarioMutationVariables>(DeleteUsuarioDocument, options);
      }
export type DeleteUsuarioMutationHookResult = ReturnType<typeof useDeleteUsuarioMutation>;
export type DeleteUsuarioMutationResult = Apollo.MutationResult<DeleteUsuarioMutation>;
export type DeleteUsuarioMutationOptions = Apollo.BaseMutationOptions<DeleteUsuarioMutation, DeleteUsuarioMutationVariables>;
export const UpdateUsuarioDocument = gql`
    mutation UpdateUsuario($input: UserInput!) {
  UpdateUsuario(input: $input) {
    userId
    alias
    tipoUsuario
    nombres
    apellidos
    tipoDocumento
    nroDocumento
    fechaNacimiento
    email
    whatsapp
    facebook
    celular
    foto {
      id
      descripcion
      url
    }
    estado
    apiToken
    Departamento {
      DeparCodi
      DeparNom
    }
    Provincia {
      ProvCodi
      ProvNom
      DeparCodi
    }
    Distrito {
      DistCodi
      DistNom
      ProvCodi
      destacado
    }
  }
}
    `;
export type UpdateUsuarioMutationFn = Apollo.MutationFunction<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>;

/**
 * __useUpdateUsuarioMutation__
 *
 * To run a mutation, you first call `useUpdateUsuarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUsuarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUsuarioMutation, { data, loading, error }] = useUpdateUsuarioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUsuarioMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>(UpdateUsuarioDocument, options);
      }
export type UpdateUsuarioMutationHookResult = ReturnType<typeof useUpdateUsuarioMutation>;
export type UpdateUsuarioMutationResult = Apollo.MutationResult<UpdateUsuarioMutation>;
export type UpdateUsuarioMutationOptions = Apollo.BaseMutationOptions<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>;
export const GetCategoriaDocument = gql`
    query GetCategoria {
  GetAllCategorias: GetCategoria {
    categoriaId
    slugCategoria
    nombreCategoria
    descripcionCategoria
    ImagenPrincipal {
      id
      url
      descripcion
    }
    ImagenSecundaria {
      id
      url
      descripcion
    }
    KeywordsCategoria
  }
}
    `;

/**
 * __useGetCategoriaQuery__
 *
 * To run a query within a React component, call `useGetCategoriaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriaQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriaQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriaQuery, GetCategoriaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriaQuery, GetCategoriaQueryVariables>(GetCategoriaDocument, options);
      }
export function useGetCategoriaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriaQuery, GetCategoriaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriaQuery, GetCategoriaQueryVariables>(GetCategoriaDocument, options);
        }
export type GetCategoriaQueryHookResult = ReturnType<typeof useGetCategoriaQuery>;
export type GetCategoriaLazyQueryHookResult = ReturnType<typeof useGetCategoriaLazyQuery>;
export type GetCategoriaQueryResult = Apollo.QueryResult<GetCategoriaQuery, GetCategoriaQueryVariables>;
export const GetCategoriaSlugDocument = gql`
    query GetCategoriaSlug($slugCategoria: String) {
  GetCategoriaSlug(slugCategoria: $slugCategoria) {
    categoriaId
    slugCategoria
    nombreCategoria
    descripcionCategoria
    ImagenPrincipal {
      id
      descripcion
      url
    }
    ImagenSecundaria {
      id
      descripcion
      url
    }
    KeywordsCategoria
  }
}
    `;

/**
 * __useGetCategoriaSlugQuery__
 *
 * To run a query within a React component, call `useGetCategoriaSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriaSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriaSlugQuery({
 *   variables: {
 *      slugCategoria: // value for 'slugCategoria'
 *   },
 * });
 */
export function useGetCategoriaSlugQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriaSlugQuery, GetCategoriaSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriaSlugQuery, GetCategoriaSlugQueryVariables>(GetCategoriaSlugDocument, options);
      }
export function useGetCategoriaSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriaSlugQuery, GetCategoriaSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriaSlugQuery, GetCategoriaSlugQueryVariables>(GetCategoriaSlugDocument, options);
        }
export type GetCategoriaSlugQueryHookResult = ReturnType<typeof useGetCategoriaSlugQuery>;
export type GetCategoriaSlugLazyQueryHookResult = ReturnType<typeof useGetCategoriaSlugLazyQuery>;
export type GetCategoriaSlugQueryResult = Apollo.QueryResult<GetCategoriaSlugQuery, GetCategoriaSlugQueryVariables>;
export const GetAllFormulariosDocument = gql`
    query GetAllFormularios($numberPaginate: Int, $page: Int, $estado: String) {
  GetAllFormularios(numberPaginate: $numberPaginate, page: $page, estado: $estado) {
    NroItems
    data {
      formularioId
      horarioContacto
      descripcion
      estado
      clienteId
      propiedadId
      Propiedades {
        propiedadId
        titulo
        slug
        tipoContrato
        descripcionCorta
        descripcionCompleta
        video
        estado
        destacado
        fotoPrincipal {
          id
          descripcion
          url
        }
        fotoSecundaria {
          id
          descripcion
          url
        }
        galeria {
          id
          descripcion
          url
        }
        lat
        log
        cuartos
        banios
        pisos
        dimensiones
        antiguedad
        areaConstruida
        ambientes
        direccion
        Departamento {
          DeparCodi
          DeparNom
        }
        Provincia {
          ProvCodi
          ProvNom
          DeparCodi
        }
        Distrito {
          DistCodi
          DistNom
          ProvCodi
          destacado
          estado
        }
        Asesor {
          userId
          alias
          tipoUsuario
          nombres
          apellidos
          tipoDocumento
          nroDocumento
          fechaNacimiento
          email
          estado
          apiToken
        }
      }
      Cliente {
        clienteId
        nombresCliente
        apellidosCliente
        celularCliente
        correoCliente
      }
    }
  }
}
    `;

/**
 * __useGetAllFormulariosQuery__
 *
 * To run a query within a React component, call `useGetAllFormulariosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFormulariosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFormulariosQuery({
 *   variables: {
 *      numberPaginate: // value for 'numberPaginate'
 *      page: // value for 'page'
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllFormulariosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllFormulariosQuery, GetAllFormulariosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllFormulariosQuery, GetAllFormulariosQueryVariables>(GetAllFormulariosDocument, options);
      }
export function useGetAllFormulariosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllFormulariosQuery, GetAllFormulariosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllFormulariosQuery, GetAllFormulariosQueryVariables>(GetAllFormulariosDocument, options);
        }
export type GetAllFormulariosQueryHookResult = ReturnType<typeof useGetAllFormulariosQuery>;
export type GetAllFormulariosLazyQueryHookResult = ReturnType<typeof useGetAllFormulariosLazyQuery>;
export type GetAllFormulariosQueryResult = Apollo.QueryResult<GetAllFormulariosQuery, GetAllFormulariosQueryVariables>;
export const GetImagenesDocument = gql`
    query GetImagenes {
  GetImagenes {
    id
    url
    descripcion
  }
}
    `;

/**
 * __useGetImagenesQuery__
 *
 * To run a query within a React component, call `useGetImagenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetImagenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetImagenesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetImagenesQuery(baseOptions?: Apollo.QueryHookOptions<GetImagenesQuery, GetImagenesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetImagenesQuery, GetImagenesQueryVariables>(GetImagenesDocument, options);
      }
export function useGetImagenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetImagenesQuery, GetImagenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetImagenesQuery, GetImagenesQueryVariables>(GetImagenesDocument, options);
        }
export type GetImagenesQueryHookResult = ReturnType<typeof useGetImagenesQuery>;
export type GetImagenesLazyQueryHookResult = ReturnType<typeof useGetImagenesLazyQuery>;
export type GetImagenesQueryResult = Apollo.QueryResult<GetImagenesQuery, GetImagenesQueryVariables>;
export const GetDepartamentosDocument = gql`
    query GetDepartamentos {
  GetDepartamentos {
    DeparCodi
    DeparNom
  }
}
    `;

/**
 * __useGetDepartamentosQuery__
 *
 * To run a query within a React component, call `useGetDepartamentosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDepartamentosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDepartamentosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDepartamentosQuery(baseOptions?: Apollo.QueryHookOptions<GetDepartamentosQuery, GetDepartamentosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDepartamentosQuery, GetDepartamentosQueryVariables>(GetDepartamentosDocument, options);
      }
export function useGetDepartamentosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDepartamentosQuery, GetDepartamentosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDepartamentosQuery, GetDepartamentosQueryVariables>(GetDepartamentosDocument, options);
        }
export type GetDepartamentosQueryHookResult = ReturnType<typeof useGetDepartamentosQuery>;
export type GetDepartamentosLazyQueryHookResult = ReturnType<typeof useGetDepartamentosLazyQuery>;
export type GetDepartamentosQueryResult = Apollo.QueryResult<GetDepartamentosQuery, GetDepartamentosQueryVariables>;
export const GetDistritosDocument = gql`
    query GetDistritos($ProCode: String) {
  GetDistritos(ProCode: $ProCode) {
    DistCodi
    DistNom
    ProvCodi
    destacado
  }
}
    `;

/**
 * __useGetDistritosQuery__
 *
 * To run a query within a React component, call `useGetDistritosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDistritosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDistritosQuery({
 *   variables: {
 *      ProCode: // value for 'ProCode'
 *   },
 * });
 */
export function useGetDistritosQuery(baseOptions?: Apollo.QueryHookOptions<GetDistritosQuery, GetDistritosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDistritosQuery, GetDistritosQueryVariables>(GetDistritosDocument, options);
      }
export function useGetDistritosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDistritosQuery, GetDistritosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDistritosQuery, GetDistritosQueryVariables>(GetDistritosDocument, options);
        }
export type GetDistritosQueryHookResult = ReturnType<typeof useGetDistritosQuery>;
export type GetDistritosLazyQueryHookResult = ReturnType<typeof useGetDistritosLazyQuery>;
export type GetDistritosQueryResult = Apollo.QueryResult<GetDistritosQuery, GetDistritosQueryVariables>;
export const GetProvinciasDocument = gql`
    query GetProvincias($DepCode: String) {
  GetProvincias(DepCode: $DepCode) {
    ProvCodi
    ProvNom
    DeparCodi
  }
}
    `;

/**
 * __useGetProvinciasQuery__
 *
 * To run a query within a React component, call `useGetProvinciasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProvinciasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProvinciasQuery({
 *   variables: {
 *      DepCode: // value for 'DepCode'
 *   },
 * });
 */
export function useGetProvinciasQuery(baseOptions?: Apollo.QueryHookOptions<GetProvinciasQuery, GetProvinciasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProvinciasQuery, GetProvinciasQueryVariables>(GetProvinciasDocument, options);
      }
export function useGetProvinciasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProvinciasQuery, GetProvinciasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProvinciasQuery, GetProvinciasQueryVariables>(GetProvinciasDocument, options);
        }
export type GetProvinciasQueryHookResult = ReturnType<typeof useGetProvinciasQuery>;
export type GetProvinciasLazyQueryHookResult = ReturnType<typeof useGetProvinciasLazyQuery>;
export type GetProvinciasQueryResult = Apollo.QueryResult<GetProvinciasQuery, GetProvinciasQueryVariables>;
export const GetAllPostulantesDocument = gql`
    query GetAllPostulantes($numberPaginate: Int, $page: Int, $estado: String) {
  GetAllPostulantes(numberPaginate: $numberPaginate, page: $page, estado: $estado) {
    NroItems
    data {
      postulanteId
      nombre
      apellidos
      direccion
      ciudad
      email
      celular
      descripcion
      estado
    }
  }
}
    `;

/**
 * __useGetAllPostulantesQuery__
 *
 * To run a query within a React component, call `useGetAllPostulantesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostulantesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostulantesQuery({
 *   variables: {
 *      numberPaginate: // value for 'numberPaginate'
 *      page: // value for 'page'
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllPostulantesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostulantesQuery, GetAllPostulantesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostulantesQuery, GetAllPostulantesQueryVariables>(GetAllPostulantesDocument, options);
      }
export function useGetAllPostulantesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostulantesQuery, GetAllPostulantesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostulantesQuery, GetAllPostulantesQueryVariables>(GetAllPostulantesDocument, options);
        }
export type GetAllPostulantesQueryHookResult = ReturnType<typeof useGetAllPostulantesQuery>;
export type GetAllPostulantesLazyQueryHookResult = ReturnType<typeof useGetAllPostulantesLazyQuery>;
export type GetAllPostulantesQueryResult = Apollo.QueryResult<GetAllPostulantesQuery, GetAllPostulantesQueryVariables>;
export const GetAllPropiedadesDocument = gql`
    query GetAllPropiedades($page: Int, $estado: String, $destacado: String, $numberPaginate: Int) {
  GetAllPropiedades(
    numberPaginate: $numberPaginate
    page: $page
    estado: $estado
    destacado: $destacado
  ) {
    NroItems
    data {
      propiedadId
      titulo
      slug
      tipoContrato
      descripcionCorta
      descripcionCompleta
      video
      estado
      destacado
      fotoPrincipal {
        id
        descripcion
        url
      }
      fotoSecundaria {
        id
        descripcion
        url
      }
      galeria {
        id
        descripcion
        url
      }
      lat
      log
      cuartos
      banios
      pisos
      dimensiones
      antiguedad
      areaConstruida
      ambientes
      direccion
      Departamento {
        DeparCodi
        DeparNom
      }
      Provincia {
        ProvCodi
        ProvNom
        DeparCodi
      }
      Distrito {
        DistCodi
        DistNom
        ProvCodi
        destacado
      }
      Categorias {
        categoriaId
        slugCategoria
        nombreCategoria
        descripcionCategoria
        ImagenPrincipal {
          id
          descripcion
          url
        }
        ImagenSecundaria {
          id
          descripcion
          url
        }
        KeywordsCategoria
      }
      Asesor {
        userId
        alias
        tipoUsuario
        nombres
        apellidos
        tipoDocumento
        nroDocumento
        fechaNacimiento
        email
        foto {
          id
          descripcion
          url
        }
        estado
        apiToken
        Departamento {
          DeparCodi
          DeparNom
        }
        Provincia {
          ProvCodi
          ProvNom
          DeparCodi
        }
        Distrito {
          DistCodi
          DistNom
          ProvCodi
          destacado
          estado
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllPropiedadesQuery__
 *
 * To run a query within a React component, call `useGetAllPropiedadesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPropiedadesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPropiedadesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      estado: // value for 'estado'
 *      destacado: // value for 'destacado'
 *      numberPaginate: // value for 'numberPaginate'
 *   },
 * });
 */
export function useGetAllPropiedadesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPropiedadesQuery, GetAllPropiedadesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPropiedadesQuery, GetAllPropiedadesQueryVariables>(GetAllPropiedadesDocument, options);
      }
export function useGetAllPropiedadesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPropiedadesQuery, GetAllPropiedadesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPropiedadesQuery, GetAllPropiedadesQueryVariables>(GetAllPropiedadesDocument, options);
        }
export type GetAllPropiedadesQueryHookResult = ReturnType<typeof useGetAllPropiedadesQuery>;
export type GetAllPropiedadesLazyQueryHookResult = ReturnType<typeof useGetAllPropiedadesLazyQuery>;
export type GetAllPropiedadesQueryResult = Apollo.QueryResult<GetAllPropiedadesQuery, GetAllPropiedadesQueryVariables>;
export const GetAsesorPropiedadesDocument = gql`
    query GetAsesorPropiedades($numberPaginate: Int, $page: Int) {
  GetAsesorPropiedades(numberPaginate: $numberPaginate, page: $page) {
    NroItems
    data {
      lat
      log
      slug
      pisos
      video
      titulo
      estado
      banios
      cuartos
      ambientes
      destacado
      direccion
      antiguedad
      dimensiones
      propiedadId
      tipoContrato
      areaConstruida
      descripcionCorta
      descripcionCompleta
      fotoPrincipal {
        id
        descripcion
        url
      }
      fotoSecundaria {
        id
        descripcion
        url
      }
      galeria {
        id
        descripcion
        url
      }
      Departamento {
        DeparCodi
        DeparNom
      }
      Provincia {
        ProvCodi
        ProvNom
        DeparCodi
      }
      Distrito {
        DistCodi
        DistNom
        ProvCodi
        destacado
      }
      Categorias {
        categoriaId
        slugCategoria
        nombreCategoria
        descripcionCategoria
        ImagenPrincipal {
          id
          descripcion
          url
        }
        ImagenSecundaria {
          id
          descripcion
          url
        }
        KeywordsCategoria
      }
      Planos {
        planoId
        tituloPlano
        descripcionCortaPlano
        descripcionLargaPlano
      }
      Asesor {
        userId
        alias
        tipoUsuario
        nombres
        apellidos
        tipoDocumento
        nroDocumento
        fechaNacimiento
        email
        foto {
          id
          descripcion
          url
        }
        estado
        apiToken
        Departamento {
          DeparCodi
          DeparNom
        }
        Provincia {
          ProvCodi
          ProvNom
          DeparCodi
        }
        Distrito {
          DistCodi
          DistNom
          ProvCodi
          destacado
          estado
        }
      }
    }
  }
}
    `;

/**
 * __useGetAsesorPropiedadesQuery__
 *
 * To run a query within a React component, call `useGetAsesorPropiedadesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAsesorPropiedadesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAsesorPropiedadesQuery({
 *   variables: {
 *      numberPaginate: // value for 'numberPaginate'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetAsesorPropiedadesQuery(baseOptions?: Apollo.QueryHookOptions<GetAsesorPropiedadesQuery, GetAsesorPropiedadesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAsesorPropiedadesQuery, GetAsesorPropiedadesQueryVariables>(GetAsesorPropiedadesDocument, options);
      }
export function useGetAsesorPropiedadesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAsesorPropiedadesQuery, GetAsesorPropiedadesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAsesorPropiedadesQuery, GetAsesorPropiedadesQueryVariables>(GetAsesorPropiedadesDocument, options);
        }
export type GetAsesorPropiedadesQueryHookResult = ReturnType<typeof useGetAsesorPropiedadesQuery>;
export type GetAsesorPropiedadesLazyQueryHookResult = ReturnType<typeof useGetAsesorPropiedadesLazyQuery>;
export type GetAsesorPropiedadesQueryResult = Apollo.QueryResult<GetAsesorPropiedadesQuery, GetAsesorPropiedadesQueryVariables>;
export const GetSlugPropiedadesDocument = gql`
    query GetSlugPropiedades($slug: String) {
  GetSlugPropiedades(slug: $slug) {
    slug
    titulo
    propiedadId
    tipoContrato
    descripcionCorta
    descripcionCompleta
    video
    estado
    destacado
    fotoPrincipal {
      id
      descripcion
      url
    }
    fotoSecundaria {
      id
      descripcion
      url
    }
    galeria {
      id
      descripcion
      url
    }
    lat
    log
    cuartos
    banios
    pisos
    dimensiones
    antiguedad
    areaConstruida
    ambientes
    direccion
    Departamento {
      DeparCodi
      DeparNom
    }
    Provincia {
      ProvCodi
      ProvNom
      DeparCodi
    }
    Distrito {
      DistCodi
      DistNom
      ProvCodi
      destacado
    }
    Categorias {
      categoriaId
      slugCategoria
      nombreCategoria
      descripcionCategoria
      ImagenPrincipal {
        id
        descripcion
        url
      }
      ImagenSecundaria {
        id
        descripcion
        url
      }
      KeywordsCategoria
    }
    Asesor {
      userId
      alias
      tipoUsuario
      nombres
      apellidos
      tipoDocumento
      nroDocumento
      fechaNacimiento
      email
      foto {
        id
        descripcion
        url
      }
      estado
      apiToken
      Departamento {
        DeparCodi
        DeparNom
      }
      Provincia {
        ProvCodi
        ProvNom
        DeparCodi
      }
      Distrito {
        DistCodi
        DistNom
        ProvCodi
        destacado
        estado
      }
    }
  }
}
    `;

/**
 * __useGetSlugPropiedadesQuery__
 *
 * To run a query within a React component, call `useGetSlugPropiedadesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSlugPropiedadesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSlugPropiedadesQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetSlugPropiedadesQuery(baseOptions?: Apollo.QueryHookOptions<GetSlugPropiedadesQuery, GetSlugPropiedadesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSlugPropiedadesQuery, GetSlugPropiedadesQueryVariables>(GetSlugPropiedadesDocument, options);
      }
export function useGetSlugPropiedadesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSlugPropiedadesQuery, GetSlugPropiedadesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSlugPropiedadesQuery, GetSlugPropiedadesQueryVariables>(GetSlugPropiedadesDocument, options);
        }
export type GetSlugPropiedadesQueryHookResult = ReturnType<typeof useGetSlugPropiedadesQuery>;
export type GetSlugPropiedadesLazyQueryHookResult = ReturnType<typeof useGetSlugPropiedadesLazyQuery>;
export type GetSlugPropiedadesQueryResult = Apollo.QueryResult<GetSlugPropiedadesQuery, GetSlugPropiedadesQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers($tipoUsuario: Int, $estado: String) {
  GetAllUsers(tipoUsuario: $tipoUsuario, estado: $estado) {
    userId
    alias
    tipoUsuario
    nombres
    apellidos
    tipoDocumento
    nroDocumento
    fechaNacimiento
    email
    whatsapp
    facebook
    celular
    foto {
      id
      descripcion
      url
    }
    estado
    apiToken
    Departamento {
      DeparCodi
      DeparNom
    }
    Provincia {
      ProvCodi
      ProvNom
      DeparCodi
    }
    Distrito {
      DistCodi
      DistNom
      ProvCodi
      destacado
    }
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *      tipoUsuario: // value for 'tipoUsuario'
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetBusquedaAsesoresDocument = gql`
    query GetBusquedaAsesores($numberPaginate: Int, $page: Int, $departamento: String, $provincia: String, $distrito: String, $asesor: String, $orden: String) {
  GetBusquedaAsesores(
    numberPaginate: $numberPaginate
    page: $page
    departamento: $departamento
    provincia: $provincia
    distrito: $distrito
    asesor: $asesor
    orden: $orden
  ) {
    NroItems
    data {
      userId
      alias
      tipoUsuario
      nombres
      apellidos
      tipoDocumento
      nroDocumento
      fechaNacimiento
      email
      foto {
        id
        descripcion
        url
      }
      estado
      apiToken
      facebook
      whatsapp
      celular
      Departamento {
        DeparCodi
        DeparNom
      }
      Provincia {
        ProvCodi
        ProvNom
        DeparCodi
      }
      Distrito {
        DistCodi
        DistNom
        ProvCodi
        destacado
        estado
      }
    }
  }
}
    `;

/**
 * __useGetBusquedaAsesoresQuery__
 *
 * To run a query within a React component, call `useGetBusquedaAsesoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBusquedaAsesoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBusquedaAsesoresQuery({
 *   variables: {
 *      numberPaginate: // value for 'numberPaginate'
 *      page: // value for 'page'
 *      departamento: // value for 'departamento'
 *      provincia: // value for 'provincia'
 *      distrito: // value for 'distrito'
 *      asesor: // value for 'asesor'
 *      orden: // value for 'orden'
 *   },
 * });
 */
export function useGetBusquedaAsesoresQuery(baseOptions?: Apollo.QueryHookOptions<GetBusquedaAsesoresQuery, GetBusquedaAsesoresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBusquedaAsesoresQuery, GetBusquedaAsesoresQueryVariables>(GetBusquedaAsesoresDocument, options);
      }
export function useGetBusquedaAsesoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBusquedaAsesoresQuery, GetBusquedaAsesoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBusquedaAsesoresQuery, GetBusquedaAsesoresQueryVariables>(GetBusquedaAsesoresDocument, options);
        }
export type GetBusquedaAsesoresQueryHookResult = ReturnType<typeof useGetBusquedaAsesoresQuery>;
export type GetBusquedaAsesoresLazyQueryHookResult = ReturnType<typeof useGetBusquedaAsesoresLazyQuery>;
export type GetBusquedaAsesoresQueryResult = Apollo.QueryResult<GetBusquedaAsesoresQuery, GetBusquedaAsesoresQueryVariables>;