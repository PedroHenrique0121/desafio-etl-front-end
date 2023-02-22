import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { PaginaService } from './services/pagina.service';
import cheerio, { CheerioAPI } from 'cheerio';
import { Pagina } from './model/Pagina';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'etl-front-end';

  pagina!: Pagina;
  $!: CheerioAPI;

  constructor(private paginaService: PaginaService) {
    this.pagina = new Pagina();
  }

  ngOnInit() {
   
   
  }

  ngAfterViewInit() {  }


}
