import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home-logeado',
  templateUrl: './home-logeado.page.html',
  styleUrls: ['./home-logeado.page.scss'],
})
export class HomeLogeadoPage {
  firstName: string = '';
  lastName: string = '';
  educationLevel: string = '';
  birthDate: string = '';

  constructor(private alertController: AlertController) {}

  clearFields() {
    this.firstName = '';
    this.lastName = '';
    this.educationLevel = '';
    this.birthDate = '';
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario',
      message:'Su nombre es : ' + this.firstName +' '+ this.lastName+' fue agregado correctamente',
      buttons: ['OK'],
    });

    await alert.present();
  }
}

