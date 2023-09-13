import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';

  constructor(private router: Router, private storage: Storage) {
    // Recupera el nombre de usuario almacenado en el almacenamiento
    this.storage.get('username').then((val) => {
      if (val) {
        this.username = val;
      }
    });
  }
  salir() {
    // Realizar la lógica de autenticación aquí
    // Si la autenticación es exitosa, redirigir a la página de inicio
    this.router.navigate(['/login']);
  }
}
