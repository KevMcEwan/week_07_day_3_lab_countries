const PubSub = require('../helpers/pub_sub.js');

const CountryView = function (container) {
  this.container = container;
}

CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:country-one', (event) => {
    const country = event.detail;
    this.render(country);
    console.log('test');
  });
};

CountryView.prototype.render = function (country) {
  this.container.innerHTML = '';

  const countryName = document.createElement('h1');
  countryName.textContent = `${country.name}`;
  this.container.appendChild(countryName);

  const flag = document.createElement('img');
  flag.src = country.flag;
  this.container.appendChild(flag);

  const regionHeader = document.createElement('h3');
  const region = document.createElement('p');
  region.textContent = `${country.region}`;
  regionHeader.textContent = "Region";
  this.container.appendChild(regionHeader);
  this.container.appendChild(region);

  const currencyHeader = document.createElement('h3');
  const currency = document.createElement('p');
  currency.textContent = `${country.currencies[0].name}`;
  currencyHeader.textContent = "Currency";
  this.container.appendChild(currencyHeader);
  this.container.appendChild(currency);

};


module.exports = CountryView;

// PlanetInfoView.prototype.createImage = function(planet) {
//   const img = document.createElement('img');
//   img.classList.add('medium-image');
//   img.src = planet.image;
//   return img;
// };
