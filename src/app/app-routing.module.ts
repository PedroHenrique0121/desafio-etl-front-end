import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayouteComponent } from './layoute/layoute.component';
import { PaginaComponent } from './pagina/pagina.component';

const routes: Routes = [
  {path: "pagina", component: LayouteComponent, children:[
    {path:'conteudo-original', component: PaginaComponent}
  ]}
  , 
  {path: "", redirectTo:"pagina/conteudo-original", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
