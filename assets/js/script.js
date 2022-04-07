// Global Variables
const sections = document.querySelectorAll('.section');
const allSections = document.querySelector('.main-content');

//Global Variables --> Buttons(Controls)
const sectionButtons = document.querySelectorAll('.controls');
const sectionButton = document.querySelectorAll('.control');

/** Switch active class to display on each nav control */
function navTransitions() {
  // Button Click Active Class
  for(let i = 0; i < sectionButton.length; i++) {
    sectionButton[i].addEventListener('click', function(){
      let currentButton = document.querySelectorAll('.active-btn');
      currentButton[0].className = currentButton[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    })
  }
}

navTransitions();