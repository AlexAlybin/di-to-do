let addCardBtn = document.getElementById('add-card-button');
addCardBtn.onclick = addNewCard;

function addNewCard(){
	//Create new card element on page
	let card = document.createElement('div');
	card.className = 'main-card';

	let cardHeader = document.createElement('div');
	cardHeader.setAttribute('class', 'card-header');

	let cardTitle = document.createElement('input');
	cardTitle.setAttribute('type', 'text');
	cardTitle.setAttribute('name', 'card-title');
	cardTitle.setAttribute('class', 'card-title');
	cardTitle.setAttribute('placeholder', 'New title');
	cardHeader.appendChild(cardTitle);

	let deleteCardBtn = document.createElement('button');
	deleteCardBtn.setAttribute('class', 'delete-card-button');
	deleteCardBtn.onclick = deleteCard;
	cardHeader.appendChild(deleteCardBtn);

	let itemsList = document.createElement('div');
	itemsList.setAttribute('class', 'card-items-list');

	let itemInput = document.createElement('input');
	itemInput.setAttribute('type', 'input');
	itemInput.setAttribute('name', 'card-item-input');
	itemInput.setAttribute('class', 'card-item-input');
	itemInput.setAttribute('placeholder', 'Add to-do');
	itemInput.onkeydown = addItem;

	card.appendChild(cardHeader);
	card.appendChild(itemsList);
	card.appendChild(itemInput);

	//Add new card to page
	document.getElementById('cards-area').appendChild(card);
}

function deleteCard(e){
	if (confirm('Delete card?')) {
	e.target.parentNode.parentNode.remove(this.parentNode);
	}
}

function addItem(e){
	let newItemText = e.target.value;

	if (e.key === 'Enter') {

	let cardItem = document.createElement('div');
	cardItem.className = 'card-item';

	let checkboxContainer = document.createElement('label');
	checkboxContainer.setAttribute('class', 'checkbox-container');

	let checkboxInput = document.createElement('input');
	checkboxInput.setAttribute('type', 'checkbox');
	checkboxInput.onchange = checkItem;
	checkboxContainer.appendChild(checkboxInput);

	let checkboxBackground = document.createElement('span');
	checkboxBackground.setAttribute('class', 'item-checkbox');
	checkboxContainer.appendChild(checkboxBackground);

	let itemText = document.createElement('label');
	itemText.setAttribute('class', 'item-text');
	itemText.textContent = newItemText;

	cardItem.appendChild(checkboxContainer);
	cardItem.appendChild(itemText);

	//Add card item to card list
	e.target.previousSibling.appendChild(cardItem);
	e.target.value = '';
	}
}

function checkItem(e){
	if (e.target.checked) {
	e.target.parentNode.nextSibling.style.textDecoration = 'line-through';
	} else {
	e.target.parentNode.nextSibling.style.textDecoration = 'none';
	}
}
















// addCardBtn.onclick = function addNewCard(){
// 	//Create new card element on page
// 	let newCard = document.createElement('div');
// 	newCard.className = 'main-card';
// 	newCard.innerHTML = '<div class="card-header">' + 
//               				'<input type="text" name="card-title" class="card-title" placeholder="Input card title">' + 
//               				'<button class="delete-card-button"></button>' +
//           				'</div>' +
//           				'<div class="card-items-list">' +
//           				'</div>' +
//           				'<input type="text" name="card-item-input" placeholder="Add to-do" class="card-add-input">'




//     //Add new card to page
// 	document.getElementById('cards-area').appendChild(newCard);
// }



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
// function addListItem(e){
// 	e.preventDefault;
// //Get value from input field
// 	let newItemText = e.target.value;

// 	console.log(e.target.value);
	
// 	if (e.key === 'Enter') {

// //Create new card list item
// 	let cardItem = document.createElement('div');
// 	cardItem.className = 'card-item';

// // Create new checkbox container
// 	let checkboxContainer = document.createElement('label');
// 	checkboxContainer.className = 'checkbox-container';

// 	let checkboxInput = document.createElement('input');
// 	checkboxInput.setAttribute('type', 'checkbox');

// 	let checkboxBackground = document.createElement('span');
// 	checkboxBackground.className = 'item-checkbox';

// // Add to checkbox field
// 	checkboxContainer.appendChild(checkboxInput);
// 	checkboxContainer.appendChild(checkboxBackground);

// 	let itemText = document.createElement('label');
// 	itemText.className = 'item-text';
// 	itemText.textContent = newItemText;

// //Add checbox container and text to card list item
// 	cardItem.appendChild(checkboxContainer);
// 	cardItem.appendChild(itemText);

// //Add card item to card
// 	e.target.previousSibling.appendChild(cardItem);
// 	e.target.value = '';
// 	}
// }