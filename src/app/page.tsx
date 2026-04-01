"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SpecialText } from "@/components/ui/special-text";
import type { LiteraturePair } from "@/types/literature";
import { NORMAL_LITERATURE_PAIRS } from "@/data/normal-literature-pairs";

const LEGACY_LITERATURE_PAIRS: LiteraturePair[] = [
  // QUESTION 1 — Dickens, Bleak House
  {
    id: "q1-dickens-bleak-house",
    humanTitle: "Bleak House (excerpt)",
    humanSource: "Charles Dickens — Bleak House (1853)",
    humanExcerpt:
      "Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls defiled among the tiers of shipping, and the waterside pollutions of a great (and dirty) city. Fog on the Essex marshes, fog on the Kentish heights. Fog creeping into the cabooses of collier-brigs; fog lying out on the yards and hovering in the rigging of great ships; fog drooping on the gunwales of barges and small boats. Fog in the eyes and throats of ancient Greenwich pensioners, wheezing by the firesides of their wards.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Dickens’s fog opening with smoke imagery in Victorian London.",
    aiExcerpt:
      "Smoke everywhere. Smoke in the factories where it billows from iron stacks and blackened chimneys; smoke through the lanes where it curls among the costermongers and the ragged children of a restless parish. Smoke on the Camden brickfields, smoke on the Lambeth flats. Smoke drifting through the taprooms of ancient public-houses; smoke settling on the shoulders of clerks hurrying through the Strand; smoke hanging in the passages of law-stationers and dim eating-houses. Smoke in the lungs and upon the linen of every poor wretch abroad in the December afternoon.",
    explanation:
      "Mimics Dickens’s signature anaphoric repetition (the ‘Fog everywhere’ structure), geographic specificity of London locales, cataloguing of social detail, and the rhythmic accumulation of clauses that characterise his panoramic openings.",
  },

  // QUESTION 2 — Dickens, Our Mutual Friend
  {
    id: "q2-dickens-our-mutual-friend",
    humanTitle: "Our Mutual Friend (excerpt)",
    humanSource: "Charles Dickens — Our Mutual Friend (1865)",
    humanExcerpt:
      "A man of gentle birth and great possessions, who had been for some years declining and languishing, was now said to be dying—as the whisper went—for love. His servants declared he was too good for this world, and he had certainly exceeded their estimation of it, having married a girl of no family and having lavished his substance upon her and upon undeserving persons she had introduced to him, until he arrived at the condition now before the reader.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Dickens’s communal-gossip narration and long clause chains.",
    aiExcerpt:
      "A woman of slender means and no particular connections, who had for a considerable period been growing quieter and more solitary, was now fading—as the neighbours suspected—from simple weariness of spirit. Her landlady declared she was too proud for lodgings, and she had certainly been too proud for that establishment’s sympathies, having refused every offer of charitable patronage and having chosen to subsist upon needlework of the most exacting description, until she found herself arrived at the very extremity of respectability.",
    explanation:
      "Replicates Dickens’s indirect narration through communal gossip (‘the whisper went’ / ‘the neighbours suspected’), the long subordinate clause chains building toward an ironic climax, and his characteristic blend of sympathy and social commentary.",
  },

  // QUESTION 3 — Jane Austen, Persuasion
  {
    id: "q3-austen-persuasion",
    humanTitle: "Persuasion (excerpt)",
    humanSource: "Jane Austen — Persuasion (1817)",
    humanExcerpt:
      "She had been forced into prudence in her youth, she learned romance as she grew older: the natural sequel of an unnatural beginning. She was, at seven-and-twenty, with every beauty that beauty could give to a face not insipid, with manners that were the charm of manners, with a mind that was the delight of mind, and with a warmth of heart that was the most valuable possession of all—she was, at seven-and-twenty, of no importance to any one.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Austen’s age-specific, epigrammatic character sketch.",
    aiExcerpt:
      "He had been taught to value caution in his earliest years, and discovered feeling only when caution had done its worst: the inevitable fruit of too careful a beginning. He was, at nine-and-twenty, possessed of a temper not easily ruffled, of an understanding superior to most of his acquaintance, and of a generosity that would have recommended him everywhere—yet he was, at nine-and-twenty, of very little consequence to anybody but himself.",
    explanation:
      "Imitates Austen’s epigrammatic paradoxes (‘unnatural beginning’), her precisely calibrated age-specificity, the structured repetition of ‘she was, at seven-and-twenty,’ and the devastating understatement of the final clause.",
  },

  // QUESTION 4 — Jane Austen, Mansfield Park
  {
    id: "q4-austen-mansfield-park",
    humanTitle: "Mansfield Park (excerpt)",
    humanSource: "Jane Austen — Mansfield Park (1814)",
    humanExcerpt:
      "Of the young men who came into the neighbourhood that winter, Mr. Crawford was the most agreeable, and she was not the only girl tempted to think so. He was plain in person, but had very good address, and though not handsome, was pleasant; his manners were so exactly what they ought to be, so polished, so easy, so particularly agreeable, that she could not but feel herself flattered by his attentions, which had a degree of marked admiration in them.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Austen’s calibrated social observation and qualified praise.",
    aiExcerpt:
      "Of the several families newly arrived in the county that spring, the Aldridges were the most talked of, and Mrs. Aldridge was not slow to understand why. Her husband was neither tall nor particularly distinguished, but his conversation was always equal to the occasion, and his behaviour so exactly suited to every company, so attentive without presumption, so amiable without effort, that even the severest judge among them found nothing wanting in his address.",
    explanation:
      "Mirrors Austen’s navigation of social hierarchies, qualified praise (‘not handsome’ / ‘neither tall nor particularly distinguished’), and the ironic gap between appearance and agreeability, layered with her characteristic precision about social dynamics.",
  },

  // QUESTION 5 — Mark Twain, Life on the Mississippi
  {
    id: "q5-twain-life-on-the-mississippi",
    humanTitle: "Life on the Mississippi (excerpt)",
    humanSource: "Mark Twain — Life on the Mississippi (1883)",
    humanExcerpt:
      "When I was a boy, there was but one permanent ambition among my comrades in our village on the west bank of the Mississippi River. That was, to be a steamboatman. We had transient ambitions of other sorts, but they were only transient. When a circus came and went, it left us all burning to become clowns; the first negro minstrel show that came to our section left us all suffering to try that kind of life; now and then we had a hope that if we lived and were good, God would permit us to be pirates.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Twain’s nostalgic boyhood catalogue and comic anticlimax.",
    aiExcerpt:
      "When I was young and still credulous, there was exactly one occupation that commanded the respect of every idle boy in our dusty little settlement along the Missouri shore. That occupation was piloting a ferryboat. We entertained other fantasies, naturally, but they never lasted. A travelling magic-lantern show would set us all scheming to become conjurers; a fire company passing through would fill us with ambitions toward heroism and brass buttons; and at all times we nursed the private conviction that if fortune smiled, we might run away and become horse thieves.",
    explanation:
      "Captures Twain’s first-person nostalgic voice, the catalogue of boyhood fantasies escalating toward comic anti-climax, his colloquial rhythms, and the deadpan humour that treats absurdity as perfectly natural.",
  },

  // QUESTION 6 — Mark Twain, Roughing It
  {
    id: "q6-twain-roughing-it",
    humanTitle: "Roughing It (excerpt)",
    humanSource: "Mark Twain — Roughing It (1872)",
    humanExcerpt:
      "By and by I was smitten with the silver fever. “Prospecting parties” were leaving for the mountains every day, and discovering and “taking up” promising “claims” in the most reckless manner. I wanted to go, too. I wanted to be a mining magnate. I wanted to have some money to eat with, if it came to that. So I forfeited my place as private secretary, and went out prospecting, full of hope, and with a perfect understanding of the whole matter—acquired in an hour’s conversation with men who did not know anything about it either.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Twain’s silver-fever anecdote with land fever and bathos.",
    aiExcerpt:
      "Before long I caught the land fever. “Survey parties” were heading into the valley every morning, and staking out and “registering” ambitious parcels with a confidence that would have startled a Philadelphia lawyer. I resolved to join them. I intended to become a great landowner. I intended, at the very least, to own enough ground to lie down on. So I gave up my comfortable situation as clerk of the assay office, and set forth into the wilderness, thoroughly equipped with ignorance—having obtained my entire education on the subject from a fellow who confessed he had never been west of St. Louis.",
    explanation:
      "Replicates Twain’s self-deprecating narration, the escalating bathos of ambitions (from magnate to basic survival), scare-quoted frontier jargon, and the punchline structure that undercuts pretension with confession.",
  },

  // QUESTION 7 — Edgar Allan Poe, The Masque of the Red Death
  {
    id: "q7-poe-masque-red-death",
    humanTitle: "The Masque of the Red Death (excerpt)",
    humanSource: "Edgar Allan Poe — The Masque of the Red Death (1842)",
    humanExcerpt:
      "The “Red Death” had long devastated the country. No pestilence had ever been so fatal, or so hideous. Blood was its Avatar and its seal—the redness and the horror of blood. There were sharp pains, and sudden dizziness, and then profuse bleeding at the pores, with dissolution. The scarlet stains upon the body and especially upon the face of the victim, were the pest ban which shut him out from the aid and from the sympathy of his fellow-men.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Poe’s Gothic disease personification with a new illness.",
    aiExcerpt:
      "The “Grey Wasting” had for months crept silently through the provinces. No affliction had ever been so deliberate, or so merciless. Silence was its herald and its signature—the silence and the emptiness of vanished speech. There were tremors of the hands, and a gradual dimming of sight, and then a perfect and irreversible stillness of the limbs. The ashen pallor upon the extremities and especially upon the lips of the sufferer, was the visible mark which separated him from the world of the living.",
    explanation:
      "Mimics Poe’s Gothic medical specificity, the allegorical personification of disease, his triadic syntactic patterning, the em-dash for dramatic emphasis, and the clinical detachment that heightens horror.",
  },

  // QUESTION 8 — Edgar Allan Poe, The Fall of the House of Usher
  {
    id: "q8-poe-fall-of-usher",
    humanTitle: "The Fall of the House of Usher (excerpt)",
    humanSource: "Edgar Allan Poe — The Fall of the House of Usher (1839)",
    humanExcerpt:
      "During the whole of a dull, dark, and soundless day in the autumn of the year, when the clouds hung oppressively low in the heavens, I had been passing alone, on horseback, through a singularly dreary tract of country, and at length found myself, as the shades of the evening drew on, within view of the melancholy House of Usher. I know not how it was—but, with the first glimpse of the building, a sense of insufferable gloom pervaded my spirit.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Poe’s Gothic travelogue opening with a different manor.",
    aiExcerpt:
      "Throughout the long and featureless hours of a November afternoon, when a low mist had effaced every distinction between the marshland and the sky above it, I had been travelling alone and on foot across a peculiarly forsaken stretch of country, and found at last, as the light began its final retreat, that I stood before the decaying manor of Blackmere. How shall I account for it—but with the earliest apprehension of the structure, a weight of unnameable dread settled upon my mind.",
    explanation:
      "Replicates Poe’s long periodic sentences, the first-person Gothic travelogue approach, pathetic fallacy, and the careful distinction between aesthetic melancholy and genuine dread through rhetorical self-correction.",
  },

  // QUESTION 9 — Virginia Woolf, Jacob’s Room
  {
    id: "q9-woolf-jacobs-room",
    humanTitle: "Jacob’s Room (excerpt)",
    humanSource: "Virginia Woolf — Jacob’s Room (1922)",
    humanExcerpt:
      "Listless is the air in an empty room, just swelling the curtain; the flowers in the jar shift. One fibre in the wicker armchair creaks, though no one sits there. But this we have done—left our mark upon the earth. The waves of the sea wash over it, however. Planted our trees, built our palaces—yes, even now they turn to dust. Washed up by the waves of time, and the generations tread upon us.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Woolf’s impressionistic shift from room to existential reflection.",
    aiExcerpt:
      "Purposeless is the stillness of a deserted house; merely stirring the blind; the clock upon the mantelpiece measures nothing. A board in the passage groans beneath no footstep. Yet something persists—we have set our names in stone. The rain, however, descends upon the stone. Raised our children, composed our letters—yes, and already they yellow and curl. Scattered by the indifferent afternoons, and the sparrows settle where we sat.",
    explanation:
      "Imitates Woolf’s impressionistic interior perspective, inverted syntax (‘Listless is the air’ / ‘Purposeless is the stillness’), the philosophical pivot from domestic detail to existential reflection, and the rhythmic cadence of her prose-poetry on impermanence.",
  },

  // QUESTION 10 — Virginia Woolf, The Voyage Out
  {
    id: "q10-woolf-voyage-out",
    humanTitle: "The Voyage Out (excerpt)",
    humanSource: "Virginia Woolf — The Voyage Out (1915)",
    humanExcerpt:
      "She was, indeed, a flushed and rather heavy young woman, with a broad forehead, a short nose, and a pair of large grey eyes—these last had some distinction in them. Her manner was hesitating, and her words, when she spoke, seemed to come from far off, as if she were thinking of something else while she talked. It was as though the effort of conversation obliged her to drag her mind from some preoccupation that absorbed it altogether.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Woolf’s physical-to-psychological character introduction.",
    aiExcerpt:
      "He was, to be sure, a quiet and somewhat angular young man, with narrow shoulders, a high forehead, and a pair of unusually dark eyes—these alone suggested any intensity of feeling. His speech was slow and occasionally uncertain, and his sentences, when they arrived, appeared to have travelled a considerable distance before reaching his listener. One felt that the business of making himself understood required him to summon his attention from some interior landscape where it preferred to remain.",
    explanation:
      "Mirrors Woolf’s method of constructing character through physical-to-psychological progression, qualified description, the metaphor of speech arriving from a distance, and the sense of consciousness existing apart from social interaction.",
  },

  // QUESTION 11 — Oscar Wilde, The Picture of Dorian Gray Preface
  {
    id: "q11-wilde-dorian-preface",
    humanTitle: "The Picture of Dorian Gray — Preface (excerpt)",
    humanSource: "Oscar Wilde — The Picture of Dorian Gray — Preface (1890)",
    humanExcerpt:
      "There is no such thing as a moral or an immoral book. Books are well written, or badly written. That is all. The nineteenth century dislike of Realism is the rage of Caliban seeing his own face in a glass. The nineteenth century dislike of Romanticism is the rage of Caliban not seeing his own face in a glass. The moral life of man forms part of the subject-matter of the artist, but the morality of art consists in the perfect use of an imperfect medium.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Wilde’s aphoristic preface style with ideas instead of books.",
    aiExcerpt:
      "There is no such thing as a dangerous or a harmless idea. Ideas are expressed with conviction, or they are not expressed at all. That is all. The modern suspicion of sincerity is the vanity of the hypocrite confronted with an honest mirror. The modern worship of sincerity is the vanity of the hypocrite who has broken every mirror in the house. The emotional life of man furnishes the raw material of the philosopher, but the philosophy of emotion consists in the artful arrangement of what cannot be understood.",
    explanation:
      "Replicates Wilde’s aphoristic style, the symmetrical paradox structure (‘Caliban seeing / not seeing’), epigrammatic absolutism (‘That is all’), and his habit of inverting conventional moral categories through wit.",
  },

  // QUESTION 12 — Oscar Wilde, De Profundis
  {
    id: "q12-wilde-de-profundis",
    humanTitle: "De Profundis (excerpt)",
    humanSource: "Oscar Wilde — De Profundis (1905)",
    humanExcerpt:
      "I have got to make everything that has happened to me good for me. The plank bed, the loathsome food, the hard ropes shredded into oakum till one’s finger-tips grow dull with pain, the menial offices with which each day begins and finishes, the harsh orders that routine seems to necessitate, the dreadful dress that makes sorrow grotesque to look at, the silence, the solitude, the shame—each and all of these things I have to transform into a spiritual experience.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Wilde’s prison-letter catalogue of indignities and spiritual turn.",
    aiExcerpt:
      "I must teach myself to draw profit from every hour that remains. The narrow cell, the relentless cold, the coarse labour that blisters the hands before the morning is half spent, the petty humiliations that arrive as punctually as the warders, the stifling absence of all music and colour, the degrading uniform that strips a man of his last pretension to dignity, the tedium, the emptiness, the regret—each and all of these deprivations I must convert into instruments of understanding.",
    explanation:
      "Mimics the confessional sincerity of Wilde’s prison letter, his catalogue of specific indignities building toward a spiritual resolution, the rhythmic accumulation of noun phrases, and the redemptive turn that characterises the work.",
  },

  // QUESTION 13 — Herman Melville, Moby-Dick
  {
    id: "q13-melville-moby-dick",
    humanTitle: "Moby-Dick (excerpt)",
    humanSource: "Herman Melville — Moby-Dick (1851)",
    humanExcerpt:
      "Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Melville’s ‘whenever’ cadence and sea-escape pivot.",
    aiExcerpt:
      "Whenever I discover that I have lost all interest in the opinions of my fellow creatures; whenever I catch myself reading the shipping columns with an eagerness bordering on desperation; whenever the faces of acquaintances begin to assume an intolerable sameness, and the streets of the city to contract around me like the walls of some nautical prison; and particularly whenever I begin to entertain elaborate fantasies of answering every commonplace remark with a blast upon a foghorn—then, I consider it time to find passage on any vessel that will have me.",
    explanation:
      "Replicates Melville’s famous anaphoric ‘whenever’ construction, the escalating catalogue of urban alienation, the comic specificity of the final absurd image, and the long suspenseful period resolved by a decisive pivot to the sea.",
  },

  // QUESTION 14 — Herman Melville, Bartleby
  {
    id: "q14-melville-bartleby",
    humanTitle: "Bartleby, the Scrivener (excerpt)",
    humanSource: "Herman Melville — Bartleby, the Scrivener (1853)",
    humanExcerpt:
      "At first Bartleby did an extraordinary quantity of writing. As if long famishing for something to copy, he seemed to gorge himself on my documents. There was no pause for digestion. He ran a day and night line, copying by sun-light and by candle-light. I should have been quite delighted with his application, had he been cheerfully industrious. But he wrote on silently, palely, mechanically.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Melville’s alimentary metaphor and uneasy narrator tone.",
    aiExcerpt:
      "At first Nettleton performed his duties with a precision that bordered on the uncanny. As though he had been starving for the discipline of regular employment, he threw himself upon the ledgers with an appetite that admitted of no interruption. He worked through the dinner hour and past the closing of the office. I should have taken great satisfaction in his diligence, had there been any spark of fellow-feeling in it. But he laboured on mutely, methodically, without the smallest indication of pleasure.",
    explanation:
      "Mirrors Melville’s narrator’s reasonable, bewildered tone, the alimentary metaphor (gorging/starving), the qualified approval (‘I should have been quite delighted, had...’), and the unsettling final triad of adverbs describing mechanical labour.",
  },

  // QUESTION 15 — Charlotte Brontë, Jane Eyre
  {
    id: "q15-bronte-jane-eyre",
    humanTitle: "Jane Eyre (excerpt)",
    humanSource: "Charlotte Brontë — Jane Eyre (1847)",
    humanExcerpt:
      "I lingered at the gates; I lingered on the lawn; I paced backwards and forwards on the pavement; the shutters of the glass door were closed; I could not see into the interior; and both my eyes and spirit seemed drawn from the gloomy house—from the grey-hollow filled with rayless cells, as it appeared to me—to that sky expanded before me, a blue sea absolved from taint of cloud; the moon ascending it in solemn march.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Jane Eyre’s anaphoric lingering and inside/outside contrast.",
    aiExcerpt:
      "I paused at the threshold; I paused beneath the elm; I walked to and fro across the gravel in the failing light; the curtains of the parlour had been drawn, and I could gain no knowledge of what passed within; and both my thoughts and my longing seemed pulled from that silent dwelling—from those shuttered rooms where no candle burned, as I imagined—toward the open country beyond the garden wall, a sweep of darkening meadow washed clean by recent rain; the first stars appearing one by one above the ridge.",
    explanation:
      "Imitates Brontë’s anaphoric lingering, the movement from domestic enclosure to expansive natural landscape, her semicolon-heavy syntax, and the pathetic fallacy in which celestial imagery mirrors the heroine’s emotional yearning.",
  },

  // QUESTION 16 — Charlotte Brontë, Villette
  {
    id: "q16-bronte-villette",
    humanTitle: "Villette (excerpt)",
    humanSource: "Charlotte Brontë — Villette (1853)",
    humanExcerpt:
      "I was not particularly young when I left England—not yet thirty; but I felt a change stealing over me. In my own country, I knew my own significance; here, I was nothing. No one spoke to me; no one looked at me; no one cared whether I came or went. The foreign tongue clattered around me without conveying meaning. I watched the faces of strangers and read nothing in them.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Lucy Snowe’s confessional loneliness abroad.",
    aiExcerpt:
      "I was not especially timid when I arrived at the pensionnat—not, at any rate, more so than any Englishwoman set down among strangers; but I became aware of a certain diminishment taking hold of me. In London I had possessed, if nothing else, the assurance of familiar surroundings; here, I possessed nothing. No greeting met me at the door; no enquiry followed my absence from the table; no face altered at my approach. The rapid French flew past my comprehension like birds past a window.",
    explanation:
      "Mirrors Brontë’s confessional first-person voice, the theme of English isolation abroad, anaphoric negation (‘No one spoke / No greeting met’), and the painful self-awareness that marks Lucy Snowe’s narration in Villette.",
  },

  // QUESTION 17 — F. Scott Fitzgerald, This Side of Paradise
  {
    id: "q17-fitzgerald-this-side-paradise",
    humanTitle: "This Side of Paradise (excerpt)",
    humanSource: "F. Scott Fitzgerald — This Side of Paradise (1920)",
    humanExcerpt:
      "He was handsome, remarkably so, with smooth features and an expression at once aristocratic and debonair. He had a deep sense of his own superiority—a conviction that he was somehow finer and more sensitive than other people—and this conviction, though it made him insufferable to some, lent him a curious charm. He moved through the rooms of his house, through the halls of his school, with the indolent assurance of a young man who believes that the world has been designed principally for his entertainment.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Fitzgerald’s ironic-yet-admiring character introduction.",
    aiExcerpt:
      "She was striking, undeniably so, with a slim carelessness about her clothes and a mouth that seemed always on the verge of saying something indiscreet. She possessed an unshakeable faith in her own distinction—a certainty that she perceived nuances invisible to the ordinary run of people—and this certainty, though it occasionally verged on affectation, gave her an irresistible magnetism. She drifted through parties, through weekends at country houses, with the languid confidence of a young woman who suspects that boredom is the worst thing that can happen to her.",
    explanation:
      "Replicates Fitzgerald’s method of introducing characters through a blend of admiration and gentle irony, the qualifying subordinate clause, and the thematic preoccupation with charm, self-regard, and youthful entitlement.",
  },

  // QUESTION 18 — F. Scott Fitzgerald, The Beautiful and Damned
  {
    id: "q18-fitzgerald-beautiful-damned",
    humanTitle: "The Beautiful and Damned (excerpt)",
    humanSource: "F. Scott Fitzgerald — The Beautiful and Damned (1922)",
    humanExcerpt:
      "In the spring of 1913, when he was twenty-five, Anthony Patch had no definite intention of doing anything at all. He breakfasted on poached eggs and toast every morning, lunched at the club, and dined either at another club or at a restaurant. He had three suits of clothes and half a dozen silk shirts. He read enormously but without purpose, and he talked enormously but without conviction. He lived alone in a quiet apartment, waited upon by a Japanese servant named Bounds.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Fitzgerald’s routine-based portrait of privileged drift.",
    aiExcerpt:
      "In the autumn of 1911, when she was twenty-three, Eleanor Aldrich had no particular plans for the future and saw no reason to acquire any. She rose at ten, walked in the park before noon, and spent her afternoons in a succession of drawing rooms where nothing consequential was ever decided. She owned several hats of considerable expense and a single piece of inherited jewellery she never wore. She corresponded extensively but without warmth, and she accepted invitations extensively but without enthusiasm. She kept a small flat near Gramercy Park, attended to by a maid whose name she sometimes forgot.",
    explanation:
      "Mimics Fitzgerald’s method of defining a character through material habits, the studied enumeration of daily routines implying spiritual emptiness, paired ‘without’ constructions, and period detail that situates privilege within a specific historical moment.",
  },

  // QUESTION 19 — Nathaniel Hawthorne, The House of the Seven Gables
  {
    id: "q19-hawthorne-seven-gables",
    humanTitle: "The House of the Seven Gables (excerpt)",
    humanSource: "Nathaniel Hawthorne — The House of the Seven Gables (1851)",
    humanExcerpt:
      "The aspect of the venerable mansion has always affected me like a human countenance, bearing the traces not merely of outward storm and sunshine, but expressive, also, of the long lapse of mortal life, and accompanying vicissitudes that have passed within. Were these to be worthily recounted, they would form a narrative of no small interest and instruction, and possessing, moreover, a certain remarkable unity, which might almost seem the result of artistic arrangement.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Hawthorne’s personification of a house as moral history.",
    aiExcerpt:
      "The character of the old dwelling has ever struck me as possessing something of the quality of a living physiognomy, recording upon its surface not only the obvious effects of weather and neglect, but intimating, too, the slow accumulation of private joys and sorrows that have unfolded beneath its roof. Were one to set these down with proper care, they would compose a history not without value or curiosity, and exhibiting, furthermore, a peculiar coherence, which might almost be mistaken for the design of a deliberate intelligence.",
    explanation:
      "Replicates Hawthorne’s measured, reflective prose, the personification of architecture as bearing moral history, his lengthy qualifications, the subjunctive mood, and his meta-narrative framing.",
  },

  // QUESTION 20 — Nathaniel Hawthorne, The Scarlet Letter
  {
    id: "q20-hawthorne-scarlet-letter",
    humanTitle: "The Scarlet Letter (excerpt)",
    humanSource: "Nathaniel Hawthorne — The Scarlet Letter (1850)",
    humanExcerpt:
      "It may serve, let us hope, to symbolize some sweet moral blossom, that may be found along the track, or relieve the darkening close of a tale of human frailty and sorrow. Having spoken of the first things that offered themselves to view, we proceed, as if entering a tarnished mirror, into the interior of a story which, notwithstanding its distance from our own epoch, may yet possess the character of something drawn from the present.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Hawthorne’s allegorical preamble and threshold metaphor.",
    aiExcerpt:
      "It may stand, we trust, as an emblem of some fragile consolation, that might yet appear amid the wreckage, or soften the accumulating shadows of a chronicle of human weakness and regret. Having touched upon those outward circumstances first presenting themselves to notice, we advance, as if passing through a door half-obscured by time, into the heart of a history which, although it belongs to a period seemingly remote from our understanding, may still bear the unmistakable character of something belonging to the present hour.",
    explanation:
      "Mirrors Hawthorne’s elaborate narrative preambles, his allegorical vocabulary (‘symbolize’ / ‘emblem’), concessive subordination, the threshold metaphor, and his insistence on the past’s relevance to the present.",
  },

  // QUESTION 21 — Emily Dickinson, Poem 341
  {
    id: "q21-dickinson-341",
    humanTitle: "Poem 341 (excerpt)",
    humanSource: "Emily Dickinson — Poem 341 (c. 1862)",
    humanExcerpt:
      "After great pain, a formal feeling comes— The Nerves sit ceremonious, like Tombs— The stiff Heart questions ‘was it He, that bore,’ And ‘Yesterday, or Centuries before’?  The Feet, mechanical, go round— A Wooden way Of Ground, or Air, or Ought— Regardless grown, A Quartz contentment, like a stone—",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Dickinson’s hymn-meter grief poem with parallel images.",
    aiExcerpt:
      "Before full grief, a quiet numbness spreads— The Pulse grows deferential, like the Dead— The stunned Mind wonders ‘was it this, that broke,’ And ‘just an hour, or half an Age ago’?  The Hands, mechanical, keep on— A frozen kind Of Task, or Rest, or None— Indifferent now, A marble patience, like a Tomb—",
    explanation:
      "Replicates Dickinson’s capitalised abstractions, her dashes as rhythmic and semantic punctuation, the personification of bodily faculties, paradoxical mineral metaphors for emotional states, and her compressed hymn-meter stanzas.",
  },

  // QUESTION 22 — Walt Whitman, Crossing Brooklyn Ferry
  {
    id: "q22-whitman-crossing-brooklyn-ferry",
    humanTitle: "Crossing Brooklyn Ferry (excerpt)",
    humanSource:
      "Walt Whitman — Leaves of Grass — ‘Crossing Brooklyn Ferry’ (1856)",
    humanExcerpt:
      "Flood-tide below me! I see you face to face! Clouds of the west—sun there half an hour high—I see you also face to face. Crowds of men and women attired in the usual costumes, how curious you are to me! On the ferry-boats the hundreds and hundreds that cross, returning home, are more curious to me than you suppose, And you that shall cross from shore to shore years hence are more to me, and more in my meditations, than you might suppose.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Whitman’s direct address to landscape and future readers.",
    aiExcerpt:
      "Morning light before me! I greet you without reserve! Rooftops of the city—smoke rising in slow columns—I greet you also without reserve. Throngs of labourers and shopkeepers moving through the customary streets, how remarkable you are to me! On the horse-cars the dozens and dozens that travel, intent upon their errands, are more remarkable to me than you imagine, And you that shall walk these pavements in generations yet unborn are nearer to me, and nearer to my contemplation, than you might imagine.",
    explanation:
      "Mimics Whitman’s direct address to reader and landscape, his expansive cataloguing of urban democratic life, the long anaphoric lines, exclamatory openings, and the paradox of intimacy across time.",
  },

  // QUESTION 23 — Henry James, The Portrait of a Lady
  {
    id: "q23-james-portrait-of-a-lady",
    humanTitle: "The Portrait of a Lady (excerpt)",
    humanSource: "Henry James — The Portrait of a Lady (1881)",
    humanExcerpt:
      "Ralph had had but little imagination, and what he did have worked for a dryness of mind, a habit of viewing things in their literal aspect, a distrust of fine phrases. He was not, however, a cynic; he was simply a quiet spectator who, finding life at second hand less interesting than it was supposed to be, had determined to make the best use of the share that had fallen to him by taking a great interest in the destiny of his cousin.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate James’s qualified, psychologically-focused character sketch.",
    aiExcerpt:
      "Osborn had possessed very little curiosity, and what curiosity he did possess operated chiefly in the direction of a practical reserve, a preference for situations that could be understood at a glance, an impatience with enthusiasm. He was not, however, cold-hearted; he was merely an attentive observer who, finding his own experience thinner than he had been led to expect, had resolved to compensate for the deficiency by taking the liveliest possible interest in the fortunes of his sister.",
    explanation:
      "Replicates James’s characteristic qualifications and double negatives, the subordinate clauses that circle a psychological truth, and his method of defining character through intellectual habits rather than actions.",
  },

  // QUESTION 24 — Emily Brontë, Wuthering Heights
  {
    id: "q24-ebronte-wuthering-heights",
    humanTitle: "Wuthering Heights (excerpt)",
    humanSource: "Emily Brontë — Wuthering Heights (1847)",
    humanExcerpt:
      "My love for Linton is like the foliage in the woods: time will change it, I’m well aware, as winter changes the trees. My love for Heathcliff resembles the eternal rocks beneath: a source of little visible delight, but necessary. Nelly, I am Heathcliff! He’s always, always in my mind: not as a pleasure, any more than I am always a pleasure to myself, but as my own being.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Brontë’s elemental metaphors and ‘I am Heathcliff’ declaration.",
    aiExcerpt:
      "My feeling for Hareton is like the water in the beck: sometimes clear, sometimes troubled, and always moving with the seasons. My feeling for this place resembles the moor itself beneath the heather: unseen by those who merely walk across it, but fixed and unalterable. Nelly, I am the Heights! They have been always, always part of my breath: not as a comfort, any more than the wind is a comfort to the grass, but as the very ground I stand on.",
    explanation:
      "Mimics Brontë’s elemental nature metaphors (foliage/water, rocks/moor), the passionate declarative identification (‘I am Heathcliff’ / ‘I am the Heights’), the confessional tone addressed to Nelly, and the paradox of love that is necessary but not pleasurable.",
  },

  // QUESTION 25 — Joseph Conrad, Lord Jim
  {
    id: "q25-conrad-lord-jim",
    humanTitle: "Lord Jim (excerpt)",
    humanSource: "Joseph Conrad — Lord Jim (1900)",
    humanExcerpt:
      "He was an inch, perhaps two, under six feet, powerfully built, and he advanced straight at you with a slight stoop of the shoulders, head forward, and a fixed from-under stare which made you think of a charging bull. His voice was deep, loud, and his manner displayed a kind of dogged self-assertion which had nothing aggressive in it. It seemed a necessity, and it was directed apparently as much at himself as at anybody else.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Conrad’s characterisation via observer’s speculative impressions.",
    aiExcerpt:
      "He was a short man, solidly made, with a broad face that might have belonged to a provincial schoolmaster or a minor government official in some forgotten colonial outpost. His eyes, set deep beneath heavy brows, possessed an expression of guarded patience, as though he had long since resigned himself to being underestimated. When he spoke, it was with deliberation, each word placed as carefully as a stone in a wall, and his silences conveyed more authority than his sentences.",
    explanation:
      "Captures Conrad’s method of constructing character through a narrator’s speculative impressions, physical description implying moral complexity, and the layered observer-perspective that withholds as much as it reveals.",
  },

  // QUESTION 26 — Thomas Hardy, Far from the Madding Crowd
  {
    id: "q26-hardy-far-from-madding-crowd",
    humanTitle: "Far from the Madding Crowd (excerpt)",
    humanSource: "Thomas Hardy — Far from the Madding Crowd (1874)",
    humanExcerpt:
      "The hill was covered on its northern side by an ancient and decaying plantation of beeches, whose upper verge formed a line over the crest, fringing its arched curve against the sky, like a mane. To-night these trees sheltered the southern slope from the keenest blasts, which smote the wood and floundered through it with a sound as of grumbling, or gushed over its crowning boughs in a weakened moan.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Hardy’s Wessex landscape description and personified wind.",
    aiExcerpt:
      "The ridge was bordered on its western face by a long-established and slowly diminishing stand of oaks, whose topmost branches described a jagged silhouette along the summit, etching its uneven line against the twilight, like a ruined battlement. This evening those trunks shielded the eastern hollow from the worst of the weather, which struck the grove and laboured through its interior with a noise as of complaint, or swept across its upper canopy in an exhausted sigh.",
    explanation:
      "Replicates Hardy’s precise topographical description, his similes drawn from the built or natural world, personification of wind and landscape, and the careful directional specificity that anchors his fictional Wessex.",
  },

  // QUESTION 27 — Kate Chopin, The Awakening
  {
    id: "q27-chopin-the-awakening",
    humanTitle: "The Awakening (excerpt)",
    humanSource: "Kate Chopin — The Awakening (1899)",
    humanExcerpt:
      "The voice of the sea is seductive; never ceasing, whispering, clamoring, murmuring, inviting the soul to wander for a spell in abysses of solitude; to lose itself in mazes of inward contemplation. The voice of the sea speaks to the soul. The touch of the sea is sensuous, enfolding the body in its soft, close embrace.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Chopin’s sensuous, repetitive prose about natural forces.",
    aiExcerpt:
      "The light of the afternoon is insistent; never relenting, pressing, flooding, softening, compelling the mind to drift into vast and unaccountable reveries; to abandon itself in corridors of feeling that have no names. The light of the afternoon reaches into the soul. The warmth of the afternoon is intimate, settling upon the skin with the weight of a slow and unwanted tenderness.",
    explanation:
      "Mimics Chopin’s sensory prose-poetry, the personification of natural elements as agents of spiritual awakening, the participial catalogue, repetition of the subject phrase, and the erotic undertone of bodily language.",
  },

  // QUESTION 28 — Ralph Waldo Emerson, Self-Reliance
  {
    id: "q28-emerson-self-reliance",
    humanTitle: "Self-Reliance (excerpt)",
    humanSource: "Ralph Waldo Emerson — Essays: First Series — ‘Self-Reliance’ (1841)",
    humanExcerpt:
      "A foolish consistency is the hobgoblin of little minds, adored by little statesmen and philosophers and divines. With consistency a great soul has simply nothing to do. He may as well concern himself with his shadow on the wall. Speak what you think now in hard words, and to-morrow speak what to-morrow thinks in hard words again, though it contradict every thing you said to-day.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Emerson’s aphoristic paradox and imperative style.",
    aiExcerpt:
      "A timid reverence for precedent is the chief weakness of cautious natures, celebrated by minor officials and schoolmasters and parish clergymen. With precedent the original thinker has absolutely no concern. He might with equal profit study the pattern of frost upon his windowpane. Say what occurs to you this morning in plain language, and next morning say what next morning demands in plain language also, though it overturn the whole edifice of yesterday’s pronouncements.",
    explanation:
      "Replicates Emerson’s aphoristic declarations, the triadic catalogue of mediocre authorities, the dismissive metaphor, and the rhetorical structure that turns an objection into a virtue through imperative address.",
  },

  // QUESTION 29 — Edith Wharton, The Age of Innocence
  {
    id: "q29-wharton-age-of-innocence",
    humanTitle: "The Age of Innocence (excerpt)",
    humanSource: "Edith Wharton — The Age of Innocence (1920)",
    humanExcerpt:
      "It was generally agreed in New York that the Countess Olenska had “richly” deserved her fate. She had been notoriously unhappy, but this was regarded as a just retribution, since she had never conformed to the rules. She had married a Polish count of great wealth and ancient family; but she had, as one of the van der Luydens said, simply thrown away the most brilliant marriage in Europe by leaving her husband.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate Wharton’s narration through collective social judgment.",
    aiExcerpt:
      "It was universally understood among the better families of New York that Mrs. Welland Devereux had been the architect of her own misfortunes. She had suffered considerably, but this suffering was interpreted not as a source of sympathy but as a form of natural consequence, since she had persistently declined to observe the conventions governing everyone else. She had married into one of the most distinguished houses in the city; but she had, as a Mingott cousin once observed, systematically dismantled the finest position a woman could occupy by conducting herself as though the usual expectations did not apply.",
    explanation:
      "Mirrors Wharton’s method of narrating through collective social judgement, the reported speech of old New York families, the ironic distance between narrator and depicted society, and the coded language of social transgression.",
  },

  // QUESTION 30 — Jack London, White Fang
  {
    id: "q30-london-white-fang",
    humanTitle: "White Fang (excerpt)",
    humanSource: "Jack London — White Fang (1906)",
    humanExcerpt:
      "Dark spruce forest frowned on either side the frozen waterway. The trees had been stripped by a recent wind of their white covering of frost, and they seemed to lean towards each other, black and ominous, in the fading light. A vast silence reigned over the land. The land itself was a desolation, lifeless, without movement, so lone and cold that the spirit of it was not even that of sadness.",
    aiModel: "AI mimicry (simulated)",
    aiPrompt: "Imitate London’s frozen-landscape naturalism with different terrain.",
    aiExcerpt:
      "Bare granite ridges rose on either flank of the narrow valley. The slopes had been scoured by weeks of bitter wind until nothing remained but stone and the stubborn roots of dwarf pine, and they appeared to close in upon the trail, grey and indifferent, in the early dusk. An immense stillness lay upon the country. The country itself was an emptiness, without shelter, without promise, so remote and savage that the character of it was not even that of hostility.",
    explanation:
      "Replicates London’s naturalist landscape prose, the personification of terrain as menacing or indifferent, short declarative sentences, the intensifying negation pattern (‘not even that of sadness’ / ‘not even that of hostility’), and the elemental vocabulary of survival.",
  },
];

type MusicPair = {
  id: string;
  humanFilename: string;
  aiFilename: string;
  composer: string;
  explanation: string;
};

const MUSIC_BASE = "/music";

const MUSIC_PAIRS: MusicPair[] = [
  {
    id: "music-1",
    humanFilename: "1_Mozart.mp3",
    aiFilename: "1_Mozart AI .mp3",
    composer: "Mozart",
    explanation:
      "The human clip is Mozart’s style. The AI track may show uneven phrasing, odd harmonic turns, or unnatural balance between voices that give it away.",
  },
  {
    id: "music-2",
    humanFilename: "2_Bach.mp3",
    aiFilename: "2_AI.mp3",
    composer: "Bach",
    explanation:
      "Bach’s counterpoint has clear voice-leading and rhythmic drive. AI often blurs inner voices or repeats patterns in a way that feels mechanically even.",
  },
  {
    id: "music-3",
    humanFilename: "3_Beethoven.mp3",
    aiFilename: "3_AI Beethoven.mp3",
    composer: "Beethoven",
    explanation:
      "Beethoven’s dynamics and dramatic pacing are distinctive. Listen for flat emotional contour or mushy articulation that can mark the synthetic version.",
  },
  {
    id: "music-4",
    humanFilename: "4_debussy.mp3",
    aiFilename: "4_AI.mp3",
    composer: "Debussy",
    explanation:
      "Debussy’s impressionist color relies on subtle pedaling and timbre. AI may produce overly glossy washes or inconsistent harmonic color between phrases.",
  },
  {
    id: "music-5",
    humanFilename: "5_chopin.mp3",
    aiFilename: "5_AI chopin.mp3",
    composer: "Chopin",
    explanation:
      "Chopin’s rubato and singing line are deeply human. The AI clip often sounds slightly too regular or lacks the nuanced breath between phrases.",
  },
];

type VisualArtPair = {
  id: string;
  humanFilename: string;
  aiFilename: string;
  humanArtist: string;
  explanation: string;
};

const ART_BASE = "/art";

const VISUAL_ART_PAIRS: VisualArtPair[] = [
  {
    id: "art-1",
    humanFilename: "1_Leonardo da Vinci_Annunciation.webp",
    aiFilename: "1_ChatGPT Image Mar 16, 2026, 03_53_14 AM.png",
    humanArtist: "Leonardo da Vinci",
    explanation:
      "The authentic painting shows Leonardo's subtle handling of light and anatomical proportion; the AI version can struggle with coherent hands and edges and often softens architectural details.",
  },
  {
    id: "art-2",
    humanFilename: "2_Picasso.jpg",
    aiFilename: "2_ChatGPT Image Mar 16, 2026, 03_59_47 AM.png",
    humanArtist: "Pablo Picasso",
    explanation:
      "Picasso’s cubist composition uses deliberate, interlocking planes. The AI image imitates the style but may repeat textures and lacks the tight structural logic of the original.",
  },
  {
    id: "art-3",
    humanFilename: "3_rembrandt.jpg",
    aiFilename: "3_chatgpt.png",
    humanArtist: "Rembrandt",
    explanation:
      "Rembrandt’s chiaroscuro has clear light sources and believable volumes. The AI piece often has muddy shadows or inconsistent lighting that flattens the face and garments.",
  },
  {
    id: "art-4",
    humanFilename: "4_monet.jpg",
    aiFilename: "4_ChatGPT Image Mar 16, 2026, 04_03_59 AM.png",
    humanArtist: "Claude Monet",
    explanation:
      "Monet’s brushwork balances suggestion and structure; the AI image may over-blur foliage or water and repeat brush patterns in a way real impressionist strokes do not.",
  },
  {
    id: "art-5",
    humanFilename: "5_frida kahlo.jpeg",
    aiFilename: "5_ChatGPT Image Mar 16, 2026, 04_07_24 AM.png",
    humanArtist: "Frida Kahlo",
    explanation:
      "Kahlo’s self-portraiture shows precise symbolic details and grounded anatomy. The AI attempt may mis-handle facial symmetry, hands, or background motifs when you look closely.",
  },
  {
    id: "art-6",
    humanFilename: "6_dali.jpg",
    aiFilename: "6_chatgpt.png",
    humanArtist: "Salvador Dalí",
    explanation:
      "Dalí’s surreal scenes maintain crisp draftsmanship even in bizarre forms. AI-generated surrealism often includes warped perspective or objects that subtly melt into each other unnaturally.",
  },
  {
    id: "art-7",
    humanFilename:
      "7_Jackson-Pollock-1912-1956-Number-34-1949-Oil-and-enamel-on-white-paperboard-mounted-on-Masonite-559-x-775-mm.jpg",
    aiFilename: "7_chatgpt.png",
    humanArtist: "Jackson Pollock",
    explanation:
      "Pollock’s drips have a physical rhythm and layered depth from real paint. AI mimics the pattern but can feel too evenly distributed with less sense of gravity and splatter physics.",
  },
  {
    id: "art-8",
    humanFilename: "8_andy_warhol.jpeg",
    aiFilename: "8_ChatGPT Image Mar 16, 2026, 04_18_23 AM.png",
    humanArtist: "Andy Warhol",
    explanation:
      "Warhol’s prints show intentional registration offsets and screen textures. AI pop-art sometimes adds inconsistent halftone dots and edge artifacts that don’t match silkscreen processes.",
  },
];

type GameView =
  | "choose"
  | "literature-mode"
  | "literature"
  | "music"
  | "art"
  | "correct"
  | "gameover"
  | "complete"
  | "timed-complete"
  | "marathon-complete";
type GameModule = "literature" | "music" | "art";
type GameMode = "normal" | "timed" | "marathon";
type ChoiceSide = "left" | "right";
type RoundResult = "correct" | "wrong" | null;

/** 1 = Definitely A, 2 = Probably A, 3 = Slightly lean A, 4 = Slightly lean B, 5 = Probably B, 6 = Definitely B */
type ConfidenceOption = 1 | 2 | 3 | 4 | 5 | 6;

const CONFIDENCE_LABELS: Record<ConfidenceOption, string> = {
  1: "Definitely A is human",
  2: "Probably A is human",
  3: "Slightly lean A",
  4: "Slightly lean B",
  5: "Probably B is human",
  6: "Definitely B is human",
};

type ResponseTimeRecord = {
  module: GameModule;
  roundIndex: number;
  responseTimeMs: number;
  correct: boolean;
  confidenceOption: ConfidenceOption;
};

function trackTrial(data: {
  sessionId: string;
  module: GameModule;
  questionId: string;
  roundIndex: number;
  humanOnLeft: boolean;
  pickedSide: ChoiceSide;
  correct: boolean;
  confidenceOption: ConfidenceOption;
  responseTimeMs: number;
  gameMode: GameMode;
}) {
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).catch(() => {
    // fire-and-forget: don't block the UI on logging failures
  });
}

export default function Home() {
  const [sessionId] = useState(() => crypto.randomUUID());
  const [view, setView] = useState<GameView>("choose");
  const [module, setModule] = useState<GameModule>("literature");
  const [mode, setMode] = useState<GameMode>("normal");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [humanOnLeft, setHumanOnLeft] = useState<boolean>(() => Math.random() < 0.5);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [roundResult, setRoundResult] = useState<RoundResult>(null);
  const [fooledCount, setFooledCount] = useState(0);
  const [selectedSide, setSelectedSide] = useState<ChoiceSide | null>(null);
  const [selectedConfidence, setSelectedConfidence] = useState<ConfidenceOption | null>(null);
  const [showWhyA, setShowWhyA] = useState(false);
  const [showWhyB, setShowWhyB] = useState(false);
  const [showWhyOnGameOver, setShowWhyOnGameOver] = useState(false);
  const [tipOffResponse, setTipOffResponse] = useState("");
  const [roundStartedAt, setRoundStartedAt] = useState<number | null>(null);
  const [responseTimes, setResponseTimes] = useState<ResponseTimeRecord[]>([]);
  const [lastResponseTimeMs, setLastResponseTimeMs] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [timedRemainingMs, setTimedRemainingMs] = useState(120000);
  const [timedCorrectCount, setTimedCorrectCount] = useState(0);
  const [timedAnsweredCount, setTimedAnsweredCount] = useState(0);
  const [marathonRemainingMs, setMarathonRemainingMs] = useState(15000);
  const [marathonStreak, setMarathonStreak] = useState(0);
  const [marathonAnsweredCount, setMarathonAnsweredCount] = useState(0);
  const [marathonOrder, setMarathonOrder] = useState<number[]>([]);
  const [marathonOrderPosition, setMarathonOrderPosition] = useState(0);

  const literatureBank =
    NORMAL_LITERATURE_PAIRS;
  const currentLiteratureIndex =
    mode === "marathon" && marathonOrder.length > 0
      ? marathonOrder[marathonOrderPosition]
      : currentIndex % literatureBank.length;
  const literaturePair = literatureBank[currentLiteratureIndex];
  const musicPair = MUSIC_PAIRS[currentIndex % MUSIC_PAIRS.length];
  const artPair = VISUAL_ART_PAIRS[currentIndex % VISUAL_ART_PAIRS.length];

  const pair = literaturePair;
  const humanExcerpt = pair.humanExcerpt;
  const aiExcerpt = pair.aiExcerpt;
  const leftText = humanOnLeft ? humanExcerpt : aiExcerpt;
  const rightText = humanOnLeft ? aiExcerpt : humanExcerpt;
  const isLeftHuman = humanOnLeft;
  const isRightHuman = !humanOnLeft;
  const leftExplanation = humanOnLeft ? null : pair.explanation;
  const rightExplanation = humanOnLeft ? pair.explanation : null;

  const leftMusicUrl = humanOnLeft
    ? `${MUSIC_BASE}/${encodeURI(musicPair.humanFilename)}`
    : `${MUSIC_BASE}/${encodeURI(musicPair.aiFilename)}`;
  const rightMusicUrl = humanOnLeft
    ? `${MUSIC_BASE}/${encodeURI(musicPair.aiFilename)}`
    : `${MUSIC_BASE}/${encodeURI(musicPair.humanFilename)}`;
  const leftMusicExplanation = humanOnLeft ? null : musicPair.explanation;
  const rightMusicExplanation = humanOnLeft ? musicPair.explanation : null;

  const currentPairExplanation =
    module === "literature"
      ? literaturePair.explanation
      : module === "music"
      ? musicPair.explanation
      : artPair.explanation;

  const currentAuthor =
    module === "literature"
      ? literaturePair.humanSource.split("—")[0]?.trim()
      : module === "music"
      ? undefined
      : artPair.humanArtist;

  // Per-question timer that counts up while a question is active
  useEffect(() => {
    const shouldRunTimer =
      roundStartedAt != null &&
      (view === "literature" || view === "music" || view === "art") &&
      roundResult === null;

    if (!shouldRunTimer) {
      setElapsedSeconds(0);
      return;
    }

    const update = () => {
      if (roundStartedAt != null) {
        const diffMs = Date.now() - roundStartedAt;
        setElapsedSeconds(Math.max(0, diffMs / 1000));
      }
    };

    update();
    const id = setInterval(update, 200);
    return () => clearInterval(id);
  }, [roundStartedAt, view, roundResult]);

  // Timed mode countdown (Literature only)
  useEffect(() => {
    const isTimedLiteratureRound =
      view === "literature" &&
      module === "literature" &&
      mode === "timed" &&
      roundResult === null;

    if (!isTimedLiteratureRound) return;
    if (timedRemainingMs <= 0) {
      setView("timed-complete");
      return;
    }

    const startedAt = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const next = Math.max(0, timedRemainingMs - elapsed);
      setTimedRemainingMs(next);
      if (next <= 0) {
        clearInterval(id);
        setView("timed-complete");
      }
    }, 100);

    return () => clearInterval(id);
  }, [view, module, mode, roundResult, timedRemainingMs]);

  // Marathon mode countdown (Literature only)
  useEffect(() => {
    const isMarathonLiteratureRound =
      view === "literature" &&
      module === "literature" &&
      mode === "marathon" &&
      roundResult === null;

    if (!isMarathonLiteratureRound) return;
    if (marathonRemainingMs <= 0) {
      setView("marathon-complete");
      return;
    }

    const startedAt = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const next = Math.max(0, marathonRemainingMs - elapsed);
      setMarathonRemainingMs(next);
      if (next <= 0) {
        clearInterval(id);
        setView("marathon-complete");
      }
    }, 100);

    return () => clearInterval(id);
  }, [view, module, mode, roundResult, marathonRemainingMs]);

  const startLiteratureRound = (startIndex = 0) => {
    setCurrentIndex(startIndex);
    setHumanOnLeft(Math.random() < 0.5);
    setView("literature");
    setRoundResult(null);
    setSelectedSide(null);
    setSelectedConfidence(null);
    setShowWhyA(false);
    setShowWhyB(false);
    setRoundStartedAt(Date.now());
  };

  const goToNextLiteratureQuestion = () => {
    const bank = NORMAL_LITERATURE_PAIRS;

    if (mode === "marathon" && marathonOrder.length > 0) {
      if (marathonOrderPosition + 1 < marathonOrder.length) {
        const nextPos = marathonOrderPosition + 1;
        setMarathonOrderPosition(nextPos);
        setCurrentIndex(marathonOrder[nextPos]);
      } else {
        // Exhausted the shuffled run: reshuffle for continued play.
        const reshuffled = makeShuffledIndices(bank.length);
        setMarathonOrder(reshuffled);
        setMarathonOrderPosition(0);
        setCurrentIndex(reshuffled[0] ?? 0);
      }
    } else {
      const nextIndex = bank.length > 1 ? (currentIndex + 1) % bank.length : currentIndex;
      setCurrentIndex(nextIndex);
    }

    setHumanOnLeft(Math.random() < 0.5);
    setRoundResult(null);
    setSelectedSide(null);
    setSelectedConfidence(null);
    setShowWhyA(false);
    setShowWhyB(false);
    setTipOffResponse("");
    setRoundStartedAt(Date.now());
    setView("literature");
  };

  const handleStartLiterature = () => {
    setModule("literature");
    setView("literature-mode");
    setRoundResult(null);
    setSelectedSide(null);
    setSelectedConfidence(null);
    setShowWhyA(false);
    setShowWhyB(false);
    setTipOffResponse("");
    setRoundStartedAt(null);
  };

  const handlePickLiteratureMode = (pickedMode: GameMode) => {
    setMode(pickedMode);
    setTimedRemainingMs(120000);
    setTimedCorrectCount(0);
    setTimedAnsweredCount(0);
    setMarathonRemainingMs(15000);
    setMarathonStreak(0);
    setMarathonAnsweredCount(0);
    if (pickedMode === "marathon") {
      const shuffled = makeShuffledIndices(NORMAL_LITERATURE_PAIRS.length);
      setMarathonOrder(shuffled);
      setMarathonOrderPosition(0);
      startLiteratureRound(shuffled[0] ?? 0);
    } else {
      setMarathonOrder([]);
      setMarathonOrderPosition(0);
      startLiteratureRound();
    }
  };

  const handleStartMusic = () => {
    setModule("music");
    setCurrentIndex(0);
    setHumanOnLeft(Math.random() < 0.5);
    setView("music");
    setRoundResult(null);
    setSelectedSide(null);
    setSelectedConfidence(null);
    setShowWhyA(false);
    setShowWhyB(false);
    setRoundStartedAt(Date.now());
  };

  const handleStartArt = () => {
    setModule("art");
    setCurrentIndex(0);
    setHumanOnLeft(Math.random() < 0.5);
    setView("art");
    setRoundResult(null);
    setSelectedSide(null);
    setSelectedConfidence(null);
    setShowWhyA(false);
    setShowWhyB(false);
    setRoundStartedAt(Date.now());
  };

  const handleConfidenceSelect = (option: ConfidenceOption) => {
    if (roundResult) return;
    const side: ChoiceSide = option <= 3 ? "left" : "right";
    setSelectedConfidence(option);
    setSelectedSide(side);

    const pickedHuman =
      (side === "left" && isLeftHuman) || (side === "right" && isRightHuman);

    const responseTimeMs =
      roundStartedAt != null ? Date.now() - roundStartedAt : 0;
    setResponseTimes((prev) =>
      prev.concat({
        module,
        roundIndex: currentIndex,
        responseTimeMs,
        correct: pickedHuman,
        confidenceOption: option,
      })
    );
    setLastResponseTimeMs(responseTimeMs);

    const questionId =
      module === "literature"
        ? literaturePair.id
        : module === "music"
        ? musicPair.id
        : artPair.id;
    trackTrial({
      sessionId,
      module,
      questionId,
      roundIndex: currentIndex,
      humanOnLeft,
      pickedSide: side,
      correct: pickedHuman,
      confidenceOption: option,
      responseTimeMs,
      gameMode: mode,
    });

    if (pickedHuman) {
      setRoundResult("correct");
      setStreak((prev) => {
        const next = prev + 1;
        setBestStreak((best) => Math.max(best, next));
        return next;
      });
      setView("correct");
    } else {
      setRoundResult("wrong");
      setFooledCount((prev) => prev + 1);
      setView("gameover");
    }
  };

  const handleTimedBinaryChoice = (side: ChoiceSide) => {
    if (
      module !== "literature" ||
      mode !== "timed" ||
      view !== "literature" ||
      timedRemainingMs <= 0
    ) {
      return;
    }

    const pickedHuman =
      (side === "left" && isLeftHuman) || (side === "right" && isRightHuman);
    const responseTimeMs = roundStartedAt != null ? Date.now() - roundStartedAt : 0;

    setResponseTimes((prev) =>
      prev.concat({
        module,
        roundIndex: currentIndex,
        responseTimeMs,
        correct: pickedHuman,
        confidenceOption: side === "left" ? 1 : 6,
      })
    );
    setLastResponseTimeMs(responseTimeMs);
    trackTrial({
      sessionId,
      module,
      questionId: literaturePair.id,
      roundIndex: currentIndex,
      humanOnLeft,
      pickedSide: side,
      correct: pickedHuman,
      confidenceOption: side === "left" ? 1 : 6,
      responseTimeMs,
      gameMode: mode,
    });
    setTimedAnsweredCount((prev) => prev + 1);
    if (pickedHuman) {
      setTimedCorrectCount((prev) => prev + 1);
    }

    goToNextLiteratureQuestion();
  };

  const handleMarathonBinaryChoice = (side: ChoiceSide) => {
    if (
      module !== "literature" ||
      mode !== "marathon" ||
      view !== "literature" ||
      marathonRemainingMs <= 0
    ) {
      return;
    }

    const pickedHuman =
      (side === "left" && isLeftHuman) || (side === "right" && isRightHuman);
    const responseTimeMs = roundStartedAt != null ? Date.now() - roundStartedAt : 0;

    setResponseTimes((prev) =>
      prev.concat({
        module,
        roundIndex: currentIndex,
        responseTimeMs,
        correct: pickedHuman,
        confidenceOption: side === "left" ? 1 : 6,
      })
    );
    setLastResponseTimeMs(responseTimeMs);
    trackTrial({
      sessionId,
      module,
      questionId: literaturePair.id,
      roundIndex: currentIndex,
      humanOnLeft,
      pickedSide: side,
      correct: pickedHuman,
      confidenceOption: side === "left" ? 1 : 6,
      responseTimeMs,
      gameMode: mode,
    });
    setMarathonAnsweredCount((prev) => prev + 1);

    if (!pickedHuman) {
      setView("marathon-complete");
      return;
    }

    const nextStreak = marathonStreak + 1;
    const bonusMs = Math.max(0, 5000 * (nextStreak - 0.1));
    setMarathonStreak(nextStreak);
    setMarathonRemainingMs((prev) => prev + bonusMs);
    goToNextLiteratureQuestion();
  };

  const goToNextRound = () => {
    if (module === "literature") {
      const bank =
        NORMAL_LITERATURE_PAIRS;
      const nextIndex =
        bank.length > 1 ? (currentIndex + 1) % bank.length : currentIndex;
      setCurrentIndex(nextIndex);
      setHumanOnLeft(Math.random() < 0.5);
      setRoundResult(null);
      setSelectedSide(null);
      setSelectedConfidence(null);
      setShowWhyA(false);
      setShowWhyB(false);
      setTipOffResponse("");
      setRoundStartedAt(Date.now());
      setView("literature");
    } else if (module === "music") {
      if (currentIndex >= MUSIC_PAIRS.length - 1) {
        setView("complete");
        return;
      }
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setHumanOnLeft(Math.random() < 0.5);
      setRoundResult(null);
      setSelectedSide(null);
      setSelectedConfidence(null);
      setShowWhyA(false);
      setShowWhyB(false);
      setTipOffResponse("");
      setRoundStartedAt(Date.now());
      setView("music");
    } else {
      // Visual art challenge: stop after all 8 questions instead of looping
      if (currentIndex >= VISUAL_ART_PAIRS.length - 1) {
        setView("complete");
        return;
      }
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setHumanOnLeft(Math.random() < 0.5);
      setRoundResult(null);
      setSelectedSide(null);
      setSelectedConfidence(null);
      setShowWhyA(false);
      setShowWhyB(false);
      setTipOffResponse("");
      setRoundStartedAt(Date.now());
      setView("art");
    }
  };

  const resetGame = () => {
    setView("choose");
    setMode("normal");
    setCurrentIndex(0);
    setHumanOnLeft(Math.random() < 0.5);
    setStreak(0);
    setBestStreak(0);
    setRoundResult(null);
    setFooledCount(0);
    setSelectedSide(null);
    setSelectedConfidence(null);
    setShowWhyA(false);
    setShowWhyB(false);
    setShowWhyOnGameOver(false);
    setTipOffResponse("");
    setRoundStartedAt(null);
    setResponseTimes([]);
    setLastResponseTimeMs(null);
    setTimedRemainingMs(120000);
    setTimedCorrectCount(0);
    setTimedAnsweredCount(0);
    setMarathonRemainingMs(15000);
    setMarathonStreak(0);
    setMarathonAnsweredCount(0);
    setMarathonOrder([]);
    setMarathonOrderPosition(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-neutral-50">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-8 sm:px-6 lg:px-10">
        {/* Global header: title only on choose; title + challenge name on game screens */}
        <header className="border-b border-white/10 pb-6">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            <button
              type="button"
              onClick={resetGame}
              className="border-0 bg-transparent p-0 text-left font-inherit text-inherit cursor-pointer"
            >
              <SpecialText className="text-2xl sm:text-3xl font-semibold tracking-tight">
                The Turing Gallery
              </SpecialText>
            </button>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-neutral-300 sm:text-base">
            <span className="block text-base italic sm:text-lg">
              When AI imitates the masters, can you tell the difference?
            </span>
            {view === "choose" && (
              <span className="mt-1 block">
                This interactive study challenges participants to distinguish real art from AI imitations modeled
                after famous creators. Compare pairs of texts, videos, music, and visual art. Choose the human
                work to help us measure how accurately and quickly we can detect AI-generated creativity.
              </span>
            )}
          </p>
          {(view === "literature" || (view !== "choose" && module === "literature")) && (
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400/90">
              Literature Challenge
            </p>
          )}
          {(view === "music" || (view !== "choose" && module === "music")) && (
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400/90">
              Music Challenge
            </p>
          )}
          {(view === "art" || (view !== "choose" && module === "art")) && (
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-neutral-400/90">
              Visual Art Challenge
            </p>
          )}
        </header>

        {/* ----- VIEW: Choose Your Challenge ----- */}
        {view === "choose" && (
          <section className="flex flex-1 flex-col pt-10">
            <h2 className="mb-8 text-xl font-semibold text-neutral-100 sm:text-2xl">
              Choose Your Challenge
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <ChallengeCard
                title="Literature"
                description="Dive into the world of words. Can you tell human prose from AI-generated text?"
                cta="Start Literature Challenge"
                onClick={handleStartLiterature}
              />
              <ChallengeCard
                title="Film"
                description="Explore cinematic creations. Identify the subtle differences between human and AI-made films."
                cta="Start Film Challenge"
                disabled
              />
              <ChallengeCard
                title="Visual Art"
                description="Study paintings and illustrations. Can you tell human-made art from AI-generated images?"
                cta="Start Visual Art Challenge"
                onClick={handleStartArt}
              />
              <ChallengeCard
                title="Music"
                description="Listen closely. Can you distinguish between melodies composed by humans and those by AI?"
                cta="Start Music Challenge"
                onClick={handleStartMusic}
              />
            </div>
          </section>
        )}

        {/* ----- VIEW: Pick Literature Mode ----- */}
        {view === "literature-mode" && (
          <section className="flex flex-1 flex-col gap-6 pt-10">
            <h2 className="text-xl font-semibold text-neutral-100 sm:text-2xl">
              Pick a Literature Mode
            </h2>
            <div className="grid gap-4">
              <ModeCard
                title="Normal Mode"
                description="Players rate their confidence on a 6-point scale: Definitely A, Probably A, Lean A, Lean B, Probably B, Definitely B. No time pressure for a fixed set of 10 questions. Response time and confidence level are logged for analysis."
                cta="Play Normal Mode"
                onClick={() => handlePickLiteratureMode("normal")}
              />
              <ModeCard
                title="Timed Mode"
                description="A 2-minute clock starts. Players answer as many questions correctly as they can before time runs out. Binary choice (A or B). Score = total correct."
                cta="Play Timed Mode"
                onClick={() => handlePickLiteratureMode("timed")}
              />
              <ModeCard
                title="Marathon Mode"
                description="Players start with 15 seconds on the clock. Each correct answer adds 5*(n-0.1) seconds. The game ends on the first wrong answer or when the clock hits zero. Score = streak length."
                cta="Play Marathon Mode"
                onClick={() => handlePickLiteratureMode("marathon")}
              />
            </div>
          </section>
        )}

        {/* ----- VIEW: Literature Challenge (Option A / Option B, 6-point scale) ----- */}
        {view === "literature" && (
          <section className="flex flex-1 flex-col gap-6 pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">
                  {mode === "normal"
                    ? "Normal Mode"
                    : mode === "timed"
                    ? "Timed Mode"
                    : "Marathon Mode"}
                </p>
                <p className="text-sm text-neutral-400">
                  One of these texts is by{" "}
                  <span className="font-semibold text-neutral-200">
                    {currentAuthor}
                  </span>
                  .
                </p>
                {mode === "timed" ? (
                  <p className="mt-1 text-neutral-300">
                    Timed Mode: pick which option is human (A or B) before time runs out.
                  </p>
                ) : mode === "marathon" ? (
                  <p className="mt-1 text-neutral-300">
                    Marathon Mode: pick A/B fast; first wrong answer ends the run.
                  </p>
                ) : (
                  <p className="mt-1 text-neutral-300">
                    Identify the human-made text. Select your confidence:
                  </p>
                )}
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
                {mode === "timed"
                  ? "Time Left:"
                  : mode === "marathon"
                  ? "Time Left:"
                  : "Time:"}{" "}
                <span className="tabular-nums text-neutral-200">
                  {mode === "timed"
                    ? formatTime(timedRemainingMs / 1000)
                    : mode === "marathon"
                    ? formatTime(marathonRemainingMs / 1000)
                    : `${elapsedSeconds.toFixed(1)}s`}
                </span>
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <div className="rounded-none border border-white/20 bg-neutral-200 p-5 shadow-lg">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-600">
                    Option A
                  </div>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-neutral-900">
                    {leftText}
                  </p>
                </div>
                {roundResult && leftExplanation && (
                  <div className="flex flex-col gap-2">
                    <WhyButton
                      label="Why?"
                      expanded={showWhyA}
                      onToggle={() => setShowWhyA((v) => !v)}
                    />
                    {showWhyA && <WhyTooltip text={leftExplanation} />}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <div className="rounded-none border border-white/20 bg-neutral-200 p-5 shadow-lg">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-600">
                    Option B
                  </div>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-neutral-900">
                    {rightText}
                  </p>
                </div>
                {roundResult && rightExplanation && (
                  <div className="flex flex-col gap-2">
                    <WhyButton
                      label="Why?"
                      expanded={showWhyB}
                      onToggle={() => setShowWhyB((v) => !v)}
                    />
                    {showWhyB && <WhyTooltip text={rightExplanation} />}
                  </div>
                )}
              </div>
            </div>

            {mode === "timed" ? (
              <BinaryChoiceScale
                disabled={timedRemainingMs <= 0}
                onSelect={handleTimedBinaryChoice}
              />
            ) : mode === "marathon" ? (
              <BinaryChoiceScale
                disabled={marathonRemainingMs <= 0}
                onSelect={handleMarathonBinaryChoice}
              />
            ) : (
              <ConfidenceScale
                disabled={!!roundResult}
                selected={selectedConfidence}
                onSelect={handleConfidenceSelect}
              />
            )}

            {/* Streak strip during play */}
            <div className="mt-4 flex items-center gap-6 rounded-none border border-white/10 bg-neutral-900/50 px-4 py-3 text-sm">
              {mode === "timed" ? (
                <>
                  <span className="text-neutral-400">Score</span>
                  <span className="font-semibold text-white">{timedCorrectCount}</span>
                  <span className="text-neutral-500">|</span>
                  <span className="text-neutral-400">Answered</span>
                  <span className="font-semibold">{timedAnsweredCount}</span>
                </>
              ) : mode === "marathon" ? (
                <>
                  <span className="text-neutral-400">Streak</span>
                  <span className="font-semibold text-white">{marathonStreak}</span>
                  <span className="text-neutral-500">|</span>
                  <span className="text-neutral-400">Answered</span>
                  <span className="font-semibold">{marathonAnsweredCount}</span>
                </>
              ) : (
                <>
                  <span className="text-neutral-400">Current streak</span>
                  <span className="font-semibold text-white">{streak}</span>
                  <span className="text-neutral-500">|</span>
                  <span className="text-neutral-400">Best</span>
                  <span className="font-semibold">{bestStreak}</span>
                </>
              )}
            </div>
          </section>
        )}

        {/* ----- VIEW: Music Challenge (Clip 1 = A, Clip 2 = B, 6-point scale) ----- */}
        {view === "music" && (
          <section className="flex flex-1 flex-col gap-6 pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="text-sm text-neutral-400">
                  One of these clips is by{" "}
                  <span className="font-semibold text-neutral-200">
                    {musicPair.composer}
                  </span>
                  . The other is an AI-generated imitation of that composer.
                </p>
                <p className="mt-1 text-neutral-300">
                  Identify the human-made audio clip. A = Clip 1, B = Clip 2. Select your confidence:
                </p>
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
                Time:{" "}
                <span className="tabular-nums text-neutral-200">
                  {elapsedSeconds.toFixed(1)}s
                </span>
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <div className="rounded-none border border-white/20 bg-neutral-900/60 p-5 shadow-lg">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Clip 1 (A)
                  </div>
                  <div className="mb-3 flex h-24 items-center justify-center rounded-none bg-neutral-800/80 text-xs text-neutral-500">
                    Audio visualizer placeholder
                  </div>
                  <AudioClip30s src={leftMusicUrl} />
                </div>
                {roundResult && leftMusicExplanation && (
                  <div className="flex flex-col gap-2">
                    <WhyButton
                      label="Why?"
                      expanded={showWhyA}
                      onToggle={() => setShowWhyA((v) => !v)}
                    />
                    {showWhyA && <WhyTooltip text={leftMusicExplanation} />}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <div className="rounded-none border border-white/20 bg-neutral-900/60 p-5 shadow-lg">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Clip 2 (B)
                  </div>
                  <div className="mb-3 flex h-24 items-center justify-center rounded-none bg-neutral-800/80 text-xs text-neutral-500">
                    Audio visualizer placeholder
                  </div>
                  <AudioClip30s src={rightMusicUrl} />
                </div>
                {roundResult && rightMusicExplanation && (
                  <div className="flex flex-col gap-2">
                    <WhyButton
                      label="Why?"
                      expanded={showWhyB}
                      onToggle={() => setShowWhyB((v) => !v)}
                    />
                    {showWhyB && <WhyTooltip text={rightMusicExplanation} />}
                  </div>
                )}
              </div>
            </div>

            <ConfidenceScale
              disabled={!!roundResult}
              selected={selectedConfidence}
              onSelect={handleConfidenceSelect}
            />

            <div className="mt-4 flex items-center gap-6 rounded-none border border-white/10 bg-neutral-900/50 px-4 py-3 text-sm">
              <span className="text-neutral-400">Current streak</span>
              <span className="font-semibold text-white">{streak}</span>
              <span className="text-neutral-500">|</span>
              <span className="text-neutral-400">Best</span>
              <span className="font-semibold">{bestStreak}</span>
            </div>
          </section>
        )}

        {/* ----- VIEW: Visual Art Challenge (Image A / Image B, 6-point scale) ----- */}
        {view === "art" && (
          <section className="flex flex-1 flex-col gap-6 pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="text-neutral-300">
                  Identify the human-made artwork. A = Left image, B = Right image. Select your confidence:
                </p>
                <p className="mt-1 text-sm text-neutral-400">
                  Which one is actually by{" "}
                  <span className="font-semibold text-neutral-200">
                    {artPair.humanArtist}
                  </span>
                  ?
                </p>
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
                Time:{" "}
                <span className="tabular-nums text-neutral-200">
                  {elapsedSeconds.toFixed(1)}s
                </span>
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-3">
                <div className="overflow-hidden rounded-none border border-white/20 bg-neutral-900/60 p-4 shadow-lg">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Image A
                  </div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none bg-neutral-800/80">
                    <Image
                      src={`${ART_BASE}/${encodeURI(
                        humanOnLeft ? artPair.humanFilename : artPair.aiFilename,
                      )}`}
                      alt="Visual art option A"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                </div>
                {roundResult && !humanOnLeft && (
                  <div className="flex flex-col gap-2">
                    <WhyButton
                      label="Why?"
                      expanded={showWhyA}
                      onToggle={() => setShowWhyA((v) => !v)}
                    />
                    {showWhyA && <WhyTooltip text={artPair.explanation} />}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <div className="overflow-hidden rounded-none border border-white/20 bg-neutral-900/60 p-4 shadow-lg">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    Image B
                  </div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none bg-neutral-800/80">
                    <Image
                      src={`${ART_BASE}/${encodeURI(
                        humanOnLeft ? artPair.aiFilename : artPair.humanFilename,
                      )}`}
                      alt="Visual art option B"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                </div>
                {roundResult && humanOnLeft && (
                  <div className="flex flex-col gap-2">
                    <WhyButton
                      label="Why?"
                      expanded={showWhyB}
                      onToggle={() => setShowWhyB((v) => !v)}
                    />
                    {showWhyB && <WhyTooltip text={artPair.explanation} />}
                  </div>
                )}
              </div>
            </div>

            <ConfidenceScale
              disabled={!!roundResult}
              selected={selectedConfidence}
              onSelect={handleConfidenceSelect}
            />

            <div className="mt-4 flex items-center gap-6 rounded-none border border-white/10 bg-neutral-900/50 px-4 py-3 text-sm">
              <span className="text-neutral-400">Current streak</span>
              <span className="font-semibold text-white">{streak}</span>
              <span className="text-neutral-500">|</span>
              <span className="text-neutral-400">Best</span>
              <span className="font-semibold">{bestStreak}</span>
            </div>
          </section>
        )}

        {/* ----- VIEW: You were CORRECT! ----- */}
        {view === "correct" && (
          <section className="flex flex-1 flex-col items-center justify-center gap-6 py-12 text-center">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              You were...
            </h2>
            <p className="text-4xl font-bold tracking-tight text-neutral-200 sm:text-5xl">
              CORRECT!
            </p>
            <p className="text-neutral-300">
              Your streak continues!
            </p>
            {lastResponseTimeMs != null && (
              <p className="text-sm text-neutral-400">
                You answered in <span className="font-medium text-neutral-300">{(lastResponseTimeMs / 1000).toFixed(1)}s</span>
              </p>
            )}
            <p className="rounded-none border border-white/25 bg-neutral-900/60 px-6 py-3 text-lg">
              Current Streak: <span className="font-bold text-white">{streak}</span>
            </p>
            <div className="w-full max-w-md text-left">
              <label htmlFor="tip-off-correct" className="block text-sm text-neutral-400">
                In 1–2 words/phrases, what tipped you off? <span className="text-neutral-500">(optional)</span>
              </label>
              <input
                id="tip-off-correct"
                type="text"
                value={tipOffResponse}
                onChange={(e) => setTipOffResponse(e.target.value)}
                placeholder="e.g. word choice, rhythm..."
                className="mt-1.5 w-full rounded-none border border-white/20 bg-neutral-800/80 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
              />
            </div>
            <button
              type="button"
              onClick={goToNextRound}
              className="rounded-none bg-white px-8 py-3 text-base font-semibold text-black shadow-lg transition hover:bg-neutral-200"
            >
              Next Challenge
            </button>
          </section>
        )}

        {/* ----- VIEW: Game Over ----- */}
        {view === "gameover" && (
          <section className="flex flex-1 flex-col items-center justify-center gap-6 py-12 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              GAME OVER!
            </h2>
            <p className="text-neutral-300">
              Your Streak: <span className="font-semibold text-white">{streak}</span>
            </p>
            <p className="text-neutral-300">
              Fooled You: <span className="font-semibold text-neutral-300">{fooledCount}</span>{" "}
              {fooledCount === 1 ? "Time" : "Times"}
            </p>
            {lastResponseTimeMs != null && (
              <p className="text-sm text-neutral-400">
                You answered in <span className="font-medium text-neutral-300">{(lastResponseTimeMs / 1000).toFixed(1)}s</span>
              </p>
            )}
            <button
              type="button"
              onClick={() => setShowWhyOnGameOver((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-none border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-neutral-100 transition hover:bg-white/15"
            >
              Why?
              <span className="text-neutral-200">{showWhyOnGameOver ? "−" : "+"}</span>
            </button>
            {showWhyOnGameOver && (
              <div className="w-full max-w-md rounded-none border border-white/15 bg-neutral-950/90 p-4 text-left text-sm text-neutral-200">
                <p className="font-medium text-neutral-200/90">Explanation for AI artifacts</p>
                <p className="mt-2 leading-relaxed">{currentPairExplanation}</p>
              </div>
            )}
            <div className="w-full max-w-md text-left">
              <label htmlFor="tip-off-gameover" className="block text-sm text-neutral-400">
                In 1–2 words/phrases, what tipped you off? <span className="text-neutral-500">(optional)</span>
              </label>
              <input
                id="tip-off-gameover"
                type="text"
                value={tipOffResponse}
                onChange={(e) => setTipOffResponse(e.target.value)}
                placeholder="e.g. word choice, rhythm..."
                className="mt-1.5 w-full rounded-none border border-white/20 bg-neutral-800/80 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
              />
            </div>
            <button
              type="button"
              onClick={resetGame}
              className="rounded-none bg-white px-8 py-3 text-base font-semibold text-neutral-900 shadow-lg transition hover:bg-neutral-200"
            >
              Restart Game
            </button>
          </section>
        )}

        {/* ----- VIEW: Challenge Complete (Visual Art: all 8; Music: all 5) ----- */}
        {view === "complete" && module === "art" && (
          <section className="flex flex-1 flex-col items-center justify-center gap-6 py-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              You finished the Visual Art challenge!
            </h2>
            <p className="max-w-md text-sm text-neutral-300 sm:text-base">
              Thanks for making it through all eight paintings and illustrations. Your streak and response
              times help us understand how well people can tell human-made art from AI-generated images.
            </p>
            <p className="rounded-none border border-white/25 bg-neutral-900/60 px-6 py-3 text-lg">
              Final Streak: <span className="font-bold text-white">{streak}</span>
            </p>
            <button
              type="button"
              onClick={resetGame}
              className="rounded-none bg-white px-8 py-3 text-base font-semibold text-neutral-900 shadow-lg transition hover:bg-neutral-200"
            >
              Back to challenges
            </button>
          </section>
        )}

        {view === "complete" && module === "music" && (
          <section className="flex flex-1 flex-col items-center justify-center gap-6 py-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              You finished the Music challenge!
            </h2>
            <p className="max-w-md text-sm text-neutral-300 sm:text-base">
              Thanks for working through all five composer pairs. Your streak and response times help us
              understand how well people can tell human performances from AI-generated music.
            </p>
            <p className="rounded-none border border-white/25 bg-neutral-900/60 px-6 py-3 text-lg">
              Final Streak: <span className="font-bold text-white">{streak}</span>
            </p>
            <button
              type="button"
              onClick={resetGame}
              className="rounded-none bg-white px-8 py-3 text-base font-semibold text-neutral-900 shadow-lg transition hover:bg-neutral-200"
            >
              Back to challenges
            </button>
          </section>
        )}

        {view === "timed-complete" && module === "literature" && mode === "timed" && (
          <section className="flex flex-1 flex-col items-center justify-center gap-5 py-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Time&apos;s up!
            </h2>
            <p className="text-neutral-300">
              Timed Literature complete.
            </p>
            <p className="rounded-none border border-white/25 bg-neutral-900/60 px-6 py-3 text-lg">
              Score: <span className="font-bold text-white">{timedCorrectCount}</span>
              {" / "}
              {timedAnsweredCount}
            </p>
            <button
              type="button"
              onClick={resetGame}
              className="rounded-none bg-white px-8 py-3 text-base font-semibold text-neutral-900 shadow-lg transition hover:bg-neutral-200"
            >
              Back to challenges
            </button>
          </section>
        )}

        {view === "marathon-complete" && module === "literature" && mode === "marathon" && (
          <section className="flex flex-1 flex-col items-center justify-center gap-5 py-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Marathon complete
            </h2>
            <p className="text-neutral-300">
              Your run ended on time-out or first miss.
            </p>
            <p className="rounded-none border border-white/25 bg-neutral-900/60 px-6 py-3 text-lg">
              Streak score: <span className="font-bold text-white">{marathonStreak}</span>
            </p>
            <p className="text-sm text-neutral-400">
              Questions answered: <span className="font-medium text-neutral-200">{marathonAnsweredCount}</span>
            </p>
            <button
              type="button"
              onClick={resetGame}
              className="rounded-none bg-white px-8 py-3 text-base font-semibold text-neutral-900 shadow-lg transition hover:bg-neutral-200"
            >
              Back to challenges
            </button>
          </section>
        )}
      </main>
    </div>
  );
}

function ChallengeCard({
  title,
  description,
  cta,
  onClick,
  disabled = false,
}: {
  title: string;
  description: string;
  cta: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <div
      className={`rounded-none border border-white/15 bg-neutral-900/60 p-6 shadow-xl transition ${
        disabled ? "opacity-70" : "hover:border-white/25 hover:bg-neutral-900/80"
      }`}
    >
      <h3 className="text-lg font-semibold text-neutral-100">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className="mt-5 w-full rounded-none bg-white py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:bg-neutral-600 disabled:text-neutral-400"
      >
        {cta}
      </button>
    </div>
  );
}

function ModeCard({
  title,
  description,
  cta,
  onClick,
}: {
  title: string;
  description: string;
  cta: string;
  onClick: () => void;
}) {
  return (
    <div className="rounded-none border border-white/15 bg-neutral-900/60 p-6 shadow-xl">
      <h3 className="text-lg font-semibold text-neutral-100">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-300">{description}</p>
      <button
        type="button"
        onClick={onClick}
        className="mt-5 rounded-none bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
      >
        {cta}
      </button>
    </div>
  );
}

function WhyButton({
  label,
  expanded,
  onToggle,
}: {
  label: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-1.5 rounded-none border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-medium text-neutral-100 transition hover:bg-white/15"
    >
      <span>{label}</span>
      <span className="text-neutral-200">{expanded ? "−" : "+"}</span>
    </button>
  );
}

function WhyTooltip({ text }: { text: string }) {
  return (
    <div className="rounded-none border border-white/15 bg-neutral-950/90 p-3 text-xs text-neutral-200">
      <p className="font-medium text-neutral-200/90">Explanation for AI artifacts</p>
      <p className="mt-1 leading-relaxed">{text}</p>
    </div>
  );
}

const CONFIDENCE_OPTIONS: ConfidenceOption[] = [1, 2, 3, 4, 5, 6];

function ConfidenceScale({
  disabled,
  selected,
  onSelect,
}: {
  disabled: boolean;
  selected: ConfidenceOption | null;
  onSelect: (option: ConfidenceOption) => void;
}) {
  return (
    <div className="rounded-none border border-white/15 bg-neutral-900/50 p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
        6-point scale
      </p>
      <div className="flex w-full min-w-0 flex-nowrap gap-1.5 sm:gap-2">
        {CONFIDENCE_OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            disabled={disabled}
            className={`flex min-h-[4.25rem] min-w-0 flex-1 basis-0 items-center justify-center rounded-none px-1 py-2 text-center text-[10px] font-medium leading-tight transition disabled:cursor-default disabled:opacity-70 sm:min-h-[4.75rem] sm:px-1.5 sm:text-xs md:text-sm md:leading-snug ${
              selected === option
                ? "bg-white text-neutral-900 ring-2 ring-white/40 hover:bg-neutral-100"
                : "bg-neutral-700/80 text-neutral-200 hover:bg-neutral-600/80"
            }`}
          >
            {CONFIDENCE_LABELS[option]}
          </button>
        ))}
      </div>
    </div>
  );
}

function BinaryChoiceScale({
  disabled,
  onSelect,
}: {
  disabled: boolean;
  onSelect: (side: ChoiceSide) => void;
}) {
  return (
    <div className="rounded-none border border-white/15 bg-neutral-900/50 p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
        Binary choice
      </p>
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          disabled={disabled}
          onClick={() => onSelect("left")}
          className="rounded-none bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200 disabled:cursor-default disabled:opacity-70"
        >
          A is human
        </button>
        <button
          type="button"
          disabled={disabled}
          onClick={() => onSelect("right")}
          className="rounded-none bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200 disabled:cursor-default disabled:opacity-70"
        >
          B is human
        </button>
      </div>
    </div>
  );
}

function makeShuffledIndices(length: number): number[] {
  const items = Array.from({ length }, (_, i) => i);
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

const CLIP_MAX_SECONDS = 30;

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function AudioClip30s({ src }: { src: string }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const displayTime = Math.min(currentTime, CLIP_MAX_SECONDS);
  const progress = (displayTime / CLIP_MAX_SECONDS) * 100;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onTimeUpdate = () => {
      if (el.currentTime >= CLIP_MAX_SECONDS) {
        el.pause();
        el.currentTime = 0;
        setCurrentTime(0);
        setIsPlaying(false);
      } else {
        setCurrentTime(el.currentTime);
      }
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setCurrentTime(0);
      setIsPlaying(false);
    };
    el.addEventListener("timeupdate", onTimeUpdate);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("ended", onEnded);
    return () => {
      el.removeEventListener("timeupdate", onTimeUpdate);
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play();
    } else {
      el.pause();
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = ref.current;
    if (!el) return;
    const value = Math.min(Number(e.target.value), CLIP_MAX_SECONDS);
    el.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <div className="w-full">
      <audio ref={ref} key={src} src={src} preload="metadata" />
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={togglePlay}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-none bg-white text-neutral-900 transition hover:bg-neutral-200"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="ml-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <div className="min-w-0 flex-1">
          <input
            type="range"
            min={0}
            max={CLIP_MAX_SECONDS}
            step={0.1}
            value={displayTime}
            onChange={handleSeek}
            className="h-2 w-full cursor-pointer appearance-none rounded-none bg-neutral-700 accent-neutral-400"
          />
        </div>
        <span className="shrink-0 text-xs tabular-nums text-neutral-400">
          {formatTime(displayTime)} / {formatTime(CLIP_MAX_SECONDS)}
        </span>
      </div>
    </div>
  );
}
