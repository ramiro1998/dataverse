import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ResourceService } from '../services/resource.service';
import { ResourceItem } from '../models/resource.interface';

@Injectable({
    providedIn: 'root'
})
export class ResourceResolver implements Resolve<{ results: ResourceItem[]; totalPages: number }> {
    constructor(private resourceService: ResourceService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<{ results: ResourceItem[]; totalPages: number }> {
        const resource = route.parent?.routeConfig?.path ?? 'people';
        const page = 1;
        const limit = 12;
        const query = route.queryParamMap.get('query') ?? '';

        if (resource === 'films') {
            if (query) {
                return this.resourceService.getResourceWithTitleFilter(resource, query);
            }
            return this.resourceService.getResource(resource, 1, 1, '');
        }

        return this.resourceService.getResource(resource, page, limit, query);
    }
}
