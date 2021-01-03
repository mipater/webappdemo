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
        {id: 'painMovableJoints', msg: 'Soffro di dolori alle articolazioni mobili (ginocchio, polso, spalla)'},
        {id: 'painLowerJoints', msg: 'Soffro di dolori e formicolii agli arti inferiori'},
        {id: 'painUpperJoints', msg: 'Soffro di dolori e formicolii agli arti superiori'},
        {id: 'painEvacuation', msg: 'Soffro di emorroidi / Ho una evacuazione dolorosa'},
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
      [
        {name: 'Glucosamina/Condroitinsolfato', text: 'La glucosamina ed il condroitinsolfato sono sostanze naturali che si trovano nella cartilagine sana delle articolazioni. La glucosamina svolge un ruolo primario per la produzione di un’importante famiglia di macromolecole chiamate glicosamminoglicani (GAG), che hanno la capacità di conferire alla cartilagine proprietà ammortizzanti e svolgono funzioni lubrificanti all’interno della membrana sinoviale. Inoltre, la glucosamina solfato in associazione all’acido glucuronico che viene messo a disposizione dal condroitinsolfato, è necessaria per la formazione dell’acido ialuronico.', rif: 'Rif. Uitterlinden EJ et al Glucosamine increases hyaluronic acid production in human osteoarthritic synovium extract. BMC Musculoskeletal Disorders (2008) 9:120.'},
        {name: 'Acido Ialuronico', text: 'L’acido ialuronico è una sostanza viscoelastica che trattiene l’acqua migliorando la lubrificazione e riducendo l’attrito all’interno dell’articolazione. L’acido ialuronico è un glicosaminoglicano ed insieme a questa famiglia di composti partecipa alla strutturazione dell’aggrecano e della cartilagine articolare, alla quale conferisce proprietà viscoelastiche. È anche presente all’interno delle membrane sinoviali, dove funziona come lubrificante ed esercita un ruolo fondamentale conferendo il giusto grado di viscosità. Il liquido sinoviale presente all’interno delle articolazioni, ha il compito di ammortizzare i movimenti e lo stress sulla cartilagine. I traumi o l’avanzare dell’età ne riducono la viscosità e la quantità, aumentando gli attriti fra i capi articolari ed i processi degenerativi.', rif: 'Rif. Praest BM, Greiling H, KocK R Assay of synovial fluif parameters: hyaluronan concentration as a potential marker for joint desease. Clinica Chim Acta (1997)226 (2):117.'},
        {name: 'Collagene', text: 'Il collagene è una proteina strutturale che è parte fondamentale delle cartilagini sinoviali cui conferisce forma, resistenza ed elasticità. BioCell Collagen® è un alimento dietetico ad alto contenuto nutritivo costituito da una composizione brevettata di proteine di collagene idrolizzato tipo II (in quantità non inferiore al 60%) insieme a condroitin solfato (in quantità non inferiore al 20%), acido ialuronico (in quantità non inferiore al 10%) ed altri proteoglicani (in quantità non inferiore al 3%), contenute in una matrice in cui risultano altamente biodisponibili.', rif: 'Rif. Bello AE, Oesser S. Collagen hydrolysate for the treatment of osteoarthritis and other joint disorders: a review of the literature. Curr. Med. Res.Opinion (2006) 22(11):2221.'},
        {name: 'Bromelina ', text: 'La Bromelina è un enzima dotato di potente attività proteolitica e fibrinolitica.', rif: 'Rif. Praest BM, Greiling H, KocK R Assay of synovial fluif parameters: hyaluronan concentration as a potential marker for joint desease. Clinica Chim Acta (1997)226 (2):117.'},
        {name: 'Carnitina/Vitamina D', text: 'La Carnitina e la Vitamina D sono sostanze naturali che contribuiscono al mantenimento della normale funzione muscolare. La carnitina è importante per il metabolismo degli acidi grassi e facilita anche il metabolismo aerobico del glucosio aumentando la velocità di\n' +
            'fosforilazione ossidativa e promuovendo l’escrezione degli acidi organici. Inoltre, la carnitina aumenta la disponibilità energetica per il muscolo e\n' +
            'promuove l’eliminazione dei cataboliti tra cui l’acido lattico. L-carnitina in particolare, favorisce la produzione dei glicosamminoglicani della matrice cartilaginea, sostenendone la funzione. La Vitamina D aumenta in maniera diretta e indiretta lo sviluppo e la funzionalità muscolare, attraverso l’attivazione di geni che promuovono l’espressione di proteine contrattili e attraverso la regolazione dei livelli di fosoforo e calcio nelle cellule muscolari, promuovendone la contrattilità.', rif: 'Rif. Stoppoloni D, Politi L, Dalla Vedova P, Messano M, Koverech A, Scandurra R, Scotto d\'Abusco A. L-carnitine enhances extracellular matrix synthesis in human primary chondrocytes. Rheumatol Int. (2013) 33(9):2399-403. Rif. Gunton JE, Girgis CM. Vitamin D and Muscle. Bone Rep. (2018) 8:163-167.'}
        ]
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
