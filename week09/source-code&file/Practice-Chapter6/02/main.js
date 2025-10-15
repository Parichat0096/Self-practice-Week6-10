
const message = document.querySelector('#keyInput')
const display = document.querySelector('#keyLog')

message.addEventListener("keydown", function (e) {
    const newParagraph = document.createElement("p")

    if (e.key === "Enter") {
        newParagraph.textContent = "You pressed: Enter"
        newParagraph.style.color = "blue"
    } 
    else {
        newParagraph.textContent = `You pressed: ${e.key}`
    }

    display.appendChild(newParagraph)
})