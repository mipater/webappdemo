import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {relativeToRootDirs} from '@angular/compiler-cli/src/transformers/util';

@Component({
  selector: 'app-ia-test',
  templateUrl: './ia-test.component.html',
  styleUrls: ['./ia-test.component.css']
})
export class IaTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
