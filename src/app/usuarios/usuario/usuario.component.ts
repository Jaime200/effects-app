import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import * as usuarioAction from '../../store/actions';
import { UsuarioModel } from '../../models/usuario.model';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  user:UsuarioModel;
  public loading:boolean;
  public error:any
  constructor(private route: ActivatedRoute,
              private store: Store<AppState>
      ) { }

  ngOnInit() {
    this.route.params
        .subscribe(
          params=> {            
            const id = params['id'];
            this.store.dispatch(new usuarioAction.CargarUsuario(id));
          }          
        )

        this.store.select('usuario')
            .subscribe(
              usuario =>{
                this.user = usuario.user;
                this.loading = usuario.loading
                this.error = usuario.error
              }
            )
    
  }

}
