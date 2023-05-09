const input = document.querySelector('#fruit');

const suggestions = document.querySelector('.suggestions ul');
// console.log(suggestions, 'sugg')

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	if(typeof str !== 'string'){
		return []
	}
	let results = [];
	results = fruit.filter((fruitItem)=> fruitItem.toLocaleLowerCase().includes(str.toLocaleLowerCase()))
	return results;

	// TODO
}

function searchHandler(e) {
	// console.log(e, 'e')
	const inputValue = e.target.value;
	// console.log(inputValue, 'value')
	const results = search(inputValue);
	// console.log(results, 'results')
	showSuggestions(results, inputValue)
	// TODO
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = "";
	if(inputVal){
		results.forEach(element => {
			let newLi = document.createElement('li');
			newLi.textContent = element;
			suggestions.appendChild(newLi)
		});
	}
	// TODO

}

function useSuggestion(e) {
	// TODO
	// console.log(e, 'use')
	const inputVal = (e.target.textContent);
	// console.log(inputVal, 'inputVal')
	input.value = inputVal;
	suggestions.innerHTML = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);