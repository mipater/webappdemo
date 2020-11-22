import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WizardService} from './wizard.service';
import {WizardComponent, WizardStep} from 'angular-archwizard';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stepwizard',
  templateUrl: './stepwizard.component.html',
  styleUrls: ['./stepwizard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StepwizardComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizardComponent: WizardComponent;
  wizardForm: FormGroup;

  constructor(
    private wizardService: WizardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // inizializzare il wizard con i suoi valori
    this.wizardForm = this.wizardService.initForm();
  }

  onSubmit() {
    console.log(this.wizardForm);
    this.router.navigate(['test/end']);
  }

  onNextStep() {
    this.wizardService.goToNextStep(this.wizardComponent, this.wizardForm);
  }

  onPrevStep() {
    this.wizardService.goToPrevStep(this.wizardComponent);
  }
}
