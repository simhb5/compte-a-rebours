let bodyEl = document.getElementsByTagName("body")[0];
let titleEl = document.getElementById("title");
let minuteurEl = document.getElementById("minuteur");
let messageEl = document.getElementById("message");
let joursEl = document.getElementById("j");
let heuresEl = document.getElementById("h");
let minutesEl = document.getElementById("m");
let secondesEl = document.getElementById("s");

//date reseau local
let now = new Date();
const dateOffsetInMinutes = now.getTimezoneOffset();

//calcul de date
const unJoursEnMs = 1000*60*60*24;
const uneHeureEnMs = 1000*60*60;
const uneMinuteEnMs = 1000*60;

//date du compte a rebour
// const newYear = Date.now() - (dateOffsetInMinutes * uneMinuteEnMs) + 2000;
const newYear = new Date("Jan 1 02:00:00 2023");

const getCountdown = () => {
    let nowDate = Date.now();

    let tempsRestantEnMs = newYear - nowDate + dateOffsetInMinutes * uneMinuteEnMs;

    //jours
    let nbJours = Math.floor(tempsRestantEnMs / unJoursEnMs);

    //heures
    let resteTempsSansJoursMs = tempsRestantEnMs - nbJours * unJoursEnMs;
    let nbHeures = Math.floor(resteTempsSansJoursMs / uneHeureEnMs);

    //minutes
    let resteTempsSansHeuresEnMs = resteTempsSansJoursMs - nbHeures * uneHeureEnMs;
    let nbMinutes = Math.floor(resteTempsSansHeuresEnMs / uneMinuteEnMs);

    //secondes
    let resteTempsSansMinutesEnMs = resteTempsSansHeuresEnMs - nbMinutes * uneMinuteEnMs;
    let nbSecondes = Math.floor(resteTempsSansMinutesEnMs / 1000);
  
    joursEl.textContent = nbJours;
    heuresEl.textContent = nbHeures;
    minutesEl.textContent= nbJours;
    secondesEl.textContent = nbSecondes;

   if(tempsRestantEnMs <= 0){
        clearInterval(countDownInterval);
        bodyEl.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2017/01/04/21/00/fireworks-1953253_960_720.jpg")';
        joursEl.textContent = 0;
        heuresEl.textContent = 0;
        minutesEl.textContent= 0;
        secondesEl.textContent = 0;
        titleEl.innerHTML = "Bonne année !!! &#127881;&#127881;";
   }
};

let countDownInterval = setInterval(getCountdown, 1000);



//initialisation
getCountdown();

