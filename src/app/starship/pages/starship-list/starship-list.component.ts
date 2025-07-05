import { Component, OnInit } from '@angular/core';
import { ResourceItem } from '../../../core/models/resource.interface';
import { ResourceService } from '../../../core/services/resource.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starship-list',
  standalone: false,
  templateUrl: './starship-list.component.html',
  styleUrl: './starship-list.component.scss'
})
export class StarshipListComponent implements OnInit {

  starship: ResourceItem[] = [];
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
    this.starship = resolved.results;
    this.totalPages = resolved.totalPages;
  }

  onSearch(term: string): void {
    this.searchQuery = term;
    this.currentPage = 1;
    this.fetchStarships();
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.fetchStarships();
  }

  private fetchStarships(): void {
    this.resourceService
      .getResource('starships', this.currentPage, this.limit, this.searchQuery)
      .subscribe((res) => {
        this.starship = res.results;
        this.totalPages = res.totalPages;
      });
  }
}