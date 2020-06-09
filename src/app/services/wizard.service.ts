import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Question} from '../main/shared/question.model';

@Injectable({providedIn: 'root'})
export class WizardService {
  private wizard = {
    isEnded: false,
    activeQuestion: 1,
    questions: new Array<Question>(),
  };
  questionAnswered = new Subject<string>();

  init() {
    return this.wizard;
  }

  addQuestionAnswers(questionName: string, answer: any) {
    // trova la domanda tramite nome e inserisce le risposte
    const question = this.wizard.questions.find((q) => {return q.name === questionName;});
    answer.forEach((a) => {
      question.answers.push(a);
    });

  }

}
