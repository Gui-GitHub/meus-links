const switchInput = document.getElementById('modo-noturno-switch');
const body = document.body;

switchInput.addEventListener('change', () => {
  if (switchInput.checked) {
    body.classList.add('modo-noturno');
  } else {
    body.classList.remove('modo-noturno');
  }
});
