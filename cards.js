const cardContainer = document.getElementById('cardContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const flipSound = document.getElementById('flipSound');


const dreamCards = Object.entries(dreamKeywords).map(([keyword, data]) => ({
    keyword,
    emoji: data.emoji,
    positive: data.positive,
    negative: data.negative
}));

let currentIndex = 0;

function renderCards() {
    cardContainer.innerHTML = '';
    dreamCards.forEach((card, index) => {
        const div = document.createElement('div');
        div.classList.add('card');
        if (index !== currentIndex) div.classList.add('tinted');
        div.classList.toggle('active', index === currentIndex);

        div.innerHTML = `
        <div class="emoji">${card.emoji}</div>
        <h2>${card.keyword.charAt(0).toUpperCase() + card.keyword.slice(1)}</h2>
        <p><strong>Positive:</strong> ${card.positive}</p>
        <p><strong>Negative:</strong> ${card.negative}</p>
        `;

        cardContainer.appendChild(div);
    });

    const containerWidth = cardFrame.offsetWidth;
    const cardWidth = 300; 
    const offset = (containerWidth / 2) - (cardWidth / 2) - (currentIndex * cardWidth);
    cardContainer.style.transform = `translateX(${offset}px)`;

    
}

prevBtn.addEventListener('click',  () => {
    flipSound.currentTime = 0;
    flipSound.play();
    currentIndex = (currentIndex - 1 + dreamCards.length) % dreamCards.length;
    renderCards();
});

nextBtn.addEventListener('click', () => {
    flipSound.currentTime = 0;
    flipSound.play();
    currentIndex = (currentIndex + 1) % dreamCards.length;
    renderCards();
});

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  const entries = document.querySelectorAll('.card');

  entries.forEach(entry => {
    const text = entry.textContent.toLowerCase();
    const isMatch = text.includes(filter);

    entry.style.display = isMatch ? '' : 'none';

    if (filter === '') {
    entries.forEach(entry => {
        entry.style.display = '';
        entry.classList.remove('active');
        entry.classList.add('tinted');
    });
    return;
    }

    if (isMatch) {
      entry.classList.remove('tinted');
      entry.classList.add('active');
    } else {
      entry.classList.remove('active');
      entry.classList.add('tinted');
    }
  });
});


renderCards();