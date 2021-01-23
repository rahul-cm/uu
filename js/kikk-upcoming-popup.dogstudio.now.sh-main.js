var LANGS_DATA = {
  fr: {
    "date": "du 5 au 8 Nov. 2020",
    "location": "Namur, Wallonie, Belgique",
    "title": "Le KIKK festival est annulé",
    "text": "",
    "button": {
      "text": "En savoir plus",
      "url": "https://galaxy.kikk.be/fr/news/2020/10/23/annulation-du-kikk-festival-2020"
    }
  },
  en: {
    "date": "5th to 8th Nov. 2020",
    "location": "Namur, wallonia, Belgium",
    "title": "KIKK festival 2020 is cancelled",
    "text": "",
    "button": {
      "text": "Read more",
      "url": "https://galaxy.kikk.be/en/news/2020/10/23/kikk-festival-2020-is-cancelled"
    }
  }
}

var lang = document.documentElement.lang;
var DATA = lang === 'fr' ? LANGS_DATA['fr'] : LANGS_DATA['en'];

var hidden = localStorage.getItem('upcoming-kikk-hidden');

// Basic DOM 
var kikkPopup = document.createElement('div');
kikkPopup.classList = 'upcoming-kikk__popup js-upcoming-kikk-popup';
document.body.appendChild(kikkPopup);

var kikkPopupBackdrop = document.createElement('div');
kikkPopupBackdrop.classList = 'upcoming-kikk__backdrop js-upcoming-kikk-close';
kikkPopup.appendChild(kikkPopupBackdrop);

var kikkPopupContentWrapper = document.createElement('div');
kikkPopupContentWrapper.classList = 'upcoming-kikk__content-wrapper';
kikkPopup.appendChild(kikkPopupContentWrapper);

var kikkPopupContent = document.createElement('div');
kikkPopupContent.classList = 'upcoming-kikk__content';
kikkPopupContentWrapper.appendChild(kikkPopupContent);

var kikkPopupClose = document.createElement('div');
kikkPopupClose.classList = 'upcoming-kikk__close js-upcoming-kikk-close';
kikkPopupContent.appendChild(kikkPopupClose);

// Bind close events
var kikkPopupCloseTriggers = kikkPopup.querySelectorAll('.js-upcoming-kikk-close');
for (let i = 0; i < kikkPopupCloseTriggers.length; i++) {
  kikkPopupCloseTriggers[i].addEventListener('click', function() {
    localStorage.setItem('upcoming-kikk-hidden', true);
    kikkPopup.style = "display: none;";
  });
}

// Show popup if it was never showed
if (!hidden) {
  kikkPopup.style = "display: block;";
}

if (DATA.date) {
  var date = document.createElement('P');
  date.classList.add('upcoming-kikk__date');
  date.innerHTML = DATA.date;

  kikkPopupContent.appendChild(date);
}

if (DATA.location) {
  var loc = document.createElement('P');
  loc.classList.add('upcoming-kikk__location');
  loc.innerHTML = DATA.location;

  kikkPopupContent.appendChild(loc);
}

if (DATA.title) {
  var title = document.createElement('P');
  title.classList.add('upcoming-kikk__title');
  title.innerHTML = DATA.title;

  kikkPopupContent.appendChild(title);
}

if (DATA.text) {
  var text = document.createElement('P');
  text.classList.add('upcoming-kikk__text');
  text.innerHTML = DATA.text;

  kikkPopupContent.appendChild(text);
}

if (DATA.button.url != '') {
  var button = document.createElement('a');
  button.classList.add('upcoming-kikk__button');
  button.href = DATA.button.url;
  button.target = '_blank';
  button.innerHTML = "See next KIKK";

  if (DATA.button.text) {
    button.innerHTML = DATA.button.text;
  }

  kikkPopupContent.appendChild(button);
}
