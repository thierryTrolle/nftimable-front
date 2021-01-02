import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequestBo } from '../bo/login-request-bo';
import { RestResponseBo } from '../bo/rest-response-bo';
import { tap, catchError } from 'rxjs/operators';
import { UserBo } from '../bo/user-bo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = environment.apiHost + '/rest/register/';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * TO register user
   * @param userBo user datas
   */
  register(userBo: UserBo): Observable<RestResponseBo<string>> {
    return this.http.post<RestResponseBo<string>>(this.url + 'register', userBo, httpOptions).pipe(
      tap(x => {
        if(x.code==1){
          this.log('register ok');
        }else{
          this.log('register fail');
        }
      }
      ),
      catchError(this.handleError<RestResponseBo<string>>('login error !'))
    );
  }

  /**
   * 
   * @param id idUser to activate
   */
  activeAccount(id: String): Observable<RestResponseBo<string>> {
    return this.http.post<RestResponseBo<string>>(this.url + 'activeAccount', id, httpOptions).pipe(
      tap(x => {
        if(x.code==1){
          this.log('activate ok');
        }else{
          this.log('activate fail');
        }
      }
      ),
      catchError(this.handleError<RestResponseBo<string>>('login error !'))
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
