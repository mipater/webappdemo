import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WizardService} from '../../../services/wizard.service';
import {CanComponentDeactivate} from '../can-deactivate-guard.service';
import {Observable} from 'rxjs';
import {ModalService} from '../modal.service';
import {WizardComponent} from 'angular-archwizard';

@Component({
  selector: 'app-stepwizard',
  templateUrl: './stepwizard.component.html',
  styleUrls: ['./stepwizard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StepwizardComponent implements OnInit, CanComponentDeactivate {
  @ViewChild(WizardComponent)
  public wizardComponent: WizardComponent;
  wizardForm: FormGroup;
  wizard;

  constructor(private wizardService: WizardService,
              private modalService: ModalService) { }

  ngOnInit(): void {
    // inizializzare il wizard con i suoi valori
    this.wizard = this.wizardService.init();
    this.initForm();
  }

  onSubmit() {
    console.log(this.wizardForm);
  }

  initForm() {
    this.wizardForm = new FormGroup({
      personalInfo: new FormGroup({
        name: new FormControl(null, Validators.required),
        eta: new FormControl(null, Validators.required),
        sesso: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        privacy: new FormControl(null, [Validators.required, Validators.pattern('true')])
      }),
      sportCategory: new FormControl(null, Validators.required),
      trainingRegularity: new FormControl(null, Validators.required),
      fisionomy: new FormGroup({
        weight: new FormControl(null, [Validators.required, Validators.pattern('([4-8][0-9]|9[0-9]|[12][0-9]{2}|300)')]),
        height: new FormControl(null, [Validators.required, Validators.pattern('(8[0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|250)')]),
        bodyType: new FormControl(null, Validators.required)
      })
    });
  }

  canDeactivate(): (Observable<boolean> | Promise<boolean> | boolean) {
    this.modalService.open();
    return this.modalService.navigateAwaySelection;
  };

  finalizeStep() {
    let curIndex = this.wizardComponent.currentStepIndex;
    const step2optIndex = this.wizardComponent.getIndexOfStepWithId('2.1');

    // Se la domanda corrente è sulla categoria sportivo e la risposta è 'sport amatoriale' allora va alla domanda secondaria
    if (this.wizardForm.get('sportCategory').value === 'amaSport') {
      this.wizardComponent.goToStep(step2optIndex);
    } else if (curIndex < step2optIndex){
      this.wizardComponent.goToStep(this.wizardComponent.currentStepIndex + 2);
    } else {
      this.wizardComponent.goToStep(this.wizardComponent.currentStepIndex - 2);
    }
  }

  selectedRadioBtn(e) {
    if (!e.target.classList.contains('squareRadio')){

      const existingCheckBadge = document.getElementsByClassName('check-icon');
      for (let i = 0; i < existingCheckBadge.length; i++) {
        if (existingCheckBadge[i]) {
          existingCheckBadge[i].remove();
        }
      }

      e.target.parentElement.insertAdjacentHTML('afterbegin', '<svg *ngIf="false" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square-fill check-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>');
    }
  }
}
