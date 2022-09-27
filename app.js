const text2 = document.querySelector('h1');
const text = document.querySelector('p');
const bodyEl = document.querySelector('body');

const mynumber = prompt('Please Write you random Number between 1-5!')

const random = Math.floor(Math.random() * 5 ) +1

if (mynumber == random ) {
    bodyEl.classList.add('colorGREEN')
    text.innerText = `You found Correct It was ${random}!!!`
}
// else if (typeof mynumber !=='number') {
//     text2.innerText = `write number not word!!!`
// }
else {
    bodyEl.classList.add('colorRED')
    text.innerText = `Unfortunatelly It was ${random}!`
}
if (mynumber == random ) {
    bodyEl.classList.add('colorGREEN')
    text2.innerText = `Good job dear!!!`
}
else if(mynumber>5){
    bodyEl.classList.add('colorRED')
    text2.innerText = `Please, Your number has to be between 1 and 5!!!`
}
else {
    bodyEl.classList.add('colorRED')
    text2.innerText = `Try Again`
}      