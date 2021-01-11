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
        {id: 'abdominalBloating', msg: 'Gonfiore Addominale'},
        {id: 'constipation', msg: 'Stitichezza'},
        {id: 'slowDigestion', msg: 'Digestione Lenta'},
        {id: 'statesOfWeakness', msg: 'Stati Di Debolezza'},
        {id: 'circulationDisorder', msg: 'Disturbi Della Circolazione'},
        {id: 'blemishesTeleangectasia', msg: 'Inestetismi/Teleangectasia'},
        {id: 'swollenLegs', msg: 'Gambe Gonfie'},
        {id: 'stiffneckPosturalpain', msg: 'Torcicollo/Dolori Posturali'}
      ],
      NodeType.Select,
      false
    ),
    // DIAGNOSIS DETECTION
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
    // -- PAINMOVABLEJOINTS
      new TreeNode(
        'painMovableJoints',
        {title: 'Articolazioni Mobili: Maggiori Informazioni', text: 'In che momento della giornata il dolore è più intenso?'},
        [
          {id: 'osteoarthritis', msg: 'Mattino'},
          {id: 'painMovableJointsFinal', msg: 'Pomeriggio'},
          {id: 'painMovableJointsFinal', msg: 'Sera'},
          {id: 'painMovableJointsFinal', msg: 'Non So'}
        ],
        NodeType.Select,
        false
      ),
      new TreeNode(
        'painMovableJointsFinal',
        {
          title: 'Articolazioni Mobili: Consiglio Utile',
          text: 'I dolori articolari rappresentano sensazioni dolorose a carico di una o più articolazioni quali spalla, gomito, polso, mano, anca, ginocchio, caviglia e piede. Traumi o fratture potrebbe determinare l’insorgere di questo disturbo.' +
            'Bagni caldi, massaggi, sedute di fisioterapia, applicazioni con ultrasuoni e riposo sono alcuni dei rimedi suggeriti per combattere i dolori articolari. I dolori articolari possono presentarsi associati a fitte alle ossa, gonfiore e infiammazione.'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQILmGHdbHqxl0Cr']
      ),
    // DIAGNOSIS SELECTION
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
        'osteoarthritisFinal2',
        {
          title: 'Osteoartrosi: Sostanze Utili',
          text: 'L’artrosi è una patologia di tipo degenerativo che trae origine dalla perdita dell’equilibrio tra i meccanismi che stimolano la crescita delle cartilagini e quelli che facilitano lo smaltimento dl tessuto usurato.'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQHyaffda7-sVI1e', '-MQWfQIAkudD-G_QSEIm', '-MQWfQIGt8klx3Cnxkgd', '-MQWfQIM6PDiK84cwR0x']
      ),
    // -- DIABETICNEUROPATHY
      new TreeNode(
        'diabeticNeuropathy',
        {title: 'Neuropatia Diabetica: Maggiori Informazioni', text: 'Soffri di insonnia o ti svegli frequentemente durante la notte?'},
        [
          {id: 'osteoarthritisFinal1', msg: 'Si'},
          {id: 'osteoarthritisFinal2', msg: 'No'}
        ],
        NodeType.Radio,
        false
      ),
      new TreeNode(
        'diabeticNeuropathyFinal1',
        {
          title: 'Neuropatia Diabetica: Sostanze Utili',
          text: 'La neuropatia diabetica è uno stato di sofferenza dei nervi periferici dovuta alle elevate concentrazioni di glucosio nel sangue. Tali disfunzioni possono incidere pesantemente sulla qualità della vita delle persone'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP', '-MQWfQKfI_XPt813EUU3']
      ),
      new TreeNode(
        'diabeticNeuropathyFinal2',
        {
          title: 'Neuropatia Diabetica: Sostanze Utili',
          text: 'La neuropatia è una complicazione frequente nel paziente diabetico. La gravità e la precocità dei sintomi dipendono dal grado di osservanza alle prescrizioni dietetiche e farmacologiche suggerite al paziente.'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP']
      ),
    // -- ENTRAPMENTNEUROPATHY
      new TreeNode(
        'entrapmentNeuropathy',
        {title: 'Neuropatia Da Intrappolamento: Maggiori Informazioni', text: 'Soffri di insonnia o ti svegli frequentemente durante la notte?'},
        [
          {id: 'entrapmentNeuropathyFinal1', msg: 'Si'},
          {id: 'entrapmentNeuropathyFinal2', msg: 'No'}
        ],
        NodeType.Radio,
        false
      ),
      new TreeNode(
        'entrapmentNeuropathyFinal1',
        {
          title: 'Neuropatia Da Intrappolamento: Sostanze Utili',
          text: 'La sindrome del tunnel carpale o le altre neuropatie da intrappolamento sono caratterizzate dai disturbi nella sensibilità delle estremità che, in alcuni casi, limitano la capacità di riposo del paziente.'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP']
      ),
    // -- COMPRESSIONNEUROPATHY
      new TreeNode(
        'compressionNeuropathy',
        {title: 'Neuropatia Da Compressione: Maggiori Informazioni', text: 'Soffri di insonnia o ti svegli frequentemente durante la notte?'},
        [
          {id: 'compressionNeuropathyFinal1', msg: 'Si'},
          {id: 'compressionNeuropathyFinal2', msg: 'No'}
        ],
        NodeType.Radio,
        false
      ),
      new TreeNode(
        'compressionNeuropathyFinal1',
        {
          title: 'Neuropatia Da Compressione: Sostanze Utili',
          text: 'Le mononeuropatie sono disturbi funzionali che colpiscono singoli nervi in aree ben definite e spesso sono conseguenza di una lesione traumatica, di una compressione locale (con "schiacciamento" del nervo) o di processi infiammatori o ischemici. La sintomatologia è pertanto localizzata e limitata al territorio di innervazione del nervo leso. Il dolore provocato dalla lesione può causare disturbi del sonno, peggiorando la qualità della vita.'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP', '-MQWfQKfI_XPt813EUU3']
      ),
      new TreeNode(
        'compressionNeuropathyFinal2',
        {
          title: 'Neuropatia Da Compressione: Sostanze Utili',
          text: 'Le mononeuropatie sono disturbi funzionali che colpiscono singoli nervi in aree ben definite e spesso sono conseguenza di una lesione traumatica, di una compressione locale (con "schiacciamento" del nervo) o di processi infiammatori o ischemici. La sintomatologia è pertanto localizzata e limitata al territorio di innervazione del nervo leso\n'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP']
      ),
    // -- HERPETICNEUROPATHY
      new TreeNode(
        'herpeticNeuropathy',
        {title: 'Neuropatia Erpetica: Maggiori Informazioni', text: 'Soffri di insonnia o ti svegli frequentemente durante la notte?'},
        [
          {id: 'herpeticNeuropathyFinal1', msg: 'Si'},
          {id: 'herpeticNeuropathyFinal2', msg: 'No'}
        ],
        NodeType.Radio,
        false
      ),
      new TreeNode(
        'herpeticNeuropathyFinal1',
        {
          title: 'Neuropatia Erpetica: Sostanze Utili',
          text: 'La nevralgia posterpetica è una complicanza frequente dell\'infezione da Herpes zoster, meglio conosciuta come fuoco di sant\'Antonio. A causarla è la «riattivazione» dello stesso virus responsabile della varicella, che rimane silente nel sistema nervoso dopo aver superato la malattia.'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP', '-MQWfQKfI_XPt813EUU3']
      ),
      new TreeNode(
        'herpeticNeuropathyFinal2',
        {
          title: 'Neuropatia Erpetica: Sostanze Utili',
          text: 'Le mononeuropatie sono disturbi funzionali che colpiscono singoli nervi in aree ben definite e spesso sono conseguenza di una lesione traumatica, di una compressione locale (con "schiacciamento" del nervo) o di processi infiammatori o ischemici. La sintomatologia è pertanto localizzata e limitata al territorio di innervazione del nervo leso\n'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP']
      ),
    // -- TRIGEMINALNEURALGIA
      new TreeNode(
        'trigeminalNeuralgia',
        {title: 'Nevralgia Trigeminale: Maggiori Informazioni', text: 'Soffri di insonnia o ti svegli frequentemente durante la notte?'},
        [
          {id: 'trigeminalNeuralgiaFinal1', msg: 'Si'},
          {id: 'trigeminalNeuralgiaFinal2', msg: 'No'}
        ],
        NodeType.Radio,
        false
      ),
      new TreeNode(
        'trigeminalNeuralgiaFinal1',
        {
          title: 'Nevralgia Trigeminale: Sostanze Utili',
          text: 'La nevralgia del trigemino è una sindrome cronica, un disordine neuropatico che si manifesta con crisi di dolore lancinante nelle aree del volto innervate dal quinto nervo cranico: fronte e occhio, mandibola fino al mento o alla parte superiore della guancia.'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP', '-MQWfQKfI_XPt813EUU3']
      ),
      new TreeNode(
        'trigeminalNeuralgiaFinal2',
        {
          title: 'Nevralgia Trigeminale: Sostanze Utili',
          text: 'La nevralgia del trigemino è una sindrome cronica, un disordine neuropatico che si manifesta con crisi di dolore lancinante nelle aree del volto innervate dal quinto nervo cranico: fronte e occhio, mandibola fino al mento o alla parte superiore della guancia.'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP']
      ),
    // -- CEFALEA
      new TreeNode(
        'cephalalgy',
        {
          title: 'Cefalea: Sostanze Utili',
          text: 'La cefalea è un dolore a qualsiasi parte della testa, incluso il cuoio capelluto, la parte superiore del collo, il viso e l’interno del cranio. Le cefalee sono uno dei motivi più comuni di consultazione medica.' +
            'Interferiscono con la possibilità di lavorare e di compiere le attività quotidiane.' +
            'Sebbene le cefalee possano essere dolorose e stressanti, di rado sono causate da una patologia grave. Le cefalee possono essere suddivise in due tipi:' +
            'Cefalee primarie: non causate da un altro disturbo' +
            'Cefalee secondarie: causate da un altro disturbo' +
            'I disturbi della cefalea primaria includono emicrania, cefalea a grappolo e cefalea muscolo-tensiva.' +
            'Le cefalee secondarie possono derivare da disturbi a cervello, occhi, naso, gola, seni nasali, denti, mascelle, orecchie o nuca o da un disturbo diffuso in tutto il corpo (sistemico).'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQMTZqyJvdmp_jOu', '-MQWfQMkcV3EPpWcsWOM']
      ),
    // -- HEMORRHOIDSFISSURES
      new TreeNode(
        'hemorrhoidsFissures',
        {
          title: 'Emorroidi/Ragadi: Sostanze Utili',
          text: 'Le emorroidi sono dei cuscinetti vascolari fisiologicamente presenti nel nostro corpo. Quando non sono soggette a gonfiore e infiammazione, quindi, svolgono la loro funzione di aiuto nel contenimento delle feci mantenendo l\'ano chiuso, senza che ci accorgiamo della loro presenza. Il loro gonfiore eccessivo genera fastidio e sintomi quali prolasso, dolore, bruciore, prurito o sanguinamento. Il termine emorroidi designa sia le strutture venose sia la disfunzione, più correttamente indicata come patologia o malattia emorroidaria.\n' +
            'La patologia emorroidaria è una disfunzione legata all\'infiammazione delle vene emorroidali, le emorroidi, che scivolano all\'esterno della loro sede naturale nell\'ano per il cedimento della mucosa rettale. In alcuni casi si produce la formazione di un grumo di sangue (coagulo o trombo) che amplifica i sintomi dolorosi.'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQMwpHObJmvQDYNq']
      ),
    // -- FIBROMYALGIA
      new TreeNode(
        'fibromyalgia',
        {title: 'Fibromialgia: Maggiori Informazioni', text: 'Soffri di insonnia o ti svegli frequentemente durante la notte?'},
        [
          {id: 'trigeminalNeuralgiaFinal1', msg: 'Si'},
          {id: 'trigeminalNeuralgiaFinal2', msg: 'No'}
        ],
        NodeType.Radio,
        false
      ),
      new TreeNode(
        'fibromyalgiaFinal1',
        {
          title: 'Fibromialgia: Sostanze Utili',
          text: 'La SF è una condizione patologica complessa caratterizzata da un quadro clinico non stereotipabile e che presenta una certa varietà di sintomi che possono presentarsi con incidenza ed intensità che dipendono da manifestazioni soggettive. La sintomatologia riportata spesso si sovrappone a quella tipica di altre patologie per cui le prime indagini analitiche non servono alla diagnosi di fibromialgia (infatti non esistono marker specifici per la FM), piuttosto sono utili per escludere la presenza di patologie di natura infiammatoria o reumatica.'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP', '-MQWfQKfI_XPt813EUU3', '-MQWfQMTZqyJvdmp_jOu', '-MQWfQMkcV3EPpWcsWOM']
      ),
      new TreeNode(
        'fibromyalgiaFinal2',
        {
          title: 'Fibromialgia: Sostanze Utili',
          text: 'La SF è una condizione patologica complessa caratterizzata da un quadro clinico non stereotipabile e che presenta una certa varietà di sintomi che possono presentarsi con incidenza ed intensità che dipendono da manifestazioni soggettive. La sintomatologia riportata spesso si sovrappone a quella tipica di altre patologie per cui le prime indagini analitiche non servono alla diagnosi di fibromialgia (infatti non esistono marker specifici per la FM), piuttosto sono utili per escludere la presenza di patologie di natura infiammatoria o reumatica.'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP', '-MQWfQMTZqyJvdmp_jOu', '-MQWfQMkcV3EPpWcsWOM']
      ),
    new TreeNode(
      'contactUs',
      {title: 'Contatti', text: 'Se hai dubbi puoi contattarci tramite mail al seguente indirizzo'},
      [],
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
