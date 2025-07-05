import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() name!: string;
  @Input() uid!: string;
  @Input() resourceType!: string;

  constructor(private router: Router) { }

  goToDetail() {
    console.log('reso', this.resourceType)
    this.router.navigate([`/${this.resourceType}/${this.uid}`]);
  }

}
