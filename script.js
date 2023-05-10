
const searchBar = document.getElementById("fruit")
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	if(typeof str !== 'string'){
		return []
	}
	let results = [];
	results = fruit.filter((fruitItem)=> fruitItem.toLocaleLowerCase().includes(str.toLocaleLowerCase()))
	return results;
}

function searchHandler(e) {
	const inputValue = e.target.value;
	const results = search(inputValue);
	showSuggestions(results, inputValue)
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

}

function useSuggestion(e) {
	searchBar.value = e.target.textContent;
	suggestions.innerHTML = "";
}

// Hide suggestions when clicking outside the search bar
document.addEventListener("click", (event)=>{
	if(!searchBar.contains(event.target)){
		suggestions.innerHTML = ''
	}
});

searchBar.addEventListener("keydown", searchHandler)
suggestions.addEventListener('click', useSuggestion);