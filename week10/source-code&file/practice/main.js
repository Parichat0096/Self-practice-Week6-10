

const saveButton = document.getElementById("saveBtn");
saveButton.addEventListener("click", () => {
  const bgColor = document.getElementById("bgColor").value;
  const fontColor = document.getElementById("fontColor").value;
  const fontSize = document.getElementById("fontSize").value;


  localStorage.setItem("bgColor", bgColor);
  localStorage.setItem("fontColor", fontColor);
  localStorage.setItem("fontSize", fontSize);


  document.body.style.backgroundColor = bgColor;
  document.body.style.color = fontColor;
  document.body.style.fontSize = fontSize;

});


const resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", () => {
  localStorage.clear();


  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.body.style.fontSize = "medium";

  document.getElementById("bgColor").value = "#ffffff";
  document.getElementById("fontColor").value = "#000000";
  document.getElementById("fontSize").value = "medium";

});



document.addEventListener("DOMContentLoaded", () => {
  const savedBg = localStorage.getItem("bgColor");
  const savedFont = localStorage.getItem("fontColor");
  const savedSize = localStorage.getItem("fontSize");

  if (savedBg && savedFont && savedSize) {
    document.body.style.backgroundColor = savedBg;
    document.body.style.color = savedFont;
    document.body.style.fontSize = savedSize;

    document.getElementById("bgColor").value = savedBg;
    document.getElementById("fontColor").value = savedFont;
    document.getElementById("fontSize").value = savedSize;
  }
});
