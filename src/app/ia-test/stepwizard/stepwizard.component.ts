import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {WizardService} from './wizard.service';
import {WizardComponent} from 'angular-archwizard';
import {ResultModel} from './result.model';

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
  result: ResultModel = new ResultModel('', ['']);

  constructor(private wizardService: WizardService) {}

  ngOnInit(): void {
    this.wizardForm = this.wizardService.initForm();
  }

  onNextStep() {
    this.wizardService.goToNextStep(this.wizardComponent, this.wizardForm);
  }

  onPrevStep() {
    this.wizardService.goToPrevStep(this.wizardComponent);
  }

  onLastStep() {
    this.result = this.wizardService.goToLastStepAndGetProduct(this.wizardComponent, this.wizardForm);
  }

  onSubmit() {

  }
}
