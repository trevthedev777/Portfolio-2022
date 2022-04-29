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

  // Sections Active Class
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id; // Tagrgets the data-id controls in index.html
    if (id) {
      // Remove Selected from the other control buttons
      sectionButtons.forEach((btn) => {
        btn.classList.remove('active')
      })
      e.target.classList.add('active')

      // Hide Other Sections
      sections.forEach((section) => {
        section.classList.remove('active')
      })

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  })

  // Toggle Light Theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
  })
}

navTransitions();


// Form validation

function submitForm() {
  e.preventDefault();
  let fieldRequired = form.elements['input'].value;

  if (fieldRequired == '') {
    let errorMsg = document.getElementById('error');
    error.innerHTML = '<p>Please Make sure the form is filled out correctly</p>';
    error.style.display = 'block';
  } else {
    console.log('Valid Form Details');
    form.submit();
  }
}

let form = document.getElementById('registration-form');
form.addEventListener('submit', handleSubmit);