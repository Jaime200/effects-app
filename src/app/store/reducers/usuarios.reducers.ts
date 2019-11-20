import { UsuarioModel } from '../../models/usuario.model';
//acciones
import * as fromUsuarios from '../actions'


export interface IusuarioState {
    users:UsuarioModel[];
    loaded:boolean;
    loading: boolean;
    error: any
}


const estadoInicial : IusuarioState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}


export function usuariosReducer(state = estadoInicial, action: fromUsuarios.usuariosAcciones): IusuarioState{
    switch(action.type){
        case fromUsuarios.CARGAR_USUARIOS :
            return {
                ...state,
                loading: true,  
                error:null              
            }
        case fromUsuarios.CARGA_USUARIOS_SUCCESS: 
            return {
                ...state,
                loading:false,
                loaded: true,
                users:[ ...action.usuarios]
            }
        case fromUsuarios.CARGAR_USUARIOS_FAIL:
            return {
                ...state,
                loaded:false,
                loading:false,
                error: {
                    status :action.payload.status,
                    message :action.payload.message,
                    url:action.payload.url,

                }
            } 
        
        default: return state;
    }

}