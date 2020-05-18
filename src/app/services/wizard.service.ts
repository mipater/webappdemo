import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class WizardService {
  private wizardAnswers = [];

  addQuestionAnswer(answer) {
    this.wizardAnswers.push(answer);
  }
}
