let allColors = [
	{label: 'Red', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Orange', sexy: true},
	{label: 'Brown', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Violet', sexy: true},
	{label: 'Purple', sexy: false},
];


function generateLI(color){
	// your code here
	let text="";
	text="<li>"+color.label+"</li>";
    return text;
}

function filterColors(color){
	// your code here
    return (color.sexy==true);
    
}

function generateHTMLFromArray(array){
	
	let filteredOptions = array.filter(filterColors);
	console.log(filteredOptions);
	let LIs = filteredOptions.map(generateLI);
    console.log(LIs);
	let htmlString = '<ul>';
	LIs.forEach(function(elm){
		htmlString += elm;
	})
	htmlString += '</ul>';
	return htmlString;
}

console.log(generateHTMLFromArray(allColors));

