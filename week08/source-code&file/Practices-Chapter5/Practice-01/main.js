const addButton = document.getElementById("add")
addButton.addEventListener("click", () => {
 //writh code here
const box = document.getElementById("box");
const addBorder = document.getElementById("add");
const removeBorder = document.getElementById("remove");
const toggleBtn = document.getElementById("toggle");

addBorder.addEventListener("click", () => {
  box.classList.add("bordered");
});

removeBorder.addEventListener("click", () => {
  box.classList.remove("bordered");
});
toggleBtn.addEventListener('click', () => {
  box.classList.toggle('bordered');
});
})




