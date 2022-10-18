import { DataService } from './../../servicos/data.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  componentes: Observable<any>
  constructor(private menu: MenuController, private ds: DataService) { }

  ngOnInit() {
    this.componentes = this.ds.getMenu();
  }
  toggleMenu(){
    this.menu.toggle();
  }

}

// interface Componente{
//   icone:string;
//   nome:string;
//   subtitulo:string;
//   link:string;
// }