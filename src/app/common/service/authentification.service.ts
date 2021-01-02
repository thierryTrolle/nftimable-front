import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RestResponseBo } from '../bo/rest-response-bo';
import { UserBo } from '../bo/user-bo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private url = environment.apiHost + '/rest/authentification/';

  constructor(
    private http: HttpClient
  ) { }

  /**
  * TO register user
  * @param userBo user datas
  */
  signIn(userBo: UserBo): Observable<RestResponseBo<string>> {
    return this.http.post<RestResponseBo<string>>(this.url + 'login', userBo, httpOptions).pipe(
      tap(x => {
        if (x.code == 1) {
          this.log('signIn ok');
        } else {
          this.log('signIn fail');
        }
      }
      ),
      catchError(this.handleError<RestResponseBo<string>>('signIn error !'))
    );
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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
