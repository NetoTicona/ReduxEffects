import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './users/lista/lista.component';
import { UsuarioComponent } from './users/usuario/usuario.component';

const routes: Routes = [
  {
    path:"",
    component:ListaComponent
  },{
    path:"usuario/:id",
    component:UsuarioComponent
  },{
    path:"**",
    redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
