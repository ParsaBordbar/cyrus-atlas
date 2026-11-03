import type { EventId } from "../data/events";
import type { PictureId } from "../data/gallery";
import type { PlaceId, RegionId } from "../data/places";
import type { VerseId } from "../data/shahnameh";
import type { SourceId, SourceKind } from "../data/sources";

export type Lang = "en" | "fa";

export type ArticleSourceId =
  | "iranicaCyrus"
  | "unescoPasargadae"
  | "metCylinder"
  | "iranicaCuneiform"
  | "iranicaLanguages"
  | "oxfordCyrus";

export type ArticleImageId =
  | "politics"
  | "language"
  | "dailyLife"
  | "clothing"
  | "religion"
  | "empire"
  | "identity";

export type ArticleDict = {
  readMore: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  title: string;
  subtitle: string;
  readingTime: string;
  tocHeading: string;
  heroAlt: string;
  heroCaption: string;
  sourceLabel: string;
  imageSource: string;
  images: Record<ArticleImageId, { alt: string; caption: string }>;
  intro: [string, string, string];
  politics: { title: string; p1: string; items: string[]; p2: string };
  language: { title: string; p1: string; items: string[]; p2: string };
  writing: {
    title: string;
    p1: string;
    imageAlt: string;
    imageCaption: string;
    p2: string;
  };
  dailyLife: {
    title: string;
    p1: string;
    farmingTitle: string;
    farming: string;
    herdingTitle: string;
    herding: string;
    tradeTitle: string;
    trade: string;
  };
  clothing: { title: string; p1: string; items: string[] };
  architecture: {
    title: string;
    p1: string;
    imageAlt: string;
    imageCaption: string;
    p2: string;
  };
  religion: { title: string; p1: string; p2: string; p3: string };
  empire: { title: string; p1: string; timeline: [string, string][] };
  comparison: {
    title: string;
    headers: [string, string, string];
    rows: [string, string, string][];
  };
  identity: { title: string; p1: string; p2: string };
  conclusion: { title: string; p1: string; p2: string };
  sourcesHeading: string;
  sources: Record<ArticleSourceId, { title: string; description: string }>;
};

export type Dict = {
  dir: "ltr" | "rtl";
  langName: string;
  title: string;
  subtitle: string;
  dayNote: string;
  legendHeld: string;
  legendLater: string;
  legendDeed: string;
  intro: { heading: string; body: string; start: string };
  era: string;
  circa: string;
  disputed: string;
  approximate: string;
  deed: string;
  where: string;
  sourcesHeading: string;
  relicsHeading: string;
  rivalsHeading: string;
  earlier: string;
  later: string;
  overview: string;
  zoomIn: string;
  zoomOut: string;
  showEmpire: string;
  timelineCaption: string;
  timelineLabel: string;
  enlarge: string;
  close: string;
  photo: string;
  shahnameh: { trigger: string; heading: string; readMore: string };
  sourceKind: Record<SourceKind, string>;
  places: Record<PlaceId, string>;
  regions: Record<RegionId, string>;
  events: Record<EventId, { title: string; body: string }>;
  sources: Record<SourceId, { title: string; note: string }>;
  pictures: Record<
    PictureId,
    { title: string; caption: string; treatment?: string }
  >;
  verses: Record<VerseId, { context: string; lines?: [string, string][] }>;
  article: ArticleDict;
  header: {
    brand: string;
    tagline: string;
    logoAlt: string;
    toggleNavigation: string;
    navigation: {
      home: string;
      history: string;
    };
  };
  history: {
    title: string;
    description: string;
  };
  digits: (n: number) => string;
};

export const en: Dict = {
  dir: "ltr",
  langName: "English",
  title: "Imperium Cyri",
  subtitle: "The reign of Cyrus the Great, 559–530 BCE",
  dayNote: "Drawn for Cyrus Day, 7 Aban",
  legendHeld: "Under Cyrus by this year",
  legendLater: "Not yet his",
  legendDeed: "A humane act",
  intro: {
    heading: "Cyrus the Great",
    body: "In under thirty years the king of a small Persian kingdom built the largest empire the world had yet seen, from the Aegean to the Jaxartes. He is remembered less for conquest than for how he ruled: sparing the kings he defeated, restoring the temples of other peoples, and letting exiles go home. Step through his reign on the scale below; the rosettes mark his humane acts.",
    start: "Begin with his birth",
  },
  era: "BCE",
  circa: "c.",
  disputed: "Date and reading are disputed",
  approximate: "location approximate",
  deed: "A humane act",
  where: "Where",
  sourcesHeading: "What the sources say",
  relicsHeading: "From his time",
  rivalsHeading: "The king he faced",
  earlier: "Earlier",
  later: "Later",
  overview: "Whole reign",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out",
  showEmpire: "Show the whole empire",
  timelineCaption: "Years before the common era",
  timelineLabel: "Events in the life of Cyrus",
  enlarge: "View larger",
  close: "Close",
  photo: "Photo",
  shahnameh: {
    trigger: "From the Shahnameh",
    heading: "Ferdowsi, Shahnameh: Kay Khosrow",
    readMore: "Read the passage on Ganjoor",
  },
  sourceKind: {
    cuneiform: "Written in his lifetime",
    classical: "Greek or Roman, written later",
    hebrew: "Hebrew Bible",
  },
  places: {
    anshan: "Anshan",
    pasargadae: "Pasargadae",
    ecbatana: "Ecbatana",
    sardis: "Sardis",
    opis: "Opis",
    babylon: "Babylon",
    bactra: "Bactra",
    cyropolis: "Cyropolis",
    jerusalem: "Jerusalem",
  },
  regions: {
    persis: "Persis",
    media: "Media",
    armenia: "Armenia",
    cappadocia: "Cappadocia",
    assyria: "Assyria",
    lydia: "Lydia",
    hyrcania: "Hyrcania",
    carmania: "Carmania",
    aria: "Aria",
    bactria: "Bactriana",
    sogdia: "Sogdiana",
    arachosia: "Arachosia",
    susiana: "Susiana",
    babylonia: "Babylonia",
    syria: "Syria",
    mediterranean: "Mare Mediterraneum",
    euxine: "Pontus Euxinus",
    caspian: "Caspium Mare",
    persianGulf: "Sinus Persicus",
    erythraean: "Mare Erythraeum",
    aral: "Oxiana Palus",
    arabia: "Arabia Deserta",
    aegyptus: "Aegyptus",
    scythia: "Scythia",
    india: "India",
  },
  events: {
    birth: {
      title: "Born a prince of Anshan",
      body: "Son of Cambyses I, king of Anshan in Pars, and, Herodotus says, of the Median princess Mandane. Herodotus tells how his grandfather Astyages, fearing a dream, ordered the baby killed, and how a herdsman raised him in secret instead. No source records the year; writers who give his age place his birth around 600 BCE.",
    },
    king: {
      title: "Cyrus becomes king of Persia",
      body: "Beginning of his reign according to the conventional chronology. He inherits Anshan, a kingdom subject to the Medes, and on the Cyrus Cylinder later names his father, grandfather and great-grandfather as kings of Anshan before him.",
    },
    media: {
      title: "Defeat of the Median king, and mercy for him",
      body: "A major turning point in the formation of Cyrus’s empire. The Babylonian chronicle says the army of Astyages rose against its own king and handed him over, and Cyrus took Ecbatana. The chronology of the conflict is debated. Rather than put the old king to death, Herodotus says, Cyrus did him no further harm and kept him at his court for the rest of his life. Strabo says Pasargadae was founded where the deciding battle was fought.",
    },
    lydia: {
      title: "Campaign in western Anatolia",
      body: "A proposed date associated with the Babylonian Chronicle’s account of a campaign against Lydia. The interpretation and dating are disputed: the name of the land is damaged on the tablet. Greek tradition says that after Sardis fell, Cyrus took the Lydian king Croesus down from the pyre and kept him as a trusted adviser.",
    },
    east: {
      title: "Campaigns in the east",
      body: "While his generals took the Greek cities of the coast, Herodotus says, Cyrus himself subdued the peoples of the interior, the Bactrians and the Saka among them. Cyropolis, the frontier town on the Jaxartes, still bore his name when Alexander besieged it two centuries later.",
    },
    babylon: {
      title: "Babylon opens its gates",
      body: "The chronicle records a battle at Opis on the Tigris, then Babylon entered without a fight. Persian soldiers guarded the gates of the great temple, it says, and the rites went on without interruption. The captured king Nabonidus was not killed; the Babylonian priest Berossus says Cyrus gave him a home in Carmania for the rest of his life.",
    },
    cylinder: {
      title: "The Cyrus Cylinder",
      body: "In a clay cylinder buried in Babylon’s walls, Cyrus says he let no one terrorise the land, relieved the people of Babylon of forced labour, rebuilt ruined shrines, returned the statues of gods to their own cities, and gathered their peoples and returned them to their homes. It is written in the old Mesopotamian style of royal praise, yet its policy of restoring and returning stands out. A replica has been on display at the United Nations headquarters in New York since 1971.",
    },
    exiles: {
      title: "The exiles go home",
      body: "The Book of Ezra records a decree of Cyrus letting the Judeans whom Nebuchadnezzar had deported return to Jerusalem, rebuild their Temple, and take back the sacred vessels taken from it. The Book of Isaiah calls him the Lord’s shepherd and anointed, the only foreign king given that title in the Hebrew Bible.",
    },
    tomb: {
      title: "His tomb at Pasargadae",
      body: "Cyrus rests at Pasargadae, the city he founded in Pars, in a gabled stone chamber on six stepped tiers that has stood for some 2,500 years. Plutarch records the words once read there: “O man, I am Cyrus, who founded the empire of the Persians. Do not grudge me this little earth that covers my body.” Alexander the Great had the tomb restored. The Persians, Herodotus says, called Cyrus their father, and every year on 7 Aban people gather here to remember him.",
    },
  },
  sources: {
    nabonidusChronicle: {
      title: "Nabonidus Chronicle",
      note: "A Babylonian clay tablet listing the events of each year of King Nabonidus, including the fall of Astyages, a campaign of 547 BCE and the peaceful entry into Babylon.",
    },
    cyrusCylinder: {
      title: "Cyrus Cylinder",
      note: "A clay cylinder buried in Babylon’s walls after 539 BCE, in which Cyrus describes freeing the city from forced labour and returning gods and peoples to their homes.",
    },
    sipparCylinder: {
      title: "Sippar Cylinder of Nabonidus",
      note: "Calls Cyrus “king of Anshan” and dates his victory over the Medes to Nabonidus’s third year, one reason the date of 550 BCE is debated.",
    },
    herodotus: {
      title: "Herodotus",
      note: "Writing about a century later, he gives the fullest Greek account of Cyrus’s life, mixing court tradition with legend, and says the Persians called him father.",
    },
    strabo: {
      title: "Strabo",
      note: "The geographer describes the tomb at Pasargadae and links the city’s founding to Cyrus’s final battle against Astyages.",
    },
    arrian: {
      title: "Arrian",
      note: "Describes Alexander’s siege of Cyropolis and his visit to the tomb of Cyrus, which he ordered repaired.",
    },
    plutarch: {
      title: "Plutarch",
      note: "His Life of Alexander gives the inscription on Cyrus’s tomb and says Alexander was deeply moved by it.",
    },
    cicero: {
      title: "Cicero, after Dinon",
      note: "Records that Cyrus lived to seventy and reigned for thirty years, the basis for a birth around 600 BCE.",
    },
    berossus: {
      title: "Berossus",
      note: "A Babylonian priest writing in Greek around 290 BCE, quoted by Josephus: Cyrus spared Nabonidus and sent him to live in Carmania.",
    },
    ezra: {
      title: "Book of Ezra",
      note: "Preserves the decree of Cyrus allowing the return to Jerusalem and the rebuilding of the Temple at royal expense.",
    },
    isaiah: {
      title: "Book of Isaiah",
      note: "Names Cyrus as the one who will say of Jerusalem “she shall be built” and calls him the Lord’s anointed.",
    },
  },
  pictures: {
    cylinder: {
      title: "The Cyrus Cylinder",
      caption:
        "Baked clay, about 23 cm long, written in Babylonian cuneiform after Cyrus took Babylon in 539 BCE. Found in 1879 in the foundations of Babylon; now in the British Museum, London.",
    },
    chronicle: {
      title: "The Nabonidus Chronicle",
      caption:
        "Clay tablet recording each year of Nabonidus’s reign, including Cyrus’s victory over Astyages and his entry into Babylon. British Museum.",
    },
    winged: {
      title: "The winged guardian of Pasargadae",
      caption:
        "A four-winged figure in Elamite robes with an Egyptian crown, carved on a gateway of Cyrus’s capital: art that joins the traditions of the peoples he ruled.",
    },
    inscription: {
      title: "“I am Cyrus the king, an Achaemenid”",
      caption:
        "A short inscription in Old Persian, Elamite and Babylonian on a pillar of a palace at Pasargadae. It may have been carved under Darius I.",
    },
    tomb: {
      title: "The tomb of Cyrus",
      caption:
        "Limestone chamber on six stepped tiers, about 11 m high, at Pasargadae in Fars. Part of a UNESCO World Heritage Site since 2004.",
    },
    astyages: {
      title: "Astyages, king of the Medes",
      caption:
        "Imagined in a Brussels tapestry of 1771–75. No portrait from his lifetime survives.",
      treatment:
        "Spared. Herodotus says Cyrus kept him at his court, unharmed, until he died.",
    },
    croesus: {
      title: "Croesus, king of Lydia",
      caption:
        "Croesus on the pyre, painted by Myson on an Athenian vase around 500–490 BCE, within living memory of his fall. Louvre, Paris.",
      treatment:
        "Spared, in the Greek telling: taken down from the pyre and made an adviser. The Babylonian chronicle may record a harsher end; the passage is disputed.",
    },
    nabonidus: {
      title: "Nabonidus, king of Babylon",
      caption:
        "Basalt stele showing Nabonidus before the symbols of the moon, sun and Venus, 555–539 BCE. British Museum.",
      treatment:
        "Spared. Berossus says Cyrus gave him a home in Carmania for the rest of his life.",
    },
    kaykhosrow: {
      title: "Kay Khosrow enthroned",
      caption:
        "Folio from an illustrated Shahnameh made in Ilkhanid Iran around 1300. Metropolitan Museum of Art.",
    },
  },
  verses: {
    shepherds: {
      context:
        "Cyrus is never named in the Shahnameh, but some scholars hear his story in Kay Khosrow’s. Here the boy’s hostile grandfather, Afrasiab, sends the newborn prince to be raised by shepherds, as Herodotus says Astyages did with the infant Cyrus.",
      lines: [
        [
          "Do not keep him among the crowd;",
          "send him to the shepherds on the mountain.",
        ],
        [
          "You are the crown upon the heads of kings;",
          "who would call you a shepherd’s son?",
        ],
      ],
    },
    spared: {
      context:
        "Victorious, Kay Khosrow spares the family of the king who wronged him.",
      lines: [
        [
          "From now on you have nothing to fear from me;",
          "in me there is no faithlessness, no executioner.",
        ],
        [
          "It is no manliness to rage without cause",
          "and strike one who has already been brought low.",
        ],
      ],
    },
    mercy: {
      context:
        "After taking his enemy’s fortress, Kay Khosrow forbids his army to harm its people.",
      lines: [
        ["He told them: be safe,", "and heed no one who speaks of harm."],
        [
          "Turn your hearts from shedding blood;",
          "the innocent must not lose their heads.",
        ],
      ],
    },
    justice: {
      context: "Ferdowsi on the first days of Kay Khosrow’s reign.",
      lines: [
        [
          "Wherever there was ruin, he rebuilt;",
          "he freed the grieving from their grief.",
        ],
        [
          "The world was filled with goodness and safety;",
          "the hand of evil was bound.",
        ],
      ],
    },
  },
  article: {
    readMore: "READ ARTICLE",
    metaTitle:
      "Iran in the Age of Cyrus the Great | Culture, Language and Everyday Life",
    metaDescription:
      "Discover the culture, language, dress, architecture, religion and way of life of the people of Iran in the time of Cyrus the Great.",
    category: "Ancient Iranian History",
    title:
      "Iran in the Age of Cyrus the Great: Culture, Language and Everyday Life",
    subtitle:
      "A journey through the history, culture, language and everyday life of the people of Iran in the time of Cyrus the Great",
    readingTime: "12 min read",
    tocHeading: "Contents",
    heroAlt: "The tomb of Cyrus the Great at Pasargadae",
    heroCaption: "The tomb of Cyrus the Great at Pasargadae",
    sourceLabel: "Source",
    imageSource: "Wikimedia Commons",
    images: {
      politics: {
        alt: "Map of the Median, Lydian, Babylonian and Egyptian kingdoms around 600 BCE",
        caption:
          "The Near East around 600 BCE, when the Median kingdom stood beside Lydia, Babylonia and Egypt",
      },
      language: {
        alt: "The Behistun Inscription",
        caption:
          "The Behistun Inscription in Old Persian, Elamite and Babylonian, carved under Darius I",
      },
      dailyLife: {
        alt: "Relief from the Apadana stairway at Persepolis",
        caption:
          "Relief from the Apadana stairway at Persepolis, carved under Darius I, soon after Cyrus’s reign",
      },
      clothing: {
        alt: "Royal guards in glazed brick from Susa",
        caption:
          "Royal guard in a long robe with a spear: glazed brick from the palace of Darius I at Susa, c. 510 BCE (Louvre)",
      },
      religion: {
        alt: "The Ishtar Gate of Babylon",
        caption:
          "The Ishtar Gate of Babylon, whose dragons and bulls stand for Marduk and Adad; reconstructed in the Pergamon Museum, Berlin",
      },
      empire: {
        alt: "Map showing the expansion of the Achaemenid Empire",
        caption:
          "The expansion of the Achaemenid Empire under Cyrus and his successors",
      },
      identity: {
        alt: "Median and Persian dignitaries on the Apadana stairway",
        caption:
          "Medes and Persians side by side on the eastern stairway of the Apadana at Persepolis",
      },
    },
    intro: [
      "When we speak of ancient Iranian history, the name of Cyrus the Great is one of the first to come to mind: a king who, in the sixth century BCE, united vast lands under his rule and laid the foundations of the Achaemenid Empire.",
      "But Iran in the time of Cyrus was not only a land of kings, wars and conquests. Peoples with different languages, beliefs, customs, dress and ways of life lived across the Iranian plateau and the lands around it.",
      "In this article we look at the state of Iran from about 600 to 530 BCE.",
    ],
    politics: {
      title: "The political and social situation of Iran",
      p1: "Around 600 BCE the Iranian plateau was not yet ruled by a single unified empire. Different groups and states held different regions of the land.",
      items: [
        "The Medes: one of the major political powers in western Iran.",
        "The Persians: an Iranian-speaking people in the region of Pars.",
        "The Elamites: a people with an ancient civilisation in south-western Iran.",
        "Other Iranian-speaking groups in the north and east.",
      ],
      p2: "Cyrus II became king of Persia in 559 BCE and, around 550 BCE, overcame the Medes.",
    },
    language: {
      title: "The language of the people in the time of Cyrus",
      p1: "In the time of Cyrus there was no single language spoken by all the inhabitants of Iranian lands.",
      items: [
        "Old Persian",
        "Median",
        "Elamite",
        "Babylonian Akkadian",
        "Aramaic",
      ],
      p2: "Old Persian belonged to the Iranian branch of the large Indo-European language family. It is historically related to Middle Persian and New Persian.",
    },
    writing: {
      title: "Writing and script",
      p1: "In the sixth century BCE, different civilisations used different writing systems.",
      imageAlt: "The Cyrus Cylinder",
      imageCaption:
        "The Cyrus Cylinder, a clay cylinder inscribed in Babylonian cuneiform (British Museum)",
      p2: "One of the most important works of this period is the Cyrus Cylinder, made after the conquest of Babylon around 539 BCE. Its text is written in Babylonian in cuneiform script.",
    },
    dailyLife: {
      title: "Everyday life of the people",
      p1: "A considerable part of the population lived in villages and small settlements, and their economy rested largely on farming and herding.",
      farmingTitle: "Farming and food production",
      farming:
        "Wheat, barley, grapes and orchard crops were important crops in different regions.",
      herdingTitle: "Herding",
      herding:
        "Sheep, goats and cattle were important in the economic life of the people. The horse also had a special place in transport and military activity.",
      tradeTitle: "Crafts and trade",
      trade:
        "Pottery, metalwork, weaving, toolmaking and trade counted among the important economic activities.",
    },
    clothing: {
      title: "Dress and appearance",
      p1: "People’s clothing in the time of Cyrus depended on region, climate and social standing.",
      items: [
        "Long cloth garments and tunic-like dress.",
        "Trousers among some Iranian peoples and horsemen.",
        "Leather shoes.",
        "Belts and woven fabrics.",
        "A variety of headwear.",
      ],
    },
    architecture: {
      title: "Architecture and houses",
      p1: "Architecture in the time of Cyrus entered a new stage of development. One of the most important examples is the city of Pasargadae.",
      imageAlt: "Winged figure relief at Pasargadae",
      imageCaption: "The four-winged figure on Gate R at Pasargadae",
      p2: "Pasargadae comprised palaces, gardens, ceremonial spaces and royal buildings. The houses of ordinary people were simpler, built with materials such as mud brick, clay and wood.",
    },
    religion: {
      title: "Religion and beliefs",
      p1: "The religious beliefs of people in the time of Cyrus were highly varied. One cannot speak of a single, unified, official religion for the whole population of the empire.",
      p2: "Among the Persians and Medes there were Iranian beliefs. In Babylon, Marduk held an important place, and in Elam local rites and gods were worshipped.",
      p3: "The relationship between Cyrus and Zoroastrianism is also debated by historians, and the evidence is not sufficient to draw a firm conclusion.",
    },
    empire: {
      title: "Expansion of the empire",
      p1: "The years from 600 to 530 BCE are among the most important periods of political change in the history of Iran.",
      timeline: [
        ["600 BCE", "Probable birth of Cyrus the Great"],
        ["559 BCE", "Cyrus begins his reign in Persia"],
        ["550 BCE", "Defeat of Astyages and control of Media"],
        ["547 BCE", "Expansion of the realm with the conquest of Lydia"],
        ["539 BCE", "Conquest of Babylon"],
        ["530 BCE", "Death of Cyrus and succession of Cambyses II"],
      ],
    },
    comparison: {
      title: "Differences between 600 and 530 BCE",
      headers: ["Topic", "600 BCE", "530 BCE"],
      rows: [
        ["Political structure", "Regional powers", "The Achaemenid Empire"],
        [
          "Languages",
          "Local and regional languages",
          "Linguistic diversity across a wider realm",
        ],
        ["Economy", "Regional networks", "Wider trade connections"],
        [
          "Royal architecture",
          "Local traditions",
          "Formation of the Pasargadae complex",
        ],
      ],
    },
    identity: {
      title: "Iranian identity in that era",
      p1: "The concept of Iranian identity in antiquity was not the same as the concept of Iranian nationality in today’s world.",
      p2: "In the time of Cyrus, ethnic, linguistic and political identities such as Persian, Median and Elamite mattered. As the Achaemenid Empire expanded, these groups came together within a shared political structure, but they kept their local identities.",
    },
    conclusion: {
      title: "Conclusion: Iran on the threshold of a historic transformation",
      p1: "The lifetime of Cyrus the Great is one of the most important periods in the history of ancient Iran. Between 600 and 530 BCE, Persia grew from a regional power into the centre of a great empire.",
      p2: "The importance of this period lay not only in military conquests; contact between different cultures increased, and a new political and administrative structure took shape.",
    },
    sourcesHeading: "Sources",
    sources: {
      iranicaCyrus: {
        title: "Encyclopaedia Iranica – Cyrus II",
        description: "Historical information on the life and reign of Cyrus.",
      },
      unescoPasargadae: {
        title: "UNESCO – Pasargadae",
        description:
          "Historical and architectural information on the Pasargadae complex.",
      },
      metCylinder: {
        title: "The Metropolitan Museum of Art – Cyrus Cylinder",
        description: "Information on the Cyrus Cylinder.",
      },
      iranicaCuneiform: {
        title: "Encyclopaedia Iranica – Cuneiform Script",
        description: "Information on the Old Persian cuneiform script.",
      },
      iranicaLanguages: {
        title: "Encyclopaedia Iranica – Ancient Iranian Languages",
        description: "A survey of Iranian and non-Iranian languages.",
      },
      oxfordCyrus: {
        title: "Oxford Classical Dictionary – Cyrus the Great",
        description: "A historical survey of the age of Cyrus.",
      },
    },
  },
  header: {
    brand: "The Chronicle",
    tagline: "History · Culture · Civilization",
    logoAlt: "The Chronicle logo",
    toggleNavigation: "Toggle navigation",

    navigation: {
      home: "Home",
      history: "History",
    },
  },
  history: {
    title: "Persian History",
    description:
      "Explore the stories, civilizations, and people that shaped Persian history.",
  },
  digits: (n) => String(n),
};
