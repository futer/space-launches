import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpaceDevApiService {
  private http: HttpClient = inject(HttpClient);
  private listOfSpaceLanches: [] = [];

  public getListOfSpaceLanches(): Observable<any> {
    return this.http.get<any>(environment.SPACE_DEV_API).pipe(
      map((response: any) => {
        let data = response.results.map((data: any) => {
          return {
            image: data.image,
            id: data.id,
            window_start: data.window_start,
            name: data.name,
            launch_service_provider: data.launch_service_provider,
            pad_info: data.pad,
            status: data.status,
          };
        });
        this.listOfSpaceLanches = data;
        return data;
      })
    );
  }

  public getListOfLocations(): Observable<any> {
    return this.http.get<any>(environment.LOCATION_DEV_API);
  }

  public filterListOfSpaceLaunches(filters: any): Observable<any> {
    return of(
      this.listOfSpaceLanches.filter(
        (launches) =>
          !!filters.find(
            (filters: any) =>
              launches['pad_info']['location']['name'] === filters.name
          )
      )
    );
  }
}
