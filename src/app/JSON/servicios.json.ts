import { Constantes } from "../intefaces/constantes";
import { Flujo, Servicios } from "../intefaces/flujos-servicios";

export const FLUJOS : Flujo[] = [
    { idFlujo : 1, nombreFlujo : 'Aviso de Privacidad, Terminos y Condiciones' },
    { idFlujo : 2, nombreFlujo : 'Usuarios' },
    { idFlujo : 3, nombreFlujo : 'Plantillas' },
]

export const SERVICIOS : Servicios[] = [
    { nombreServicio: 'Historial Aviso de Privacidad', apiServicio: `${Constantes.API_GATEWAY}/grupo-salinas/juridico/firma-documentos/informacion-legal/v1/aviso-privacidad/busquedas`, tipoPeticion : 'POST' , flujo : FLUJOS[0] },
    { nombreServicio: 'Historial Terminos y Condiciones', apiServicio: `${Constantes.API_GATEWAY}/grupo-salinas/juridico/firma-documentos/informacion-legal/v1/terminos-condiciones/busquedas`, tipoPeticion : 'POST' , flujo : FLUJOS[0] },
    { nombreServicio: 'Editar Aviso de Privacidad', apiServicio: `${Constantes.API_GATEWAY}/grupo-salinas/juridico/firma-documentos/informacion-legal/v1/aviso-privacidad`, tipoPeticion : 'POST' , flujo : FLUJOS[0] },
    { nombreServicio: 'Editar Terminos y Condiciones', apiServicio: `${Constantes.API_GATEWAY}/grupo-salinas/juridico/firma-documentos/informacion-legal/v1/terminos-condiciones`, tipoPeticion : 'POST' , flujo : FLUJOS[0] },
    { nombreServicio: 'Visualizar Aviso de Privacidad', apiServicio: `${Constantes.API_GATEWAY}/grupo-salinas/juridico/firma-documentos/informacion-legal/v1/aviso-privacidad/detalles/busquedas`, tipoPeticion : 'POST' , flujo : FLUJOS[0] },
    { nombreServicio: 'Visualizar Terminos y Condiciones', apiServicio: `${Constantes.API_GATEWAY}/grupo-salinas/juridico/firma-documentos/informacion-legal/v1/terminos-condiciones/detalles/busquedas`, tipoPeticion : 'POST' , flujo : FLUJOS[0] },
    { nombreServicio: 'Lista de Usuarios - General/Filtro', apiServicio: `${Constantes.API_GATEWAY}/grupo-salinas/juridico/firma-documentos/usuarios/v1/usuarios/busquedas`, tipoPeticion : 'POST' , flujo : FLUJOS[1] },
    { nombreServicio: 'Consulta de Catalogo de Negocios para Filtro de Usuarios', apiServicio: `${Constantes.API_GATEWAY}/grupo-salinas/juridico/firma-documentos/perfilamiento-usuarios/gestion-catalogos/v1/unidades-negocio/busquedas`, tipoPeticion : 'POST' , flujo : FLUJOS[1] },
    { nombreServicio: 'Eliminar Usuario', apiServicio: `${Constantes.API_GATEWAY}/grupo-salinas/juridico/firma-documentos/gestion-usuarios/v1/usuarios/eliminacion`, tipoPeticion : 'POST' , flujo : FLUJOS[1] },
    { nombreServicio: 'Cambiar Perfil de Usuario', apiServicio: `${Constantes.API_GATEWAY}/grupo-salinas/juridico/firma-documentos/usuarios/perfiles/v1/usuarios/perfiles`, tipoPeticion : 'PUT' , flujo : FLUJOS[1] },
    { nombreServicio: 'Lista de Plantillas', apiServicio: `${Constantes.API_GATEWAY}/grupo-salinas/juridico/firma-documentos/gestion-plantillas/v1/plantillas/busquedas`, tipoPeticion : 'POST' , flujo : FLUJOS[2] },
    { nombreServicio: 'Seleccionar Plantilla', apiServicio: `${Constantes.S3_PLANTILLAS}`, tipoPeticion : 'GET' , flujo : FLUJOS[2] },
    // { nombreServicio: '', apiServicio: `${Constantes.API_GATEWAY}`, tipoPeticion : 'GET' , flujo : FLUJOS[0] },
]