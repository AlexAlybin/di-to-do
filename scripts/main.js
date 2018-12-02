let addCardBtn = document.getElementById('add-card-button');

let deleteCardBtn = document.querySelectorAll('.delete-card-button');

addCardBtn.onclick = function addNewCard(){
	//Create new card element on page
	let newCard = document.createElement('div');
	newCard.className = 'main-card';
	newCard.innerHTML = '<div class="card-header">' + 
              				'<input type="text" name="card-title" class="card-title" placeholder="Input card title">' + 
              				'<button class="delete-card-button"></button>' +
          				'</div>' +
          				'<div class="card-items-list">' +
          				'</div>' +
          				'<input type="text" name="new-item-name" placeholder="Add to-do" class="card-add-input">'

    //Add new card to page
	document.getElementById('cards-area').appendChild(newCard);
}

for (let i = 0; i < deleteCardBtn.length; i++) {
	deleteCardBtn[i].addEventListener('click', deleteCard);
	console.log('Test');		
}

function deleteCard(e){
	console.log(e.target);
}

// 	let newCardDeleteBtn = document.createElement('button');
// 	newCardDeleteBtn.className = 'delete-card-button';

//     newCardDeleteBtn.addEventListener('click', deleteCard);



// 	newCardItemInput.addEventListener('keydown', addListItem);



//Remove card from page
// function deleteCard(e) {
// 	if (confirm('Delete card?')) {
// 	e.target.parentNode.parentNode.remove(this.parentNode);
// 	}
// }

//Add list item
function addListItem(e){
	e.preventDefault;
//Get value from input field
	let newItemText = e.target.value;

	console.log(e.target.value);
	
	if (e.key === 'Enter') {

//Create new card list item
	let cardItem = document.createElement('div');
	cardItem.className = 'card-item';

// Create new checkbox container
	let checkboxContainer = document.createElement('label');
	checkboxContainer.className = 'checkbox-container';

	let checkboxInput = document.createElement('input');
	checkboxInput.setAttribute('type', 'checkbox');

	let checkboxBackground = document.createElement('span');
	checkboxBackground.className = 'item-checkbox';

// Add to checkbox field
	checkboxContainer.appendChild(checkboxInput);
	checkboxContainer.appendChild(checkboxBackground);

	let itemText = document.createElement('label');
	itemText.className = 'item-text';
	itemText.textContent = newItemText;

//Add checbox container and text to card list item
	cardItem.appendChild(checkboxContainer);
	cardItem.appendChild(itemText);

//Add card item to card
	e.target.previousSibling.appendChild(cardItem);
	e.target.value = '';
	}
}