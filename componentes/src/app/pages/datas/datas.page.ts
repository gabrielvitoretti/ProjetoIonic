import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.page.html',
  styleUrls: ['./datas.page.scss'],
})
export class DatasPage implements OnInit {

  dataAtual: Date = new Date();
  constructor() { }

  ngOnInit() {
  }
  trocarData(novaData){
    console.log('ionChange', novaData);
  }

}
