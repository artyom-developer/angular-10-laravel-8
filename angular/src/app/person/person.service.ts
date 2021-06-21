import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiURL = "http://localhost:8000/api/person/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

 constructor(private httpClient: HttpClient) { }
 

  getAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(person): Observable<Person> {
    return this.httpClient.post<Person>(this.apiURL, JSON.stringify(person), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id): Observable<Person> {
    return this.httpClient.get<Person>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, person): Observable<Person> {
    return this.httpClient.put<Person>(this.apiURL + id, JSON.stringify(person), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Person>(this.apiURL + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
