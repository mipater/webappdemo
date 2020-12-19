import {Injectable} from '@angular/core';
import {AnswerType, TreeNode} from './treenode.model';

@Injectable({providedIn: 'root'})
export class DecisionTreeFormService {
  private nodes: TreeNode[] = [
    new TreeNode(
      'hasPain',
      'Senti dolore?',
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
      [
        {id: 'osteoarthritis', msg: 'Osteoartrosi'},
        {id: 'diabeticNeuropathy', msg: 'Neuropatia Diabetica'},
        {id: 'entrapmentNeuropathy', msg: 'Neuropatia Da Intrappolamento'},
        {id: 'compressionNeuropathy', msg: 'Neuropatia Da Compressione'},
        {id: 'herpeticNeuropathy', msg: 'Neuropatia Erpetica'},
        {id: 'trigeminalNeuralgia', msg: 'Nevralgia Trigeminale'},
        {id: 'cephalalgy', msg: 'Cefalea'},
        {id: 'hemorrhoidsFissures', msg: 'Emorroidi, Ragadi'},
        {id: 'fibromyalgia', msg: 'Fibromialgia'},
        {id: 'detectDiagnosis', msg: 'Altro'}
      ],
      AnswerType.Select,
      false
    ),
    new TreeNode(
      'detectDiagnosis',
      'Proviamo a capire insieme quale sia la natura del tuo dolore',
      [
        {id: 'painMovableJoints', msg: 'Soffro di dolori alle articolazioni mobili (ginocchio, polso, spalla)'},
        {id: 'painLowerJoints', msg: 'Soffro di dolori e formicolii agli arti inferiori'},
        {id: 'painUpperJoints', msg: 'Soffro di dolori e formicolii agli arti superiori'},
        {id: 'painEvacuation', msg: 'Soffro di emorroidi / Ho una evacuazione dolorosa'},
        {id: 'painHead', msg: 'Soffro di mal di testa'},
        {id: 'painBack', msg: 'Soffro di dolori alla schiena'},
        {id: 'painTraumatic', msg: 'Soffro di dolori di origine traumatica'},
        {id: 'contactUs', msg: 'Altro'}
      ],
      AnswerType.Select,
      false
    ),
    new TreeNode(
      'contactUs',
      'Contatti',
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
