import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import cheerio, { CheerioAPI } from 'cheerio';
import { Pagina } from '../model/Pagina';
import { Resultado } from '../model/Resultado';
import { PaginaService } from '../services/pagina.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit, AfterViewInit {

  pagina!: Pagina;
  resultado!: Resultado;

  constructor(private paginaService: PaginaService,
    private elementRef: ElementRef) {
    this.pagina = new Pagina();
    this.resultado = new Resultado();
  }

  ngOnInit(): void {
    // this.buscarconteudoOriginal()
  }

  ngAfterViewInit(): void { }

  buscarconteudoOriginal() {
    this.paginaService.retornarPagina(1)
      .subscribe((response: any) => {
        this.pagina = response;
      })
  }

  realizarProcessoETL(){
    this.paginaService.realizarProcessoETL()
    .subscribe( response=>{
         this.resultado= response;
    })
  }

  identificarTagsComLinks() {

    let e = this.elementRef.nativeElement.querySelectorAll('a[href^="https://jirac"]') as NodeListOf<HTMLAnchorElement>;
   
    e.forEach((element) => {
      let titulo = element.text
    
      let href = element.href
      let id = this.extrairId(href)
      
      const novoElemento =`<ac:link><ri:page ri:content-title="${titulo}" /><ac:plain-text-link-body>${titulo} : ${id?id:''}</ac:plain-text-link-body></ac:link>`;
      element.outerHTML = novoElemento;
    })

    this.salvarConteudoModificado();
  }


  extrairId(link: string) {
    if (link.includes("pageId")) {
      return link.substring(link.indexOf("=") + 1, link.indexOf("&"));
    } else {
      return;
    }
  }

  salvarConteudoModificado() {
    const newHtml = this.elementRef.nativeElement.querySelector('#container-pagina') as HTMLDivElement;
    this.pagina.conteudoOriginal = newHtml.innerHTML;
    this.pagina.conteudoModificado = this.pagina.conteudoOriginal;


    this.paginaService.salvarConteudoModificado(this.pagina)
      .subscribe(response => {
        console.log("conteudo modificado foi salvo no banco de dados")
      }, error => {
        console.log(error);
      })
  }


}
