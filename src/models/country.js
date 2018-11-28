const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Country = function () {

};

Country.prototype.getData = function(){
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');
  requestHelper.get((arrayOfCountries) => {
    this.arrayOfCountries = arrayOfCountries;
    const arrayOfCountryNames = arrayOfCountries.map((country) => {
      return country.name
    })
    PubSub.publish('Country:country-names', arrayOfCountryNames);
    console.log(arrayOfCountryNames);
  })
}

Country.prototype.bindEvents = function () {


  PubSub.subscribe('SelectCountry:change', (event) => {
    const selectedName = event.detail;
    this.getDataForName(selectedName);


  } );
};

Country.prototype.getDataForName = function(countryName){
  // https://restcountries.eu/rest/v2/name/france
  const requestHelper = new RequestHelper(`https://restcountries.eu/rest/v2/name/${countryName}`);
  requestHelper.get((arrayOfCountries) => {
    this.arrayOfCountries = arrayOfCountries;
    const theCountry = arrayOfCountries[0];
    PubSub.publish('Country:country-one', theCountry);
    console.log(theCountry);
  })
}


  

module.exports = Country;
