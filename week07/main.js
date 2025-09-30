/*
console.log(window.document) //root node
console.log(document) //root node
console.log(typeof document)
console.log(document.getElementById("123"))
const htmlElement = document.documentElement
console.log(htmlElement)

console.log(htmlElement.parentElement) //null
console.log(htmlElement.parentNode) //root node
if (htmlElement.parentNode === document) {
  console.log("parent of html is a root node")
}

console.log(document.firstChild) //<!DOCTYPE html>
console.log(document.firstChild.nextSibling)
//<!-- sample comment #1 -->
console.log(document.firstChild.previousSibling) //null
console.log(document.firstElementChild) //<html>
console.log(document.firstElementChild.previousSibling) //<!-- sample comment #1 -->
console.log(document.lastChild) //<!-- sample comment #3 -->
console.log(document.lastElementChild) //<html lang="en">

 //typeof ของdomจะเป็นobject




 //1. get all child nodes under <div id='123'>
const divElement = document.getElementById("123")

//2. get all node types children (return (static) NodeList, can use forEach)
const divChildNodes = divElement.childNodes
console.log(divChildNodes.length) //3
divChildNodes.forEach((child) => console.log(child))

//3. get only Element node type children (retunr (dynamic) HTMLCollection, cannot use forEach)
const divChildren = divElement.children
console.log(divChildren.length) //2
// for (let i = 0; i < divChildren.length; i++) {
//   console.log(divChildren[i])
// }
Array.from(divChildren).forEach((child) => console.log(child))



 

//1. get all attributes on <div id='123'>
const divAttrs = divElement.attributes
console.log(divAttrs.length) //2

for (let i = 0; i < divAttrs.length; i++) {
  const attrName = divAttrs[i].name //get attribute name
  const attrValue = divAttrs[i].value //get attribute value
  console.log(`attribute name: ${attrName}, attribute value: ${attrValue}`)
  console.log(divAttrs[i].ownerElement)
}
console.log(divElement.getAttribute("id")) //find attribute value
console.log(divElement.getAttribute("style")) //find attribute value



//1. what is the node type of first child of root node
console.log(document.firstChild.nodeType)


//2. if node type is element node, display "Hello, HTML node", otherwise, display
//"Hello, any node"
const node = document.documentElement;

if (node.nodeType === Node.ELEMENT_NODE) {
  console.log("Hello, HTML node");
} else {
  console.log("Hello, any node");
}

/* อันนี้เขียนเองซึ่งผิด555
if (typeof = HTML_node ) {
    return "Hello, HTML node"
} return "Hello, any node"



//1. create <p></p>
const pElement = document.createElement("p") //<p></p>
//2. create id="p5"
//sol#1
// const idAttr = document.createAttribute("id")
// idAttr.value = "p5"
//Sol#2
pElement.setAttribute("id", "p5")
//3. binding id="p5" to <p>
// pElement.setAttributeNode(idAttr) //<p id="p5"></p5>
//4. create text value '#5'
//sol#1
// const pText = document.createTextNode("#5")
//sol#2
pElement.textContent = "#5"
//5. binding '#5' to <p>
// pElement.appendChild(pText) //<p id="p5">#5</p5>
//6. binding <p id="p5">#5</p5> to <body>
const body = document.body
body.appendChild(pElement) //<body>...<p id="p5">#5</p5></body
 

*/


//2//

let el = document.getElementById("demo")
console.log(el.innerHTML)
console.log(el.innerText)
console.log(el.textContent)

//<p format="italic"><i>Sample Italic Text</i></p>
//1. append <p> under <div id="demo">
const demoDiv=document.getElementById("demo")
const p=document.createElement("p")
demoDiv.appendChild(p)

//1.5 add format='italic' attribute to <p>
p.setAttribute("format", "italic")

//2. try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
p.innerHTML= "<i>Sample Italic Text</i>"

//2.2  add <i>Sample Italic Text</i> with innerText
p.innerText= "<i>Sample Italic Text</i>"

//2.3 add <i>Sample Italic Text</i> with textContent
p.textContent= "<i>Sample Italic Text</i>"
 
 




