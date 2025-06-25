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
    "",
    "",
    ""
  ],
  hollow: [
    "",
    "",
    ""
  ],
  hell: [
    "",
    "",
    ""
  ],
   heaven: [
    "",
    "",
    ""
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

