const container = document.querySelector('.container');
const form = document.querySelector('.form-container');

function createCard(element) {
	const card = document.createElement('div');
	card.classList.add('card');

	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');

	const cardTitle = document.createElement('div');
	cardTitle.classList.add('title');
	const cardTitleH1 = document.createElement('h1');
	cardTitleH1.innerHTML = element.name;
	cardTitle.append(cardTitleH1);

	const cardStatus = document.createElement('div');
	cardStatus.classList.add('status');
	const cardLiveStatus = document.createElement('div');
	cardLiveStatus.classList.add('live-status');

	const cardStatusP = document.createElement('p');
	const cardStatusPText = document.createTextNode(`${element.species} -- ${element.status}`);

	if (element.status == 'Dead') {
		cardLiveStatus.classList.add('dead');
	}

	cardStatus.append(cardLiveStatus);
	cardStatusP.append(cardStatusPText);
	cardStatus.append(cardStatusP);
	cardTitle.append(cardStatus);
	cardInfo.append(cardTitle);

	const cardContent = document.createElement('div');
	cardContent.classList.add('content');
	const cardContentText = document.createTextNode(element.location.name);
	cardContent.append(cardContentText);
	cardInfo.append(cardContent);

	card.append(cardInfo);

	const cardImage = document.createElement('div');
	cardImage.classList.add('card-image');
	const image = document.createElement('img');
	image.src = element.image;
	image.alt = `${element.name} image`;
	cardImage.append(image);
	card.append(cardImage);
	container.append(card);
}

async function getCharacter( ...arguments ) {
	let response = await fetch(`https://rickandmortyapi.com/api/character/${arguments}`);
	return response.json();
}

async function start() {
	let data = await getCharacter(2,6,8,10,12,16,18,20);
	data.forEach(element => {
		createCard(element);
	});
}

start();


function clearContainer() {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

async function filterCharacters(event) {
	clearContainer();
	if (event.target.htmlFor == 'male' || event.target.htmlFor == 'female') {
		let response = await fetch(`https://rickandmortyapi.com/api/character/?gender=${event.target.htmlFor}`);
		let data = await response.json();
		let { results } = data;
		results.forEach(element => {
			createCard(element);
		});
	}
	if (event.target.htmlFor == 'alive' || event.target.htmlFor == 'dead') {
		let response = await fetch(`https://rickandmortyapi.com/api/character/?status=${event.target.htmlFor}`);
		let data = await response.json();
		let { results } = data;
		results.forEach(element => {
			createCard(element);
		});
	}
}


form.addEventListener('click', filterCharacters);