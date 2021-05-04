const selected = document.querySelectorAll('#selected');
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
const targetData = document.querySelectorAll('.radio');

selected.addEventListener('click', (e) => {
  optionsContainer.classList.toggle('active');
});

optionsList.forEach(option => {
  option.addEventListener('click', (e) => {
    selected.innerHTML = option.querySelector('label').innerHTML;
    optionsContainer.classList.remove('active');
  });
});