import { Component, OnInit } from '@angular/core';
import { ResourceItem } from '../../../core/models/resource.interface';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../../../core/services/resource.service';

@Component({
  selector: 'app-vehicle-list',
  standalone: false,
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss'
})
export class VehicleListComponent implements OnInit {

  vehicle: ResourceItem[] = [];
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
    this.vehicle = resolved.results;
    this.totalPages = resolved.totalPages;
  }

  onSearch(term: string): void {
    this.searchQuery = term;
    this.currentPage = 1;
    this.fetchVehicle();
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.fetchVehicle();
  }

  private fetchVehicle(): void {
    this.resourceService
      .getResource('vehicles', this.currentPage, this.limit, this.searchQuery)
      .subscribe((res) => {
        this.vehicle = res.results;
        this.totalPages = res.totalPages;
      });
  }
}
