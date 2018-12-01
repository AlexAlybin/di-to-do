let addCardbtn = document.getElementById('add-card-button').addEventListener('click', addNewCard);

//Adding new blank card to page
function addNewCard(){
//Create new card element
	let newCard = document.createElement('div');
	newCard.className = 'main-card';

//Create new card header
	let newCardHeader = document.createElement('div');
	newCardHeader.className = 'card-header';

//Create new title and delete button
	let newCardTitle = document.createElement('input');
	newCardTitle.setAttribute('type', 'text');
	newCardTitle.setAttribute('name', 'card-title');
	newCardTitle.setAttribute('placeholder', 'Card title');
	newCardTitle.setAttribute('class', 'card-title');

	newCardTitle.addEventListener('submit', setCardTitle);

	let newCardDeleteBtn = document.createElement('button');
	newCardDeleteBtn.className = 'delete-card-button';

    newCardDeleteBtn.addEventListener('click', deleteCard);

//Add card title and delete button to card header
	newCardHeader.appendChild(newCardTitle);
	newCardHeader.appendChild(newCardDeleteBtn);

//Create new list of items
	let newCardItemsList = document.createElement('div');
	newCardItemsList.className = 'card-items-list';

//Create new item input field
	let newCardItemInput = document.createElement('input');
	newCardItemInput.setAttribute('type', 'text');
	newCardItemInput.setAttribute('name', 'new-item-name');
	newCardItemInput.setAttribute('placeholder', 'Add to-do');
	newCardItemInput.setAttribute('class', 'card-add-input');

	newCardItemInput.addEventListener('keydown', addListItem);

//Add header, items list and item input to card
	newCard.appendChild(newCardHeader);
	newCard.appendChild(newCardItemsList);
	newCard.appendChild(newCardItemInput);
	
//Add new card to the page
	document.getElementById('cards-area').appendChild(newCard);
}

//Remove card from page
function deleteCard(e) {
	if (confirm('Delete card?')) {
	e.target.parentNode.parentNode.remove(this.parentNode);
	}
}

//Set new card title
function setCardTitle(e){
	e.preventDefault();
	
	console.log(inputValue);
}

//Add list item
function addListItem(e){
	e.preventDefault;
//Get value from input field
	let newItemText = e.target.value;
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
	newCardItemsList.appendChild(cardItem);
	}
}