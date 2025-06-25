const interpretBtn = document.getElementById('interpretBtn');
const dreamInput = document.getElementById('dreamInput');
const oracleOutput = document.getElementById('oracleOutput');

const interpretations = [
    "The stars whisper secerts hidden deep within your soul...",
    "A cosmic tide pulls you toward unknown horizons...",
    "This dream...these fragements of a forgotton universe...",
    "The swirling nebula within your mind reflects your innermost self...",
    "This vision carries the echo of a thousand ancient galaxies...",
    "A journey of starlight and shadow is unfolding before you..."

];

const interpretationMap = {
    illusion: [
    "A shimmering veil woven from whispers and forgotten truths, the illusion dances just beyond the grasp of waking thought, inviting you to question what is real and what is dream.",
    "This vision is a fragile mirage, reflecting your deepest desires and fears alike, folding and unfolding like the petals of a spectral flower in the twilight of the mind.",
    "The illusion masks the hidden pathways of your soul, a delicate tapestry of light and shadow that beckons you to seek the unseen realms beneath the surface of perception."
  ],
  hollow: [
    "An echoing chamber within the self, hollow speaks of emptiness and space not of loss, but of the quiet room where transformation patiently waits.",
    "The hollow is the sacred void that cradles beginnings and endings alike, a silent sanctuary carved by time’s slow hands where new life takes root unseen.",
    "Within the hollow lies the heartbeat of the universe a stillness that calls you to listen beyond the noise and discover the fertile ground beneath absence."
  ],
  hell: [
    "A blazing forge of inner torment and unyielding trial, hell is the crucible where the soul confronts its fiercest shadows and emerges tempered like steel from flame.",
    "This fiery realm is not punishment but transformation a burning away of falsehoods and fears to reveal the raw ember of your truest self, glowing fiercely beneath the ash.",
    "Hell’s inferno consumes illusions and comforts alike, forcing a reckoning with the primal fires that both destroy and renew, leaving behind a path scorched yet alive with possibility."
  ],
   heaven: [
    "A boundless expanse of radiant light and serene whispers, heaven embodies the promise of peace beyond mortal struggles a celestial haven where spirit and dreams entwine.",
    "This luminous realm shimmers with the soft glow of infinite grace, where every star sings a hymn of hope and every breeze carries the breath of ancient blessings.",
    "Heaven is the gentle embrace that soothes the weary heart, a timeless sanctuary where the soul finds rest beneath skies painted with the colors of eternity."
  ],
  haven: [
    "",
    "",
    ""
  ],
  haze: [
    "",
    "",
    ""
    ],
   frost: [
    "",
    "",
    ""
  ],
  story: [
    "",
    "",
    ""
  ],
  echo: [
    "",
    "",
    ""
  ],
   dusk: [
    "",
    "",
    ""
  ],
  dawn: [
    "",
    "",
    ""
  ],
  cocoon: [
    "",
    "",
    ""
  ],
  cliff: [
    "",
    "",
    ""
  ],
  chasm: [
    "",
    "",
    ""
  ],
  cascade: [
    "",
    "",
    ""
  ],
   bloom: [
    "",
    "",
    ""
  ],
  arcane: [
    "",
    "",
    ""
  ],
  abyss: [
    "",
    "",
    ""
  ],
   blackhole: [
    "",
    "",
    ""
  ],
  starwhale: [
    "",
    "",
    ""
  ],
  antimatter: [
    "",
    "",
    ""
  ],
   wormhole: [
    "",
    "",
    ""
  ],
  constellation: [
    "",
    "",
    ""
  ],
  galaxy: [
    "",
    "",
    ""
  ],
  void: [
    "",
    "",
    ""
  ],
  guardian: [
    "",
    "",
    ""
  ],
  tomb: [
    "",
    "",
    ""
  ],
   prophet: [
    "",
    "",
    ""
  ],
  prophecy: [
    "",
    "",
    ""
  ],
  skeleton: [
    "",
    "",
    ""
  ],
   dragon: [
    "",
    "",
    ""
  ],
  sphinx: [
    "",
    "",
    ""
  ],
  phoenix: [
    "",
    "",
    ""
  ],
   temple: [
    "",
    "",
    ""
  ],
  oracle: [
    "",
    "",
    ""
  ],
  crown: [
    "",
    "",
    ""
  ],
  sigil: [
    "",
    "",
    ""
  ],
  rune: [
    "",
    "",
    ""
  ],
  obsidian: [
    "",
    "",
    ""
  ],
   labyrinth: [
    "",
    "",
    ""
  ],
  hourglass: [
    "",
    "",
    ""
  ],
  rainfall: [
    "",
    "",
    ""
  ],
   aurora: [
    "",
    "",
    ""
  ],
  comet: [
    "",
    "",
    ""
  ],
  eclipse: [
    "",
    "",
    ""
  ],
   reflection: [
    "",
    "",
    ""
  ],
  doppelganger: [
    "",
    "",
    ""
  ],
  silence: [
    "",
    "",
    ""
  ],
  blindness: [
    "",
    "",
    ""
  ],
  faceless: [
    "",
    "",
    ""
  ],
  puppet: [
    "",
    "",
    ""
  ],
   fear: [
    "",
    "",
    ""
  ],
  joy: [
    "",
    "",
    ""
  ],
  confusion: [
    "",
    "",
    ""
  ],
   longing: [
    "",
    "",
    ""
  ],
  isolation: [
    "",
    "",
    ""
  ],
  regret: [
    "",
    "",
    ""
  ],
   acceptance: [
    "",
    "",
    ""
  ],
  rebirth: [
    "",
    "",
    ""
  ],
  danger: [
    "",
    "",
    ""
  ],
  peace: [
    "",
    "",
    ""
  ],
  stranger: [
    "",
    "",
    ""
  ],
  child: [
    "",
    "",
    ""
  ],
   mother: [
    "",
    "",
    ""
  ],
  twin: [
    "",
    "",
    ""
  ],
  shadow: [
    "",
    "",
    ""
  ],
   crowd: [
    "",
    "",
    ""
  ],
  ghost: [
    "",
    "",
    ""
  ],
  animal: [
    "",
    "",
    ""
  ],
   hunter: [
    "",
    "",
    ""
  ],
  guide: [
    "",
    "",
    ""
  ],
  ocean: [
    "",
    "",
    ""
  ],
  fire: [
    "",
    "",
    ""
  ],
  forest: [
    "",
    "",
    ""
  ],
  moon: [
    "",
    "",
    ""
  ],
   storm: [
    "",
    "",
    ""
  ],
  cave: [
    "",
    "",
    ""
  ],
  desert: [
    "",
    "",
    ""
  ],
   mountain: [
    "",
    "",
    ""
  ],
  river: [
    "",
    "",
    ""
  ],
  eclipse: [
    "",
    "",
    ""
  ],
   bed: [
    "",
    "",
    ""
  ],
  doorframe: [
    "",
    "",
    ""
  ],
  key: [
    "",
    "",
    ""
  ],
  window: [
    "",
    "",
    ""
  ],
  stairs: [
    "",
    "",
    ""
  ],
  rope: [
    "",
    "",
    ""
  ],
   mask: [
    "",
    "",
    ""
  ],
  mirror: [
    "",
    "",
    ""
  ],
  door: [
    "",
    "",
    ""
  ],
   flying: [
    "",
    "",
    ""
  ],
  falling: [
    "",
    "",
    ""
  ],
  floating: [
    "",
    "",
    ""
  ],
   drowning: [
    "",
    "",
    ""
  ],
  running: [
    "",
    "",
    ""
  ],
  frozen: [
    "",
    "",
    ""
  ],
    trapped: [
    "",
    "",
    ""
  ],
   transform: [
    "",
    "",
    ""
  ],
  escaping: [
    "",
    "",
    ""
  ],
  hiding: [
    "",
    "",
    ""
  ],

}

function getRandomInterpretation() {
    const index = Math.floor(Math.random() * interpretations.length);
    return interpretations[index];
}

function formatDreamText(text) {
    const trimmed = text.trim();
    const capitalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    return capitalized.replace(/\s+/g, ' ');
}

interpretBtn.addEventListener('click', () => {
    const rawDream = dreamInput.value
    const dreamText = formatDreamText(rawDream);
    const tone = document.getElementById('toneSelect').value;
    
    if (!dreamText) {
        oracleOutput.textContent = "Please share your dream to receive the oracles insight.";
        return;
    }

    if (!dreamText || dreamText.length < 10) {
        oracleOutput.textContent = "The stars need more to go on. Share a deeper vision with them...";
        return;
    }

    oracleOutput.textContent = "The oracle is interpreting yout dream...";
    oracleOutput.classList.add('fade-in');

    setTimeout(() => {
        oracleOutput.textContent = `${getRandomInterpretation()} (${tone} undertones)`;
        oracleOutput.classList.add('fade-in');
    }, 1200);
 
});

