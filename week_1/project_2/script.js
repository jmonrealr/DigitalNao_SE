let cards = document.getElementById('cards');
const createCard = () => {
    const col = document.createElement('div');
    col.className = "col";

    const card = document.createElement('div');
    card.className = "card text-white bg-primary mb-3";
    card.style.maxWidth = "18rem";

    const cardHeader = document.createElement('div');
    cardHeader.className = "card-header";
    cardHeader.innerText = "Header";

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";

    const cardTitle = document.createElement('h5');
    cardTitle.className = "card-title";
    cardTitle.innerText = "Primary card title";

    const cardText = document.createElement('p');
    cardText.className = "card-text";
    cardText.innerText = "Some quick example text to build on the card title and make up the bulk of the card's content.";

    cardTitle.appendChild(cardText);
    cardBody.appendChild(cardTitle);
    cardHeader.appendChild(cardBody);
    card.appendChild(cardHeader);
    col.appendChild(card);
    cards.appendChild(col);

};

function addCards() {
    for (let i = 0; i < 15; i++) {
        createCard()
    }
}

let throttleTimer;
const throttle = (callback, time) => {
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
        callback();
        throttleTimer = false;
    }, time);
};

const infiniteScroll = () => {
    throttle(() => {
        const endPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
        if (endPage) {
            addCards()
        }
    }, 1000);

};
window.addEventListener("scroll", infiniteScroll);
// setInterval(addCards, 1000);
window.onload = function () {
    addCards()
}