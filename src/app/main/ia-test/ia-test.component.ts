import { Component, OnInit } from '@angular/core';
import {CanComponentDeactivate} from './can-deactivate-guard.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ia-test',
  templateUrl: './ia-test.component.html',
  styleUrls: ['./ia-test.component.css']
})
export class IaTestComponent implements OnInit, CanComponentDeactivate {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  canDeactivate(): (Observable<boolean> | Promise<boolean> | boolean) {
    return true;
  };

  ngOnInit() {
  }

}
