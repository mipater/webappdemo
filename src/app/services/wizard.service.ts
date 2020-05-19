import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class WizardService {
  private wizard = {
    activeQuestion: 1,
    isEnded: false,
    progressBarValue: 0,
    answers: new Map<number, string>()
  };
  questionAnswered = new Subject<string>();

  init() {
    return this.wizard;
  }

  addQuestionAnswer(key: number, value: string) {
    this.wizard.answers.set(key, value)
  }
}
