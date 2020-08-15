import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-endwizard',
  templateUrl: './endwizard.component.html',
  styleUrls: ['./endwizard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EndwizardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //TODO aggiungere canEnter Guard per far accedere a questo route solo dopo aver concluso lo step wizard
}
