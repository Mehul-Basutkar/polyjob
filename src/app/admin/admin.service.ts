import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 linkForViewJob: string;
  constructor(private http: HttpClient) {
    this.getData(this.linkForViewJob);
  }

  getData(link) {
    this.linkForViewJob = link;
    return this.http.get(this.linkForViewJob).pipe(map(
      responceData => {
        const postArray = [];
        for (const key in responceData ) {
          if (responceData.hasOwnProperty(key)) {
            postArray.push({ ...responceData[key], id: key});
          }}
        return postArray;
        }));
  }
}
