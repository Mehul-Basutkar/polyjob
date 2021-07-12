import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { map, take, exhaustMap } from 'rxjs/operators';
import { Employer, Addjob } from './employer.model';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
email; pwd; linkForViewJob: string;
private dbpath: 'https://jobbackend.firebaseio.com/Addjob.json';
loadedData: Addjob[];
  editjob = new EventEmitter();

  constructor(private http: HttpClient,
              private auth: AuthService) {}

  createData: Employer = {
    key: '',
    companyName: '',
    companyEmail: '',
    companyMobile: null
  };

  viewJobMethod(link: string) {
    return this.auth.user.pipe(take(1), exhaustMap(user => {
      this.linkForViewJob = link;
      return this.http.get(this.linkForViewJob , {
        params: new HttpParams().set('auth', this.auth.tokenval)
      });
    }), map(
      responceData => {
        const getArray = [];
        for (const key in responceData ) {
          if (responceData.hasOwnProperty(key)) {
            getArray.push({id: key, ...responceData[key]});
          }}
        return getArray;
        }));
  }
}
