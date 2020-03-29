import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CanComponentDeactivate} from '../can-deactivate-guard.service';
import {ModalService} from '../modal.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit, CanComponentDeactivate {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: ModalService) { }

  ngOnInit() {}

  canDeactivate(): (Observable<boolean> | Promise<boolean> | boolean) {
    this.modalService.open();
    return this.modalService.navigateAwaySelection;
  };

}
