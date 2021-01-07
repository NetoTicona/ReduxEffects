import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios:Usuario [] = [];

  constructor(
    private _userService:UsuarioService
  ) { }

  ngOnInit(): void {
    this._userService.getUsuarios().subscribe( (rpta)=>{
      console.log("rpta: ", rpta );
      this.usuarios = rpta
      
    } )
  }

}
