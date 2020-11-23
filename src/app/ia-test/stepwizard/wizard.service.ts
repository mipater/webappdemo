import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WizardComponent} from 'angular-archwizard';
import {ResultModel} from './result.model';

@Injectable({providedIn: 'root'})
export class WizardService {

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
      hasDiagnosis: new FormControl(null, Validators.required),
      chooseDiagnosis: new FormControl(null, Validators.required),
      osteoartrosi: new FormControl(null, Validators.required),
      osteoartrosiFinal: new FormControl(null, Validators.required),
      neuropatiaDiabetica: new FormControl(null, Validators.required),
      neuropatiaDiabeticaFinal: new FormControl(null, Validators.required),
      neuropatiaIntrappolamento: new FormControl(null, Validators.required),
      neuropatiaIntrappolamentoFinal: new FormControl(null, Validators.required),
      neuropatiaCompressione: new FormControl(null, Validators.required),
      neuropatiaCompressioneFinal: new FormControl(null, Validators.required),
      neuropatiaErpetica: new FormControl(null, Validators.required),
      neuropatiaErpeticaFinal: new FormControl(null, Validators.required),
      cefalea: new FormControl(null, Validators.required),
      cefaleaFinal: new FormControl(null, Validators.required),
      nevralgiaTrigeminale: new FormControl(null, Validators.required),
      nevralgiaTrigeminaleFinal: new FormControl(null, Validators.required),
      emorroidiRagadi: new FormControl(null, Validators.required),
      emorroidiRagadiFinal: new FormControl(null, Validators.required),
      fibromialgia: new FormControl(null, Validators.required),
      fibromialgiaFinal: new FormControl(null, Validators.required),
      detectDiagnosis: new FormControl(null, Validators.required),
      chooseNoPainDisorder: new FormControl(null, Validators.required)
    });
  }

  goToNextStep(wizardComponent: WizardComponent, wizardForm: FormGroup) {
    const currentStepId: string = wizardComponent.currentStep.stepId;
    const currentStepAnswer: string = wizardForm.get(currentStepId).value;
    let nextStepName: string;

    switch (currentStepAnswer) {
      case 'yesPain':
        nextStepName = 'hasDiagnosis';
        break;
      case 'yesDiagnosis':
        nextStepName = 'chooseDiagnosis';
        break;
      case 'noDiagnosis':
        nextStepName = 'detectDiagnosis';
        break;
      case 'noPain':
        nextStepName = 'chooseNoPainDisorder';
        break;
      case 'osteoartrosi':
        nextStepName = 'osteoartrosiFinal';
        break;
      case 'neuropatiaDiabetica':
        nextStepName = 'neuropatiaDiabeticaFinal';
        break;
      case 'neuropatiaIntrappolamento':
        nextStepName = 'neuropatiaIntrappolamentoFinal';
        break;
      case 'neuropatiaCompressione':
        nextStepName = 'neuropatiaCompressioneFinal';
        break;
      case 'neuropatiaErpetica':
        nextStepName = 'neuropatiaErpeticaFinal';
        break;
      case 'nevralgiaTrigeminale':
        nextStepName = 'nevralgiaTrigeminaleFinal';
        break;
      case 'cefalea':
        nextStepName = 'cefaleaFinal';
        break;
      case 'emorroidiRagadi':
        nextStepName = 'emorroidiRagadiFinal';
        break;
      case 'fibromialgia':
        nextStepName = 'fibromialgiaFinal';
        break;
      case 'yesOsteoartrosiFinal': case 'noOsteoartrosiFinal': case 'yesNeuropatiaDiabeticaFinal': case 'noNeuropatiaDiabeticaFinal':
      case 'yesNeuropatiaIntrappolamentoFinal': case 'noNeuropatiaIntrappolamentoFinal': case 'yesNeuropatiaCompressioneFinal': case 'noNeuropatiaCompressioneFinal':
      case 'yesNeuropatiaErpeticaFinal': case 'noNeuropatiaErpeticaFinal': case 'yesNevralgiaTrigeminaleFinal': case 'noNevralgiaTrigeminaleFinal': case 'yesCefaleaFinal':
      case 'noCefaleaFinal': case 'yesEmorroidiRagadiFinal': case 'noEmorroidiRagadiFinal': case 'yesFibromialgiaFinal': case 'noFibromialgiaFinal':
        nextStepName = 'finalStep';
        break;
    }

    const nextStepIndex: number = wizardComponent.getIndexOfStepWithId(nextStepName);
    console.log(wizardForm);
    wizardComponent.goToStep(nextStepIndex);
  }

  goToPrevStep(wizardComponent: WizardComponent) {
    const currentStepId: string = wizardComponent.currentStep.stepId;
    let prevStepName: string;

    switch (currentStepId) {
      case 'hasDiagnosis': case 'chooseNoPainDisorder':
        prevStepName = 'hasPain';
        break;
      case 'chooseDiagnosis': case 'detectDiagnosis':
        prevStepName = 'hasDiagnosis';
        break;
      case 'osteoartrosiFinal': case 'neuropatiaDiabeticaFinal': case 'fibromialgiaFinal': case 'emorroidiRagadiFinal':
      case 'cefaleaFinal': case 'neuropatiaErpeticaFinal': case 'neuropatiaCompressioneFinal': case 'neuropatiaIntrappolamentoFinal':
      case 'nevralgiaTrigeminaleFinal':
        prevStepName = 'chooseDiagnosis';
        break;
    }

    const prevStepIndex: number = wizardComponent.getIndexOfStepWithId(prevStepName);
    wizardComponent.goToStep(prevStepIndex);
  }

  goToLastStepAndGetProduct(wizardComponent: WizardComponent, wizardForm: FormGroup): ResultModel {
    const currentStepId: string = wizardComponent.currentStep.stepId;
    const currentStepAnswer: string = wizardForm.get(currentStepId).value;
    let result: ResultModel = new ResultModel('', ['']);

    switch (currentStepAnswer) {
      case 'yesOsteoartrosiFinal':
        result = new ResultModel('Il fenomeno artrosico è spesso innescato e/o aggravato da una compromissione della muscolatura associata all’articolazione colpita. In questi casi è utile stimolare la funzione muscolare', ['Condronil® FORTE']);
        break;
      case 'noOsteoartrosiFinal':
        result = new ResultModel('L’artrosi è una patologia di tipo degenerativo che trae origine dalla perdita dell’equilibrio tra i meccanismi che stimolano la crescita delle cartilagini e quelli che facilitano lo smaltimento dl tessuto usurato', ['Condronil® COMPLEX']);
        break;
      case 'yesNeuropatiaDiabeticaFinal':
        result = new ResultModel('La neuropatia diabetica è uno stato di sofferenza dei nervi periferici dovuta alle elevate concentrazioni di glucosio nel sangue. Tali disfunzioni possono incidere pesantemente sulla qualità della vita delle persone', ['Micronil® ACT']);
        break;
      case 'noNeuropatiaDiabeticaFinal':
        result = new ResultModel('La neuropatia è una complicazione frequente nel paziente diabetico. La gravità e la precocità dei sintomi dipendono dal grado di osservanza alle prescrizioni dietetiche e farmacologiche suggerite al paziente', ['Micronil® Dol']);
        break;
      case 'yesNeuropatiaIntrappolamentoFinal':
        result = new ResultModel('La sindrome del tunnel carpale o le altre neuropatie da intrappolamento sono caratterizzate dai disturbi nella sensibilità delle estremità che, in alcuni casi, limitano la capacità di riposo del paziente', ['Micronil® ACT']);
        break;
      case 'noNeuropatiaIntrappolamentoFinal':
        result = new ResultModel('La sindrome del tunnel carpale o le altre neuropatie da intrappolamento sono dovute al restringimento di un canale anatomico che causa la sofferenza del nervo che lo occupa', ['Micronil® Dol']);
        break;
      case 'yesNeuropatiaCompressioneFinal':
        result = new ResultModel('Breve testo', ['Micronil® ACT']);
        break;
      case 'noNeuropatiaCompressioneFinal':
        result = new ResultModel('Breve testo', ['Micronil® Dol']);
        break;
      case 'yesNeuropatiaErpeticaFinal':
        result = new ResultModel('Breve testo', ['Micronil® ACT']);
        break;
      case 'noNeuropatiaErpeticaFinal':
        result = new ResultModel('Breve testo', ['Micronil® Dol']);
        break;
      case 'yesNevralgiaTrigeminaleFinal':
        result = new ResultModel('Breve testo', ['Micronil® ACT']);
        break;
      case 'noNevralgiaTrigeminaleFinal':
        result = new ResultModel('Breve testo', ['Micronil® Dol']);
        break;
      case 'yesCefaleaFinal':
        result = new ResultModel('Breve testo cefalee', ['PEAMag®']);
        break;
      case 'noCefaleaFinal':
        result = new ResultModel('Breve testo cefalee', ['PEAMag®']);
        break;
      case 'yesEmorroidiRagadiFinal':
        result = new ResultModel('Breve testo proctologico', ['Deflanil® PLUS']);
        break;
      case 'noEmorroidiRagadiFinal':
        result = new ResultModel('Breve testo proctologico', ['Deflanil® PLUS']);
        break;
      case 'yesFibromialgiaFinal':
        result = new ResultModel('Breve testo', ['Micronil® ACT', 'PEAMag® al riacutizzarsi del dolore']);
        break;
      case 'noFibromialgiaFinal':
        result = new ResultModel('Breve testo', ['Micronil® Dol', 'PEAMag® al riacutizzarsi del dolore']);
        break;
    }
    const nextStepIndex: number = wizardComponent.getIndexOfStepWithId('finalStep');
    wizardComponent.goToStep(nextStepIndex);
    return result;
  }

}
