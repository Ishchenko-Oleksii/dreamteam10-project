import save from '../images/save-the-children.png';
import hope from '../images/project-hope.png';
import united from '../images/united-24.png';
import corps from '../images/international-medical-corps.png';
import frontieres from '../images/medecins-sans-frontieres.png';
import razom from '../images/razom.png';
import hunger from '../images/action-against-hunger.png';
import vision from '../images/world-vision.png';
import prytula from '../images/sergiy-prytula.png';

const fondsNames = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: save,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: hope,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: corps,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: frontieres,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: hunger,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: vision,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: prytula,
  },
];

console.log(fondsNames);

const fondsList = document.querySelector(`.support__list`);

const fondsItem = fondsNames.map((fond, index) => {
  addFondToList(fond, index);
});

function addFondToList({ title, url, img }, index) {
  const number = index + 1;
  fondsList.insertAdjacentHTML(
    `beforeend`,
    `<li class="support__item"><a href="${url}" class="support__link"><span class="support__number">${String(
      number
    ).padStart(
      2,
      `0`
    )}</span><img src="${img}" alt="${title}" class="support__img"></a></li>`
  );
}
