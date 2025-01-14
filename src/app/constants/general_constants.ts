export class GeneralConstants {

    //MAGIC NUMBERS
    public static readonly UNO = 1;
    public static readonly DOS = 2;
    public static readonly TRES = 3;
    public static readonly CUATRO = 4;
    public static readonly CINCO = 5;
    public static readonly SEIS = 6;
    public static readonly SIETE = 7;
    public static readonly OCHO = 8;
    public static readonly NUEVE = 9;
    public static readonly DIEZ = 10;
    public static readonly ONCE = 11;
    public static readonly DOCE = 12;
    public static readonly DIECIOCHO = 18;
    public static readonly CIEN = 100;
    public static readonly DOSCIENTOS = 200;
    public static readonly QUINIENTOS = 500;
    public static readonly TRESMIL = 3000;
    public static readonly CINCOMIL = 5000;
    public static readonly DIEZMIL = 10000;
    public static readonly CODIGO_BAD_REQUEST = 400;
    public static readonly CODIGO_UNAUTHORIZED = 401;
    public static readonly CODIGO_NOT_FOUND = 404;
    public static readonly TIME_LEFT_FOR_ALERT = 60000;
    public static readonly TIME_SESSION = 600000;
  
    public static readonly CODE_TOKEN_REFRESH = "6001";
    //MENSAJE S3
    public static readonly S3_TOKEN_EXPIRED = "Token expired";
    public static readonly MENSAJE_GENERICO_ERROR_S3 = "No se pudo cargar el documento, intente más tarde";
  
  
    //TOAST
    public static TOAST_POS_CENTRO_ARRIBA = "toast-top-center"
    public static TOAST_POS_DERECHA_ARRIBA = "toast-top-right"
    public static TOAST_POS_IZQUIERDA_ARRIBA = "toast-top-left"
    public static TOAST_POS_IZQUIERDA_CENTRO = "toast-bottom-center"
    public static TOAST_TIPO_SUCCESS = this.UNO;
    public static TOAST_TIPO_INFO = this.DOS;
    public static TOAST_TIPO_WARNING = this.TRES;
    public static TOAST_TIPO_ERROR = this.CUATRO;
    public static TOAST_TIME_DEFAULT = this.TRESMIL;
    public static TOAST_TIME_5_SEGUNDOS = this.CINCOMIL;
  
    public static ESTATUS_BORRADOR = "BORRADOR";
    public static ESTATUS_CANCELADO_RECHAZADO = "CANCELADO/RECHAZADO";
    public static ESTATUS_FIRMADO = "FIRMADO";
    public static ESTATUS_EN_PROCESO_DE_FIRMA = "EN PROCESO DE FIRMA";
    public static ESTATUS_VENCIDO = "VENCIDO";
    public static ESTATUS_NULO = "NULO";
  
    public static ESTATUS_ID_HOME = 0;
    public static ESTATUS_ID_BORRADOR = this.UNO;
    public static ESTATUS_ID_FIRMADO = this.DOS;
    public static ESTATUS_ID_EN_PROCESO_DE_FIRMA = this.TRES;
    public static ESTATUS_ID_VENCIDO = this.CUATRO;
    public static ESTATUS_ID_CANCELADO = this.CINCO;
    public static ESTATUS_ID_RECHAZADO = this.SEIS;
    public static ESTATUS_ID_ELIMINADO = this.SIETE;
  
    private static readonly ENERO = this.UNO;
    private static readonly FEBRERO = this.DOS;
    private static readonly MARZO = this.TRES;
    private static readonly ABRIL = this.CUATRO;
    private static readonly MAYO = this.CINCO;
    private static readonly JUNIO = this.SEIS;
    private static readonly JULIO = this.SIETE;
    private static readonly AGOSTO = this.OCHO;
    private static readonly SEPTIEMBRE = this.NUEVE;
    private static readonly OCTUBRE = this.DIEZ;
    private static readonly NOVIEMBRE = this.ONCE;
    private static readonly DICIEMBRE = this.DOCE;
  
    private static readonly INDICADOR_RED = this.UNO;
    private static readonly INDICADOR_VERDE = this.DOS;
    private static readonly INDICADOR_AMARILLO = this.TRES;
  
    private static readonly REDIRECCIONADOR_BORRADOR = this.UNO;
    private static readonly REDIRECCIONADOR_FIRMADO = this.DOS;
    private static readonly REDIRECCIONADOR_EN_PROCESO_FIRMA = this.TRES;
    private static readonly REDIRECCIONADOR_VENCIDO = this.CUATRO;
    private static readonly REDIRECCIONADOR_CANCELADO = this.CINCO;
    private static readonly REDIRECCIONADOR_RECHAZADO = this.SEIS;
    private static readonly REDIRECCIONADOR_ELIMINADO = this.SIETE;
    private static readonly REDIRECCIONADOR_ACTUALIZA_INE = this.OCHO;
  
    public static MONTHS = {
      [this.ENERO]: 'Enero',
      [this.FEBRERO]: 'Febrero',
      [this.MARZO]: 'Marzo',
      [this.ABRIL]: 'Abril',
      [this.MAYO]: 'Mayo',
      [this.JUNIO]: 'Junio',
      [this.JULIO]: 'Julio',
      [this.AGOSTO]: 'Agosto',
      [this.SEPTIEMBRE]: 'Septiembre',
      [this.OCTUBRE]: 'Octubre',
      [this.NOVIEMBRE]: 'Noviembre',
      [this.DICIEMBRE]: 'Diciembre',
    }
  
    public static INDICADORES = {
      [this.INDICADOR_RED]: 'assets/ico_doc_vencido.svg',
      [this.INDICADOR_VERDE]: 'assets/ico_doc_completado.svg',
      [this.INDICADOR_AMARILLO]: 'assets/ico_doc_en_proceso.svg',
    }
  
    public static REDIRECCIONADORES = {
      [this.REDIRECCIONADOR_BORRADOR]: '/dashboard/draft',
      [this.REDIRECCIONADOR_FIRMADO]: '/dashboard/signed',
      [this.REDIRECCIONADOR_EN_PROCESO_FIRMA]: '/dashboard/signing-process',
      [this.REDIRECCIONADOR_VENCIDO]: '/dashboard/expired',
      [this.REDIRECCIONADOR_CANCELADO]: '/dashboard/canc-rej',
      [this.REDIRECCIONADOR_RECHAZADO]: '/dashboard/canc-rej',
      [this.REDIRECCIONADOR_ELIMINADO]: '/dashboard',
      [this.REDIRECCIONADOR_ACTUALIZA_INE]: '/carga-ine',
    }
  
    public static ESTATUS = {
      [this.ESTATUS_ID_BORRADOR]: {
        text: 'Borrado',
        color: ''
      },
      [this.ESTATUS_ID_FIRMADO]: {
        text: 'Firmado',
        color: ''
      },
      [this.ESTATUS_ID_EN_PROCESO_DE_FIRMA]: {
        text: 'En proceso de firma',
        color: ''
      },
      [this.ESTATUS_ID_VENCIDO]: {
        text: 'Vencido',
        color: ''
      },
      [this.ESTATUS_ID_CANCELADO]: {
        text: 'Cancelado',
        color: 'warning'
      },
      [this.ESTATUS_ID_RECHAZADO]: {
        text: 'Rechazado',
        color: 'error'
      },
      [this.ESTATUS_ID_ELIMINADO]: {
        text: 'Eliminado',
        color: ''
      },
    }
  
    public static MOSTRAR_TODO = 'Mostrar todo';
    public static DOCUMENTOS = 'Documentos';
    public static PLANTILLAS = 'Plantillas';
  
    public static SEARCH_OPTION = {
      [this.MOSTRAR_TODO]: 1,
      [this.DOCUMENTOS]: 2,
      [this.PLANTILLAS]: 3
    }
  
    public static ID_ADMINISTRADOR = this.UNO;
    public static ID_EMISOR = this.DOS;
    public static ID_SUPERADMINISTRADOR = this.TRES;
    public static ID_AUDITOR = this.CUATRO;
  
    //CHATBOT
    public static ID_CHAT_INICIAL = 1;
  }
  