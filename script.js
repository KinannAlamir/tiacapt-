// --- Le bouton "Non" qui fuit la souris comme la responsabilité après trois shots ---

const btnNon = document.getElementById('btn-non');
const btnOui = document.getElementById('btn-oui');
const ctaButtons = document.getElementById('cta-buttons');
const messageSection = document.getElementById('message-section');
const dodgeCounterEl = document.getElementById('dodge-counter');

const dodgePhrases = [
  "ça y est lâche ça babe t'es sérieuse ??.",
  "Je risque de devenir violent si tu réessaie encore",
  "Ilahn abouk keulb, tfu aleck nadinbeubeuk el halouf",
  "Bon, ça deviens gênant là appuie sur le oui pour la culture au moins.",
  "Lou c'est quoi le délire là ? mon bb je pensais qu'on avait un truc mais je me suis planté ? J'ai tout donné pour toi TOUT ? Je vais te DDOS et envoyer des rats chez toi.",
  "J'ai plus d'inspi là du coup je te laisse tranquille un moment, mais pas de nouveautés tu peux cliquer sur oui.",
  "Par ou commencer ? Quand il y a tant à dire que même 12 versets ne pourraient pas suffir. Lou... (pas de suite pour l'instant cheh),"
];

let dodgeCount = 0;

function updateDodgeCounter() {
  if (dodgeCount === 0) {
    dodgeCounterEl.textContent = '';
    return;
  }
  dodgeCounterEl.textContent = dodgePhrases[(dodgeCount - 1) % dodgePhrases.length];
}

// Zone visible réelle (tient compte de la barre d'adresse mobile)
function viewportSize() {
  const vv = window.visualViewport;
  return {
    width: Math.min(document.documentElement.clientWidth, vv ? vv.width : Infinity),
    height: Math.min(window.innerHeight, vv ? vv.height : Infinity),
  };
}

function placeNonButton(randomize) {
  const margin = 12;
  const { width, height } = viewportSize();
  const btnWidth = btnNon.offsetWidth || 120;
  const btnHeight = btnNon.offsetHeight || 50;

  const maxX = Math.max(margin, width - btnWidth - margin);
  const maxY = Math.max(margin, height - btnHeight - margin);

  let newX;
  let newY;
  if (randomize) {
    newX = margin + Math.random() * (maxX - margin);
    newY = margin + Math.random() * (maxY - margin);
  } else {
    newX = Math.min(Math.max(margin, parseFloat(btnNon.style.left) || margin), maxX);
    newY = Math.min(Math.max(margin, parseFloat(btnNon.style.top) || margin), maxY);
  }

  btnNon.style.position = 'fixed';
  btnNon.style.left = `${newX}px`;
  btnNon.style.top = `${newY}px`;
  btnNon.style.margin = '0';
}

function moveNonButton() {
  placeNonButton(true);
  dodgeCount += 1;
  updateDodgeCounter();
}

// Souris : le bouton détale dès qu'on s'en approche
btnNon.addEventListener('mouseenter', moveNonButton);

// Mobile/tactile : il esquive dès que le doigt se pose
btnNon.addEventListener('touchstart', (event) => {
  event.preventDefault();
  moveNonButton();
}, { passive: false });

// Filet de sécurité (clavier, lecteur d'écran, tap rapide) : un clic ne valide jamais "Non"
btnNon.addEventListener('click', (event) => {
  event.preventDefault();
  moveNonButton();
});

// Redimensionnement / rotation / barre d'adresse mobile : on garde le bouton visible sans compter une esquive
function keepNonButtonInView() {
  if (btnNon.style.position === 'fixed') {
    placeNonButton(false);
  }
}
window.addEventListener('resize', keepNonButtonInView);
window.addEventListener('orientationchange', keepNonButtonInView);
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', keepNonButtonInView);
}

// Clic sur "Oui" : on planque les boutons et on révèle le petit mot
btnOui.addEventListener('click', () => {
  ctaButtons.style.display = 'none';
  dodgeCounterEl.textContent = '';
  messageSection.hidden = false;
  messageSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
