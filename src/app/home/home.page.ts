import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mail: Object[] = [
    {id: 1, 
     name: "Musaraf",
     subject:"Hi! Hello everyone",
    },
  ];
  constructor(public alertController: AlertController) {
    
  }
  delete(entry: Object) {
    this.mail = this.mail.filter((element) => {
      return element["id"] !== entry["id"];
    });
  }
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mail Data',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Enter name'
        },
        {
          name: 'subject',
          type: 'textarea',
          placeholder: 'Enter subject'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Ok',
          handler: async data => {
            if((data.name && data.subject) == ""){
              const errorAlert = await this.alertController.create({
                  cssClass: 'my-custom-class',
                  message: 'Please do fill the Information...',
                  buttons: [{
                    text: 'Ok',
                    handler: () => {
                    this.presentAlertPrompt();
                    }
                  }]
                });
                errorAlert.present();
            }
            else{
              const length = this.mail.length - 1;
              const maxId = this.mail[length]["id"];
              this.mail.push({ id: maxId + 1, name: data.name, subject: data.subject });
              }
          }
        }
      ]
    });
    await alert.present();
  }
}