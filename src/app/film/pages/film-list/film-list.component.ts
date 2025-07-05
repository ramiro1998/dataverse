import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../../../core/services/resource.service';
import { ResourceItem } from '../../../core/models/resource.interface';

@Component({
  selector: 'app-film-list',
  standalone: false,
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss'
})
export class FilmListComponent implements OnInit {

  film: ResourceItem[] = [];
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
    this.film = resolved.results;
    this.totalPages = resolved.totalPages;
  }

  onSearch(term: string): void {
    this.searchQuery = term;
    this.currentPage = 1;
    this.fetchFilm();
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.fetchFilm();
  }

  private fetchFilm(): void {
    this.resourceService
      .getResource('film', this.currentPage, this.limit, this.searchQuery)
      .subscribe((res) => {
        this.film = res.results;
        this.totalPages = res.totalPages;
      });
  }
}
