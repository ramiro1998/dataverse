import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('carousel', { static: true }) carousel!: ElementRef;
  leftArrowVisible = false;
  rightArrowVisible = true;

  constructor(private router: Router) {

  }

  resources = [
    {
      name: 'People',
      route: '/people',
      image: 'img/people.avif'
    },
    {
      name: 'Planets',
      route: '/planet',
      image: 'img/planets.webp'
    },
    {
      name: 'Starships',
      route: '/starship',
      image: 'img/starships.avif'
    },
    {
      name: 'Vehicles',
      route: '/vehicle',
      image: 'img/vehicles.jpeg'
    },
    {
      name: 'Species',
      route: '/specie',
      image: 'img/species.webp'
    },
    {
      name: 'Films',
      route: '/film',
      image: 'img/films.webp'
    }
  ];

  ngAfterViewInit() {
    this.checkScrollPosition();
    this.carousel.nativeElement.addEventListener('scroll', () => {
      this.checkScrollPosition();
    });
  }

  goTo(route: string) {
    console.log('rr', route)
    this.router.navigate([route]);
  }

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  }

  checkScrollPosition() {
    const el = this.carousel.nativeElement;
    this.leftArrowVisible = el.scrollLeft > 10;
    this.rightArrowVisible = el.scrollLeft + el.clientWidth < el.scrollWidth - 10;
  }

}
