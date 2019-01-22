import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiurl= 'api/users'
  constructor(private http: HttpClient, private router : Router) { }


 

  // login(data): Observable<User> {
  // this.http.post(url, data)
  // }

  signup(data): Observable<User> {
    return this.http.post<User>(`${this.apiurl}/signup`, data).pipe(
      tap((user: User) => {
        localStorage.setItem('currentUser', JSON.stringify(user))
        console.log(`signup hero w/ `)}),
      catchError(this.handleError<User>('signup'))
    );
  }

  login(data): Observable<User> {
    return this.http.post<any>(`${this.apiurl}/login`, data).pipe(
      tap((user: User) => {
        // if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        // }
        console.log(`login hero w/ `)}),
      catchError(this.handleError<User>('login'))
    );
  }


  logout() {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/']);
    }
  }

  isloggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }

  getUser() {
    if (this.isloggedIn) {
      return JSON.parse(localStorage.getItem('currentUser'));
    }
  }



  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
