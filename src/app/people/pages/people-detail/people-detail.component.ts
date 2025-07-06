import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../../../core/services/resource.service';
import { ResourceOne } from '../../../core/models/resource.interface';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrl: './people-detail.component.scss',
  standalone: false
})
export class PeopleDetailComponent implements OnInit {
  person!: ResourceOne;
  fields = [
    { label: 'Gender', key: 'gender' },
    { label: 'Birth Year', key: 'birth_year' },
    { label: 'Height', key: 'height', suffix: ' cm' },
    { label: 'Mass', key: 'mass', suffix: ' kg' },
    { label: 'Hair Color', key: 'hair_color' },
    { label: 'Eye Color', key: 'eye_color' },
    { label: 'Skin Color', key: 'skin_color' },
    { label: 'Homeworld', key: 'homeworld' }
  ];


  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.person = data['person'].result.properties;
    });
  }
}
