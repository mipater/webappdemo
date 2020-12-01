import {Injectable} from '@angular/core';
import {TreeNode} from './treenode.model';

@Injectable({providedIn: 'root'})
export class DecisionTreeFormService {
  private nodes: TreeNode[] = [
    new TreeNode(
      'hasPain',
      'Senti dolore?',
      null,
      [{id: 'yesPain', msg: 'Si'}, {id: 'noPain', msg: 'No'}],
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
