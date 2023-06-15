function counter () {
    let deadline = new Date("Jan 1, 2024 00:00:00");
    let now = new Date();
    let distance = deadline - now;
    let data = document.getElementById('data');

    let remaining = {
        days: Math.floor(distance / 1000 / 60 / 60 / 24),
        hours: Math.floor(distance / 1000 / 60 / 60) % 24,
        minutes: Math.floor(distance / 1000 / 60) % 60,
        seconds: Math.floor(distance / 1000) % 60
    };

    if (distance < 0){
        clearInterval(timer);
         data.innerText = "EXPIRED!"
    }
    data.innerText = remaining.days + "d " + remaining.hours + "h " + remaining.minutes + "m " + remaining.seconds + "s ";
}



let timer= setInterval(counter, 1000);