import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WizardComponent, WizardStep} from 'angular-archwizard';

@Injectable({providedIn: 'root'})
export class WizardService {
  stepNavigation = {
    hasPain: {prevStep: 'personalInfo'},
    yesPain: {prevStep: 'hasPain'},
    noPain: {prevStep: 'hasPain'},
    yesDiagnosis: {prevStep: 'yesPain'},
    choosedDiagnosis: {prevStep: 'yesDiagnosis'},
    noDiagnosis: {prevStep: 'yesPain'}
  };

  initForm() {
    return new FormGroup({
      personalInfo: new FormGroup({
        name: new FormControl(null, Validators.required),
        eta: new FormControl(null, Validators.required),
        sesso: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        privacy: new FormControl(null, [Validators.required, Validators.pattern('true')])
      }),
      hasPain: new FormControl(null, Validators.required),
      yesPain: new FormControl(null, Validators.required),
      noPain: new FormControl(null, Validators.required),
      yesDiagnosis: new FormControl(null, Validators.required),
      choosedDiagnosis: new FormControl(null, Validators.required),
      noDiagnosis: new FormControl(null, Validators.required),
      test: new FormControl(null, Validators.required),
      dataUsage: new FormControl(null, Validators.required)
    });
  }

  goToNextStep(wizardComponent: WizardComponent, wizardForm: FormGroup) {
    const stepTitle = wizardComponent.currentStep.stepTitle;
    const stepValue = wizardForm.get(stepTitle).value;
    const nextStepIndex = wizardComponent.getIndexOfStepWithId(stepValue);

    console.log(stepValue);

    wizardComponent.goToStep(nextStepIndex);
  }


  goToPrevStep(wizardComponent: WizardComponent) {
    const stepTitle = wizardComponent.currentStep.stepTitle;
    const stepValue = this.stepNavigation[stepTitle].prevStep;
    const prevStepIndex = wizardComponent.getIndexOfStepWithId(stepValue);

    wizardComponent.goToStep(prevStepIndex);
  }
}
