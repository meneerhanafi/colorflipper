



/*BACKGROUND CHANGE*/
const colors = ['#B19567','#CCC4B9','#535140','#E7EAED','#6f7482'];

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