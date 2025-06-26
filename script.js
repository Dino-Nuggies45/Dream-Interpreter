window.addEventListener("DOMContentLoaded", () => {
  const interpretBtn = document.getElementById('interpretBtn');
  const dreamInput = document.getElementById('dreamInput');
  const oracleOutput = document.getElementById('oracleOutput');

  console.log("🔮 Script loaded");
  console.log("interpretBtn:", interpretBtn);
  console.log("dreamInput:", dreamInput);
  console.log("interpretations loaded:", interpretations);

  interpretBtn.addEventListener('click', () => {
    const rawDream = dreamInput.value;
    const dreamText = formatDreamText(rawDream);
    const tone = document.getElementById('toneSelect').value;

    if (!dreamText) {
      oracleOutput.textContent = "Please share your dream to receive the oracle's insight.";
      return;
    }

    if (dreamText.length < 10) {
      oracleOutput.textContent = "The stars need more to go on. Share a deeper vision with them...";
      return;
    }

    oracleOutput.textContent = "The oracle is interpreting your dream...";
    oracleOutput.classList.add('fade-in');

    setTimeout(() => {
      let foundKeyword = null;

      for (const keyword in interpretations) {
        if (dreamText.toLowerCase().includes(keyword.toLowerCase())) {
          foundKeyword = keyword;
          break;
        }
      }

      let message;
      if (foundKeyword) {
        const lines = interpretations[foundKeyword];
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        message = `"${randomLine}" (${tone} undertones)`;
      } else {
        const keys = Object.keys(interpretations);
        const randKey = keys[Math.floor(Math.random() * keys.length)];
        const randLine = interpretations[randKey][0];
        message = `${randLine} (${tone} undertones)`;
      }

      oracleOutput.textContent = message;
      saveToJournal(foundKeyword || "random", tone, message);
    }, 1200);
  });
  

  function formatDreamText(text) {
    const trimmed = text.trim();
    const capitalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    return capitalized.replace(/\s+/g, ' ');
  }

  function saveToJournal(keyword, tone, message) {
    const entry = {
      keyword,
      tone,
      message,
      date: new Date().toISOString()
    };

    const journal = JSON.parse(localStorage.getItem('dreamJournal') || '[]');
    journal.push(entry);
    localStorage.setItem('dreamJournal', JSON.stringify(journal));
  }
});