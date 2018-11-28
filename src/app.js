const Country = require('./models/country.js');
const SelectView = require('./views/select_view.js');
const CountryView = require('./views/country_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const country = new Country();
  country.getData();

  const selectCountry = document.querySelector('select#countries');
  const countryList = new SelectView(selectCountry);
  countryList.bindEvents();

  const countryInfo = document.querySelector('div#country');
  const displayCountry = new CountryView(countryInfo);
  displayCountry.bindEvents();

  const countryData = new Country();
  countryData.bindEvents();

});
