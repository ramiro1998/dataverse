import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../../../core/services/resource.service';
import { ResourceItem } from '../../../core/models/resource.interface';

@Component({
  selector: 'app-people-list',
  standalone: false,
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss'
})
export class PeopleListComponent implements OnInit {

  people: ResourceItem[] = [];
  currentPage = 1;
  totalPages = 1;
  limit = 12;
  searchQuery = '';

  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService
  ) { }

  ngOnInit(): void {
    const resolved = this.route.snapshot.data['resourceData'];
    this.people = resolved.results;
    this.totalPages = resolved.totalPages;
  }

  onSearch(term: string): void {
    this.searchQuery = term;
    this.currentPage = 1;
    this.fetchPeople();
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.fetchPeople();
  }

  private fetchPeople(): void {
    this.resourceService
      .getResource('people', this.currentPage, this.limit, this.searchQuery)
      .subscribe((res) => {
        this.people = res.results;
        this.totalPages = res.totalPages;
      });
  }
}
