import { Action } from '@ngrx/store'
import { UsuarioModel } from '../../models/usuario.model';


export const CARGAR_USUARIOS = '[Usuarios] cargar usuarios'
export const CARGAR_USUARIOS_FAIL    = '[Usuarios] cargar usuarios FAIL'
export const CARGA_USUARIOS_SUCCESS = '[Usuarios] cargar usuarios SUCCESS'


export class CargarUsuarios implements Action{
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action{
    readonly type = CARGAR_USUARIOS_FAIL;

    constructor(public payload:any){

    }
}

export class CargarUsuariosSuccess implements Action{
    readonly type = CARGA_USUARIOS_SUCCESS;

    constructor(public usuarios:UsuarioModel[]){

    }
}


export type usuariosAcciones =  CargarUsuarios        |
                                CargarUsuariosFail    |
                                CargarUsuariosSuccess;

