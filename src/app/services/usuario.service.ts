import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = "https://reqres.in/api"

  constructor(
    private _http:HttpClient
  ) { }



    getUsuarios(){
      return this._http.get(`${this.url}/users?per_page=6`).pipe( map(
        (resp:any )=> resp.data
      )  )
    }





}
