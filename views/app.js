const questionNumber = document.querySelector('#question-number');
const questionText = document.querySelector('#question');

// references for images
const topLeft = document.querySelector('#top-left');
const topRight = document.querySelector('#top-right');
const bottomLeft = document.querySelector('#bottom-left');
const bottomRight = document.querySelector('#bottom-right');

// references for links of images
const allLinks = document.querySelectorAll('a');
const topLeftLink = document.querySelector('#top-left-link');
const topRightLink = document.querySelector('#top-right-link');
const bottomLeftLink = document.querySelector('#bottom-left-link');
const bottomRightLink = document.querySelector('#bottom-right-link');

const questions = [
  'Where was our first date?', 'When did we first meet?',
  'What was the first family vaca you brought me on?',
  'Which pic was the day of our first kiss?',
  'When did we share a bed for the first time?',
  'What\'s my favorite picture of Becky G',
  'When did we first uh yanno ;)'
];

setLinks();
checkNumber();

function checkNumber() {
  const asNum = parseInt(questionNumber.textContent);
  questionNumber.textContent = (parseInt(questionNumber.textContent) + 1).toString();
  if (questionNumber.textContent === '1') {
    topLeft.setAttribute('src', '../public/colorado.JPG');
    topRight.setAttribute('src', '../public/stl2.jpg');
    bottomLeft.setAttribute('src', '../public/indy.jpg');
    bottomRight.setAttribute('src', '../public/stl.jpg');
    topRight.addEventListener('click', () => checkNumber());
    topRightLink.removeAttribute('href');
  } else if (questionNumber.textContent === '2') {
    questionText.textContent = questions[asNum];
    topLeft.setAttribute('src', '../public/colorado2.JPG');
    topRight.setAttribute('src', '../public/jazz.jpg');
    bottomLeft.setAttribute('src', '../public/indy2.jpg');
    bottomRight.setAttribute('src', '../public/lake.jpg');
  }
}

function setLinks() {
  allLinks.forEach(link => link.setAttribute('href', '/views/wrong.html'));
}