import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../../../core/services/resource.service';
import { Person } from '../../interfaces/person.interface';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrl: './people-detail.component.scss',
  standalone: false
})
export class PeopleDetailComponent implements OnInit {
  person?: Person;

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.resourceService.getOnePerson(id).subscribe(res => {
        this.person = res.properties;
      });
    }
  }
}
