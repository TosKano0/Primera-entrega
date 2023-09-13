import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  
  username: string = '';
  password: string = '';
  showWarning: boolean = false;

  constructor( private router: Router,  private storage: Storage) { 
    this.storage.create();}
  
  home() {
    if (!this.username || !this.password) {
      // Si uno o ambos campos están vacíos, muestra una advertencia y no redirijas
      // al usuario a la página "home"
      this.showWarning = true;
    } else {
      // Si ambos campos están llenos, guarda el nombre de usuario en el almacenamiento
      this.storage.set('username', this.username).then(() => {
        // Luego, redirige al usuario a la página "home"
        this.router.navigate(['/home']);
      });
    }
  }

  recuperacion() {
    // Realizar la lógica de autenticación aquí
    // Si la autenticación es exitosa, redirigir a la página de inicio
    this.router.navigate(['/recuperacion']);
  }
}
