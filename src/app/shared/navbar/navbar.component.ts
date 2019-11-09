import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private Router:Router
  ) { }

  ngOnInit() {
  }


  irUsuario(id:string){
    console.log(id)
    if(!id){
      return;
    }

    this.Router.navigate([`usuario/${id}`])
  }

}
