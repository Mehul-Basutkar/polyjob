import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { Employer } from './users.model';

interface AuthResponceData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: string;
  }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  emp = new Subject<Employer>();
  tokenval: string = null;
  user = new BehaviorSubject<string>(null);
  constructor(private http: HttpClient) { }

  signup(email: string, password: number) {
    return this.http.post<AuthResponceData>
    ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA3uHlKPkePiT285NReIcJttzYBO7YZsf4',
    {
      // tslint:disable-next-line: object-literal-shorthand
      email: email,
      // tslint:disable-next-line: object-literal-shorthand
      password: password,
      returnSecureToken: true
    }).pipe(catchError(errorRes => {
      let errorMsg = 'An error occured';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMsg);
      } else {
        switch (errorRes.error.error.message) {
          case 'EMAIL_EXISTS' :
            errorMsg = 'This email is already exist!';
        }
        return throwError(errorMsg);
      }
    }), tap(resData => {
      this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }

  logIn(email: string, password: number) {
    return this.http.post<AuthResponceData>
    ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3uHlKPkePiT285NReIcJttzYBO7YZsf4',
    {
       // tslint:disable-next-line: object-literal-shorthand
       email: email,
       // tslint:disable-next-line: object-literal-shorthand
       password: password,
       returnSecureToken: true
    }).pipe(catchError(errorRes => {
      let errorMsg = 'An error occured';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMsg);
      } else {
        switch (errorRes.error.error.message) {
          case 'EMAIL_NOT_FOUND' :
            errorMsg = 'Wrong email entered!';
            break;
          case 'INVALID_PASSWORD' :
            errorMsg = 'This password is not correct!';
            break;
        }
        return throwError(errorMsg);
      }
    }), tap(resData => {
      this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }

  private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000 );
    const emp = new Employer(email, userId, token, expirationDate);
    this.emp.next(emp);
    this.tokenval = token;
    localStorage.setItem('tokenValue', JSON.stringify(this.tokenval));
  }
}
