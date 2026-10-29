import type { EventId } from '../data/events'
import type { PictureId } from '../data/gallery'
import type { PlaceId, RegionId } from '../data/places'
import type { VerseId } from '../data/shahnameh'
import type { SourceId, SourceKind } from '../data/sources'

export type Lang = 'en' | 'fa'

export type Dict = {
  dir: 'ltr' | 'rtl'
  langName: string
  title: string
  subtitle: string
  dayNote: string
  legendHeld: string
  legendLater: string
  legendDeed: string
  intro: { heading: string; body: string; start: string }
  era: string
  circa: string
  disputed: string
  approximate: string
  deed: string
  where: string
  sourcesHeading: string
  relicsHeading: string
  rivalsHeading: string
  earlier: string
  later: string
  overview: string
  zoomIn: string
  zoomOut: string
  showEmpire: string
  timelineCaption: string
  timelineLabel: string
  enlarge: string
  close: string
  photo: string
  shahnameh: { trigger: string; heading: string; readMore: string }
  sourceKind: Record<SourceKind, string>
  places: Record<PlaceId, string>
  regions: Record<RegionId, string>
  events: Record<EventId, { title: string; body: string }>
  sources: Record<SourceId, { title: string; note: string }>
  pictures: Record<PictureId, { title: string; caption: string; treatment?: string }>
  verses: Record<VerseId, { context: string; lines?: [string, string][] }>
  digits: (n: number) => string
}

export const en: Dict = {
  dir: 'ltr',
  langName: 'English',
  title: 'Imperium Cyri',
  subtitle: 'The reign of Cyrus the Great, 559–530 BCE',
  dayNote: 'Drawn for Cyrus Day, 7 Aban',
  legendHeld: 'Under Cyrus by this year',
  legendLater: 'Not yet his',
  legendDeed: 'A humane act',
  intro: {
    heading: 'Cyrus the Great',
    body:
      'In under thirty years the king of a small Persian kingdom built the largest empire the world had yet seen, from the Aegean to the Jaxartes. He is remembered less for conquest than for how he ruled: sparing the kings he defeated, restoring the temples of other peoples, and letting exiles go home. Step through his reign on the scale below; the rosettes mark his humane acts.',
    start: 'Begin with his birth',
  },
  era: 'BCE',
  circa: 'c.',
  disputed: 'Date and reading are disputed',
  approximate: 'location approximate',
  deed: 'A humane act',
  where: 'Where',
  sourcesHeading: 'What the sources say',
  relicsHeading: 'From his time',
  rivalsHeading: 'The king he faced',
  earlier: 'Earlier',
  later: 'Later',
  overview: 'Whole reign',
  zoomIn: 'Zoom in',
  zoomOut: 'Zoom out',
  showEmpire: 'Show the whole empire',
  timelineCaption: 'Years before the common era',
  timelineLabel: 'Events in the life of Cyrus',
  enlarge: 'View larger',
  close: 'Close',
  photo: 'Photo',
  shahnameh: {
    trigger: 'From the Shahnameh',
    heading: 'Ferdowsi, Shahnameh: Kay Khosrow',
    readMore: 'Read the passage on Ganjoor',
  },
  sourceKind: {
    cuneiform: 'Written in his lifetime',
    classical: 'Greek or Roman, written later',
    hebrew: 'Hebrew Bible',
  },
  places: {
    anshan: 'Anshan',
    pasargadae: 'Pasargadae',
    ecbatana: 'Ecbatana',
    sardis: 'Sardis',
    opis: 'Opis',
    babylon: 'Babylon',
    bactra: 'Bactra',
    cyropolis: 'Cyropolis',
    jerusalem: 'Jerusalem',
  },
  regions: {
    persis: 'Persis',
    media: 'Media',
    armenia: 'Armenia',
    cappadocia: 'Cappadocia',
    assyria: 'Assyria',
    lydia: 'Lydia',
    hyrcania: 'Hyrcania',
    carmania: 'Carmania',
    aria: 'Aria',
    bactria: 'Bactriana',
    sogdia: 'Sogdiana',
    arachosia: 'Arachosia',
    susiana: 'Susiana',
    babylonia: 'Babylonia',
    syria: 'Syria',
    mediterranean: 'Mare Mediterraneum',
    euxine: 'Pontus Euxinus',
    caspian: 'Caspium Mare',
    persianGulf: 'Sinus Persicus',
    erythraean: 'Mare Erythraeum',
    aral: 'Oxiana Palus',
    arabia: 'Arabia Deserta',
    aegyptus: 'Aegyptus',
    scythia: 'Scythia',
    india: 'India',
  },
  events: {
    birth: {
      title: 'Born a prince of Anshan',
      body:
        'Son of Cambyses I, king of Anshan in Pars, and, Herodotus says, of the Median princess Mandane. Herodotus tells how his grandfather Astyages, fearing a dream, ordered the baby killed, and how a herdsman raised him in secret instead. No source records the year; writers who give his age place his birth around 600 BCE.',
    },
    king: {
      title: 'Cyrus becomes king of Persia',
      body:
        'Beginning of his reign according to the conventional chronology. He inherits Anshan, a kingdom subject to the Medes, and on the Cyrus Cylinder later names his father, grandfather and great-grandfather as kings of Anshan before him.',
    },
    media: {
      title: 'Defeat of the Median king, and mercy for him',
      body:
        'A major turning point in the formation of Cyrus’s empire. The Babylonian chronicle says the army of Astyages rose against its own king and handed him over, and Cyrus took Ecbatana. The chronology of the conflict is debated. Rather than put the old king to death, Herodotus says, Cyrus did him no further harm and kept him at his court for the rest of his life. Strabo says Pasargadae was founded where the deciding battle was fought.',
    },
    lydia: {
      title: 'Campaign in western Anatolia',
      body:
        'A proposed date associated with the Babylonian Chronicle’s account of a campaign against Lydia. The interpretation and dating are disputed: the name of the land is damaged on the tablet. Greek tradition says that after Sardis fell, Cyrus took the Lydian king Croesus down from the pyre and kept him as a trusted adviser.',
    },
    east: {
      title: 'Campaigns in the east',
      body:
        'While his generals took the Greek cities of the coast, Herodotus says, Cyrus himself subdued the peoples of the interior, the Bactrians and the Saka among them. Cyropolis, the frontier town on the Jaxartes, still bore his name when Alexander besieged it two centuries later.',
    },
    babylon: {
      title: 'Babylon opens its gates',
      body:
        'The chronicle records a battle at Opis on the Tigris, then Babylon entered without a fight. Persian soldiers guarded the gates of the great temple, it says, and the rites went on without interruption. The captured king Nabonidus was not killed; the Babylonian priest Berossus says Cyrus gave him a home in Carmania for the rest of his life.',
    },
    cylinder: {
      title: 'The Cyrus Cylinder',
      body:
        'In a clay cylinder buried in Babylon’s walls, Cyrus says he let no one terrorise the land, relieved the people of Babylon of forced labour, rebuilt ruined shrines, returned the statues of gods to their own cities, and gathered their peoples and returned them to their homes. It is written in the old Mesopotamian style of royal praise, yet its policy of restoring and returning stands out. A replica has been on display at the United Nations headquarters in New York since 1971.',
    },
    exiles: {
      title: 'The exiles go home',
      body:
        'The Book of Ezra records a decree of Cyrus letting the Judeans whom Nebuchadnezzar had deported return to Jerusalem, rebuild their Temple, and take back the sacred vessels taken from it. The Book of Isaiah calls him the Lord’s shepherd and anointed, the only foreign king given that title in the Hebrew Bible.',
    },
    tomb: {
      title: 'His tomb at Pasargadae',
      body:
        'Cyrus rests at Pasargadae, the city he founded in Pars, in a gabled stone chamber on six stepped tiers that has stood for some 2,500 years. Plutarch records the words once read there: “O man, I am Cyrus, who founded the empire of the Persians. Do not grudge me this little earth that covers my body.” Alexander the Great had the tomb restored. The Persians, Herodotus says, called Cyrus their father, and every year on 7 Aban people gather here to remember him.',
    },
  },
  sources: {
    nabonidusChronicle: {
      title: 'Nabonidus Chronicle',
      note: 'A Babylonian clay tablet listing the events of each year of King Nabonidus, including the fall of Astyages, a campaign of 547 BCE and the peaceful entry into Babylon.',
    },
    cyrusCylinder: {
      title: 'Cyrus Cylinder',
      note: 'A clay cylinder buried in Babylon’s walls after 539 BCE, in which Cyrus describes freeing the city from forced labour and returning gods and peoples to their homes.',
    },
    sipparCylinder: {
      title: 'Sippar Cylinder of Nabonidus',
      note: 'Calls Cyrus “king of Anshan” and dates his victory over the Medes to Nabonidus’s third year, one reason the date of 550 BCE is debated.',
    },
    herodotus: {
      title: 'Herodotus',
      note: 'Writing about a century later, he gives the fullest Greek account of Cyrus’s life, mixing court tradition with legend, and says the Persians called him father.',
    },
    strabo: {
      title: 'Strabo',
      note: 'The geographer describes the tomb at Pasargadae and links the city’s founding to Cyrus’s final battle against Astyages.',
    },
    arrian: {
      title: 'Arrian',
      note: 'Describes Alexander’s siege of Cyropolis and his visit to the tomb of Cyrus, which he ordered repaired.',
    },
    plutarch: {
      title: 'Plutarch',
      note: 'His Life of Alexander gives the inscription on Cyrus’s tomb and says Alexander was deeply moved by it.',
    },
    cicero: {
      title: 'Cicero, after Dinon',
      note: 'Records that Cyrus lived to seventy and reigned for thirty years, the basis for a birth around 600 BCE.',
    },
    berossus: {
      title: 'Berossus',
      note: 'A Babylonian priest writing in Greek around 290 BCE, quoted by Josephus: Cyrus spared Nabonidus and sent him to live in Carmania.',
    },
    ezra: {
      title: 'Book of Ezra',
      note: 'Preserves the decree of Cyrus allowing the return to Jerusalem and the rebuilding of the Temple at royal expense.',
    },
    isaiah: {
      title: 'Book of Isaiah',
      note: 'Names Cyrus as the one who will say of Jerusalem “she shall be built” and calls him the Lord’s anointed.',
    },
  },
  pictures: {
    cylinder: {
      title: 'The Cyrus Cylinder',
      caption:
        'Baked clay, about 23 cm long, written in Babylonian cuneiform after Cyrus took Babylon in 539 BCE. Found in 1879 in the foundations of Babylon; now in the British Museum, London.',
    },
    chronicle: {
      title: 'The Nabonidus Chronicle',
      caption:
        'Clay tablet recording each year of Nabonidus’s reign, including Cyrus’s victory over Astyages and his entry into Babylon. British Museum.',
    },
    winged: {
      title: 'The winged guardian of Pasargadae',
      caption:
        'A four-winged figure in Elamite robes with an Egyptian crown, carved on a gateway of Cyrus’s capital: art that joins the traditions of the peoples he ruled.',
    },
    inscription: {
      title: '“I am Cyrus the king, an Achaemenid”',
      caption:
        'A short inscription in Old Persian, Elamite and Babylonian on a pillar of a palace at Pasargadae. It may have been carved under Darius I.',
    },
    tomb: {
      title: 'The tomb of Cyrus',
      caption:
        'Limestone chamber on six stepped tiers, about 11 m high, at Pasargadae in Fars. Part of a UNESCO World Heritage Site since 2004.',
    },
    astyages: {
      title: 'Astyages, king of the Medes',
      caption: 'Imagined in a Brussels tapestry of 1771–75. No portrait from his lifetime survives.',
      treatment: 'Spared. Herodotus says Cyrus kept him at his court, unharmed, until he died.',
    },
    croesus: {
      title: 'Croesus, king of Lydia',
      caption:
        'Croesus on the pyre, painted by Myson on an Athenian vase around 500–490 BCE, within living memory of his fall. Louvre, Paris.',
      treatment:
        'Spared, in the Greek telling: taken down from the pyre and made an adviser. The Babylonian chronicle may record a harsher end; the passage is disputed.',
    },
    nabonidus: {
      title: 'Nabonidus, king of Babylon',
      caption:
        'Basalt stele showing Nabonidus before the symbols of the moon, sun and Venus, 555–539 BCE. British Museum.',
      treatment: 'Spared. Berossus says Cyrus gave him a home in Carmania for the rest of his life.',
    },
    kaykhosrow: {
      title: 'Kay Khosrow enthroned',
      caption: 'Folio from an illustrated Shahnameh made in Ilkhanid Iran around 1300. Metropolitan Museum of Art.',
    },
  },
  verses: {
    shepherds: {
      context:
        'Cyrus is never named in the Shahnameh, but some scholars hear his story in Kay Khosrow’s. Here the boy’s hostile grandfather, Afrasiab, sends the newborn prince to be raised by shepherds, as Herodotus says Astyages did with the infant Cyrus.',
      lines: [
        ['Do not keep him among the crowd;', 'send him to the shepherds on the mountain.'],
        ['You are the crown upon the heads of kings;', 'who would call you a shepherd’s son?'],
      ],
    },
    spared: {
      context: 'Victorious, Kay Khosrow spares the family of the king who wronged him.',
      lines: [
        ['From now on you have nothing to fear from me;', 'in me there is no faithlessness, no executioner.'],
        ['It is no manliness to rage without cause', 'and strike one who has already been brought low.'],
      ],
    },
    mercy: {
      context: 'After taking his enemy’s fortress, Kay Khosrow forbids his army to harm its people.',
      lines: [
        ['He told them: be safe,', 'and heed no one who speaks of harm.'],
        ['Turn your hearts from shedding blood;', 'the innocent must not lose their heads.'],
      ],
    },
    justice: {
      context: 'Ferdowsi on the first days of Kay Khosrow’s reign.',
      lines: [
        ['Wherever there was ruin, he rebuilt;', 'he freed the grieving from their grief.'],
        ['The world was filled with goodness and safety;', 'the hand of evil was bound.'],
      ],
    },
  },
  digits: (n) => String(n),
}
