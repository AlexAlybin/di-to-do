const addCardBtn = document.getElementById('add-card-button');
addCardBtn.onclick = addNewCard;
let cardCount = 0;
let itemCount = 0;

function addNewCard(){
	const card = document.createElement('div');
	card.className = 'main-card';
	const cardId = cardCount++;
	card.id = `card-${cardId}`;

	console.log(card.id);

	const cardHeader = document.createElement('div');
	cardHeader.setAttribute('class', 'card-header');

	const cardTitle = document.createElement('input');
	cardTitle.setAttribute('type', 'text');
	cardTitle.setAttribute('name', 'card-title');
	cardTitle.setAttribute('class', 'card-title');
	cardTitle.setAttribute('placeholder', 'New title');
	cardTitle.onkeydown = setCardTitle;
	cardHeader.appendChild(cardTitle);

	const deleteCardBtn = document.createElement('button');
	deleteCardBtn.dataset.deleteBtnId = cardId; 
	deleteCardBtn.setAttribute('class', 'delete-card-button');
	deleteCardBtn.onclick = deleteCard;
	cardHeader.appendChild(deleteCardBtn);

	const itemsList = document.createElement('div');
	itemsList.setAttribute('class', 'card-items-list');

	const itemInput = document.createElement('input');
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

function setCardTitle(e){
	const newCardTitle = e.target.value;

	if((e.key === 'Enter') && (newCardTitle.length !== 0)){
		e.target.value = newCardTitle;
		e.target.blur();
		e.target.style.borderBottom = 'none';
	}
}

function deleteCard(e){
	if (confirm('Delete card?')) {
		const cardToDeleteID = e.target.dataset.deleteBtnId;
		const cardToDelete = document.getElementById(`card-${cardToDeleteID}`);
		cardToDelete.remove();
	}
}

function addItem(e){
	const newItemText = e.target.value;

	if ((e.key === 'Enter') && (newItemText.length !== 0)) {
	const itemCountId = itemCount++;

	const cardItem = document.createElement('div');
	cardItem.className = 'card-item';

	const checkboxContainer = document.createElement('label');
	checkboxContainer.setAttribute('class', 'checkbox-container');

	const checkboxInput = document.createElement('input');
	checkboxInput.setAttribute('type', 'checkbox');
	checkboxInput.dataset.checkboxId = itemCountId;
	checkboxInput.onchange = checkItem;
	checkboxContainer.appendChild(checkboxInput);

	const checkboxBackground = document.createElement('span');
	checkboxBackground.setAttribute('class', 'item-checkbox');
	checkboxContainer.appendChild(checkboxBackground);

	const itemText = document.createElement('label');
	itemText.setAttribute('class', 'item-text');
	itemText.id = `text-item-${itemCountId}`;
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
	const textToCheck = document.getElementById(`text-item-${e.target.dataset.checkboxId}`);
	textToCheck.classList.add('checked-item');
	} else {
	const textToCheck = document.getElementById(`text-item-${e.target.dataset.checkboxId}`);
	textToCheck.classList.add('unchecked-item');
	}
}