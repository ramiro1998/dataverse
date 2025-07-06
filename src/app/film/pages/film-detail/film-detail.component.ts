import { Component, OnInit } from '@angular/core';
import { ResourceOne } from '../../../core/models/resource.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  standalone: false,
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.scss'
})

export class FilmDetailComponent implements OnInit {

  films!: ResourceOne;
  fields = [
    { label: 'Episode', key: 'episode_id' },
    { label: 'Director', key: 'director' },
    { label: 'Producer', key: 'producer' },
    { label: 'Release Date', key: 'release_date' },
    { label: 'Opening', key: 'opening_crawl', truncate: true }
  ];


  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.films = data['films'].result.properties;
    });
  }

}