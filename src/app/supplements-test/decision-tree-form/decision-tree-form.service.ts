import {Injectable} from '@angular/core';
import {NodeType, TreeNode} from './treenode.model';

@Injectable({providedIn: 'root'})
export class DecisionTreeFormService {
  private nodes: TreeNode[] = [
    new TreeNode(
      'hasPain',
      {title: 'Dolore', text: 'Sentire dolore è il principale nemico del nostro benessere. Senti dolore?'},
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
        {id: 'hemorrhoidsFissures', msg: 'Soffro di emorroidi / Ho una evacuazione dolorosa', synonyms: ['plesso', 'anale', 'infiammazione']},
        {id: 'cephalalgy', msg: 'Soffro di mal di testa'},
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
        NodeType.Radio,
        false
      ),
      new TreeNode(
        'painMovableJointsFinal',
        {
          title: 'Articolazioni Mobili',
          text: 'I dolori articolari rappresentano sensazioni dolorose a carico di una o più articolazioni quali spalla, gomito, polso, mano, anca, ginocchio, caviglia e piede. Traumi o fratture potrebbe determinare l’insorgere di questo disturbo.' +
            'Bagni caldi, massaggi, sedute di fisioterapia, applicazioni con ultrasuoni e riposo sono alcuni dei rimedi suggeriti per combattere i dolori articolari. I dolori articolari possono presentarsi associati a fitte alle ossa, gonfiore e infiammazione.'
        },
        [],
        NodeType.Advice,
        true,
        ['-MQWfQILmGHdbHqxl0Cr']
      ),
      // -- PAINLOWERJOINTS
      new TreeNode(
        'painLowerJoints',
        {title: 'Articolazioni Inferiori: Maggiori Informazioni', text: 'Hai il diabete?'},
        [
          {id: 'diabeticNeuropathy', msg: 'Si'},
          {id: 'painLowerJointsFinal', msg: 'No'}
        ],
        NodeType.Radio,
        false
      ),
      new TreeNode(
        'painLowerJointsFinal',
        {
          title: 'Articolazioni Inferiori',
          text: 'Una circolazione insufficiente alle gambe si manifesta con sintomi inequivocabili e con evidenze che creano seri problemi estetici. Ciò è tanto più vero se si pensa che le persone più colpite da questi disturbi sono le donne. La manifestazione di un’insufficienza venosa, infatti, si manifesta con i capillari dilatati che, via via, possono formare vene varicose e varici. La circolazione superficiale appare, dunque, palpabile, più o meno estesa e dall’andamento tortuoso, su gambe che finiscono per essere non belle da vedere. Ma il problema non è solo estetico, perché la patologia se trascurata può diventare cronica ed aggravarsi, nei soggetti predisposti, dando vita a ulteriori complicazioni, come dermatiti, trombosi superficiali e flebiti.'
        },
        [],
        NodeType.Advice,
        true,
        ['-MQWfQMwpHObJmvQDYNq']
      ),
      // -- PAINUPPERJOINTS
      new TreeNode(
        'painUpperJoints',
        {title: 'Articolazioni Superiori: Maggiori Informazioni', text: 'Svolgi abitualmente lavori manuali?'},
        [
          {id: 'painUpperJointsSub', msg: 'Si'},
          {id: 'painUpperJointsFinal2', msg: 'No'}
        ],
        NodeType.Radio,
        false
      ),
      new TreeNode(
        'painUpperJointsSub',
        {title: 'Articolazioni Superiori: Maggiori Informazioni', text: 'Soffri di insonnia o ti svegli frequentemente durante la notte?'},
        [
          {id: 'painUpperJointsSubFinal1', msg: 'Si'},
          {id: 'painUpperJointsSubFinal2', msg: 'No'}
        ],
        NodeType.Radio,
        false
      ),
      new TreeNode(
        'painUpperJointsFinal2',
        {
          title: 'Articolazioni Inferiori',
          text: 'Il formicolio è un fenomeno che colpisce soprattutto le estremità degli arti superiori e inferiori, ossia mani e piedi. Tuttavia, bisogna prestare la massima attenzione anche alla testa, alle braccia e alle gambe, altre parti del corpo umano che rischiano di essere soggette ad un problema di questo tipo. Conosciuto anche con la denominazione di parestesia, si tratta di una sensazione di vero e proprio intorpidimento che può manifestarsi da un momento all\'altro, provocando grandi limitazioni nei movimenti quotidiani. Alcuni libri di medicina definiscono questo fenomeno molto simile ad un\'invasione di formiche pronte a camminare all\'interno della pelle. Questo disturbo può essere dovuto a problemi della circolazione sanguigna periferica.'
        },
        [],
        NodeType.Advice,
        true,
        ['-MQWfQMwpHObJmvQDYNq']
      ),
      new TreeNode(
        'painUpperJointsSubFinal1',
        {
          title: 'Articolazioni Inferiori',
          text: 'Una circolazione insufficiente alle gambe si manifesta con sintomi inequivocabili e con evidenze che creano seri problemi estetici. Ciò è tanto più vero se si pensa che le persone più colpite da questi disturbi sono le donne. La manifestazione di un’insufficienza venosa, infatti, si manifesta con i capillari dilatati che, via via, possono formare vene varicose e varici. La circolazione superficiale appare, dunque, palpabile, più o meno estesa e dall’andamento tortuoso, su gambe che finiscono per essere non belle da vedere. Ma il problema non è solo estetico, perché la patologia se trascurata può diventare cronica ed aggravarsi, nei soggetti predisposti, dando vita a ulteriori complicazioni, come dermatiti, trombosi superficiali e flebiti.'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP', '-MQWfQKfI_XPt813EUU3']
      ),
      new TreeNode(
        'painUpperJointsSubFinal2',
        {
          title: 'Articolazioni Inferiori',
          text: 'Una circolazione insufficiente alle gambe si manifesta con sintomi inequivocabili e con evidenze che creano seri problemi estetici. Ciò è tanto più vero se si pensa che le persone più colpite da questi disturbi sono le donne. La manifestazione di un’insufficienza venosa, infatti, si manifesta con i capillari dilatati che, via via, possono formare vene varicose e varici. La circolazione superficiale appare, dunque, palpabile, più o meno estesa e dall’andamento tortuoso, su gambe che finiscono per essere non belle da vedere. Ma il problema non è solo estetico, perché la patologia se trascurata può diventare cronica ed aggravarsi, nei soggetti predisposti, dando vita a ulteriori complicazioni, come dermatiti, trombosi superficiali e flebiti.'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP']
      ),
      // -- PAINBACK
      new TreeNode(
        'painBack',
        {title: 'Dolori Alla Schiena: Maggiori Informazioni', text: 'Come definiresti questo dolore?'},
        [
          {id: 'painBackJointsFinal', msg: 'Continuo'},
          {id: 'compressionNeuropathy', msg: 'Scossa Elettrica'},
          {id: 'compressionNeuropathy', msg: 'Localizzato Nel Gluteo'},
          {id: 'compressionNeuropathy', msg: 'Lungo La Gamba'}
        ],
        NodeType.Radio,
        false
      ),
      new TreeNode(
        'painBackJointsFinal',
        {
          title: 'Dolori Alla Schiena',
          text: 'L’irrigidimento dei muscoli della schiena è causa di dolore nella regione lombare. Questo dolore può svilupparsi in modo graduale o repentino, come nel caso della lombalgia. Non sono solo le persone anziane a esserne affette. I danni posturali causati dallo svolgimento di attività sedentarie, mancanza di esercizio fisico e aumento dello stress hanno avuto come conseguenza un aumento della frequenza dei casi di irrigidimento dei muscoli della schiena anche nella popolazione giovane adulta compresi i bambini.'
        },
        [],
        NodeType.Advice,
        true,
        ['-MQWfQILmGHdbHqxl0Cr']
      ),
      // -- PAINTRAUMATIC
      new TreeNode(
        'painTraumatic',
        {
          title: 'Dolori Di Origine Traumatica',
          text: 'La borsite è una condizione dolorosa che interessa le piccole sacche (o vescichette) ripiene di liquido, chiamate “borse”, che proteggono le articolazioni e anche altre parti anatomiche. Le borse si possono trovare tra ossa e tendini, ma anche fra diversi piani tendinei, fasciali o muscolari; in tal modo possono fungere da ammortizzatori naturali, rendendo fluido il movimento e assicurando la protezione delle diverse strutture interessate, che altrimenti andrebbero incontro a usura e traumi, scatenando infiammazione e dolore. Le borse più esposte al rischio di infiammazione sono quelle della spalla, del gomito, del ginocchio e dell\'anca. Quando si infiamma il liquido sieroso (liquido sinoviale) all\'interno delle borse, si ha una condizione patologica chiamata borsite, con sintomi dolorosi che rendono difficile o impossibile il movimento'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQMv4KlHC3TPfIUM', '-MQWfQN0-b2CIPaMw1f_', '-MQWfQIM6PDiK84cwR0x' ]
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
          title: 'Osteoartrosi',
          text: 'Il fenomeno artrosico è spesso innescato e/o aggravato da una compromissione della muscolatura associata all’articolazione colpita. In questi casi è utile stimolare la funzione muscolare',
          productLink: 'https://geopharma.eu/categoria-prodotto/osteoarticolari/'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQHyaffda7-sVI1e', '-MQWfQIAkudD-G_QSEIm', '-MQWfQIGt8klx3Cnxkgd', '-MQWfQIM6PDiK84cwR0x', '-MQWfQIJV4l_HQT8gBxu']
      ),
      new TreeNode(
        'osteoarthritisFinal2',
        {
          title: 'Osteoartrosi',
          text: 'L’artrosi è una patologia di tipo degenerativo che trae origine dalla perdita dell’equilibrio tra i meccanismi che stimolano la crescita delle cartilagini e quelli che facilitano lo smaltimento dl tessuto usurato.',
          productLink: 'https://geopharma.eu/categoria-prodotto/osteoarticolari/'
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
          {id: 'diabeticNeuropathyFinal1', msg: 'Si'},
          {id: 'diabeticNeuropathyFinal2', msg: 'No'}
        ],
        NodeType.Radio,
        false
      ),
      new TreeNode(
        'diabeticNeuropathyFinal1',
        {
          title: 'Neuropatia Diabetica',
          text: 'La neuropatia diabetica è uno stato di sofferenza dei nervi periferici dovuta alle elevate concentrazioni di glucosio nel sangue. Tali disfunzioni possono incidere pesantemente sulla qualità della vita delle persone',
          productLink: 'https://geopharma.eu/categoria-prodotto/neurotrofici/'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP', '-MQWfQKfI_XPt813EUU3']
      ),
      new TreeNode(
        'diabeticNeuropathyFinal2',
        {
          title: 'Neuropatia Diabetica',
          text: 'La neuropatia è una complicazione frequente nel paziente diabetico. La gravità e la precocità dei sintomi dipendono dal grado di osservanza alle prescrizioni dietetiche e farmacologiche suggerite al paziente.',
          productLink: 'https://geopharma.eu/categoria-prodotto/neurotrofici/'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP']
      ),
    // -- ENTRAPMENTNEUROPATHY
      new TreeNode(
        'entrapmentNeuropathy',
        {
          title: 'Neuropatia Da Intrappolamento: Maggiori Informazioni',
          text: 'Soffri di insonnia o ti svegli frequentemente durante la notte?'
        },
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
          title: 'Neuropatia Da Intrappolamento',
          text: 'La sindrome del tunnel carpale o le altre neuropatie da intrappolamento sono caratterizzate dai disturbi nella sensibilità delle estremità che, in alcuni casi, limitano la capacità di riposo del paziente.',
          productLink: 'https://geopharma.eu/categoria-prodotto/neurotrofici/'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKaQjRUdWrNg1QP', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKfI_XPt813EUU3']
      ),
      new TreeNode(
        'entrapmentNeuropathyFinal2',
        {
          title: 'Neuropatia Da Intrappolamento',
          text: 'La sindrome del tunnel carpale o le altre neuropatie da intrappolamento sono dovute al restringimento di un canale anatomico che causa la sofferenza del nervo che lo occupa.',
          productLink: 'https://geopharma.eu/categoria-prodotto/neurotrofici/'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKaQjRUdWrNg1QP', '-MQWfQKhuhqGpt-GX9Jz']
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
          title: 'Neuropatia Da Compressione',
          text: 'Le mononeuropatie sono disturbi funzionali che colpiscono singoli nervi in aree ben definite e spesso sono conseguenza di una lesione traumatica, di una compressione locale (con "schiacciamento" del nervo) o di processi infiammatori o ischemici. La sintomatologia è pertanto localizzata e limitata al territorio di innervazione del nervo leso. Il dolore provocato dalla lesione può causare disturbi del sonno, peggiorando la qualità della vita.',
          productLink: 'https://geopharma.eu/categoria-prodotto/neurotrofici/'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP', '-MQWfQKfI_XPt813EUU3']
      ),
      new TreeNode(
        'compressionNeuropathyFinal2',
        {
          title: 'Neuropatia Da Compressione',
          text: 'Le mononeuropatie sono disturbi funzionali che colpiscono singoli nervi in aree ben definite e spesso sono conseguenza di una lesione traumatica, di una compressione locale (con "schiacciamento" del nervo) o di processi infiammatori o ischemici. La sintomatologia è pertanto localizzata e limitata al territorio di innervazione del nervo leso',
          productLink: 'https://geopharma.eu/categoria-prodotto/neurotrofici/'
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
          title: 'Neuropatia Erpetica',
          text: 'La nevralgia posterpetica è una complicanza frequente dell\'infezione da Herpes zoster, meglio conosciuta come fuoco di sant\'Antonio. A causarla è la «riattivazione» dello stesso virus responsabile della varicella, che rimane silente nel sistema nervoso dopo aver superato la malattia.',
          productLink: 'https://geopharma.eu/categoria-prodotto/neurotrofici/'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP', '-MQWfQKfI_XPt813EUU3']
      ),
      new TreeNode(
        'herpeticNeuropathyFinal2',
        {
          title: 'Neuropatia Erpetica',
          text: 'Le mononeuropatie sono disturbi funzionali che colpiscono singoli nervi in aree ben definite e spesso sono conseguenza di una lesione traumatica, di una compressione locale (con "schiacciamento" del nervo) o di processi infiammatori o ischemici. La sintomatologia è pertanto localizzata e limitata al territorio di innervazione del nervo leso',
          productLink: 'https://geopharma.eu/categoria-prodotto/neurotrofici/'
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
          title: 'Nevralgia Trigeminale',
          text: 'La nevralgia del trigemino è una sindrome cronica, un disordine neuropatico che si manifesta con crisi di dolore lancinante nelle aree del volto innervate dal quinto nervo cranico: fronte e occhio, mandibola fino al mento o alla parte superiore della guancia.',
          productLink: 'https://geopharma.eu/categoria-prodotto/neurotrofici/'
        },
        [],
        NodeType.Substance,
        true,
        ['-MQWfQKDF7884MFAbYvb', '-MQWfQKSfD6dg1i2A3Xd', '-MQWfQKaQjRUdWrNg1QQ', '-MQWfQIM6PDiK84cwR0x', '-MQWfQKhuhqGpt-GX9Jz', '-MQWfQKaQjRUdWrNg1QP', '-MQWfQKfI_XPt813EUU3']
      ),
      new TreeNode(
        'trigeminalNeuralgiaFinal2',
        {
          title: 'Nevralgia Trigeminale',
          text: 'La nevralgia del trigemino è una sindrome cronica, un disordine neuropatico che si manifesta con crisi di dolore lancinante nelle aree del volto innervate dal quinto nervo cranico: fronte e occhio, mandibola fino al mento o alla parte superiore della guancia.',
          productLink: 'https://geopharma.eu/categoria-prodotto/neurotrofici/'
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
          title: 'Cefalea',
          text: 'La cefalea è un dolore a qualsiasi parte della testa, incluso il cuoio capelluto, la parte superiore del collo, il viso e l’interno del cranio. Le cefalee sono uno dei motivi più comuni di consultazione medica.' +
            'Interferiscono con la possibilità di lavorare e di compiere le attività quotidiane.' +
            'Sebbene le cefalee possano essere dolorose e stressanti, di rado sono causate da una patologia grave. Le cefalee possono essere suddivise in due tipi:' +
            'Cefalee primarie: non causate da un altro disturbo' +
            'Cefalee secondarie: causate da un altro disturbo' +
            'I disturbi della cefalea primaria includono emicrania, cefalea a grappolo e cefalea muscolo-tensiva.' +
            'Le cefalee secondarie possono derivare da disturbi a cervello, occhi, naso, gola, seni nasali, denti, mascelle, orecchie o nuca o da un disturbo diffuso in tutto il corpo (sistemico).',
          productLink: 'https://geopharma.eu/categoria-prodotto/pain/'
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
          title: 'Emorroidi/Ragadi',
          text: 'Le emorroidi sono dei cuscinetti vascolari fisiologicamente presenti nel nostro corpo. Quando non sono soggette a gonfiore e infiammazione, quindi, svolgono la loro funzione di aiuto nel contenimento delle feci mantenendo l\'ano chiuso, senza che ci accorgiamo della loro presenza. Il loro gonfiore eccessivo genera fastidio e sintomi quali prolasso, dolore, bruciore, prurito o sanguinamento. Il termine emorroidi designa sia le strutture venose sia la disfunzione, più correttamente indicata come patologia o malattia emorroidaria.\n' +
            'La patologia emorroidaria è una disfunzione legata all\'infiammazione delle vene emorroidali, le emorroidi, che scivolano all\'esterno della loro sede naturale nell\'ano per il cedimento della mucosa rettale. In alcuni casi si produce la formazione di un grumo di sangue (coagulo o trombo) che amplifica i sintomi dolorosi.',
          productLink: 'https://geopharma.eu/categoria-prodotto/flebotonici/'
        },
        [],
        NodeType.Advice,
        true,
        ['-MQWfQMwpHObJmvQDYNq']
      ),
    // -- FIBROMYALGIA
      new TreeNode(
        'fibromyalgia',
        {title: 'Fibromialgia: Maggiori Informazioni', text: 'Soffri di insonnia o ti svegli frequentemente durante la notte?'},
        [
          {id: 'fibromyalgiaFinal1', msg: 'Si'},
          {id: 'fibromyalgiaFinal2', msg: 'No'}
        ],
        NodeType.Radio,
        false
      ),
      new TreeNode(
        'fibromyalgiaFinal1',
        {
          title: 'Fibromialgia',
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
          title: 'Fibromialgia',
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
