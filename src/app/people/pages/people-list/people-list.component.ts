import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  totalPages = 0;
  limit = 12;
  searchQuery: string = '';

  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople() {
    if (this.searchQuery) {
      this.resourceService.search('people', this.searchQuery).subscribe(res => {
        console.log('ress', res)
        this.people = res;
        this.totalPages = res.totalPages;
      });
    } else {
      this.resourceService.getList('people', this.currentPage, this.limit).subscribe(res => {
        console.log('ress22', res)
        this.people = res;
        this.totalPages = res.totalPages;
      });
    }
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.loadPeople();
  }

  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onSearch(term: string) {
    this.searchQuery = term;
    this.currentPage = 1;
    this.loadPeople();
  }

}
