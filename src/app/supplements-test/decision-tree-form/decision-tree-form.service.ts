import {Injectable} from '@angular/core';
import {TreeNode} from './treenode.model';

@Injectable({providedIn: 'root'})
export class DecisionTreeFormService {
  private nodes: TreeNode[] = [
    new TreeNode(
      'hasPain',
      'Senti dolore?',
      null,
      [{id: 'hasDiagnosis', msg: 'Si'}, {id: 'selectNoPainDisorder', msg: 'No'}],
      'radio',
      false
    ),
    new TreeNode(
      'hasDiagnosis',
      'Hai già una diagnosi?',
      'hasPain',
      [{id: 'selectDiagnosis', msg: 'Si'}, {id: 'detectDiagnosis', msg: 'No'}],
      'radio',
      false
    ),
    new TreeNode(
      'selectNoPainDisorder',
      'Seleziona un problema:',
      'hasPain',
      [{id: 'gonfiore', msg: 'Si'}, {id: 'detectDiagnosis', msg: 'No'}],
      'select',
      false
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
