/*
// system dialog
const who =prompt("what is your name","typing your name")
const confirmYourName = confirm(`you are ${who}`)
//alert(`heloo, ${who}`)  // ใช้``เพื่อสามารถใส่ตัวแปรหรือ expression ลงในข้อความได้เลย 
                        // สิ่งที่อยู่ใน ${...} จะถูกแทนค่าด้วยค่าของตัวแปรนั้น
                        // ถ้า"..." และ '...' → เป็น string ปกติ --> จะไม่อ่าน ${} เป็นตัวแปร แต่เป็นแค่ตัวอักษรธรรมดา
                        //แต่ `...` → เป็น template literal --> จะมอง ${} เป็น “ที่ใส่ตัวแปรหรือ expression”
                        //หรือ เขีนยอีกแบบ alert("hello "+ who) ก็ได้แต่อันนี้คือแบบเก่า
confirmYourName ? alert(`heloo, ${who}`) : alert(`hello, gest`)  //    ย่อมาจาก
*/                                                               //if(confirmYourName) alert(`heloo, ${who}`) 
                                                                 //else alert(`hello, gest`) 




/*
//query okButton
const okButton=document.querySelector("div>button")
console.log(okButton)

//แนบไฟล์
//1. anonymous f with bobble event flow(defauit)
//okButton.addEventListener("click", () => {
//    alert("button was clicked") // =มีตัวดักฟังแล้ว
//})

//2. named f with bobble event flow(defauit)
function getTarget(event) {
    alert(`${event.target.nodeName} was fired!`) 
}
//okButton.addEventListener("click", getTarget)
function getMassage() {
    const yourMassage = prompt("what is your massage", "typing your massage..")
    alert(yourMassage)
}

//3. add more than handler f
okButton.addEventListener("click", getTarget)
okButton.addEventListener("click", getMassage)

// 4. remove handler f
//okButton.addEventListener("click", getTarget)

*/


/*

// เรื่อง event flow
//ถ้าอยากดูflowต้องadd element > 1อัน 
const okButton=document.querySelector("div>button")
okButton.addEventListener("click", () => {
    alert("button was clicked") 
},true)

const divElement = document.querySelector("div")
divElement.addEventListener("click", () => {
    alert("div element was clicked!")
},true)
//ตอนกดปุ่มokจะทำงานตั้งแต่ layerนั้นขึ้นไปในสายของตัวเอง และจัดลำดับการแสดงeventตามแบบที่เราเลือกไว้ 
*/


//event object (ถ้าไม่รับก็คือแบบข้างบน แต่ถ้ารับจะเป็นเหมือนข้างล่าง(คือต้องสร้างpamตัวนึงเพื่อมารับ ชื่อไรก็ได้แต่ควรสื่อความหมาย))
const okButton=document.querySelector("button")
okButton.addEventListener("click", 
    (event) => { // จะสร้างตัวแปรเพื่อมารับ
    console.log(`event.target: ${event.target}`)
    console.log(`event.currentTarget: ${event.currentTarget}`)  
    console.log(`event.eventPhase: ${event.eventPhase}`) 
    console.log(`event.type: ${event.type}`)
    console.log("button was clicked")  //จะใช้alertหรืออะไรก็ได้ อันนี้แค่อยากเปลี่ยน
})
const divElement = document.querySelector("div")
divElement.addEventListener("click",
    (event) => {
    console.log(`event.target: ${event.target}`) 
    console.log(`event.currentTarget: ${event.currentTarget}`) 
    console.log(`event.eventPhase: ${event.eventPhase}`) 
    console.log(`event.type: ${event.type}`) 
    console.log("div element was clicked!")
})
//preventDefault 
const aElement =document.querySelector("a")
aElement.addEventListener("click", (event)=> {
    event.preventDefault()
    console.log("visit link was cancleed")
})

//when click submit button, prevent default behavior and validate form data
const submitBotton = document.querySelector("input[type='submit']")
submitBotton.addEventListener("click", (e)=> {
    e.preventDefault()
    //validate data
    const inputElements = document.queryselectorAll("input")
    inputElements.forEach((ele) => {
    const attr = ele.getAttribute("type")
    if (attr === "text") {
    if (ele. value.trim() .length === 0) 
    console.log ("invalid data")
    }
})
})

console.log(submitBotton)





//// event type

//
document.addEventListener('DOMContentLoaded', () => {
console.log('DOM is ready!')
const heading = document.createElement('h2')
heading.textContent = 'This was added when DOM was ready!'
document.body.appendChild(heading)
console.log('Heading added now.')
})
window.addEventListener('load', () => {
console.log('All resources (images, CSS, scripts) are fully loaded!')
console.log('Page is fully loaded')
})

//
const info = document.getElementById('info')
// Window resize event
window.addEventListener('resize', () => {
info.textContent = `Window resized: ${window.innerWidth} x ${window.innerHeight}`
})
// Window scroll event
window.addEventListener('scroll', () => {
info.textContent = `Scrolled to Y: ${window.scrollY}`
})

//mousemove
const info1 = document.getElementById('info')
info.addEventListener('mouseout', (event) => {
console.log('mouse out')
info.addEventListener('mouseover', (event) => {
console.log('mouse over')
window.addEventListener('mousemove', (event) => {
info.textContent = `Mouse at X: ${event.clientX}, Y: ${event.clientY}`
})
})
})

//keyboard event
const inputMessage = document.getElementById('message')
inputMessage.addEventListener('keyup', (event) => {
if (event.key === 'Enter')
console.log(event.target.value)
})

//input event
const message = document.querySelector('#message')
const display = document.querySelector('p')
//addEventListener(eventType,handlerfunction,eventflow)
message.addEventListener('input', function () {
display.textContent = message.value
})