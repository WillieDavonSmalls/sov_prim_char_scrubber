var FuzzyMatching = require('fuzzy-matching');
var fm = new FuzzyMatching(['Nursing homes', 'Residential care', 'Retirement centers', 'College dormitories', 'Stone Street Retirement','El Campo Retirement','Fairfield Retirement']);
a = fm.get('retirement nursing');
console.log(a.distance, a.value);