import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

declare var $: any;
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) {}

  postReq(path: string, data?): Observable<any> {
    return this.http
      .post(this.apiUrl + path, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getReq(path: string): Observable<any> {
    return this.http
      .get(this.apiUrl + path)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  putReq(path: string, data?): Observable<any> {
    return this.http
      .put(this.apiUrl + path, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }


}
