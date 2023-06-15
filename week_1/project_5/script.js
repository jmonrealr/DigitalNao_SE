let cards = document.getElementById('cards');
const path = "audio/"
let counter = 0;

function speak(value) {
    // console.log(value.toString());
    const audio = new Audio(path+"en_num_" + value+".mp3")
    audio.play();
}

const createCard = () => {
    for (let i = 0; i < 5; i++) {
        const group = document.createElement('div');
        group.className = "btn-group me-4";
        for (let j = 0; j < 20; j++) {
            const btn = document.createElement('button');
            btn.type = "button";
            btn.className = "btn btn-primary";
            btn.innerText = counter.toString();
            btn.id = "btn" + counter;
            btn.onclick=() => speak(+btn.innerText)
            // btn.setAttribute('onclick', speak(counter));
            group.appendChild(btn);
            counter++;
        }
        cards.appendChild(group);
    }
};

window.onload = createCard;




