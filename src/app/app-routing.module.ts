import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayouteComponent } from './layoute/layoute.component';
import { PaginaComponent } from './pagina/pagina.component';

const routes: Routes = [
  {path: "", component: LayouteComponent, children:[
    {path:'', component: PaginaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
