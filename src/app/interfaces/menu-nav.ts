export interface Menu {
    nombre : string;
    link : string;
    icono : string;
    modulo : boolean;
}

export interface Submenu {
    nombreSub : string;
    tipoPeticion :  string;
    linkSub : string;
    iconoSub : string;
    menu : Menu;
}