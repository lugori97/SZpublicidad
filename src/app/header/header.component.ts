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

  isMenuVisible = true; // Por defecto, mostrar el menú

  @HostListener('window:scroll', [])
  onScroll(): void {
    // Define una posición límite a partir de la cual el menú debe desaparecer
    const scrollThreshold = 25;

    // Calcula la posición actual de scroll
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Cambia la visibilidad del menú basado en la posición de scroll
    this.isMenuVisible = scrollPosition < scrollThreshold;
  }
}
