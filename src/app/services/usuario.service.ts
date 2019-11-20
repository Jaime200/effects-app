import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in'
  constructor(
    private http:HttpClient
  ) { }

  getUsers(){
    return this.http.get(`${this.url}/api/users?per_page=6`)
                .pipe( map( resp => resp['data']) );
  }

  getUserById(id:string){
    return this.http.get(`${this.url}/api/users/${id}`)
                .pipe( map( resp => resp['data']) );
  }
}
