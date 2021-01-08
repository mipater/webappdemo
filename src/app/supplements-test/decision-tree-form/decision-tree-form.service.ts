import {Injectable} from '@angular/core';
import {NodeType, TreeNode} from './treenode.model';

@Injectable({providedIn: 'root'})
export class DecisionTreeFormService {
  private nodes: TreeNode[] = [
    new TreeNode(
      'hasPain',
      {title: 'Dolore', text: 'Senti dolore?'},
      [
        {id: 'hasDiagnosis', msg: 'Si'},
        {id: 'selectNoPainDisorder', msg: 'No'}
      ],
      NodeType.Radio,
      false
    ),
    new TreeNode(
      'hasDiagnosis',
      {title: 'Diagnosi', text: 'Hai già una diagnosi?'},
      [
        {id: 'selectDiagnosis', msg: 'Si'},
        {id: 'detectDiagnosis', msg: 'No'}
      ],
      NodeType.Radio,
      false
    ),
    new TreeNode(
      'selectNoPainDisorder',
      {title: 'Malessere', text: 'Seleziona un problema'},
      [
        {id: 'gonfiore', msg: 'Gonfiore'},
        {id: 'malDiTesta', msg: 'Mal di testa'}
      ],
      NodeType.Select,
      false
    ),
    new TreeNode(
      'selectDiagnosis',
      {title: 'Selezione Diagnosi', text: 'Seleziona la diagnosi'},
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
      NodeType.Select,
      false
    ),
    new TreeNode(
      'detectDiagnosis',
      {title: 'Dolore: Maggiori Informazioni', text: 'Proviamo a capire insieme quale sia la natura del tuo dolore', label: 'Seleziona il malessere'},
      [
        {id: 'painMovableJoints', msg: 'Soffro di dolori alle articolazioni mobili (ginocchio, polso, spalla)', synonyms: ['ginocchio', 'polso', 'spalla']},
        {id: 'painLowerJoints', msg: 'Soffro di dolori e formicolii agli arti inferiori', synonyms: ['gamba']},
        {id: 'painUpperJoints', msg: 'Soffro di dolori e formicolii agli arti superiori', synonyms: ['braccia', 'mani']},
        {id: 'painEvacuation', msg: 'Soffro di emorroidi / Ho una evacuazione dolorosa', synonyms: ['plesso', 'anale', 'infiammazione']},
        {id: 'painHead', msg: 'Soffro di mal di testa'},
        {id: 'painBack', msg: 'Soffro di dolori alla schiena'},
        {id: 'painTraumatic', msg: 'Soffro di dolori di origine traumatica'},
        {id: 'contactUs', msg: 'Altro'}
      ],
      NodeType.Select,
      false
    ),
    // DIAGNOSIS SELECTION
    // -- OSTEOARTHRITIS
    new TreeNode(
      'osteoarthritis',
      {title: 'Osteoartrosi: Maggiori Informazioni', text: 'Avverti uno stato di debolezza muscolare?'},
      [
        {id: 'osteoarthritisFinal1', msg: 'Si'},
        {id: 'osteoarthritisFinal2', msg: 'No'}
      ],
      NodeType.Radio,
      false
    ),
    new TreeNode(
      'osteoarthritisFinal1',
      {
        title: 'Osteoartrosi: Sostanze Utili',
        text: 'Il fenomeno artrosico è spesso innescato e/o aggravato da una compromissione della muscolatura associata all’articolazione colpita. In questi casi è utile stimolare la funzione muscolare'
      },
      [],
      NodeType.Substance,
      true,
      ['-MQWfQHyaffda7-sVI1e', '-MQWfQIAkudD-G_QSEIm', '-MQWfQIGt8klx3Cnxkgd', '-MQWfQIM6PDiK84cwR0x', '-MQWfQIJV4l_HQT8gBxu']
    ),
    new TreeNode(
      'contactUs',
      {title: 'Contatti', text: 'Se hai dubbi puoi contattarci tramite mail al seguente indirizzo'},
      [
        {id: 'osteoarthritisFinal1', msg: 'Si'},
        {id: 'osteoarthritisFinal2', msg: 'No'}
      ],
      NodeType.Contact,
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
