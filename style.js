



/*BACKGROUND CHANGE*/
const colors = ['#C45B30','#D5CCC1','#3C5F60','#97826D'];

const button = document.querySelector('.button');

const colorcode = document.querySelector('.color-code');

button.addEventListener('click', function(){
const randomNumber = getRandomNumber();
document.body.style.backgroundColor = colors[randomNumber];
colorcode.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
};

/*HAMBURGER*/

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });