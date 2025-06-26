function loadJournal() {
    const container = document.getElementById('journalEntries');
    const journal = JSON.parse(localStorage.getItem('dreamJournal') || '[]');

    if (journal.length === 0) {
        container.innerHTML = "<p>No dreams have been recorded yet...</p>";
        return;
    }

    journal.reverse().forEach(entry => {
        const div = document.createElement('div')
        div.className = 'journal-entry';
        div.innerHTML = `
            <strong>${entry.keyword}</strong> (${entry.tone})<br/>
            <em>${entry.date}</em><br/>
            <p>${entry.message}</p>
        `;

        container.appendChild(div);
    });
}

function exportJournal(format) {
    const journal = localStorage.getItem('dreamJournal');
    if (!journal) return;

    const blob = new Blob(
        [format === 'txt' ? convertToTxt(JSON.parse(journal)) : journal],
        { type: "text/plain;charset=utf-8" }
    );

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = format === 'txt' ? "dream-journal.txt" : "dream-journal.json";
    a.click();
}

function convertToTxt(entries) {
    return entries.map(entry => {
        return `🔮 Dream: ${entry.keyword} (${entry.tone})\n🕰️ Date: ${entry.date}\n💬 Message: ${entry.message}\n---`; 
    }).join("\n\n");
}

document.getElementById('exportTxt').addEventListener('click', () => exportJournal('txt'));
document.getElementById('exportJson').addEventListener('click', () => exportJournal('json'));

const bgMusic = document.getElementById('bgMusic');
const muteBtn = document.getElementById('muteBtn');


if (localStorage.getItem('muted') === 'true') {
  bgMusic.muted = true;
  muteBtn.textContent = '🔇';
}


muteBtn.addEventListener('click', () => {
  bgMusic.muted = !bgMusic.muted;
  muteBtn.textContent = bgMusic.muted ? '🔇' : '🔊';
  localStorage.setItem('muted', bgMusic.muted);
});

loadJournal();
