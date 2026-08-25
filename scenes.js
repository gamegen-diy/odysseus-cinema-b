// ODYSSEUS: I Have Read This Book — CINEMA MVP scene data
// Media slot contract: media:{img:'assets/img/<id>.jpg'} OR media:{video:'assets/vid/<id>.mp4'}
// — swapping an image for a video later = change this one field, engine handles both.
// vo: narration text (also the subtitle lines, split on |). prompt: image-gen prompt (2:3 vertical, photoreal film still).
const SCENES = {

S01:{type:'title', title:'ODYSSEUS', sub:'I HAVE READ THIS BOOK', tagline:'A playable epic', btn:'▶ Begin',
 media:{img:'assets/img/s01.jpg'},
 prompt:'Epic film still, vertical 2:3: a lone ancient Greek war galley silhouetted on a wine-dark sea at dusk, massive storm clouds, tiny golden lantern light, cinematic, moody, photorealistic, no text',
 goto:'S02'},

S02:{type:'beat', phase:'PROLOGUE', objective:'The book begins',
 media:{img:'assets/img/s02.jpg'}, kb:'kb-in',
 vo:'The sea will hunt this man for ten years.|A god will learn his name — because he could not resist shouting it.',
 prompt:'Epic film still, vertical 2:3: colossal dark god of the sea rising from storm waves holding a trident, lightning, towering over a tiny ship, photorealistic, dramatic low angle, teal and black palette, no text',
 goto:'S03'},

S03:{type:'beat', phase:'PROLOGUE', objective:'The book begins',
 media:{img:'assets/img/s03.jpg'}, kb:'kb-out',
 vo:'That is how the book goes.|But tonight, someone else is holding the pen.',
 prompt:'Epic film still, vertical 2:3: extreme close-up of a weathered Greek warrior eye, a burning city reflected inside the iris, tear of firelight, photorealistic macro, cinematic, no text',
 goto:'S04'},

S04:{type:'beat', phase:'TROY — YEAR TEN', objective:'Wake up',
 media:{img:'assets/img/s04.jpg'}, kb:'kb-left',
 vo:'Your head splits. Pine tar. Old bronze. Ten years of a war you never fought.|And in the polished shield — a face that is not yours.',
 prompt:'Epic film still, vertical 2:3: dim interior of a bronze-age war tent at night, oil lamp, bronze armor and a round polished shield hanging, spear against tent pole, smoke haze, photorealistic, cinematic chiaroscuro, no text',
 goto:'S05'},

S05:{type:'beat', phase:'TROY — YEAR TEN', objective:'Wake up',
 media:{img:'assets/img/s05.jpg', video:'assets/vid/s05.mp4'}, kb:'kb-in',
 caption:'I have read this book. Cover to cover. Twice.',
 vo:'Odysseus. Sacker of cities. The unluckiest sailor who will ever live.|You have read his story. Cover to cover. Twice.|Tonight, you are wearing it.',
 spoiler:'🔮 SPOILERS FROM THE BOOK: The horse works. Troy burns by dawn. The homecoming is the problem.',
 prompt:'Epic film still, vertical 2:3: bearded Greek warrior reflected in a polished bronze shield he holds up, warm lamplight, sharp intelligent eyes, photorealistic, intimate cinematic portrait, no text',
 goto:'S06'},

S06:{type:'choice', phase:'THE WAR COUNCIL', objective:'Survive the council of kings',
 media:{img:'assets/img/s06.jpg'},
 vo:'The king of kings wants assurances about your wooden monster.|At your shoulder: Polites, who smiles too easily.|And Eurylochus — your brother-in-law — who never smiles at all.',
 prompt:'Epic film still, vertical 2:3: torch-lit war council inside a great tent, a golden-armored high king on a raised seat surrounded by hardened Greek captains, wine cups, map of a city on the table, photorealistic, tense atmosphere, no text',
 ask:'Agamemnon is watching you. What do you give him?',
 intel:'👁 He does not want truth. He wants certainty, delivered loudly.',
 options:[
  {label:'Bow. Confirm the Horse. Reveal nothing.', tone:'GUARDED', fx:{wisdom:6}, goto:'S07'},
  {label:'“And after the sack — we all sail straight home. Yes?”', tone:'PROBING', fx:{heart:6}, goto:'S07'},
  {label:'Pull Polites aside: “When this is over, stay close to me.”', tone:'SCHEMING', fx:{wisdom:4,heart:4}, flag:'PolitesTrust', goto:'S07'}]},

S07:{type:'choice', phase:'THE NIGHT OF THE HORSE', objective:'Decide how Troy falls',
 media:{img:'assets/img/s07.jpg'},
 vo:'The greatest con in literature stands ready. Thirty men. One hatch. One city that has to take the bait.|You invented this thing. Or someone wearing your face did.|You know exactly how tonight ends. The question is whether you let it.',
 prompt:'Epic film still, vertical 2:3: the colossal wooden Trojan Horse at night on a windswept plain, torchlight crawling over fresh planks, tiny soldiers at its feet, ominous sky, photorealistic, awe-inspiring scale, no text',
 ask:'Tonight you decide how much of the book survives.',
 options:[
  {label:'Into the belly. By the book.', tone:'FAITHFUL', fx:{glory:6}, goto:'S08a'},
  {label:'Tonight, my own spears guard Athena’s temple.', tone:'DEFIANT', fx:{wisdom:6}, flag:'AjaxStopped', goto:'S08b'},
  {label:'Skip the epilogue. My twelve ships slip out during the sack.', tone:'COLD', fx:{heart:-4,wisdom:6}, flag:'EarlyExit', goto:'S08c'}]},

S08a:{type:'choice', phase:'INSIDE THE HORSE', objective:'Thirty men. Zero sound.',
 media:{img:'assets/img/s08a.jpg'},
 vo:'Thirty heartbeats in the dark. Zero legroom.|Then, below — a voice. Your wife’s voice.|Helen circles the Horse, calling each man in the voice of the woman he loves. Beside you, Anticlus draws breath to answer.',
 prompt:'Epic film still, vertical 2:3: inside the dark wooden belly of the Trojan Horse, thirty Greek warriors packed shoulder to shoulder, one shaft of moonlight through a plank gap, sweat and held breath, a hand reaching to cover a young soldier mouth, photorealistic, claustrophobic, no text',
 ask:'You have read this page. Anticlus answers, and thirty heroes die in a box.',
 intel:'👁 The book solves this with a hand over his mouth. You could solve it earlier.',
 options:[
  {label:'Clamp his mouth. The classic works.', tone:'IRON', fx:{glory:6}, goto:'S09'},
  {label:'You warned them an hour ago: “She will do voices. NOBODY answers.”', tone:'PREPARED', fx:{wisdom:8}, goto:'S09'}]},

S08b:{type:'beat', phase:'THE TEMPLE STAND', objective:'Tear out page one',
 media:{img:'assets/img/s08b.jpg', video:'assets/vid/s08b.mp4'}, kb:'kb-right',
 caption:'Nobody moves. Not tonight.',
 vo:'One page dooms every Greek at sea: a drunk hero, a defiled altar, a goddess’s grudge.|Tonight your spears ring Athena’s temple, and Ajax finds you filling the doorway.|You tear that page out of the book with your bare hands.',
 prompt:'Epic film still, vertical 2:3: a Greek warrior standing firm in a marble temple doorway at night, spear planted, burning city glowing behind him, a marble statue of a goddess with an owl looming above, embers in the air, photorealistic, heroic composition, no text',
 goto:'S09'},

S08c:{type:'beat', phase:'THE QUIET EXIT', objective:'Leave before the sins clear customs',
 media:{img:'assets/img/s08c.jpg'}, kb:'kb-out',
 vo:'You take your twelve ships out on the dawn tide while Troy still burns.|No goodbyes. Goodbyes come with oaths — and oaths come with other people’s curses.',
 prompt:'Epic film still, vertical 2:3: twelve ancient Greek galleys slipping out of a bay at first light, a burning city small on the horizon behind them, calm dark water, photorealistic, melancholic beauty, no text',
 goto:'S09'},

S09:{type:'beat', phase:'THE FALL', objective:'Troy burns',
 media:{img:'assets/img/s09.jpg'}, kb:'kb-in',
 vo:'By dawn, it is done. Ten years, ended by carpentry.|They will sing about this horse forever — the city that burned because of your beautiful idea.',
 prompt:'Epic film still, vertical 2:3: the wooden Trojan Horse silhouetted against an entire city in flames at night, sparks storming upward, photorealistic, apocalyptic orange and black, no text',
 goto:'S10'},

S10:{type:'beat', phase:'THE CROSSING', objective:'Sail home. If the sea allows.',
 media:{img:'assets/img/s10.jpg'}, kb:'kb-left',
 vo:'The Fates do not like editors.|A nine-day blow drags your ships across the map like game pieces —|and drops you on a green island where the sheep are the size of oxen.',
 prompt:'Epic film still, vertical 2:3: Greek galley battling a monstrous storm, mast bent, giant waves, men hauling ropes, rain sheets, photorealistic, dark teal chaos, no text',
 goto:'S11'},

S11:{type:'beat', phase:'THE ISLAND', objective:'Do not enter the cave. (You will enter the cave.)',
 media:{img:'assets/img/s11.jpg'}, kb:'kb-in',
 vo:'A cave in the cliffs. Cheese wheels the size of cartwheels. Pens for giant lambs.|A doorway boulder that twenty ox-teams could not move.|You have read this chapter. You know exactly who lives here — and your men are already unpacking.',
 prompt:'Epic film still, vertical 2:3: interior of a colossal cave, giant cheese wheels on stone shelves, sheep pens, huge cold firepit, small Greek soldiers exploring with torches dwarfed by the scale, photorealistic, foreboding, no text',
 goto:'S12'},

S12:{type:'beat', phase:'THE CAVE', objective:'He is home.',
 media:{img:'assets/img/s12.jpg', video:'assets/vid/s12.mp4'}, kb:'kb-in',
 caption:'Strangers... WHO are you, little things? Speak.',
 vo:'The boulder seals the door like a coin dropped on an ant.|One eye — taller than your mast — finds you in the firelight.|“Strangers,” it says. “Who are you?”',
 prompt:'Epic film still, vertical 2:3: a colossal one-eyed giant cyclops face illuminated by firelight inside a cave, single huge eye reflecting tiny frightened soldiers, wild hair and beard, photorealistic creature design, terrifying, no text',
 goto:'M1'},

M1:{type:'meter', phase:'PROLOGUE BOSS', objective:'Make him believe you are nobody at all',
 media:{img:'assets/img/s12.jpg', video:'assets/vid/s12.mp4', muted:true, loop:true},
 title:'THE GIANT’S SUSPICION', goalText:'Read what the monster wants to hear. Cross the gold line, and you walk out of this cave.',
 start:35, gold:75, fail:'D1',
 rounds:[
  {ask:'“WHO are you, little thing? Kings? Heroes? Speak.”',
   intel:'👁 He despises boasting. Feed him smallness — the book agrees.',
   options:[
    {label:'“I am Nobody. Nobody is my name. Nobody raised me.”', tone:'HUMBLE', delta:22, react:'The eye narrows, satisfied. Nothing worth remembering here.'},
    {label:'“A king of Ithaca — and you will regret this cave.”', tone:'PROUD', delta:-18, react:'The eye lights up. Kings are his favorite dinner.'},
    {label:'“Shipwrecked traders. Nothing on us worth eating.”', tone:'SLY', delta:10, react:'A grunt. Traders bore him. Boring is safe.'}]},
  {ask:'He eyes the wineskin at your belt. “What is that, Nobody?”',
   intel:'👁 Strong wine makes weak questions. Pour with both hands.',
   options:[
    {label:'Offer it unwatered: “A gift, friend. Drink deep.”', tone:'GENEROUS', delta:22, react:'He drinks like a valley floods. The eye grows soft and stupid.'},
    {label:'“Gifts go both ways. What do I get, host?”', tone:'ENTITLED', delta:-15, react:'He laughs. “My gift: I eat Nobody LAST.” The book warned you about this joke.'},
    {label:'“Trade. The wine for two of your sheep.”', tone:'MERCHANT', delta:8, react:'He respects a deal he intends to break.'}]},
  {ask:'The eye is drooping. One question left in it: “Where… is your ship, Nobody?”',
   intel:'👁 The book’s answer is a lie about a wreck. Do not improve on perfection.',
   options:[
    {label:'“Wrecked on your rocks. We are all that is left.”', tone:'BY THE BOOK', delta:22, react:'He smiles, cruel and slow — and sleep takes him mid-thought.'},
    {label:'“Safe. Far from you.”', tone:'HONEST', delta:-20, react:'The eye snaps open. Honesty, at last — his favorite appetizer.'},
    {label:'Say nothing. Start sharpening the olive stake.', tone:'BUSY', delta:6, react:'He watches you work. Whittling bores him. Good.'}]}],
 win:'S13'},

S13:{type:'beat', phase:'THE ESCAPE', objective:'Ride out under the sheep',
 media:{img:'assets/img/s13.jpg'}, kb:'kb-right',
 vo:'The stake hisses. The giant screams to his neighbors that NOBODY has blinded him —|and his neighbors, hearing that nobody has hurt him, go back to bed.|At dawn you ride out under the bellies of his sheep. Greatest trick in the book. You did it better.',
 prompt:'Epic film still, vertical 2:3: dawn at a cave mouth, giant wooly sheep walking out with Greek soldiers clinging hidden beneath their bellies, golden morning light, huge blinded giant silhouette groping in the background, photorealistic, tense triumph, no text',
 goto:'S14'},

S14:{type:'choice', phase:'THE NAME', objective:'The most important choice in the book',
 media:{img:'assets/img/s14.jpg'},
 vo:'The ship pulls away. He hurls a cliff-top after your wake.|And here it comes — the itch that ruins the next ten years.|The original could not resist. He shouted his real name, his father, his home address. And the sea god came hunting.',
 prompt:'Epic film still, vertical 2:3: view from a departing Greek galley of a colossal blinded giant on a cliff hurling a mountain boulder, huge splash near the ship, dawn sea, tiny defiant hero at the stern rail, photorealistic, epic scale, no text',
 ask:'The whole epic runs on this one shout. Your call, reader.',
 intel:'👁 Stay Nobody, and Poseidon never learns who to curse.',
 options:[
  {label:'Sail away silent. Let Nobody take the credit. Forever.', tone:'NAMELESS', fx:{wisdom:10}, flag:'Nameless', goto:'S15a'},
  {label:'“TELL THEM ODYSSEUS BLINDED YOU!” — as written.', tone:'GLORIOUS', fx:{glory:10}, goto:'S15b'}]},

S15a:{type:'beat', phase:'OFF SCRIPT', objective:'The engine of the epic — unplugged',
 media:{img:'assets/img/s15a.jpg', video:'assets/vid/s15a.mp4'}, kb:'kb-out',
 caption:'Nobody sails home now.',
 vo:'You bite the name down. It tastes like a swallowed trumpet.|Somewhere below, a god waits for a name that never comes.|Somewhere above, an epic quietly loses its engine. The sea ahead is calm — and completely unwritten.',
 prompt:'Epic film still, vertical 2:3: a Greek galley sailing into a vast calm golden sea at sunrise, glassy water, no land, one man at the stern looking back with a small smile, photorealistic, serene and vast, no text',
 goto:'S16'},

S15b:{type:'beat', phase:'AS WRITTEN', objective:'The sea has your address now',
 media:{img:'assets/img/s15b.jpg', video:'assets/vid/s15b.mp4'}, kb:'kb-in',
 caption:'You told me your name. Now I know whose ships to drown.',
 vo:'It bursts out of you, glorious and fatal, rolling across the water.|Deep below, a father hears his son’s scream — and a name.|“You told me your name,” says the sea. “Now I know whose ships to drown.” Exactly as written.',
 prompt:'Epic film still, vertical 2:3: the sea god rising behind a small Greek galley, trident raised, storm forming from clear sky, colossal silhouette against green-black water, photorealistic, dread and majesty, no text',
 goto:'S16'},

S16:{type:'results', phase:'PROLOGUE COMPLETE',
 media:{img:'assets/img/s16.jpg', video:'assets/vid/s16.mp4', loop:true},
 title:'NOBODY SAILS WEST',
 prompt:'Epic film still, vertical 2:3: a war-worn Greek captain at the prow of his galley at dusk, wine-dark sea and distant storm on the horizon, cloak in the wind, hopeful and grim, photorealistic, painterly cinematic light, no text',
 body:'Troy is ash behind you. Ahead: a bag of winds, a witch, a song no sailor survives — and a palace full of uninvited guests.|You have read all of it.',
 next:'CHAPTER 1: THE LONG WAY HOME',
 nextNote:'Not yet written.',
 btn:'↻ Run the prologue again'},

D1:{type:'death',
 media:{img:'assets/img/d1.jpg'},
 title:'CAUSE OF DEATH: MIDNIGHT SNACK',
 prompt:'Epic film still, vertical 2:3: inside a dark cave a colossal hand reaching down toward the viewer, firelight behind giant silhouette, scattered bronze helmets on the floor, photorealistic horror scale, no text',
 body:'You read the chapter. He did not. The giant ate you second — after the loud one, before the fat one.|Reading about the fight is not the same stat as winning it.',
 btn:'💀 Rewind to the cave (you remember everything)',
 goto:'S11'}
};
if (typeof module!=='undefined') module.exports = {SCENES};
