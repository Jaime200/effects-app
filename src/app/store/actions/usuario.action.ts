
import { Action } from '@ngrx/store'
import { UsuarioModel } from '../../models/usuario.model';


export const CARGAR_USUARIO = '[USUARIO] cargar usuario'
export const CARGAR_USUARIO_FAIL = '[USUARIO] cargar usuario FAIL'
export const CARGAR_USUARIO_SUCCESS = '[USUARIO] cargar usuario SUCCESS'


export class CargarUsuario implements Action{
    readonly type = CARGAR_USUARIO;
    constructor(public id:string){ }

}


export class CargarUsuarioFail implements Action{
    readonly type = CARGAR_USUARIO_FAIL;
    constructor(public payload:any){ }

}

export class CargarUsuarioSuccess implements Action{
    readonly type = CARGAR_USUARIO_SUCCESS
    constructor(public usuario:UsuarioModel){}

}


export type usuarioAcciones =  CargarUsuario        |
                                CargarUsuarioFail    |
                                CargarUsuarioSuccess;
