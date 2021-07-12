import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable()
export class Einterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.auth.user.pipe(take(1), exhaustMap (user => {
      if (!user) {
        return next.handle(req);
      }
      const modified = req.clone({ params: new HttpParams().set('auth', this.auth.tokenval)});
      return next.handle(req);
    }));

    this.auth.user.subscribe();
  }
}
