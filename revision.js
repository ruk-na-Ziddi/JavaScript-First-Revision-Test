var r={};
exports.revision=r;

//----------------------------Required Functions-------------------------------------//
var vowels=["a","e","i","o","u"];

var countVowels=function(text){
	var noOfVowels=0;
	text.split('').forEach(function(element){
		(vowels.indexOf(element.toLowerCase())>=0) && noOfVowels++;
	});
	return noOfVowels;
};

var getArrayOfVowelCount=function(array){
	var vowelCounts=[];
	array.forEach(function(element){
		vowelCounts.push(countVowels(element));
	});
	return vowelCounts;
};

var getGreatestNo=function(array){
	return Math.max.apply(null,array);
};

var getSmallestNo=function(array){
	return Math.min.apply(null,array);
};

var getValuesOfObject=function(object){
	var values=[];
	Object.keys(object).forEach(function(key){
		values.push(object[key]);
	});
	return values;
};
//-----------------------------------------------------------------------------------//

r.add=function(numbers,value){
	return numbers.map(function(element){
		return element+value;
	});					
};

r.impose=function(array1,array2){
	return array1.map(function(element,index){
		return (element+array2[index])||element;
	});
};

r.reverseText=function(text){
	return text.split('').reverse().join('');
};

r.decodeList=function(array){
	var cloneArray=JSON.parse(JSON.stringify(array));
	return cloneArray.reverse().map(function(element){
		return element.split('').reverse().join('');
	}).join(' ');
};

r.getVowelCount=function(text){
	return countVowels(text);
};

r.findBestVowelWord=function(array){
	var noOfVowelsInArray=getArrayOfVowelCount(array);
	var greatestNo=getGreatestNo(noOfVowelsInArray);
	return array[noOfVowelsInArray.indexOf(greatestNo)];
};

r.findWorstVowelWord=function(array){
	var noOfVowelsInArray=getArrayOfVowelCount(array);
	var smallestNo=getSmallestNo(noOfVowelsInArray);
	return array[noOfVowelsInArray.indexOf(smallestNo)];
};

r.getMatchingCurrencies=function(currencies,countries){
	return countries.map(function(country){
		return currencies[country]||"missing";
	});
};

r.getCountryCount=function(currencies){
	return Object.keys(currencies).length;
};

r.getCountries=function(currencies){
	return Object.keys(currencies).join(';');
};

r.getCountry=function(currencies,currency){
	var allCurrencies=getValuesOfObject(currencies);
	var countries=Object.keys(currencies);
	return countries[allCurrencies.indexOf(currency)]||"missing";
};

r.tidyText=function(text){
	return text.replace(/\s+/g,' ').trim();
};

r.reverseWords=function(text){
	return text.split(' ').map(function(word){
		return word.split('').reverse().join('');
	}).join(' ');
};