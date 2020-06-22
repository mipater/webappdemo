import {AfterContentInit, AfterViewChecked, Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WizardService} from '../../../services/wizard.service';
import {CanComponentDeactivate} from '../can-deactivate-guard.service';
import {Observable} from 'rxjs';
import {ModalService} from '../modal.service';
import {WizardComponent} from 'angular-archwizard';
import {CustomNavigationMode} from './custom-navigation-mode';

@Component({
  selector: 'app-stepwizard',
  templateUrl: './stepwizard.component.html',
  styleUrls: ['./stepwizard.component.css']
})
export class StepwizardComponent implements OnInit, CanComponentDeactivate, AfterViewChecked  {
  navigationMode = new CustomNavigationMode();
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

  ngAfterViewChecked(): void {
    // console.log(this.wizardComponent.currentStepIndex);
  }
}
