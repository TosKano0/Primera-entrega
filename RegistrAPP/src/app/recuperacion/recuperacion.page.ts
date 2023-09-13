import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage {

  constructor(private router: Router, private storage: Storage) {this.storage.create();
  }
  username: string = '';
  showWarning: boolean = false;

  home() {
    if (!this.username) {
      // Si uno o ambos campos están vacíos, muestra una advertencia y no redirijas
      // al usuario a la página "home"
      this.showWarning = true;
    } else {
      this.storage.set('username', this.username).then(() => {
        // Luego, redirige al usuario a la página "home"
        this.router.navigate(['/home']);
      });
    }
  }

}
