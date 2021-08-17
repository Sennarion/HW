const container = document.querySelector('.container');
createCard();

function createCard() {
	const card = document.createElement('div');
	card.classList.add('card');

	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');

	const cardTitle = document.createElement('div');
	cardTitle.classList.add('title');
	const cardTitleH1 = document.createElement('h1');
	cardTitleH1.classList.add('name');
	cardTitleH1.innerHTML = 'firstName lastName';
	cardTitle.append(cardTitleH1);

	const cardStatus = document.createElement('div');
	cardStatus.classList.add('status');
	const cardLiveStatus = document.createElement('div');
	cardLiveStatus.classList.add('live-status');

	const cardStatusP = document.createElement('p');
	cardStatusP.classList.add('live-status-text');
	const cardStatusPText = document.createTextNode('species -- status');
	cardStatus.append(cardLiveStatus);
	cardStatusP.append(cardStatusPText);
	cardStatus.append(cardStatusP);
	cardTitle.append(cardStatus);
	cardInfo.append(cardTitle);

	const cardContent = document.createElement('div');
	cardContent.classList.add('content');
	const cardContentText = document.createTextNode('Their location');
	cardContent.append(cardContentText);
	cardInfo.append(cardContent);

	card.append(cardInfo);

	const cardImage = document.createElement('div');
	cardImage.classList.add('card-image');
	const image = document.createElement('img');
	image.classList.add('image');
	image.src = 'https://static.remove.bg/remove-bg-web/bf554ca6716508caedc52f1ac289b1eec29b6734/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png';
	image.alt = 'Some image';
	cardImage.append(image);
	card.append(cardImage);
	container.append(card);
}

const characterName = document.querySelector('.name');
const statusIcon = document.querySelector('.live-status');
const liveStatus = document.querySelector('.live-status-text');
const characterLocation = document.querySelector('.content');
const image = document.querySelector('.image');


async function getCharacter() {
	let response = await fetch('https://rickandmortyapi.com/api/character');
	return response.json();
}

async function start() {
	let data = await getCharacter();
	let arr = data.results;
	console.log(arr);
	arr.forEach(element => {
		createCard(); // для каждого элемента массива я создаю новую карточку, и хочу чтобы весь код ниже выполнялся для новой карточки
		image.src = element.image;
		characterName.innerHTML = element.name;
		if (element.status == 'Dead') {
			statusIcon.classList.add('dead');
		}
		liveStatus.innerHTML = `${element.species} -- ${element.status}`;
		characterLocation.innerHTML = element.location.name;
	});
}

start();



