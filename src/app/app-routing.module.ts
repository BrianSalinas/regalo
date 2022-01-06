import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { LibroComponent } from './libro/libro.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: "main",
    component: MainComponent
  },
  {
    path: "libro",
    component: LibroComponent
  },
  {
    path: "galeria",
    component: GaleriaComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "main"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
