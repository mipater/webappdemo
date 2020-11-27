import {Injectable} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class StorageService {

  constructor(private http: HttpClientModule) {}
}
