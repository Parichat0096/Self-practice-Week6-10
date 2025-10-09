/*
//1. find all child nodes under <ul id="appetizer">
// const ulElement = document.querySelector("#appetizer")
const ulElement = document.getElementById("appetizer")
console.log(ulElement)
// get childNodes, return NodeList (array-like with implement forEach)

const appetizerChildNodes = ulElement.childNodes
appetizerChildNodes.forEach((ele) => console.log(ele))
console.log(appetizerChildNodes.length) //9

//2. find meat element that a text value contains "soup"
//#sol1
// const meatSoupElements = Array.from(meatAllElements).filter((ele) =>
//   ele.textContent.toLowerCase().includes("soup")
// )
// console.log(meatSoupElements)
//#sol2
const result = []
meatAllElements.forEach((item) => {
  if (item.textContent.toLowerCase().includes("soup")) {
    result.push(item)
  }
})
console.log(result)

//3. goto the first child element node under <ul id="soup"> and display all sibling nodes
//output :
<li class="meat">Spicy Bacon-Corn Soup</li>
        <li class="vegan">Vegetable Soup</li>
        <li class="meat">Beef Soup</li>
        <li class="vegan">Coconut Soup</li> 


const ulElement = document.querySelector("#soup")
// let currentNode = ulElement.children[0]
let currentNode = ulElement.firstElementChild
while (currentNode !== null) {
  console.log(currentNode)
  currentNode = currentNode.nextElementSibling
}

*/



//get elementsByName() //node list
const fnameElements = document.getElementsByName("fname")
console.log(fnameElements.length) //2
fnameElements.forEach((ele)=> console.log(ele))


//get elementsByTagName() //html coll
const inputElements= document.getElementsByTagName("input")
Array.from(inputElement).forEach((ele)=> console.log(ele))

//get elementsByClassName() //html coll
const veganElemets = document.getElementsByClassName("vegan")
Array.from(veganElemets).forEach((ele)=> console.log(ele))

//4.find the first element of document that has an ID values "appettizer" or "soup"

//const targetElement = document.getElementById("appetizer") || document.getElementById("soup");
//console.log("First element with id='appetizer' or 'soup':", targetElement);

const firstEle = document.querySelector("#appetizer, #soup");
console.log(firstEle)

//5.find all class "meat" elements under <ul id="appetizer"> or <ul id="soup"> only

//const meatElements = document.querySelectorAll("#appetizer li.meat, #soup li.meat");
//meatElements.forEach((ele) => console.log(ele));

const meatItems = document.querySelectorAll("#appetizer .meat, #soup .meat");
console.log(meatItems);
const meatArray = Array.from(meatItems);
meatArray.forEach(item => {
  console.log(item.textContent);
});





// insertBefore(newNode, referenceNode) //The node to insert becomes the previous sibling of the reference node
// replaceChild(newChild, oldChild)//replaces a child node within the given (parent) node
// removeChild(child)//removes a child node from the DOM and returns the removed node.

/* <ul id="soup">
<li class="meat">Spicy Bacon-Corn Soup</li>
<!-- 2. remove Vegetable Soup -->
<li class="vegan">Vegetable Soup</li>
<!-- 1. <li class="vegan">Cabbage Soup</li> -->
<li class="meat">Beef Soup</li>
<!-- 3. replace Beef Soup with Pork Soup -->
<li class="vegan">Coconut Soup</li>
</ul> */

/*

// (insertBefore) 1. <li class="vegan">Cabbage Soup</li>
//1.1 get its parent
const soupUlElement = document.getElementById("soup")
//1.2 get ref node -Beef Soup
let refNode = null
Array.from(soupUlElement.children).forEach((element) => {
  if (element.textContent.trim().includes("Beef Soup")) refNode = element
})
//1.3 create node <li class="vegan">Cabbage Soup</li>
const newNode = document.createElement("li")
newNode.textContent = "Cabbage Soup"
newNode.setAttribute("class", "vegan")
//1.4 insertBefore(newNode, refNode)
soupUlElement.insertBefore(newNode, refNode)



// 2. remove Vegetable Soup
//2.1 get its parent
const soupUlElement = document.getElementById("soup")
//2.2 get ref node -Beef Soup
let refNode = null
Array.from(soupUlElement.children).forEach((element) => {
  if (element.textContent.trim() === "Vegetable Soup") refNode = element
})
//2.3 remove
soupUlElement.removeChild(refNode)



//  3. replace Beef Soup with Pork Soup
//2.1 get its parent
const soupUlElement = document.getElementById("soup")
//2.2 get ref node -Beef Soup
let refNode = null
Array.from(soupUlElement.children).forEach((element) => {
  if (element.textContent.trim() === "Beef Soup") refNode = element
})
//2.3 create new node <li class="meat">Pork Soup</li>
const newNode = document.createElement("li")
newNode.textContent = "Pork Soup"
newNode.setAttribute("class", "meat")
//2.4 replaceChild(newNode, refNode)
soupUlElement.replaceChild(newNode, refNode)
*/