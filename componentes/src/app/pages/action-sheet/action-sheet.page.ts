import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  result:string;

  constructor(private actionSheetCtrl: ActionSheetController) {}
    
  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      subHeader: 'Example subheader',
      backdropDismiss: false, //Elemento que impossibilita o clique fora da caixa. Evitando com que haja cliques acidentais
      buttons: [
        {
          text: 'Excluir',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('clique no botao de excluir')
          },
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Compartilhar',
          icon: 'share-social-outline',
          handler: () => {
            console.log('clique no botao de compartilhar') //Adiciona uma informação no console.log
          },
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'blue',
          handler: () => {
            console.log('clique no botao de cancelar')
          },
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }
}
