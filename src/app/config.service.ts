import { Injectable } from '@angular/core';
import { config } from './config'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-type': 'application/json' }
  )
}
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  c = config;
  apiUrl = "api/posts"
  constructor(private http: HttpClient) { }


  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('post', [])))
  }

  getSettings(database: String, id?: string): Observable<any> {

    let uid = id || null;
    let url: string;
    uid !== null ? url = `api/${database}/${id}` : url = `api/${database}`;
    return this.http.get(url).pipe(
      tap(
        setting => console.log(setting)
      ),
      catchError(this.handleError('setting', [])))
  }


  addPost(formData: NgForm): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, formData, httpOptions).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('Add New Post', []))
    );
  }


  updatePost(formData: NgForm) {
    return this.http.put(`${this.apiUrl}`, formData, httpOptions).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('update post by ID', [])))
  }

  getPostByID(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      tap(
        post => console.log(post)
      ),
      catchError(this.handleError('post by ID', [])))
  }

  getConfig() {
    return this.c;
  }


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
