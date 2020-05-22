import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WizardService} from '../../../services/wizard.service';

@Component({
  selector: 'app-stepwizard',
  templateUrl: './stepwizard.component.html',
  styleUrls: ['./stepwizard.component.css']
})
export class StepwizardComponent implements OnInit {
  wizardForm: FormGroup;
  wizard;
  counter = 0;
  wizardHistory = []

  constructor(private wizardService: WizardService) { }

  ngOnInit(): void {
    // inizializzare il wizard con i suoi valori
    this.wizard = this.wizardService.init();
    this.initForm();
  }

  onSubmit() {
    console.log(this.wizardForm);
  }

  onNextQuestion() {
    if (!this.wizard.isEnded) {
      // this.wizardHistory.push();
    }
  }

  onPreviousQuestion() {
    if (this.wizard.activeQuestion > 1) {
      this.wizard.progressBarValue -= 8;
      --this.wizard.activeQuestion;
    }
  }

  initForm() {
    this.wizardForm = new FormGroup({
      personalInfo: new FormGroup({
        name: new FormControl(null, Validators.required),
        eta: new FormControl(null, Validators.required),
        sesso: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      sportCategory: new FormGroup({

      }),

    });
  }
}
