import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Substances} from './decision-tree-form/treenode.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient) {}

  saveSubAdv() {
    this.http
      .post(
        'https://geopharma-expert-system.firebaseio.com/subAdv.json',
        {},
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
        .get<{ [key: string]: Substances }>(url);
    }

}
