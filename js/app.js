/*start: group 1 - page load*/

var countries = ['Argentina', 'Israel', 'America', 'Paris', 'Jordan', 'Spain'];
var $cl = document.getElementById('countries-list');
var countriesSearch = document.getElementById('countries-search'); //element user
countries.sort()
displayCountries(countries);

/*end: group 1*/


/*start: group 2 - When the user started typing (search filter)   */
countriesSearch.addEventListener('keyup', function (e) {
  var userText = e.target.value.trim().toLowerCase();//target - The specific event that the user uses (typing)
  if (userText.length > 0) {

    var result = countries.filter(function (country) {
      return country.toLowerCase().indexOf(userText) === 0;
    });

    displayCountries(result);

  } else {
    displayCountries(countries);
  }
});
/*end: group 2 -  */



function displayCountries(array) {//var array = ['Argentina', 'Israel', 'America', 'Paris', 'Jordan', 'Spain'];

  var markUp = '';
  array.map(function (country) {
    markUp += '<li>' + country + '</li>';

  });

  $cl.innerHTML = markUp;

}