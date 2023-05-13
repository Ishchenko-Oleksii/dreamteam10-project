const fondsNames = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: '/images/save-the-children.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: '/images/project-hope.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: '/images/united-24.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: `/images/international-medical-corps.png`,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: `/images/medicins-sans-frontieres.png`,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: `/images/razom.png`,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: `/images/action-against-hunger.png`,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: `/images/world-vision.png`,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: `/images/sergiy-prytula.png`,
  },
];

console.log(fondsNames);

const fondsList = document.querySelector(`.support__list`);

const fondsItem = fondsNames.map((fond, index) => {
  addFondToList(fond, index);
});

function addFondToList({ title, url, img }, index) {
  fondsList.insertAdjacentHTML(
    `beforeend`,
    `<li class="support__item"><a href="${url}" class="support__link"><span class="support__number">${
      index + 1
    }</span><img src="${img}" alt="${title}" class="support__img"></a></li>`
  );
}
