console.log('Hello World!');

console.error('thiai si an error');

console.warn("this is a warning");

/*let age = 30;

age = 31;

console.log(age);*/

const name = "John";

const age = 30;

const isColl = true;

const rating = 4.5;

const x = null;

const y = undefined;

let z;

console.log(isColl);

//COncatenation

console.log('My name is ' + name + ' and I am '+age);


//Template String

console.log(`My name is ${name} and I am ${age}`);


const s = 'Hello  World';

console.log(s.length);

console.log(s.toUpperCase());

console.log(s.substring(0,5).toLowerCase());

console.log(s.split(''));


//Arrays variables that hold multiple values

const numbers = new Array(1,2,3,4,5,6);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

console.log(fruits);

fruits.push('mangos'); // add to the final

fruits.unshift('strawberries'); // add to the beginning

fruits.pop(); // remove from the end

console.log(fruits[1]);

console.log(fruits);

console.log(Array.isArray(fruits)); // check if something is array


console.log(fruits.indexOf('oranges'));


// object literalls

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.hobbies[1]);

console.log(person.firstName);


// transform this to variable
const {firstName, lastName, address: {city}} = person;

console.log(firstName);

console.log(city);

person.email = 'thiagosfluz@gmail.com';

console.log(person);

// Arrays of objects

const todos = [
    {
    id: 1,
    text: 'take out trash',
    isComplted: true

},
{
    id: 2,
    text: 'meeting with boss',
    isComplted: true

},
{

    id: 3,
    text: 'Dentist appt',
    isComplted: false

}

];

console.log(todos);

console.log(todos[1].text);

// convert variables to json to send to a server

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For loops


for(let i =0; i < 10; i++){

    console.log(i);
    console.log(`For lop NUmber: ${i}`);

}


// while

let i = 0;

while (i<10){

    console.log(`While Lopp number ${i}`);
    i++;
}

// two ways off do a loop to get members from array

for(let i =0; i < todos.length; i++){

    console.log(todos[i].text);

}

for(let todo of todos){

    console.log(todo.id);


}



// forEach goes to all elments

todos.forEach(function(todo){

    console.log(todo.text);
});

//map

const todoText = todos.map(function(todo){
    return todo.text;

});

console.log(todoText);

// filter

const todoCompleted = todos.filter(function(todo){
    return todo.isComplted == true;

}).map(function(todo){

    return todo.text;
})

console.log(todoCompleted);

// conditionals


const h = '10';

if (h === 10){

    console.log('h is 10');


} else if(h>10){

    console.log('X is is greater than 10');

}




else{


    console.log('X is less than 10');
}


const u = 4;
const f = 10;

if (u > 5 || f > 10 ){

    console.log('h is 10');


} else if(h>10){

    console.log('X is is greater than 10');

}




else{


    console.log('X is less than 10');
}

//? means then and : means else

const j = 10;

const color = j == 10 ? 'red' : 'blue';

console.log(color);

//switches

switch(color){

    case 'red':
    console.log('color is red');
    break;
    case 'blue':
        console.log('color is blue');
        break;
        default:
            console.log('color is NOT red or blue');



}

//functions

/*function addNums (num1 = 1, num2 = 1){
    return num1 + num2;
}

console.log(addNums(5,5));*/


//arrow functions

const addNums =  (num1 = 1, num2 = 1) =>{
    console.log (num1 + num2);
}

const addNums2 =  (num1 = 1, num2 = 1) => num1 + num2;

console.log (addNums2(5,4));


todos.forEach((todo) => console.log(todo));

// object oriented

//constructor function

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();

    }
    this.getFullName = function(){

        return `${this.firstName} ${this.lastName}`;
    }

}

Person.prototype.getBirthYear = function(){

    return this.dob.getBirthYear();
}


Person.prototype.getFullName = function(){

    return this.dob.getFullName();
}


//class

class Person{

    constructor(firstName, lastName, dob){

    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    }

    getBirthYear(){

        return this.dob.getFullYear();
    }


    getFullName(){

        return `${this.firstName} ${this.lastName}`;
    }
}

// instantiate object

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'DSmith', '3-6-1980');

console.log(person1);
console.log(person2.dob.getFullYear);

console.log(person1.getBirthYear());
console.log(person1.getFullName());



