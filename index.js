const message1 = "hej"
const message2 = "på"
const message3 = "dig!"


let message = message1 + message2 + message3
// "hejpådig"


// för att lägga till mellan slag behövs extra utrymme
const space = " "

message = message1 + space + message2 + space + message3


// Alternativ använd Template literals underlättar långa meddelanden

message = `${message1} ${message2} ${message3}`

// 



// personer går att skapa med variabler
const person1 = "Kalle Karlsson"
const person2 = "Kajsa Karslon"

// Nummer är särskild typ som går att göra matematik med
const person1Age = 41
const person2Age = 39

const personAgeSum = person1 + person2Age // 80

// nummer går att spara som strängar
let age1 = "41"
let age2 = "39"


// Strängar går att slå ihop som ni såg tidigare

let ageSum = age1 + age2

// dock blir resultatet "4139"


/* 
  Istället för att skapa variabler för varje enskild sak och person,
  går det att arrayer och object för att lättare hantera datan.
*/

const shoppingList = ['Tomater', 'Bröd'];
const numbers = [1, 1, 2, 3, 5, 8, 13, 21];

console.log(shoppingList)
console.log(numbers)

// listor går att komma åt programmtiskt med hjälp av dess index

console.log(shoppingList[0], shoppingList[1])


const persons = [
  {
    firstName: "Kalle",
    lastName: "Anka",
    age: 28
  },
  {
    firstName: "Kajsa",
    lastName: "Anka",
    age: 26
  },
  {
    firstName: "Joakim",
    lastName: "Von Anka",
    age: 73
  },
]

console.log(persons)

console.log ('--- For of ---')

for (const person of persons) {
  console.log(person)
}

persons.push({
  firstName: "Knatte",
  lastName: "Anka",
  age: 14
});

const sortedByAge = persons.sort((a, b) => a.age - b.age);

console.log("List sorted by age")
console.log(sortedByAge)

persons.pop()
persons.shift();


console.log ('--- Find ---')
console.log(persons.find(person => person.firstName === "Kalle"));


console.log ('--- Filter ---')
console.log(persons.filter(person => person.lastName === "Anka"));
console.log(persons.filter(person => person.age === 26));



function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(2, 3))
console.log(addition(3, 5))

function calculator(num1, num2, operation) {
  return num1 + operation + num2
}

console.log(calculator(5, 2, '-'))


function calculator2(num1, num2, operation) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 !== 0) {
        return num1 / num2
      } else {
        return 'Error: Divison by zero';
      }
      default:
        return 'Error: Invalid operation. Usage example, calculator(1, 2, '-')'
  }
}

console.log(calculator2(5, 2, '-'))






/*
console.log("POW! Loaded.")

let introduction = document.querySelector('#introduction')
introduction.innerHTML = "This is an introduction to JavaScript"

function bindSpacebarToJump() {
  document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      jump();
    }
  });
}

let jumpContent = document.querySelector('#jump')

function jump() {
  jumpContent.textContent += "Jump! "
}

bindSpacebarToJump()
*/