import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResourceItem } from '../../core/models/resource.interface';

@Component({
  selector: 'app-resource-list',
  standalone: false,
  templateUrl: './resource-list.component.html',
  styleUrl: './resource-list.component.scss',
})
export class ResourceListComponent {

  @Input() title: string = '';
  @Input() items: ResourceItem[] = [];
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Input() resourceType: string = '';
  @Input() showPagination: boolean = true;

  @Output() pageChange = new EventEmitter<number>();
  @Output() search = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('resourceType', this.resourceType)

  }

  onSearch(term: any) {
    this.search.emit(term);
  }

  changePage(page: number) {
    this.pageChange.emit(page);
  }

}
