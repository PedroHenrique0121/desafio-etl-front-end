import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagina } from '../model/Pagina';
import { Observable } from "rxjs"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {

  constructor(private http: HttpClient) {

  }

  retornarPagina(id: number): Observable<Pagina> {
    return this.http.get<Pagina>(`${environment.apiUrl}/conteudo-original/${id}`);
  }

  salvarConteudoModificado(pagina: Pagina): Observable<Pagina> {
    return this.http.post<Pagina>(`${environment.apiUrl}/conteudo-modificado/${pagina.id}`, pagina);
  }
}
