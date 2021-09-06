import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class DataloadService {
  constructor(private http: HttpClient) { }

    LoadData(): Observable<any> {
      return this.http.get('assets/service/request_example_1.json')
        .map(this.extractData)
    }
    LoadDataSecond(): Observable<any> {
      return this.http.get('assets/service/request_example_2.json')
        .map(this.extractData)
    }
    LoadDataThird(): Observable<any> {
      return this.http.get('assets/service/request_example_3.json')
        .map(this.extractData)
    }

    private extractData(res: Response) {
      let body = res;
      return body;
    }

}
