import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificarSenaComponent } from './vista/identificar-sena/identificar-sena.component';
import { PrincipalComponent } from './vista/principal/principal.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/identificar_rostro'},
  {path: 'identificar_rostro', component: PrincipalComponent},
  {path: 'identifiar_seña', component: IdentificarSenaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
