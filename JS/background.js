const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const rdmImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${rdmImage}`;

document.body.appendChild(bgImage);
