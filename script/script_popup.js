let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

let popupBg4 = document.querySelector('.popup__bg4');
let popup4 = document.querySelector('.popup4');
let closePopupButton4 = document.querySelector('.close-popup4');
let openPopupButtons4 = document.querySelectorAll('#open-popup4');

let popupBgf = document.querySelector('.popup__bg2');
let popupf = document.querySelector('.popup2');
let closePopupButtonf = document.querySelector('.close-popup2');
let openPopupButtonsf = document.querySelectorAll('#open-popup2');

let popupBg3 = document.querySelector('.popup__bg3');
let popup3 = document.querySelector('.popup3');
let closePopupButton3 = document.querySelector('.close-popup3');
let openPopupButtons3 = document.querySelectorAll('#open-popup3');


openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});


openPopupButtonsf.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBgf.classList.add('active');
        popupf.classList.add('active');
    })
});

closePopupButtonf.addEventListener('click',() => {
    popupBgf.classList.remove('active');
    popupf.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBgf) {
        popupBgf.classList.remove('active');
        popupf.classList.remove('active');
    }
});


openPopupButtons3.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg3.classList.add('active');
        popup3.classList.add('active');
    })
});

closePopupButton3.addEventListener('click',() => {
    popupBg3.classList.remove('active');
    popup3.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg3) {
        popupBg3.classList.remove('active');
        popup3.classList.remove('active');
    }
});


openPopupButtons4.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg4.classList.add('active');
        popup4.classList.add('active');
    })
});

closePopupButton4.addEventListener('click',() => {
    popupBg4.classList.remove('active');
    popup4.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg4) {
        popupBg4.classList.remove('active');
        popup4.classList.remove('active');
    }
});
