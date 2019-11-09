import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  public Usuarios: UsuarioModel[] = [];
  constructor( private UsuarioService:UsuarioService) { }

  ngOnInit() {
    this.UsuarioService.getUsers().subscribe( users=> { this.Usuarios = users });
  }

}
