let a;
let date;
let time;
let hh;
let mm;
let ss;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    if(hh < 9){
        hh = "0" + a.getHours();
    } else {
        hh = a.getHours();
    }
    if(mm < 9){
        mm = "0" + a.getMinutes();
    } else {
        mm = a.getMinutes();
    }
    if(ss < 9){
        ss = "0" + a.getSeconds();
    } else {
        ss = a.getSeconds();
    }
    date = a.toLocaleString(undefined, options);
    time = hh + ":" + mm + ":" + ss;
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;
    random_bg();
}, 500);

    function random_bg() {
        let red = Math.floor(Math.random() * 256) + 69;
        let green = Math.floor(Math.random() * 256) + 69;
        let blue = Math.floor(Math.random() * 256) + 69;

        bg_color = "rgb(" + red + ", " + green + ", " + blue + ")";
        // document.querySelector(".container").style.backgroundColor = bg_color;
        document.body.style.backgroundColor = bg_color;
    }

    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none"
    }, 2000);



