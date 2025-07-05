import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private baseUrl = 'https://www.swapi.tech/api';

  constructor(private http: HttpClient) { }

  getResource(resource: string, page: number, limit: number, query: string = '') {
    if (query) {
      const url = `${this.baseUrl}/${resource}?name=${query}`;
      return this.http.get<any>(url).pipe(
        map((res) => {
          const results = res.result.map((r: any) => ({
            uid: r.uid,
            name: r.properties.name,
            url: r.properties.url
          }));
          return {
            results,
            totalPages: 1
          };
        })
      );
    } else {
      const url = `${this.baseUrl}/${resource}?page=${page}&limit=${limit}`;
      return this.http.get<any>(url).pipe(
        map((res) => {
          const results = res.results.map((r: any) => ({
            uid: r.uid,
            name: r.name,
            url: r.url
          }));
          return {
            results,
            totalPages: res.total_pages || 1
          };
        })
      );
    }
  }

}
