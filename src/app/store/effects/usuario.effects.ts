import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UsuarioService } from '../../services/usuario.service';
import { Observable } from 'rxjs/internal/Observable';
import { Action } from '@ngrx/store'
import * as usuariosActons from '../actions'
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class UsuarioEffects {


    constructor(
        private actions$:Actions,
        private UsuarioService:UsuarioService
        ){    }

        @Effect()
        cargarUsuario$: Observable<Action> =
            this.actions$
            .pipe(
                ofType(usuariosActons.CARGAR_USUARIO),
                //tap(action => console.log(action)),
                switchMap((action:usuariosActons.CargarUsuario)=> {
                    return this.UsuarioService
                                .getUserById(action.id)
                                .pipe(
                                    map(user => new usuariosActons.CargarUsuarioSuccess(user)),
                                    catchError( error => of(new usuariosActons.CargarUsuarioFail(error)))
                                );                
                    })
            )
}