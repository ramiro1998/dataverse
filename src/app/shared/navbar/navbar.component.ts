import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  resources = [
    { name: 'People', route: '/people' },
    { name: 'Planets', route: '/planets' },
    { name: 'Starships', route: '/starships' },
    { name: 'Vehicles', route: '/vehicles' },
    { name: 'Species', route: '/species' },
    { name: 'Films', route: '/films' },
  ];

  isMobileMenuOpen = false;


  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

}
