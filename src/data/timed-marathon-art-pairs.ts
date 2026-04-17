export type TimedMarathonArtPair = {
  id: string;
  humanFilename: string;
  /** Leave empty string — you will fill this in after generating AI images */
  aiFilename: string;
  humanArtist: string;
  humanTitle: string;
  explanation: string;
};

export const TIMED_MARATHON_ART_PAIRS: TimedMarathonArtPair[] = [
  // ── VERMEER (3) ──────────────────────────────────────────────────────────
  {
    id: "tm-art-01",
    humanFilename: "timed-marathon/tm-01-vermeer-girl-reading-letter.jpg",
    aiFilename: "timed-marathon/tm-01-ai.jpeg",
    humanArtist: "Johannes Vermeer",
    humanTitle: "Girl Reading a Letter at an Open Window (c. 1657–59)",
    explanation:
      "Vermeer's light falls at a precise angle and bounces subtly off the curtain and wall. AI imitations often flatten this directionality or over-saturate the window bloom.",
  },
  {
    id: "tm-art-02",
    humanFilename: "timed-marathon/tm-02-vermeer-milkmaid.jpg",
    aiFilename: "timed-marathon/tm-02-ai.jpeg",
    humanArtist: "Johannes Vermeer",
    humanTitle: "The Milkmaid (c. 1657–58)",
    explanation:
      "The tactile weight of the bread and the slow pour of milk are conveyed through deliberate impasto. AI versions often lose the gritty texture of the crust and blur the stream.",
  },
  {
    id: "tm-art-03",
    humanFilename: "timed-marathon/tm-03-vermeer-woman-holding-balance.jpg",
    aiFilename: "timed-marathon/tm-03-ai.jpeg",
    humanArtist: "Johannes Vermeer",
    humanTitle: "Woman Holding a Balance (c. 1664)",
    explanation:
      "The empty balance and the Last Judgment painting behind her create a quiet moral symbolism. AI versions may omit or distort the background painting and misread the light on her veil.",
  },

  // ── CARAVAGGIO (3) ────────────────────────────────────────────────────────
  {
    id: "tm-art-04",
    humanFilename: "timed-marathon/tm-04-caravaggio-calling-saint-matthew.jpg",
    aiFilename: "timed-marathon/tm-04-ai.jpeg",
    humanArtist: "Caravaggio",
    humanTitle: "The Calling of Saint Matthew (1599–1600)",
    explanation:
      "Caravaggio's shaft of light singles out Matthew among the card players with cinematic precision. AI imitations often diffuse this diagonal or misplace the pointing hand.",
  },
  {
    id: "tm-art-05",
    humanFilename: "timed-marathon/tm-05-caravaggio-judith-holofernes.jpg",
    aiFilename: "timed-marathon/tm-05-ai.jpeg",
    humanArtist: "Caravaggio",
    humanTitle: "Judith Beheading Holofernes (c. 1598–99)",
    explanation:
      "Judith's expression of controlled disgust and the precise anatomical tension in her arms are Caravaggio's hallmark. AI tends to make her expression ambiguous or her grip anatomically impossible.",
  },
  {
    id: "tm-art-06",
    humanFilename: "timed-marathon/tm-06-caravaggio-boy-bitten-lizard.jpg",
    aiFilename: "timed-marathon/tm-06-ai.jpeg",
    humanArtist: "Caravaggio",
    humanTitle: "Boy Bitten by a Lizard (c. 1594–96)",
    explanation:
      "The reflex recoil is captured in a single instant — ruffled collar, shocked face, withdrawing hand. AI versions often fail to unify the moment of shock across face, hand, and body.",
  },

  // ── GOYA (3) ──────────────────────────────────────────────────────────────
  {
    id: "tm-art-07",
    humanFilename: "timed-marathon/tm-07-goya-parasol.jpg",
    aiFilename: "timed-marathon/tm-07-ai.jpeg",
    humanArtist: "Francisco Goya",
    humanTitle: "The Parasol (1777)",
    explanation:
      "Goya's light-filled early tapestry cartoon uses soft rococo naturalism. AI imitations often harden the edges or lose the luminous passage from lit fabric to shadow.",
  },
  {
    id: "tm-art-08",
    humanFilename: "timed-marathon/tm-08-goya-two-old-men.jpg",
    aiFilename: "timed-marathon/tm-08-ai.jpeg",
    humanArtist: "Francisco Goya",
    humanTitle: "Two Old Men (c. 1819–23)",
    explanation:
      "A Black Painting of extreme age and dissolution — the whispering figure is barely human. AI often smooths out the terrifying decay and turns the horror generic.",
  },
  {
    id: "tm-art-09",
    humanFilename: "timed-marathon/tm-09-goya-fight-with-cudgels.jpg",
    aiFilename: "timed-marathon/tm-09-ai.jpeg",
    humanArtist: "Francisco Goya",
    humanTitle: "Fight with Cudgels (c. 1820–23)",
    explanation:
      "Two men sink into mud while beating each other — Goya's indictment of futile violence. AI tends to lose the sinking mud and the symmetrical entrapment that gives the image its irony.",
  },

  // ── TURNER (3) ────────────────────────────────────────────────────────────
  {
    id: "tm-art-10",
    humanFilename: "timed-marathon/tm-10-turner-snowstorm-hannibal.jpg",
    aiFilename: "timed-marathon/tm-10-ai.jpeg",
    humanArtist: "J.M.W. Turner",
    humanTitle: "Snow Storm: Hannibal and his Army Crossing the Alps (1812)",
    explanation:
      "Turner wraps the tiny figures in a vortex of weather — the storm is the subject. AI landscapes often place the drama too clearly, losing the sense of humans overwhelmed by atmosphere.",
  },
  {
    id: "tm-art-11",
    humanFilename: "timed-marathon/tm-11-turner-norham-castle-sunrise.jpg",
    aiFilename: "timed-marathon/tm-11-ai.jpeg",
    humanArtist: "J.M.W. Turner",
    humanTitle: "Norham Castle, Sunrise (c. 1845)",
    explanation:
      "Turner dissolves the castle almost entirely in morning mist — form barely holds. AI versions re-solidify the architecture rather than letting light consume it.",
  },
  {
    id: "tm-art-12",
    humanFilename: "timed-marathon/tm-12-turner-venice-salute.jpg",
    aiFilename: "timed-marathon/tm-12-ai.jpeg",
    humanArtist: "J.M.W. Turner",
    humanTitle: "Venice from the Porch of Madonna della Salute (c. 1835)",
    explanation:
      "Turner's Venice shimmers between real and reflected — the gondolas are barely strokes. AI imitations of his Venice often over-define the water or flatten the lagoon haze.",
  },

  // ── KLIMT (2) ─────────────────────────────────────────────────────────────
  {
    id: "tm-art-13",
    humanFilename: "timed-marathon/tm-13-klimt-adele-bloch-bauer-ii.jpg",
    aiFilename: "timed-marathon/tm-13-ai.jpeg",
    humanArtist: "Gustav Klimt",
    humanTitle: "Portrait of Adele Bloch-Bauer II (1912)",
    explanation:
      "Unlike the golden version, this portrait uses flat Chinese-inspired patterning with cool colors. AI imitations often add too much gold or miss the sparse patterning rhythm.",
  },
  {
    id: "tm-art-14",
    humanFilename: "timed-marathon/tm-14-klimt-birch-forest.jpg",
    aiFilename: "timed-marathon/tm-14-ai.jpeg",
    humanArtist: "Gustav Klimt",
    humanTitle: "Birch Forest (1903)",
    explanation:
      "Klimt's forest uses a near-vertical mosaic of pale trunks with no horizon — pure surface pattern. AI versions often introduce depth cues or vary the trunk spacing in ways that break the tapestry effect.",
  },

  // ── CÉZANNE (3) ───────────────────────────────────────────────────────────
  {
    id: "tm-art-15",
    humanFilename: "timed-marathon/tm-15-cezanne-mont-sainte-victoire.jpg",
    aiFilename: "timed-marathon/tm-15-ai.jpeg",
    humanArtist: "Paul Cézanne",
    humanTitle: "Mont Sainte-Victoire with Large Pine (c. 1887)",
    explanation:
      "Cézanne's parallel brushwork builds the mountain through structured planes of color. AI tends to soften the geometry or produce a more conventionally impressionistic sky.",
  },
  {
    id: "tm-art-16",
    humanFilename: "timed-marathon/tm-16-cezanne-boy-red-waistcoat.jpg",
    aiFilename: "timed-marathon/tm-16-ai.jpeg",
    humanArtist: "Paul Cézanne",
    humanTitle: "Boy in a Red Waistcoat (1888–90)",
    explanation:
      "Cézanne deliberately distorts the arm length — the elongation is a conscious pictorial choice. AI may 'correct' the anatomy, which destroys what makes the painting feel right.",
  },
  {
    id: "tm-art-17",
    humanFilename: "timed-marathon/tm-17-cezanne-large-bathers.jpg",
    aiFilename: "timed-marathon/tm-17-ai.jpeg",
    humanArtist: "Paul Cézanne",
    humanTitle: "The Large Bathers (1906)",
    explanation:
      "The figures form a cathedral-like arch with the landscape — bodies and trees rhyme. AI imitations either make the figures too realistic or lose the structural echo between figures and architecture.",
  },

  // ── VELÁZQUEZ (3) ─────────────────────────────────────────────────────────
  {
    id: "tm-art-18",
    humanFilename: "timed-marathon/tm-18-velazquez-water-seller-seville.jpg",
    aiFilename: "timed-marathon/tm-18-ai.jpeg",
    humanArtist: "Diego Velázquez",
    humanTitle: "The Water Seller of Seville (c. 1618–22)",
    explanation:
      "The ceramic jug and its water drops are rendered with almost photographic precision. AI typically glosses the ceramic surface and loses the dry, dusty atmosphere of the scene.",
  },
  {
    id: "tm-art-19",
    humanFilename: "timed-marathon/tm-19-velazquez-old-woman-frying-eggs.jpg",
    aiFilename: "timed-marathon/tm-19-ai.jpeg",
    humanArtist: "Diego Velázquez",
    humanTitle: "Old Woman Frying Eggs (1618)",
    explanation:
      "An early genre masterwork — the egg whites cook in real time, the woman's age is felt through her grip. AI versions usually soften the raw physicality of heat, oil, and skin.",
  },
  {
    id: "tm-art-20",
    humanFilename: "timed-marathon/tm-20-velazquez-buffoon-don-sebastian.jpg",
    aiFilename: "timed-marathon/tm-20-ai.jpeg",
    humanArtist: "Diego Velázquez",
    humanTitle: "The Buffoon Don Sebastián de Morra (c. 1644–48)",
    explanation:
      "Velázquez paints the court dwarf with full psychological dignity — the gaze is unsettling. AI imitations of this work often neutralize the confrontational intensity of the eyes.",
  },

  // ── DEGAS (3) ─────────────────────────────────────────────────────────────
  {
    id: "tm-art-21",
    humanFilename: "timed-marathon/tm-21-degas-dance-class.jpg",
    aiFilename: "timed-marathon/tm-21-ai.jpeg",
    humanArtist: "Edgar Degas",
    humanTitle: "The Dance Class (c. 1874)",
    explanation:
      "Degas fragments the composition with waiting, bored dancers — not every figure faces the viewer. AI compositions of ballet scenes tend toward symmetry and prettiness that Degas deliberately avoided.",
  },
  {
    id: "tm-art-22",
    humanFilename: "timed-marathon/tm-22-degas-races-countryside.jpg",
    aiFilename: "timed-marathon/tm-22-ai.jpeg",
    humanArtist: "Edgar Degas",
    humanTitle: "At the Races in the Countryside (1869)",
    explanation:
      "The carriage, nurse, and baby occupy the foreground while horses recede — an unusual social contrast. AI tends to re-center the horses as the obvious subject.",
  },
  {
    id: "tm-art-23",
    humanFilename: "timed-marathon/tm-23-degas-woman-combing-hair.jpg",
    aiFilename: "timed-marathon/tm-23-ai.jpeg",
    humanArtist: "Edgar Degas",
    humanTitle: "Woman Combing Her Hair before a Mirror (c. 1877)",
    explanation:
      "Degas crops and tilts the composition so the mirror reflection and the figure are off-balance. AI pastels in this style usually compose more conventionally and over-smooth the skin.",
  },

  // ── EL GRECO (2) ──────────────────────────────────────────────────────────
  {
    id: "tm-art-24",
    humanFilename: "timed-marathon/tm-24-el-greco-view-of-toledo.jpg",
    aiFilename: "timed-marathon/tm-24-ai.jpeg",
    humanArtist: "El Greco",
    humanTitle: "View of Toledo (c. 1596–1600)",
    explanation:
      "El Greco's city writhes under a supernatural green-grey sky — the topography is emotionally charged. AI landscapes of Toledo typically produce a calmer, more literal sky.",
  },
  {
    id: "tm-art-25",
    humanFilename: "timed-marathon/tm-25-el-greco-burial-count-orgaz.jpg",
    aiFilename: "timed-marathon/tm-25-ai.jpeg",
    humanArtist: "El Greco",
    humanTitle: "The Burial of the Count of Orgaz (1586–88)",
    explanation:
      "The painting is split between earthly mourners and a crowded heavenly vision — two spatial registers in one canvas. AI often either flattens the distinction or over-dramatizes the upper zone.",
  },

  // ── HOKUSAI (2) ───────────────────────────────────────────────────────────
  {
    id: "tm-art-26",
    humanFilename: "timed-marathon/tm-26-hokusai-red-fuji.jpg",
    aiFilename: "timed-marathon/tm-26-ai.jpeg",
    humanArtist: "Katsushika Hokusai",
    humanTitle: "Fine Wind, Clear Morning (Red Fuji) (c. 1830–32)",
    explanation:
      "The gradation from deep blue through red on the mountain was achieved with precise woodblock printing registration. AI imitations often blend the zones too smoothly or over-saturate the red.",
  },
  {
    id: "tm-art-27",
    humanFilename: "timed-marathon/tm-27-hokusai-ejiri-suruga.jpg",
    aiFilename: "timed-marathon/tm-27-ai.jpeg",
    humanArtist: "Katsushika Hokusai",
    humanTitle: "Ejiri in Suruga Province (c. 1830–32)",
    explanation:
      "A rare Hokusai without water — the wind is shown only through scattered papers and bent trees. AI versions of this scene typically add visible wind marks or miss the stillness of the absent figure.",
  },

  // ── MUNCH (1) ─────────────────────────────────────────────────────────────
  {
    id: "tm-art-28",
    humanFilename: "timed-marathon/tm-28-munch-sick-child.jpg",
    aiFilename: "timed-marathon/tm-28-ai.jpeg",
    humanArtist: "Edvard Munch",
    humanTitle: "The Sick Child (1885–86)",
    explanation:
      "Munch scratched and reworked the surface — the agony is in the material process itself. AI versions produce a smoother, more composed grief that lacks the painting's physical urgency.",
  },

  // ── CASSATT (1) ───────────────────────────────────────────────────────────
  {
    id: "tm-art-29",
    humanFilename: "timed-marathon/tm-29-cassatt-little-girl-blue-armchair.jpg",
    aiFilename: "timed-marathon/tm-29-ai.jpeg",
    humanArtist: "Mary Cassatt",
    humanTitle: "Little Girl in a Blue Armchair (1878)",
    explanation:
      "Cassatt pushes cropping and bold upholstery pattern in a way that anticipates Degas. AI tends to shrink the armchair pattern to something decorative and re-center the child conventionally.",
  },

  // ── GAUGUIN (1) ───────────────────────────────────────────────────────────
  {
    id: "tm-art-30",
    humanFilename: "timed-marathon/tm-30-gauguin-two-tahitian-women.jpg",
    aiFilename: "timed-marathon/tm-30-ai.jpeg",
    humanArtist: "Paul Gauguin",
    humanTitle: "Two Tahitian Women (1899)",
    explanation:
      "Gauguin's flat, warm planes reject Western perspective — the flowers and fruit are almost abstract offerings. AI imitations usually add depth cues that undercut the deliberate flatness.",
  },
];
