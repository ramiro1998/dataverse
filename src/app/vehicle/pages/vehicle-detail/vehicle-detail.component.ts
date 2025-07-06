import { Component, OnInit } from '@angular/core';
import { ResourceOne } from '../../../core/models/resource.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-detail',
  standalone: false,
  templateUrl: './vehicle-detail.component.html',
  styleUrl: './vehicle-detail.component.scss'
})
export class VehicleDetailComponent implements OnInit {

  vehicles!: ResourceOne;
  fields = [
    { label: 'Class', key: 'vehicle_class' },
    { label: 'Manufacturer', key: 'manufacturer' },
    { label: 'Vehicle Class', key: 'vehicle_class' },
    { label: 'Crew', key: 'crew' },
    { label: 'Passengers', key: 'passengers' },
    { label: 'Max Speed', key: 'max_atmosphering_speed', suffix: ' km/h' },
    { label: 'Length', key: 'length', suffix: ' m' },
    { label: 'Cost', key: 'cost_in_credits', suffix: ' credits' }
  ];


  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.vehicles = data['vehicles'].result.properties;
    });
  }

}