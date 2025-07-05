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
    { name: 'Planets', route: '/planet' },
    { name: 'Starships', route: '/starship' },
    { name: 'Vehicles', route: '/vehicle' },
    { name: 'Species', route: '/specie' },
    { name: 'Films', route: '/film' },
  ];

  isMobileMenuOpen = false;


  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

}
