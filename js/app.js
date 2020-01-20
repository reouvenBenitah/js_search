var countries = ['Argentina', 'Israel', 'America', 'Paris', 'Jordan', 'Spain'];
var $cl = document.getElementById('countries-list');
var countriesSearch = document.getElementById('countries-search');
countries.sort()
displayCountries(countries);
countriesSearch.addEventListener('keyup', function (e) {
  var userText = e.target.value.trim().toLowerCase();

  if (userText.length > 0) {

    var result = countries.filter(function (country) {
      return country.toLowerCase().indexOf(userText) === 0;
    });
    displayCountries(result);

  } else {
    displayCountries(countries);
  }
});




function displayCountries(array) {

  var markUp = '';
  array.filter(function (country) {
    markUp += '<li>' + country + '</li>';
    
  });

  $cl.innerHTML = markUp;

}