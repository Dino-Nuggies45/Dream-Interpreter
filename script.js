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
    "A sheltered refuge amidst chaos and storm, the haven offers solace a quiet harbor where the spirit may anchor and gather strength before venturing forth anew.",
    "This sacred place whispers safety and warmth, a bastion of light in the tempest, inviting weary travelers to lay down their burdens and heal within its embrace.",
    "The haven cradles the fragile seeds of renewal, a sanctuary carved from shadows and light where hope is nurtured like a tender flame against the dark."
  ],
  haze: [
    "A misty veil that blurs the boundaries between known and unknown, haze cloaks the mind in soft uncertainty an invitation to explore the twilight realms of possibility.",
    "This shimmering fog drifts through memory and dream alike, diffusing sharp edges and weaving mysteries in the liminal space where reality begins to waver.",
    "Haze is the gentle obscuring that softens the world’s harsh lines, allowing the heart to wander freely amid whispers of forgotten truths and veiled promises."
    ],
   frost: [
    "A crystalline breath of winter’s quiet touch, frost encases the world in fragile beauty a moment frozen in time where stillness reigns and secrets lie beneath the ice.",
    "The frost is the delicate armor of solitude, sparkling with cold clarity yet harboring the warmth of life beneath its shimmering surface.",
    "In frost’s icy grasp, transformation is paused a serene interlude between endings and beginnings, where the soul gathers strength beneath a veil of glistening silence."
  ],
  story: [
    "The ever-unfolding tapestry of moments, story weaves your journey in threads of light and shadow each scene a verse in the epic sung by your own becoming.",
    "This living narrative is carved from dreams and memories, a sacred text written by the heart’s quiet hand, chronicling the invisible paths that shape your soul’s voyage.",
    "Story is the song the universe hums through you, a radiant dance of endings and beginnings entwined, inviting you to become both author and witness of your unfolding legend."
  ],
  echo: [
    "A distant voice reverberating through the corridors of time, echo carries the weight of forgotten prayers and half-remembered dreams, returning to stir the soul’s depths.",
    "This lingering sound is the shadow of a whispered truth, a reminder that what is lost in the moment can be found again in the quiet spaces between heartbeats.",
    "Echo is the soul’s soft murmur across the void, a delicate call and response that binds past to present, memory to longing, in an endless celestial dance."
  ],
   dusk: [
    "The sacred hour where day kisses night goodbye, dusk is a fleeting embrace of shadow and light a liminal veil where transformation quietly unfolds.",
    "This twilight moment hums with secrets and sighs, painting the sky in hues of longing and promise, inviting the soul to wander beyond the known horizon.",
    "Dusk is the threshold between worlds, a whispered pause where dreams begin their slow unfurling beneath the first stars’ watchful eyes."
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