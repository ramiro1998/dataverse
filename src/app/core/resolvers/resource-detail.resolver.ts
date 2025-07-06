import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ResourceService } from '../services/resource.service';

@Injectable({ providedIn: 'root' })
export class ResourceDetailResolver implements Resolve<any> {
    constructor(private resourceService: ResourceService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const resource = route.parent?.routeConfig?.path || '';
        const id = route.paramMap.get('id');
        return this.resourceService.getOne(resource, id!);
    }
}
