// Constantes archivos
export class Constantes {
    // Ruta raiz
    public static readonly RUTA : string = 'assets/';
    // Carga de archivos en AWS
    public static readonly API_GATEWAY : string = 'https://api.devjuridicogruposalinas.com';
    public static readonly S3_PLANTILLAS : string = 'https://s3-epactum-emisor-plantillas-dev.s3.amazonaws.com//';
    // Carga de archivos por contratos
    public static readonly INFO_LEGAL_FIRMANTE : string = 'gs-juridico-firma-documentos-firmante-informacion-legal-v1.yaml';
    public static readonly INFO_LEGAL_EMISOR : string = 'gs-juridico-firma-documentos-informacion-legal-v1.yaml';
    public static readonly INFO_LEGAL_REVISORES : string = 'gs-juridico-firma-documentos-revisor-informacion-legal-v1.yaml';
    public static readonly CATALOGO_GESTION_UN : string = 'gs-juridico-firma-documentos-catalogos-gestion-unidades-negocio-v1.yaml';
    public static readonly AUTHORIZATION_2 : string = 'oauth2-v1.yaml';
    public static readonly AUTHORIZATION_USUARIOS : string = 'gs-juridico-firma-documentos-autenticacion-usuarios-v1.yaml';
    public static readonly USUARIOS_PERFILES : string = 'gs-juridico-firma-documentos-usuarios-perfiles-v1.yaml';

}