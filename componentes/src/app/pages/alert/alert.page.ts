import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {


  titulo:string;
  constructor(private alertController: AlertController) { }
  handlerMessage = '';
  roleMessage = '';

  ngOnInit() {}
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      backdropDismiss: false,
      message: 'This is an alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();
  }
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Digite suas informações por favor',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'AlertPrompt canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            this.handlerMessage = 'AlertPrompt confirmed';
            this.titulo = data.nome;
          },
        },
      ],
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Nome',
        },
        {
          name: 'telefone',
          type: 'number',
          placeholder: 'Insira o telefone',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name: 'idade',
          type: 'number',
          placeholder: 'Idade',
          min: 1,
          max: 100,
        },
        {
          name: 'sobre',
          type: 'textarea',
          placeholder: 'Fale um pouco sobre você',
        },
        {
          name: 'link',
          type: 'url',
          placeholder: 'Site',
        },
        {
          name: 'data',
          type: 'date',
          placeholder: 'Insira uma data',
        },
      ],
    });

    await alert.present();
  }
}
