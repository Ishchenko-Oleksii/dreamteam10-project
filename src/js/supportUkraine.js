import save from '../images/save-the-children.png';
import hope from '../images/project-hope.png';
import united from '../images/united-24.png';
import corps from '../images/international-medical-corps.png';
import frontieres from '../images/medecins-sans-frontieres.png';
import razom from '../images/razom.png';
import hunger from '../images/action-against-hunger.png';
import vision from '../images/world-vision.png';
import prytula from '../images/sergiy-prytula.png';

import save2x from '../images/save-the-children@2x.png';
import hope2x from '../images/project-hope@2x.png';
import united2x from '../images/united-24@2x.png';
import corps2x from '../images/international-medical-corps@2x.png';
import frontieres2x from '../images/medecins-sans-frontieres@2x.png';
import razom2x from '../images/razom@2x.png';
import hunger2x from '../images/action-against-hunger@2x.png';
import vision2x from '../images/world-vision@2x.png';
import prytula2x from '../images/sergiy-prytula@2x.png';

const fondsNames = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: save,
    img2x: save2x,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: hope,
    img2x: hope2x,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united,
    img2x: united2x,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: corps,
    img2x: corps2x,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: frontieres,
    img2x: frontieres2x,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
    img2x: razom2x,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: hunger,
    img2x: hunger2x,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: vision,
    img2x: vision2x,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: prytula,
    img2x: prytula2x,
  },
];

console.log(fondsNames);

const fondsList = document.querySelector(`.support__list`);

const fondsItem = fondsNames.map((fond, index) => {
  addFondToList(fond, index);
});

function addFondToList({ title, url, img, img2x }, index) {
  const number = index + 1;
  fondsList.insertAdjacentHTML(
    `beforeend`,
    `<li class="support__item slider__slide swiper-slide"><a href="${url}" target="_blank" class="support__link slider__link"><span class="support__number">${String(
      number
    ).padStart(2, `0`)}</span><picture>
        <source
          srcset="
            ${img}    1x,
            ${img2x} 2x"
          type="image/png"
        />
        <img class="support__img" src="${img}" alt="${title}">
      </picture></a></li>`
  );
}
