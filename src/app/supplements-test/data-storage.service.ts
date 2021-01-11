import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Substances} from './decision-tree-form/treenode.model';
import {catchError, map, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient) {
  }

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

  setLocalStorageRefreshData(doRefresh: boolean) {
    const refreshData = {
      doRefresh,
      lastRefresh: new Date().getTime()
    };
    localStorage.setItem('refreshData', JSON.stringify(refreshData));
  }

  handleRefreshData(): boolean {
    const localStorageRefreshData: {
      doRefresh: boolean,
      lastRefresh: string
    } = JSON.parse(localStorage.getItem('refreshData'));

    // refresh data if a day has passed
    if (localStorageRefreshData?.lastRefresh) {
      const ONE_DAY = 1140 * 60 * 1000; /* ms */
      const expirationDuration = new Date().getTime() - new Date(localStorageRefreshData.lastRefresh).getTime();
      if (expirationDuration >= ONE_DAY) {
        this.setLocalStorageRefreshData(true);
        return true;
      }
      return false;
    }

    // if there's no localstorageData then add it
    this.setLocalStorageRefreshData(true);

    return true;
  }

  fetchData() {
    const url = 'https://geopharma-expert-system.firebaseio.com/subAdv.json';
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
        tap(subAdv => {
          localStorage.setItem('subAdv', JSON.stringify(subAdv));
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  getSubAdv() {
    const subAdv: [{
      id: string,
      name?: string,
      text: string,
      rif?: string,
    }] = JSON.parse(localStorage.getItem('subAdv'));

    return subAdv;
  }

}
