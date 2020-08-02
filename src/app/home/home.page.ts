import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    entryList: Object[] = [
      { "id": 1, "name": 'Musaraf' , "subject": 'Hello hi'},
      { "id": 2, "name": 'Musaraf' , "subject": 'Hello hi'},
      { "id": 3, "name": 'Musaraf' , "subject": 'Hello hi'}
    ];
  


  constructor(public alertController: AlertController) {}

  deleteItem(entryList: Object) {
    // filter the given item and store it in the same array
    this.entryList = this.entryList.filter((element) => {
      return element["id"] !== entryList["id"];
    });
  }



  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Add Mail',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Enter name'
        },
        {
          name: 'subject',
          type: 'text',
          placeholder: 'Enter subject'
        }
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok');
            
            console.log(data.name,data.subject);
            const length = this.entryList.length - 1;
            const maxId = this.entryList[length]["id"];

    // add an item to the array
    this.entryList.push({ id: maxId + 1, name: data.name, subject: data.subject });

            
          }
        }
      ]
    });

    await alert.present();
  }
}
