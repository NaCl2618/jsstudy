console.log("loading background.js");

const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(../jsstudy/img/${chosenImage})`;



