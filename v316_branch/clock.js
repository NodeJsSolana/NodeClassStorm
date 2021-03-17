clock();
    setInterval(clock, 1000);
    function clock() {
        var now = new Date();
        seconds = now.getSeconds();
        minutes = now.getMinutes() + seconds / 60;
        hours = (now.getHours() + minutes / 60) % 12;
        document.querySelector('.hour').style.transform = `rotate(${hours * 30}deg)`;
        document.querySelector('.minute').style.transform = `rotate(${minutes * 6}deg)`;
        document.querySelector('.second').style.transform = `rotate(${seconds * 6}deg)`;
    }