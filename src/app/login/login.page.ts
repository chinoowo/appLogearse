import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}



  login() {
    // Aquí puedes realizar la autenticación real, en este ejemplo solo verificamos los valores estáticos
    if (this.username === 'usuario' && this.password === 'contraseña') {
      this.router.navigate(['/logeado']); // Cambia 'home' por la ruta de tu página principal
    } else {
      this.router.navigate(['/no-logeado']);
    }
  }
}