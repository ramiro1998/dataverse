import { Component, OnInit } from '@angular/core';
import { ResourceOne } from '../../../core/models/resource.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-detail',
  standalone: false,
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.scss'
})
export class PlanetDetailComponent implements OnInit {

  planets!: ResourceOne;
  fields = [
    { label: 'Surface', key: 'surface_water' },
    { label: 'Climate', key: 'climate' },
    { label: 'Terrain', key: 'terrain' },
    { label: 'Population', key: 'population' },
    { label: 'Gravity', key: 'gravity' },
    { label: 'Diameter', key: 'diameter', suffix: ' km' },
    { label: 'Orbital Period', key: 'orbital_period', suffix: ' days' },
    { label: 'Rotation Period', key: 'rotation_period', suffix: ' hours' }
  ];



  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.planets = data['planets'].result.properties;
    });
  }

}