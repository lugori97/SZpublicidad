import { Component } from '@angular/core';
import { HistoriasComponent } from '../historias/historias.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  photos = [
    { url: 'assets/images/posts/Test.png', caption: 'Foto 1' },
    { url: 'assets/images/posts/Test.png', caption: 'Foto 2' },
    { url: 'assets/images/posts/Test.png', caption: 'Foto 3' },
    { url: 'assets/images/posts/Test.png', caption: 'Foto 4' }
  ];

  // Verificar el tamaño de la pantalla para aplicar las clases adecuadas
  get isDesktop(): boolean {
    return window.innerWidth >= 1024;
  }

  get isTablet(): boolean {
    return window.innerWidth >= 768 && window.innerWidth < 1024;
  }

  get isMobile(): boolean {
    return window.innerWidth < 768;
  }

}
