import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Substances} from './decision-tree-form/treenode.model';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient) {}

  saveSubAdv(data) {
    this.http
      .post(
        'https://geopharma-expert-system.firebaseio.com/.json',
        data,
        {
          observe: 'response'
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        console.error(error);
      });
  }

  fetchSubAdv() {
      const url = 'https://geopharma-expert-system.firebaseio.com/subAdv/.json';
      return this.http
        .get<{ [key: string]: Substances }>(url)
        .pipe(
          map(responseData => {
            const subAdv: Substances[] = [];
            for (const key in responseData) {
              subAdv.push({...responseData[key]});
            }
            return subAdv;
          }),
          catchError(errorRes => {
            return throwError(errorRes);
          })
        );
    }

}
