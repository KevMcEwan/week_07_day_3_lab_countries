const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:country-names', ((event) => {
    console.log("countries received");
    const allCountryNames = event.detail;
    this.populate(allCountryNames);
  } ));

  this.element.addEventListener('change', (event) => {
    const selectedCountryIndex = event.target.value;
    PubSub.publish('SelectCountry:change', selectedCountryIndex);
  } );
}

SelectView.prototype.populate = function (arrayOfCountryNames) {
      arrayOfCountryNames.forEach((name, index) => {
        const option = document.createElement('option');
        option.textContent = name;
        option.value = name;
        this.element.appendChild(option);
      });
    }




module.exports = SelectView;
