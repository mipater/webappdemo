import {Injectable} from '@angular/core';
import {AnswerType, TreeNode} from './treenode.model';

@Injectable({providedIn: 'root'})
export class DecisionTreeFormService {
  private nodes: TreeNode[] = [
    new TreeNode(
      'hasPain',
      'Senti dolore?',
      null,
      [
        {id: 'hasDiagnosis', msg: 'Si'},
        {id: 'selectNoPainDisorder', msg: 'No'}
      ],
      AnswerType.Radio,
      false
    ),
    new TreeNode(
      'hasDiagnosis',
      'Hai già una diagnosi?',
      'hasPain',
      [
        {id: 'selectDiagnosis', msg: 'Si'},
        {id: 'detectDiagnosis', msg: 'No'}
      ],
      AnswerType.Radio,
      false
    ),
    new TreeNode(
      'selectNoPainDisorder',
      'Seleziona un problema',
      'hasPain',
      [
        {id: 'gonfiore', msg: 'Gonfiore'},
        {id: 'malDiTesta', msg: 'Mal di testa'}
      ],
      AnswerType.Select,
      false
    ),
    new TreeNode(
      'selectDiagnosis',
      'Seleziona la diagnosi',
      'hasDiagnosis',
      [
        {id: 'hasOsteoartrosi', msg: 'Osteoartrosi'},
        {id: 'detectDiagnosis', msg: 'Altro'}
      ],
      AnswerType.Select,
      false
    ),
    new TreeNode(
      'detectDiagnosis',
      'Proviamo a capire insieme quale sia la natura del tuo dolore',
      'hasDiagnosis',
      [
        {id: 'doloreArticolazioniMobili', msg: 'soffro di dolori alle articolazioni mobili (ginocchio, polso, spalla)'},
        {id: 'doloreFormicoliiArtiInferiori', msg: 'soffri di dolori e formicolii agli arti inferiori?'},
        {id: 'contactUs', msg: 'Altro'}
      ],
      AnswerType.Select,
      false
    ),
    new TreeNode(
      'contactUs',
      'Contatti',
      'detectDiagnosis',
      [],
      null,
      true
    )
  ];

  public getAllNodes(): TreeNode[] {
    return this.nodes.slice();
  }

  public getNodeById(id: string): TreeNode {
    return this.nodes.find(node => {
      return node.id === id ? node : null;
    });
  }

}
