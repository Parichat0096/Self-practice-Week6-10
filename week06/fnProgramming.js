
/*
const greet = (name, formatter) => formatter(name)

const shout = text => text.toLowerCase() + '!!!'


const reverseString = str => str.toUpperCase().split('').reverse().join('') + ' Hello'


console.log(greet("wangyibo", shout))
console.log(greet("wangyibo", reverseString))






function calculate(nums, compute) {
  return compute(nums)
}
function sum(elements) {
  return elements.reduce((total, current) => total + current)
}
function max(elements) {
  return Math.max(...elements)
}
function min(elements) {
  return Math.min(...elements)
}
function sort(elements) {
  return elements.sort((a, b) => a - b)
}
console.log(calculate([1, 3, 5, 7], sum))
console.log(calculate([100, 3, 5, 7], max))
console.log(calculate([10, 2, 0, 7], min))
console.log(calculate([10, 2, 0, 7], sort))






function a() {
  return sum
}
function b() {
  return sum(1, 5)
}
function c(x) {
  return x
}
function sum(n1, n2) {
  return n1 + n2
}

console.log(typeof a())
console.log(typeof b())
console.log(typeof c(sum))
 



let a = 1 //global scope
function doSomething(x) {
  let a = 10 //local scope
  let greet = "Hello"
  function echo() {
    let a = 555
    let b = "Bob"
    console.log(a, b)
  }
  echo()

  return `${greet}, ${x}, a=${a}`
}
console.log(doSomething("guest"))
a = 100
console.log(`a= ${a}`)
//console.log(echo())




function doSomething(x) {
  function echo() {
    return `hello,${x}`
  }
  return echo()
}
console.log(doSomething("guest"))
 






function counter() {
  let count = 0
  function increment() {
    return ++count
  }
  function decrement() {
    return --count
  }
  function getCount() {
    return count
  }
  return {
    add: increment,
    decrese: decrement,
    getCountValue: getCount,
  }
}
const { add, getCountValue } = counter()
console.log(add())
console.log(getCountValue())
// const c = counter()
// console.log(c.increment()) //1
// console.log(c.increment()) //2
// console.log(c.decrement()) //1
// console.log(c.getCount()) //1
 

*/


const idGen = idgenerator

function idgenerator(x) {
    return function(y) {
        return x + y
    }
    const add = idgenerator(0)
    const add2 = ya(1)
}

console.log(idGen()) //1
console.log(idGen()) //2
console.log(idGen()) //3



function outerFunction(x) {
    return function(y) {
        return x + y
    }
}
const addFive = outerFunction(5)
console.log(addFive(3))

const addTen = outerFunction(10)
console.log(addTen(2))