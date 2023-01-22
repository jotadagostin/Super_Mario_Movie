// 1- When the user click on the button 'trailer', we have to open the 'modal' with movie's trailer.
// 2- When the user click on the x, we have to close the modal:

/*1- step1 - get the element that represent the button with js 
     step2 - identify when the user click the button
     step3 - get the elemento of the modal in the JS
     step4 - open the modal in the screeen
    
2-  step 1 - when the user click in the X we have to close the modal
    step 2 - identify when the user click in the X
    step 3 - close the modal
  
*/

//=====================STEP 1================================

const buttonTrailer = document.querySelector('.button_trailer');
const buttonCloseModal = document.querySelector('.close_modal');
const modal = document.querySelector('.modal');
const video = document.getElementById('video');
const linkOfTheVideo = video.src;

buttonTrailer.addEventListener('click', () => {
    modal.classList.add('open');
    video.setAttribute('src', linkOfTheVideo);
});

//=====================STEP 2=================================

buttonCloseModal.addEventListener('click', () => {
    modal.classList.remove('open');
    video.setAttribute('src', '');
});