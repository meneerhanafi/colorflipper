



/*BACKGROUND CHANGE*/
const colors = ['#B77B4E','#9C515C','#E6DBD2','#33292A','#A9887F'];

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