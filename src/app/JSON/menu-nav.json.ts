import { Constantes } from "../constants/constantes"

export const MENU = [
    { nombre : 'Inicio', link : '/inicio', icono : 'house', modulo: true },
    { nombre : 'Editar contrato', link : '/contrato/crear-editar', icono : 'add_circle', modulo: true },
    { nombre : "Probar/visualizar contratos(API's)", link : '/test/swagger-test', icono : 'assignment_turned_in', modulo: true },
    { nombre : 'Documentación de contratos', link : '/test/documentation-test', icono : 'check_circle', modulo: true },
    { nombre : 'Acerca de', link : '/about-us', icono : 'info', modulo: true },
]

export const SUBMENU = [
    { nombreSub : 'Información Legal Firmante ', tipoPeticion: 'POST', linkSub : Constantes.RUTA + Constantes.INFO_LEGAL_FIRMANTE, iconoSub : 'done', menu : MENU[2] },
    { nombreSub : 'Información Legal Emisor ', tipoPeticion: 'POST, PUT', linkSub : Constantes.RUTA + Constantes.INFO_LEGAL_EMISOR , iconoSub : 'done', menu : MENU[2] },
    { nombreSub : 'Información Legal Revisores ', tipoPeticion: 'POST', linkSub : Constantes.RUTA + Constantes.INFO_LEGAL_REVISORES , iconoSub : 'done', menu : MENU[2] },
    { nombreSub : 'Perfiles de Usuarios ', tipoPeticion: 'POST, PUT', linkSub : Constantes.RUTA + Constantes.USUARIOS_PERFILES, iconoSub : 'done', menu : MENU[2] },
    { nombreSub : 'Autorizador de recursos ', tipoPeticion: 'POST', linkSub : Constantes.RUTA + Constantes.AUTHORIZATION_2, iconoSub : 'done', menu : MENU[2] },
    { nombreSub : 'Autenticación de usuarios ', tipoPeticion: 'POST', linkSub : Constantes.RUTA + Constantes.AUTHORIZATION_USUARIOS , iconoSub : 'done', menu : MENU[2] },
    { nombreSub : 'Catalogo de unidades de negocio ', tipoPeticion: 'POST, PUT', linkSub : Constantes.RUTA + Constantes.CATALOGO_GESTION_UN , iconoSub : 'done', menu : MENU[2] },
]

