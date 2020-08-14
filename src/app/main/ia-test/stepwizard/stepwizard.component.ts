import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WizardService} from '../../../services/wizard.service';
import {CanComponentDeactivate} from '../can-deactivate-guard.service';
import {Observable} from 'rxjs';
import {ModalService} from '../modal.service';
import {MovingDirection, WizardComponent} from 'angular-archwizard';

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

  private primaryObjectivesValidValues = ['fatMassLoss', 'immunitaryDefense', 'energyGain', 'bonesArticulation', 'muscleMassGain',
    'resistanceGain', 'powerGain', 'muscleRecovery'];

  private primaryObjective;


  constructor(private wizardService: WizardService,
              private modalService: ModalService) {
  }

  ngOnInit(): void {
    // inizializzare il wizard con i suoi valori
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
      }),
      primaryObjective: new FormControl(null, [this.forbiddenPrimaryObjectives.bind(this)]),
      sportType: new FormGroup({
        typology: new FormControl(null, Validators.required),
        frequency: new FormControl(null, [Validators.required, Validators.pattern('([1-5])')])
      }),
      practiceTimeDistribution: new FormGroup({
        workout1: new FormControl(null, Validators.required),
        workout2: new FormControl(null, Validators.required),
        workout3: new FormControl(null, Validators.required)
      }),
      workoutIntensity: new FormControl(null, [Validators.required, Validators.pattern('([1-5])')]),
      timeToEatAfterWorkout: new FormControl(null, Validators.required),
      primaryObjectiveDetails: new FormGroup({}),
      diet: new FormControl(null, Validators.required),
      allergy: new FormControl(null, [Validators.required, Validators.pattern('true'), this.allergyCheckboxValidator.bind(this)]),
    });
  }

  // CUSTOM VALIDATORS
  forbiddenPrimaryObjectives(): { [s: string]: boolean } {
    const firstChoiceEl = document.querySelector('[firstchoice]');
    const secondChoiceEl = document.querySelector('[secondchoice]');

    if (firstChoiceEl && secondChoiceEl) {
      const firstChoiceElVal = firstChoiceEl.getAttribute('value');
      const secondChoiceElVal = secondChoiceEl.getAttribute('value');
      let invalidValue = false;
      [firstChoiceElVal, secondChoiceElVal].forEach(x => {
        if (!this.primaryObjectivesValidValues.includes(x)) {
          invalidValue = true;
        }
      })
      if (invalidValue) {
        return {invalidPrimaryObjectives: true};
      }
    } else {
      return {invalidPrimaryObjectives: true};
    }

    return null;
  }

  energyCheckboxValidator(): { [s: string]: boolean } {
    setTimeout(() => {
      const neverWeakEl = document.getElementById('neverWeak');
      const beforeWorkoutEl = document.getElementById('beforeWorkout');
      const duringWorkoutEl = document.getElementById('duringWorkout');
      const postWorkoutEl = document.getElementById('postWorkout');

      if (neverWeakEl.classList.contains('ng-valid')) {
        const neverWeakInput = neverWeakEl as HTMLInputElement;
        if (neverWeakInput.checked) {
          [beforeWorkoutEl as HTMLInputElement, duringWorkoutEl as HTMLInputElement, postWorkoutEl as HTMLInputElement].forEach(x => {
            if (x.checked) {
              x.checked = false;
            }
          })
        }
      }

    }, 0);
    return null;
  }

  muscleRecoveryValidator(): { [s: string]: boolean } {
    setTimeout(() => {
      const yesMuscularPainEl = document.getElementById('yesMuscularPain') as HTMLInputElement;
      const fg = this.wizardForm.get('primaryObjectiveDetails') as FormGroup;

      if (yesMuscularPainEl.checked) {
        fg.get('painIntensity').enable();
        fg.get('painIntensity').setValidators([Validators.required, Validators.pattern('([1-5])')])
      } else {
        fg.get('painIntensity').disable();
      }
    }, 0);

    return null;
  }

  allergyCheckboxValidator(): { [s: string]: boolean } {
    setTimeout(() => {
      const noneEl = document.getElementById('none');
      const lactoseEl = document.getElementById('lactose');
      const eggEl = document.getElementById('egg');
      const fishEl = document.getElementById('fish');
      const clamEl = document.getElementById('clam');
      const nutEl = document.getElementById('nut');
      const peanutEl = document.getElementById('peanut');
      const soyEl = document.getElementById('soy');
      const glutenEl = document.getElementById('gluten');
      const nichelEl = document.getElementById('nichel');

      if (noneEl.classList.contains('ng-valid')) {
        const noneElInput = noneEl as HTMLInputElement;
        if (noneElInput.checked) {
          [lactoseEl as HTMLInputElement, eggEl as HTMLInputElement, fishEl as HTMLInputElement, clamEl as HTMLInputElement,
            nutEl as HTMLInputElement, peanutEl as HTMLInputElement, soyEl as HTMLInputElement,
            glutenEl as HTMLInputElement, nichelEl as HTMLInputElement].forEach(x => {
            if (x.checked) {
              x.checked = false;
            }
          })
        }
      }
    }, 0);
    return null;
  }

  // Exit Guard
  canDeactivate(): (Observable<boolean> | Promise<boolean> | boolean) {
    this.modalService.open();
    return this.modalService.navigateAwaySelection;
  };

  // handles navigation between the optional question
  finalizeOptionalStep() {
    const curIndex = this.wizardComponent.currentStepIndex;
    const step2optIndex = this.wizardComponent.getIndexOfStepWithId('2.1');

    // Se la domanda corrente è sulla categoria sportivo e la risposta è 'sport amatoriale' allora va alla domanda secondaria
    if (this.wizardForm.get('sportCategory').value === 'amaSport') {
      this.wizardComponent.goToStep(step2optIndex);
    } else if (curIndex < step2optIndex) {
      this.wizardComponent.goToStep(this.wizardComponent.currentStepIndex + 2);
    } else {
      this.wizardComponent.goToStep(this.wizardComponent.currentStepIndex - 2);
    }
  }

  // custom radio check icon
  selectedRadioBtn(e) {
    if (!e.target.classList.contains('squareRadio')) {

      const existingCheckBadge = document.getElementsByClassName('check-icon');
      for (let i = 0; i < existingCheckBadge.length; i++) {
        if (existingCheckBadge[i]) {
          existingCheckBadge[i].remove();
        }
      }

      e.target.parentElement.insertAdjacentHTML('afterbegin', '<svg *ngIf="false" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-square-fill check-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>');
    }
  }

  // custom radio multi choice
  selectedPrimaryObjective(e) {
    /* assegno badge 1 se non è stato selezionata nessuna card
     * assegno badge 2 se è stato selezionata già una card
     * se clicco su una card già selezionata allora viene deselezionata
     *  - se la card deselezionata era l'unica ad essere stata selezionata allora togli il badge 1
     *  - se vi sono due card selezionate e una di queste viene deselezionata, allora viene aggiornato il badge a 1 di quella ancora selezionata
    */
    const firstChoiceEl = document.getElementsByClassName('firstChoice-icon')[0];
    const secondChoiceEl = document.getElementsByClassName('secondChoice-icon')[0];
    let badgeToApply = null;

    if (!firstChoiceEl && e.target.getAttribute('firstchoice') === null && e.target.getAttribute('secondchoice') === null) {
      badgeToApply = 'firstChoice-icon';
    } else if (firstChoiceEl && !secondChoiceEl && e.target.getAttribute('firstchoice') === null && e.target.getAttribute('secondchoice') === null) {
      badgeToApply = 'secondChoice-icon';
    } else {
      if (e.target.hasAttributes()) {
        if (e.target.hasAttribute('firstchoice')) {
          e.target.removeAttribute('firstchoice')
          document.getElementsByClassName('firstChoice-icon')[0].remove();
        } else if (e.target.hasAttribute('secondchoice')) {
          e.target.removeAttribute('secondchoice')
          document.getElementsByClassName('secondChoice-icon')[0].remove();
        }
      } else {
        console.log('No attributes to show');
      }
    }

    if (badgeToApply) {
      e.target.setAttribute(badgeToApply.split('-')[0], '');
      e.target.parentElement.insertAdjacentHTML('afterbegin', '<div class="' + badgeToApply + '"></div>');
    }

  }

  // question 4: save values in form
  finalizePrimaryObjectiveValues() {
    const firstChoiceEl = document.querySelector('[firstchoice]');
    const secondChoiceEl = document.querySelector('[secondchoice]');

    if (firstChoiceEl && secondChoiceEl) {
      this.wizardForm.patchValue({
        primaryObjective: [firstChoiceEl.getAttribute('value'), secondChoiceEl.getAttribute('value')]
      })
    }

  }

  // question 9: set primary objective detail question
  configureStep() {
    this.primaryObjective = this.wizardForm.get('primaryObjective').value[0];
    const fg = this.wizardForm.get('primaryObjectiveDetails') as FormGroup;

    switch (this.primaryObjective) {
      case 'fatMassLoss':
        this.primaryObjective = 'Bruciare Massa Grassa';
        fg.addControl('goal', new FormControl(null, Validators.required));
        fg.addControl('foodPlan', new FormControl(null, Validators.required));
        break;
      case 'immunitaryDefense':
        this.primaryObjective = 'Difese Immunitarie';
        fg.addControl('illness', new FormControl(null, Validators.required));
        fg.addControl('portionsOfFruit', new FormControl(null, Validators.required));
        break;
      case 'energyGain':
        this.primaryObjective = 'Aumento Energia';
        fg.addControl('weakness', new FormControl(null, Validators.required));
        fg.addControl('timeOfWeakness', new FormControl('', [Validators.required,
          Validators.pattern('true'), this.energyCheckboxValidator.bind(this)]));
        break;
      case 'bonesArticulation':
        this.primaryObjective = 'Articolazioni e Ossa';
        fg.addControl('reason', new FormControl(null, Validators.required));
        break;
      case 'muscleMassGain':
        this.primaryObjective = 'Aumento Massa';
        fg.addControl('diet', new FormControl(null, Validators.required));
        fg.addControl('results', new FormControl(null, Validators.required));
        break;
      case 'resistanceGain':
        this.primaryObjective = 'Aumento Resistenza';
        fg.addControl('goal', new FormControl(null, Validators.required));
        fg.addControl('fatigue', new FormControl(null, Validators.required));
        break;
      case 'powerGain':
        this.primaryObjective = 'Aumento Forza';
        fg.addControl('goal', new FormControl(null, Validators.required));
        break;
      case 'muscleRecovery':
        this.primaryObjective = 'Recupero Muscolare';
        fg.addControl('muscularPain', new FormControl(null, [Validators.required, this.muscleRecoveryValidator.bind(this)]));
        fg.addControl('painIntensity', new FormControl(null));
        break;
    }
  }

  // question 10: Energy Gain - Save Checkbox Values
  finalizeEnergyCheckboxValue() {
    if (this.primaryObjective === 'Aumento Energia') {
      const neverWeakEl = document.getElementById('neverWeak') as HTMLInputElement;
      const beforeWorkoutEl = document.getElementById('beforeWorkout') as HTMLInputElement;
      const duringWorkoutEl = document.getElementById('duringWorkout') as HTMLInputElement;
      const postWorkoutEl = document.getElementById('postWorkout') as HTMLInputElement;
      const elArr = [neverWeakEl, beforeWorkoutEl, duringWorkoutEl, postWorkoutEl];
      const checkedEl = [];
      const values = [];

      elArr.forEach(x => {
        if (x.checked) {
          values.push(x.value);
          checkedEl.push(x)
        }
      })

      this.wizardForm.patchValue({
        primaryObjectiveDetails: {
          timeOfWeakness: values
        }
      })

      elArr.forEach(x => {
        if (x.checked && !checkedEl.includes(x)) {
          x.checked = false;
        }
      })
    }
  }

  // question 11: Save Checkbox Values
  finalizeAllergyCheckboxValue() {
    const noneEl = document.getElementById('none') as HTMLInputElement;
    const lactoseEl = document.getElementById('lactose') as HTMLInputElement;
    const eggEl = document.getElementById('egg') as HTMLInputElement;
    const fishEl = document.getElementById('fish') as HTMLInputElement;
    const clamEl = document.getElementById('clam') as HTMLInputElement;
    const nutEl = document.getElementById('nut') as HTMLInputElement;
    const peanutEl = document.getElementById('peanut') as HTMLInputElement;
    const soyEl = document.getElementById('soy') as HTMLInputElement;
    const glutenEl = document.getElementById('gluten') as HTMLInputElement;
    const nichelEl = document.getElementById('nichel') as HTMLInputElement;
    const elArr = [noneEl, lactoseEl, eggEl, fishEl, clamEl, nutEl, peanutEl, soyEl, glutenEl, nichelEl];
    const checkedEl = [];
    const values = [];

    elArr.forEach(x => {
      if (x.checked) {
        values.push(x.value);
        checkedEl.push(x)
      }
    })

    this.wizardForm.patchValue({
      allergy: values
    })

    elArr.forEach(x => {
      if (x.checked && !checkedEl.includes(x)) {
        x.checked = false;
      }
    })
  }

}
