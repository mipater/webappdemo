import {CanComponentDeactivate} from './can-deactivate-guard.service';
import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ModalService} from './modal.service';


@Component({
  selector: 'app-ia-test',
  templateUrl: './ia-test.component.html',
  styleUrls: ['./ia-test.component.css']
})
export class IaTestComponent implements OnInit, CanComponentDeactivate {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: ModalService) { }

  ngOnInit() {}

  canDeactivate(): (Observable<boolean> | Promise<boolean> | boolean) {
    this.modalService.open();
    return this.modalService.navigateAwaySelection;
  };

}
