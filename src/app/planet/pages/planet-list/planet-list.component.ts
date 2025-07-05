import { Component, OnInit } from '@angular/core';
import { ResourceItem } from '../../../core/models/resource.interface';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../../../core/services/resource.service';

@Component({
  selector: 'app-planet-list',
  standalone: false,
  templateUrl: './planet-list.component.html',
  styleUrl: './planet-list.component.scss'
})
export class PlanetListComponent implements OnInit {

  planet: ResourceItem[] = [];
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
    this.planet = resolved.results;
    this.totalPages = resolved.totalPages;
  }

  onSearch(term: string): void {
    this.searchQuery = term;
    this.currentPage = 1;
    this.fetchPlanet();
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.fetchPlanet();
  }

  private fetchPlanet(): void {
    this.resourceService
      .getResource('planets', this.currentPage, this.limit, this.searchQuery)
      .subscribe((res) => {
        this.planet = res.results;
        this.totalPages = res.totalPages;
      });
  }
}
