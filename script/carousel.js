let precedent = document.querySelector("button:first-of-type");
let suivant = document.querySelector("button:nth-of-type(2)");
let images = document.querySelectorAll("#carousel>img");
let link_nav = document.querySelectorAll(".carousel_nav>a");
let bubble = document.querySelectorAll("rect");
let i = 0;

images[i].style.display = 'block';
bubble[i].style.stroke = 'blue';

suivant.addEventListener("click", () => {
    images[i].style.display = 'none';
    i += 1;
    if (i > images.length - 1) {
        i = 0;
    }
    images[i].style.display = 'block';
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = 'black';
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = 'black';
    }
    bubble[i].style.stroke = 'blue';
});

precedent.addEventListener("click", () => {
    images[i].style.display = 'none';
    i -= 1;
    if (i < 0) {
        i = images.length - 1;
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = 'black';
    }
    images[i].style.display = 'block';
    bubble[i].style.stroke = 'blue';
});

link_nav[0].addEventListener("click", () => {
    bubble[0].style.stroke = 'blue';
    for (let j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = 'black';
    }
    i = 0;
    images[i].style.display = 'block';
    bubble[i].style.stroke = 'blue';
});

link_nav[1].addEventListener("click", () => {
    for (let j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = 'black';
    }
    i = 1;
    images[i].style.display = 'block';
    bubble[i].style.stroke = 'blue';
});

link_nav[2].addEventListener("click", () => {
    for (let j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = 'black';
    }
    i = 2;
    images[i].style.display = 'block';
    bubble[i].style.stroke = 'blue';
});

link_nav[3].addEventListener("click", () => {
    for (let j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = 'black';
    }
    i = 3;
    images[i].style.display = 'block';
    bubble[i].style.stroke = 'blue';
});