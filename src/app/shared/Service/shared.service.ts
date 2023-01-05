import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { ICityDetail } from '../Interface/citydetail';
import { IPointOfInterest } from '../Interface/pointofinterestdetails';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:7100/api";

  constructor(private http: HttpClient) { }

  getCitiesList(pageSize:number, pageNumber:number): Observable<ICityDetail[]> {
    return this.http.get<any>(this.APIUrl + '/cities' + `?pageSize=${pageSize}&pageNumber=${pageNumber}`).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  getCitiesById(id: number): Observable<ICityDetail | undefined> {
    return this.http.get<any>(this.APIUrl + '/cities/' + id).pipe(
      tap(),
      catchError(this.handleError)
    );
  }

  getPointOfInterstById(cityId:number, pointOfInterestId:number): Observable<IPointOfInterest | any> {
    return this.http.get<any>(this.APIUrl + `/cities/${cityId}/pointsofinterest/` + pointOfInterestId).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getPointOfIntersetsForCity(cityId: number): Observable<IPointOfInterest[]> {
    return this.http.get<any>(this.APIUrl + `/cities/${cityId}/pointsofinterest/`).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updatePointOfInterest(val: any, cityId:number, pointOfInterestId:number) {
    return this.http.put(this.APIUrl + `/cities/${cityId}/pointsofinterest/` + pointOfInterestId , val).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError));
  }

  removePointOfInterest(cityId:number, pointOfInterestId:number) {
    return this.http.delete(this.APIUrl + `/cities/${cityId}/pointsofinterest/` + pointOfInterestId)
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server return code:${err.status}, erroe message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}