import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WizardService} from '../../../services/wizard.service';

@Component({
  selector: 'app-stepwizard',
  templateUrl: './stepwizard.component.html',
  styleUrls: ['./stepwizard.component.css']
})
export class StepwizardComponent implements OnInit {
  wizard: FormGroup;
  wizardStatus = {
    activeQuestion: 1,
    wizardEnded: false,
    progressBarValue: 0
  };

  constructor(private wizardService: WizardService) { }

  ngOnInit(): void {
    this.wizard = new FormGroup({
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

  onSubmit() {
    console.log(this.wizard);
  }

  onNextQuestion() {
    if (!this.wizardStatus.wizardEnded) {
      this.wizardStatus.progressBarValue += 8;
      ++this.wizardStatus.activeQuestion;
      // this.wizardService.addQuestionAnswer();
    }
  }

  onPreviousQuestion() {
    if (this.wizardStatus.activeQuestion > 1) {
      this.wizardStatus.progressBarValue -= 8;
      --this.wizardStatus.activeQuestion;
    }
  }
}
