const field = document.querySelector('.textfield');

field.addEventListener('change', (event) => {
  field.classList.add("dirty");
});