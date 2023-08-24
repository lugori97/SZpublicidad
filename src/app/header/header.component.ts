import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    // Cierra el menú si se hace clic fuera del menú
    const dropdownContainer = document.querySelector('.dropdown-container');
    if (dropdownContainer && !dropdownContainer.contains(event.target as Node)) {
      this.isMenuOpen = false;
    }
  }
}
