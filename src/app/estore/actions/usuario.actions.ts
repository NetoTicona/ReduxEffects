import { Action } from "@ngrx/store";
import { Usuario } from "../../modelos/usuario.model";


export const CARGAR_USUARIOS = "[ususario]  cargar usuario";
export const CARGAR_USUARIOS_FALLO = "[USUARIO] error al cargr user";
export const CARGAR_USUARIOS_SUQUCESS = "[usuario] cargo bien";

export class CargarUSuarioS implements Action{
    readonly type = CARGAR_USUARIOS;
    constructor(public payloraID:any){}
}

export class CargarUserSFallo implements Action{
    readonly type = CARGAR_USUARIOS_FALLO;
    constructor( public payloraF:any ){}
}

export class CargarUsuarioSBien implements Action{
    readonly type = CARGAR_USUARIOS_SUQUCESS;
    constructor( public payloraUser:Usuario[] ){}
}



export type AccionesDelUsuarioS = CargarUSuarioS |
CargarUserSFallo |
CargarUsuarioSBien


