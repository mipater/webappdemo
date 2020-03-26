import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {CanComponentDeactivate} from '../can-deactivate-guard.service';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit, CanComponentDeactivate {

  constructor() { }

  ngOnInit(): void {
  }

  canDeactivate(): (Observable<boolean> | Promise<boolean> | boolean) {
    return true;
  };

}
