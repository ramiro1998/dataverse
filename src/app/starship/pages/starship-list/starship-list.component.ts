import { Component, OnInit } from '@angular/core';
import { ResourceItem } from '../../../core/models/resource.interface';
import { ResourceService } from '../../../core/services/resource.service';

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

  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.loadStarship();
  }

  loadStarship(): void {
    const page = this.currentPage;
    const limit = this.limit;

    this.resourceService.getResource('starships', page, limit, this.searchQuery).subscribe(res => {
      this.starship = res.results;
      this.totalPages = res.totalPages;
    });
  }

  onSearch(term: string): void {
    this.searchQuery = term;
    this.currentPage = 1;
    this.loadStarship();
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.loadStarship();
  }
}