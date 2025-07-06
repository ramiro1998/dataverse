import { Component, Input } from '@angular/core';
import { ResourceDetail } from '../../core/models/resource.interface';

@Component({
  selector: 'app-resource-detail',
  standalone: false,
  templateUrl: './resource-detail.component.html',
  styleUrl: './resource-detail.component.scss'
})
export class ResourceDetailComponent {
  @Input() title!: string;
  @Input() imageUrl?: string;
  @Input() fields: ResourceDetail[] = [];
  @Input() resource: any;
  @Input() resourceType: string = '';


  ngOnInit(): void {
  }
}
