import { Component, OnInit } from '@angular/core';
// import { UsuarioService } from '../../services/usuario.service';
import { UsuarioModel } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import * as usuariosActions from '../../store/actions'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  public Usuarios: UsuarioModel[] = [];
  public loading:boolean;
  public error:any
  constructor( 
    //private UsuarioService:UsuarioService
    private store:Store<AppState>
    ) { }

  ngOnInit() {
    this.store.select('usuarios')
                .subscribe(usuarios => {
                  this.Usuarios = usuarios.users
                  this.loading = usuarios.loading
                  this.error = usuarios.error
                })
    //this.UsuarioService.getUsers().subscribe( users=> { this.Usuarios = users });
    this.store.dispatch(new usuariosActions.CargarUsuarios());
  }

}
