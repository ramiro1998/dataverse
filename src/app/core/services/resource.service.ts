import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Person } from '../../people/interfaces/person.interface';

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
          const resFormatted = resource === 'films' ? 'result' : 'results';
          const results = res[resFormatted].map((r: any) => {
            return ({
              uid: r.uid,
              name: r.name ? r.name : r.properties.title,
              url: r.url
            })
          });
          return {
            results,
            totalPages: res.total_pages || 1
          };
        })
      );
    }
  }

  getResourceWithTitleFilter(resource: string, title: string) {
    const url = `${this.baseUrl}/${resource}?title=${title}`;
    return this.http.get<any>(url).pipe(
      map(res => {
        return ({
          results: res.result.map((item: any) => ({
            uid: item.uid,
            name: item.properties.title,
            url: item.properties.url,
            ...item.properties
          })),
          totalPages: 1
        })
      })
    );
  }

  getOnePerson(id: string): Observable<{ properties: Person }> {
    return this.http.get<any>(`${this.baseUrl}/people/${id}`).pipe(
      map(res => res.result)
    );
  }


}
