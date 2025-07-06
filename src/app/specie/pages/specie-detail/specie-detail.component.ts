import { Component, OnInit } from '@angular/core';
import { ResourceOne } from '../../../core/models/resource.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specie-detail',
  standalone: false,
  templateUrl: './specie-detail.component.html',
  styleUrl: './specie-detail.component.scss'
})
export class SpecieDetailComponent implements OnInit {

  species!: ResourceOne;
  fields = [
    { label: 'Classification', key: 'classification' },
    { label: 'Designation', key: 'designation' },
    { label: 'Average Lifespan', key: 'average_lifespan' },
    { label: 'Language', key: 'language' },
    { label: 'Eye Colors', key: 'eye_colors' },
    { label: 'Skin Colors', key: 'skin_colors' },
    { label: 'Hair Colors', key: 'hair_colors' },
    { label: 'Homeworld', key: 'homeworld' }
  ];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.species = data['species'].result.properties;
    });
  }

}