const field = document.querySelector('.textfield');

field.forEach(element => {
  element.addEventListener('change', (event) => {
    field.classList.add("dirty");
  });
});