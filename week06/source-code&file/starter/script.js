// Lesson 1: Arrays, Objects, and Functions
 
// 1. Create an empty array to hold the quotes
const quotes = []
 
/*
  2. Function: addQuote
  - Accepts a quote object with id, const outerFunction = (a) => {
    const innerFunction = (b) => {
        return a + b;
    }
}
 
content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  // TODO: Add the quote object to the quotes array
  quotes.push(quote);
}
 
/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  // TODO: Remove the quote object from the array using the given id
  const index = quotes.findIndex(q => q.id === id);
  if (index !== -1) {
    quotes.splice(index, 1);
  }
}
 
/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  // TODO: Find the quote by id and update its properties
  quote = quotes.find( q => quotes.id === id)
  if (quote) {
    if (updatedQuote.content !== undefined) {
      quote.content = updatedQuote.content;
    }
    if (updatedQuote.author !== undefined) {
      quote.author = updatedQuote.author;
    }
  }
}
 
/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  // TODO: Return the quotes array
  return quotes
}
 
// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({ id: 1, content: "The only way to do great work is to love what you do.", author: "Steve Jobs" });
addQuote({ id: 2, content: "Life is what happens when you're busy making other plans.", author: "John Lennon" });
addQuote({ id: 3, content: "Get busy living or get busy dying.", author: "Stephen King" });
console.log(getAllQuotes())
console.log("---------------------------")
// TODO: Delete 1 quote using deleteQuote()
deleteQuote(2);
console.log(getAllQuotes())
console.log("---------------------------")
// TODO: Update 1 quote using updateQuote()
updateQuote(3, { content: "Either get busy living or get busy dying.", author: "Stephen King (Updated)" });
console.log(getAllQuotes())
console.log("---------------------------")
// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes());
console.log("---------------------------")
 