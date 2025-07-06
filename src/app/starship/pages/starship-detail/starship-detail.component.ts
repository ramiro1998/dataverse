import { Component, OnInit } from '@angular/core';
import { ResourceOne } from '../../../core/models/resource.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starship-detail',
  standalone: false,
  templateUrl: './starship-detail.component.html',
  styleUrl: './starship-detail.component.scss'
})
export class StarshipDetailComponent implements OnInit {

  starships!: ResourceOne;
  fields = [
    { label: 'Model', key: 'model' },
    { label: 'Starship Class', key: 'starship_class' },
    { label: 'Manufacturer', key: 'manufacturer' },
    { label: 'Cost', key: 'cost_in_credits', suffix: ' credits' },
    { label: 'Crew', key: 'crew' },
    { label: 'Passengers', key: 'passengers' },
    { label: 'Hyperdrive Rating', key: 'hyperdrive_rating' },
    { label: 'Length', key: 'length', suffix: ' m' }
  ];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.starships = data['starships'].result.properties;
    });
  }

}