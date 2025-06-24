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

function getRandomInterpretation() {
    const index = Math.floor(Math.random() * interpretations.length);
    return interpretations[index];
}

interpretBtn.addEventListener('click', () => {
    const dreamText = dreamInput.value.trim();
    if (!dreamText) {
        oracleOutput.textContent = "Please share your dream to receive the oracles insight.";
        return;
    }

    const response = getRandomInterpretation();
    oracleOutput.textContent = response;
});