let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
      strings: ['Technical Writering Specialist', 'Research Writer', 'Design Engineer', 'Document Designer and Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1200,
      loop: true

    });


/* The following code is commented out as it was part of the previous implementation.
const typed = new Typed('.multiple-text', {
    string: ['Technical Writering Specialist', 'Research Writer', 'Design Engineer', 'Document Designer and Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true
})
*/