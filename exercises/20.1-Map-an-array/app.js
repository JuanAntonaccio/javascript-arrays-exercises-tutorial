var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	
	//add your code here and return the new value
	let far=(value*1.8)+32;
	return far;
});

console.log(arrayOfFahrenheitValues);