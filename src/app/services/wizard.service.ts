import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class WizardService {
  private wizardAnswers = new Map<number, string>();
  recipesChanged = new Subject<string>();

  addQuestionAnswer(key: number, value: string) {
    this.wizardAnswers.set(key, value)
  }
}
