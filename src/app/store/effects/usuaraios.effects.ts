import { Injectable } from "@angular/core";

/* NGRX */
import { Actions, ofType, Effect  } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import * as usuariosActons from '../actions'

/* RXJS */
import { Observable } from 'rxjs/internal/Observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

/* SERVICIOS */
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects{

    constructor(
        private actions$: Actions,
        public UsuarioService:UsuarioService
    ){    }

    @Effect()
    cargarusuarios$: Observable<Action> =
        this.actions$
        .pipe(
            ofType(usuariosActons.CARGAR_USUARIOS),
            //tap(action => console.log(action)),
            switchMap(()=> {
                return this.UsuarioService.getUsers()
                            .pipe(
                                map(users => new usuariosActons.CargarUsuariosSuccess(users)),
                                catchError( error => of(new usuariosActons.CargarUsuariosFail(error)))
                            );                
                })
        )

}