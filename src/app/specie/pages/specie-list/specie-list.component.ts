import { Component, OnInit } from '@angular/core';
import { ResourceItem } from '../../../core/models/resource.interface';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../../../core/services/resource.service';

@Component({
  selector: 'app-specie-list',
  standalone: false,
  templateUrl: './specie-list.component.html',
  styleUrl: './specie-list.component.scss'
})
export class SpecieListComponent implements OnInit {

  specie: ResourceItem[] = [];
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
    this.specie = resolved.results;
    this.totalPages = resolved.totalPages;
  }

  onSearch(term: string): void {
    this.searchQuery = term;
    this.currentPage = 1;
    this.fetchSpecie();
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.fetchSpecie();
  }

  private fetchSpecie(): void {
    this.resourceService
      .getResource('species', this.currentPage, this.limit, this.searchQuery)
      .subscribe((res) => {
        this.specie = res.results;
        this.totalPages = res.totalPages;
      });
  }
}
