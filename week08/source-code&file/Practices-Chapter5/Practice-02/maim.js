const box = document.getElementById("box")
const button = document.querySelectorAll("button")
button.forEach(button => {
  button.addEventListener('click', () => {
    const color = button.dataset.color;
    box.style.backgroundColor = color;
    box.textContent = color.toUpperCase();
  });
});