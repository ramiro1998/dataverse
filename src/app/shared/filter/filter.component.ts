import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})

export default class FilterComponent {
  searchControl = new FormControl('');
  @Output() searchTerm = new EventEmitter<string>();

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => {
        this.searchTerm.emit(value?.trim() || '');
      });
  }
}
