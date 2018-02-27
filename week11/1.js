//Exercise: This badly designed function will throw the error message is not defined. What is the problem, and how could we fix it?

function compareNumbers(m, n) {
var message 
  if (m < n) {
     message = m + " is smaller than " + n;
  } else {
    message = m + " is bigger than or equal to " + n;
  }

  return message;
}
console.log(compareNumbers(10,2)); //10 is bigger than or equal to 2

/////////////////////////////////////////////////////////////

//Exercise: What advantages might a block scope variable have over a function scope variable?
// In what situation might you want to use const instead of a variable that can be re-assigned?
//for example when we wanna define a formula for calculating tax percent or any static formula like area of circle, it seems like static methods in classes
// we use them for utility functions in applications

/////////////////////////////////////////////////////////////

//Exercise: Let's update this code to use let and const instead of var

function getCircleArea(radius) {
    const pi = Math.PI;
    const rSquared = Math.pow(radius, 2);
  
    return pi * rSquared;
  }
  
  function getCircleAreas(radiusArr) {
    let areasArr = [];
  
    for (let i = 0; i < radiusArr.length; i++) {
      const circleArea = getCircleArea(radiusArr[i]); //const or let ?????????
      areasArr.push(circleArea);
    }
  
    return areasArr;
  }
  console.log(getCircleArea(3))        //28.2738888138
  console.log(getCircleAreas([5,3,2])) //[ 78.53981633974483, 28.274333882308138, 12.566370614359172 ]
  
  //////////////////////////////////////////////////////////////

  //Exercise: ES6 also has a new way of declaring functions. Let's see how it works.

  /////////////////////////////////////////////////////////////

//Exercise: Refactor the previous code to have a separate function that checks if gender is 'female' or not,
// and use it in sayGreeting.
// Let's try and make the code as compact as possible together using ES6 features.

function greeting(name) {
    return `Hello ${name}, welcome to JS core 3!`;
  }
let greetingArrow = name => `Hello ${name}, welcome to JS core 3!`;
  console.log(greetingArrow ("Mahsa"));

let sayGreeting=(name,gender)=> (gender==='female')?`Hello Miss ${name}, welcome to JS core 3!`:`Hello Mr ${name}, welcome to JS core 3!`
console.log(sayGreeting("Amir","male"));

////////////////////////////////////////////////

//Exercise: Add a returnBook function which appends a book onto the availableBooks variable in our myLibrary object.

class Library {
    constructor(books) {
      this.books = books;
      this.availableBooks = books;
    }
  
    checkoutBook(book) {
      this.availableBooks = this.availableBooks.filter(b => b !== book);
    }
  }
  
  let myBooks = [
    "Wild Swans",
    "The Dharma Bums",
    "Nausea",
    "The Very Hungry Caterpillar"
  ];
  let myLibrary = new Library(myBooks);
  myLibrary.returnBook=function(book){
    this.availableBooks = this.availableBooks.push(book);
  }

/////////////////////////////////////

//Exercise: check out "Nausea" and return it to the library.

myLibrary.checkoutBook('Nausea');
//console.log((myBooks)); how to check availablebooks?????????????????

myLibrary.returnBook('Nausea');


////////////////////////////////////

//Exercise: Alter the checkoutBook function to return false when a book isn't available, and true otherwise.
                                                    //?????????????????????????????????????????????
checkoutBook=function() {
    this.availableBooks = this.availableBooks.filter(b => b !== book);
    if(availableBooks!==book)
    return false
}

////////////////////////////////////

