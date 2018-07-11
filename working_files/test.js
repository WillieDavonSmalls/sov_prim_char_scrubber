// var descriptionArray = [['1','1','barber'],[1,2,'nursing home'],[1,3,'warehouse']];

// var accountNum;
// var locNum;
// var description;

// accountNum = descriptionArray[0][0];
// locNum = descriptionArray[0][1]; 
// description = descriptionArray[0][2];

// console.log(accountNum, locNum, description);


var numberPattern = /^[^(]*\d+/g;

var a = 'Office building - 5; Garage - 2'.match( numberPattern );

console.log(a);