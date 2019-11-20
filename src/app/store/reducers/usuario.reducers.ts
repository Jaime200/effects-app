import { UsuarioModel } from '../../models/usuario.model';
//acciones
import * as fromUsuario from '../actions'

export interface usuarioState{
    user: UsuarioModel;
    loaded:boolean;
    loading:boolean;
    error:any
}

const estadoInicial: usuarioState = {
    user: null,
    loaded:false,
    loading:false,
    error:null
}


export function usuarioReducer(state= estadoInicial, action: fromUsuario.usuarioAcciones){
    switch(action.type){
        case fromUsuario.CARGAR_USUARIO:
            return {
                ...state,
                loading: true,
                error:null
            }
        case fromUsuario.CARGAR_USUARIO_SUCCESS:
            return{
                ...state,
                loading:false,
                loaded:true,
                user: {...action.usuario}
            }
        case fromUsuario.CARGAR_USUARIO_FAIL:
            return {
                ...state,
                loading:false,
                loaded:true,
                usuario:null,
                error:{
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            }
        default: return state
    }
}