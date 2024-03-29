// //Accessing Object Properties with Variables

// //object with properties
// const someObj = {
//     propName: "John"
// };

// //accessing object with variables
// function proPrefix(str)
// {
//     const s = "prop";
//     return s + str;
// }

// const somePrefix = proPrefix("Name");
// console.log(somePrefix);
// console.log(someObj[somePrefix]);

const aDog = {
    'name': 'Camper',
    'legs': 4,
    'tails': 1,
    'friends': ['everything!'],
    123: "Prop name is a digit"
}

aDog.name = 'Happy Camper';
console.log(aDog[123]);
console.log(aDog['friends']);

// //Add New Properties to a JavaScript Object
// aDog.healthCondition = "Very good";
// console.log(aDog);

// //Delete Properties from a JavaScript Object
// //using delete keyword we can delete a property from an object
// delete aDog.healthCondition;
// console.log(aDog);

// //Testing Objects for Properties
// //to check does the property exist or not
// console.log(aDog.hasOwnProperty('friends'));

// function checkObj(obj, checkProp) {
//     // Only change code below this line
//     if(obj.hasOwnProperty(checkProp))
//     {
//       return obj[checkProp];
//     }else{
//       return "Not Found";
//     }
//     // Only change code above this line
//   }
// console.log(checkObj(aDog, 'tails'));

// //Accessing Nested Objects
// const ourStorage = {
//     "desk": {
//       "drawer": "stapler"
//     },
//     "cabinet": {
//       "top drawer": { 
//         "folder1": "a file",
//         "folder2": "secrets"
//       },
//       "bottom drawer": "soda"
//     }
//   };
//   console.log(ourStorage.cabinet['top drawer'].folder1);

//   //Accessing Nested Arrays
//   const ourPets = [
//     {
//       animalType: "cat",
//       names: [
//         "Meowzer",
//         "Fluffy",
//         "Kit-Cat"
//       ]
//     },
//     {
//       animalType: "dog",
//       names: [
//         "Spot",
//         "Bowser",
//         "Frankie"
//       ]
//     }
//   ];
// console.log(ourPets[0].names[1]);
// console.log(ourPets[1].animalType);
  
// Only change code below this line
  // Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
      if(prop == "tracks" && records[id].hasOwnProperty(prop) === false)
      {
        records[id][prop] = [value];
      }
    
      else if(prop === 'tracks' && value !== '')
      {
        records[id][prop].push(value);
      }
    
      else if(prop != "tracks" && value != '')
      {
            records[id][prop] = value;
      }
    
      else if(value == '')
      {
        delete records[id][prop];
      }
    
      return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  updateRecords(recordCollection, 2468, "tracks", "Free")
  console.log(recordCollection);

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1)* arr[n - 1];

    }
    //console.log(multiply(arr, n - 1));
  }

  let arr1 = [3, 4, 2], n = 3;
  console.log(multiply(arr1, n));

  function sum(arr, n) {
    // Only change code below this line
    if(n <=0)
    {
      return 0;
    }else
    {
      return sum(arr, n-1) + arr[n-1];
    }
    // Only change code above this line
  }
  console.log(sum([2, 3, 4], 1));

  // Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ]

  function lookUpProfile(name, prop){
    for(let i=0; i < contacts.length; i++)
    {
      if(contacts[i]['firstName'] === name)
      {
        if(contacts[i].hasOwnProperty(prop))
        {
          return contacts[i][prop];
        }
        else
        {
          return "No Such Property";
        }
      }
    }
    return "No Such Contact";
}
  
  console.log(lookUpProfile("Akira", "likes"));
  console.log(lookUpProfile("Kristian", "lastName"));
  console.log(lookUpProfile("Bob", "number"));
  //console.log(contacts[0].hasOwnProperty('firstName'))

  // var vs let
  // var numArray = [];
  // for(var i=0; i < 5; i++)
  // {
  //   numArray.push(i);
  // }
  // console.log(numArray);
  // console.log(i);

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
//console.log(i);

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
checkScope();

//Mutate an Array Declared with const
const mutableArray = [1, 2, 3];
//mutableArray = [4, 5 , 6] // initializing an array to a const array is unacceptable
mutableArray[1] = 3; //but changing the value of an index is acceptable
console.log(mutableArray);

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  for(let i=0, j=s.length-1; i < j; i++, j--)
  {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }

  // Only change code above this line
}
editInPlace();
console.log(s);

//Prevent Object Mutation
function freezeObj()
{
  const MATH_CONSTANTS = {
    PI: 3.14
  }

Object.freeze(MATH_CONSTANTS);
try{
  MATH_CONSTANTS.PI = 99;
}catch(ex)
{
  console.log(ex);
}
return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

//Use Arrow Functions to Write Concise Anonymous Functions
//Js allows us to write shorter version of function call by using arrow or we can call arrow function

//normal function
var normalFunc = function(){
  let value = "Normal Function assigned to a variable"
  return value;
}
console.log(normalFunc());

var shorterFun = ()=>{
  return "shorter fucntion assigned to a variable";
}
console.log(shorterFun());

//if shorter fucn is to return only a value than we can omit the curly braces
let shorterFuncOnlyReturnValue = ()=>"this is a returning value from shorterFuncOnlyReturnValue";
console.log(shorterFuncOnlyReturnValue());

//Write Arrow Functions with Parameters
let addNum = (a, b)=>a+b;
console.log(addNum(1, 2));

//if an arrow function has only one parameter then we can omit the curly braces
const doubler = item => item*2;
console.log(doubler(4));

const myContact = (arr1, arr2) => arr1.concat(arr2);
console.log(myContact([1, 2], [3, 4, 5]));

//Set Default Parameters for Your Functions
const greeting = (name="anonymous") => "Hello " + name;
console.log(greeting());
console.log(greeting("Arif"));

//Use the Rest Parameter with Function Parameters
//take as much as parameter flexibly
function restParameter(...args)
{
  return "You have passed " + args.length + " arguments";
}
let restParam = (...args)=>"You have passed " + args.length + " arguments."

console.log(restParameter(1, [1, 2], {}));
console.log(restParameter(1, [1, 2], {}, "rest"));
console.log(restParam("10", 23, 34));
//use reduce, map and filter to access the rest parameter element 
const sumofvalue = (...args) => args.reduce((previous, current)=>previous + current);
console.log(sumofvalue(1, 2, 3));

//Use the Spread Operator to Evaluate Arrays In-Place
//...arr can be used in place such as function or array literal
const anArray = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let anArray2;
anArray2 = [...anArray];
console.log(anArray2);
//Use Destructuring Assignment to Extract Values from Objects
//ES5 destructing 
const anObject = {name: "object", language:"js"};
const objectName = anObject.name;
const languagePerfer = anObject.language;

//ES6 destructor
const {name, language} = anObject;

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const {today: highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES;
console.log(highToday);
console.log(highTomorrow);
// Only change code above this line

//Use Destructuring Assignment to Assign Variables from Nested Objects
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

const { johnDoe: { age, email }} = user;
console.log(age);

//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const [a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a, b);
console.log(arr);

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [,,...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const collectArray = removeFirstTwo(source);
console.log(arr)

//Use Destructuring Assignment to Pass an Object as a Function's Parameters
let arif = {occupation: "Software Engineer", age:27, hobby:"singing"};
const profileData = {occupation: "Software", age:29, hobby:"singing"};
const profileUpdate = (profileData)=>{
  const {occupation, age, hobby} = profileData;
  arif = profileData;
}
//console.log(profileUpdate(arif));

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0;
console.log(half(stats));
// Only change code above this line

let aValue = 6;
let changeValue = ()=>{
  if(true)
  {
    let aValue = 12;
    return aValue;
  }
}
console.log(aValue);
console.log(changeValue());

//destructure 
let anObj = {
  name: "x",
  age: 20,
  hobby: "travel"
}

const {name: personName, age: personAge} = anObj;
console.log(personName);

let aNestedObj = {
  john:{
  age: 20,
  hobby: "reading"
},
doe:{
  age: 22,
  hobby: "writing"
}
}

let {john:{age:JohnAge, hobby: JohnHobby}, doe:{age:DoeAge}} = aNestedObj;
console.log(JohnAge);
console.log(JohnHobby);
console.log(DoeAge);

let its_a_array = [1, 2, 3 , 4, 5];
let [item1, item2, ...itemCollection] = its_a_array;
console.log(item1);
console.log(item2);
console.log(itemCollection);
console.log(item1 + item2);

//Template Literals
const person1 = {
  name: "Arif",
  age: 27
};

const greetings = `Hello, I am ${person1.name}! 
I am ${person1.age} years old.`;
console.log(greetings);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr){
  let failureItems = [];
  for(let i=0; i < arr.length; i++)
  {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);

//Use class Syntax to Define a Constructor Function
//ES5
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle("Jupiter");
console.log(zeus);

class Vegetable{
  constructor(name){
    this.name = name;
  }
}
const carrot = new Vegetable("carrot");
const bringal = new Vegetable("bringal");
console.log(carrot);
console.log(bringal.name);

//class with getter and setter
class Book{
  constructor(author){
    this._author = author;
  }

  //get writer
  get writer()
  {
    return this._author;
  }

  //set or update writer
  set writer(updateAuthor)
  {
    this._author = updateAuthor;
  }
}

const novel = new Book("Anonymous");
console.log(novel.writer);
novel.writer = "theNewAuthor";
console.log(novel.writer);

// Only change code below this line
class Thermostat{
  constructor(farenheit)
  {
    this._farenheit = farenheit;
  }

  get temp()
  {
    return 5/9 * (this._farenheit - 32);
  }

  set temp(clecius)
  {
    this._farenheit = (clecius * 9.0) / 5 + 32;;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temp; // 24.44 in Celsius
console.log(temp)
thermos.temp = 26;
temp = thermos.temp; // 26 in Celsius
console.log(temp);

const myPromise = new Promise((resolve, reject)=>{
  let serverResponse = false;
  if(serverResponse)
  {
    resolve("Promise has successfully completed");
  }else{
    reject("Sorry promise could not make");
  }
})
myPromise.then(result=>{
  console.log(result);
}, too=>{
  console.log(too);
})
//console.log(myPromise);

const thisArray = [2, 4, "an array element", "another array element"];
const [, , ...arrayCollection] = thisArray;
let collectionOfArray = arrayCollection;
console.log(collectionOfArray);

const anotherObj = {name: "obj prop", age: 27};
let objParamFunc = ({name})=>name;
console.log(objParamFunc(anotherObj));

function findLongestWordLength(str) {
  let words = str.split(" ");
  let longest = 0;
  for(let i=0; i < words.length; i++)
  {
    if(longest < words[i].length)
    {
      longest = words[i].length;
    }
  }
  return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//longest word in a string using array.reduce
let longestWordInString = (str) => 
  str.split(" ").reduce((longest, currentWord)=>
  {
   return currentWord.length > longest.length ? currentWord : longest
  }, ' ') 

console.log(longestWordInString("The quick brown fox jumped over the lazy dog").length);

// function largestOfFour(arr) {
//   for(let i=0; i < arr.length; i++)
//   {
//     for(let j=0; j < arr[i].length; j++)
//     {
//       console.log(arr[i][j]);
//     }
//   }
//   //return arr;
// }

function largestOfFour(arr) {
  let tempArr = [];
  for(let i=0; i < arr.length; i++)
  {
    tempArr.push(Math.max(...arr[i]));
  }
  return tempArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

function titleCase(str){
  let splitWord = str.toLowerCase().split(' ');
  for(let i=0; i < splitWord.length; i++)
  {
    splitWord[i] = splitWord[i].charAt(0).toUpperCase() + splitWord[i].substr(1);
  }
  return splitWord.join(' ');
}
console.log(titleCase('I am arif'));

function frankenSplice(arr1, arr2, n) {
  //first copy the second array using slice
  let copyArray = arr2.slice();
  for(let i=0; i < arr1.length; i++)
  {
    copyArray.splice(n, 0, arr1[i]);
    n++;
  }
  return copyArray;
}

function frankenSplice1(arr1, arr2, n) {
  //first copy the second array using slice
  let copyArray = arr2.slice();
  copyArray.splice(n,0,...arr1);
  return copyArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice1([1, 2, 3], [4, 5, 6], 1));

function bouncer(arr) {
  //let filteredArray = [];
  return arr.filter(value => !!value);
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));

function getIndexToIns(arr, num) {
  arr.sort();
  for(let i=0; i < arr.length; i++)
  {
    if(arr[i] > num || arr[i] === num)
    {
      return i;
    }
  }
  return 0;
}

function mutation(arr) {
  let search = arr[1].toLowerCase();
  let text = arr[0].toLowerCase();
  for(let i=0; i < search.length; i++)
  {
      if(text.indexOf(search[i]) < 0)
      {
        return false;
      }
  }
  return true;
}

console.log(mutation(["Noel", "u"]));
console.log('hello'.indexOf('llo'));
console.log("Max Min");

function miniMaxSum(arr) {
  // Write your code here
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = 0; j < arr.length; j++) {
          if ( i != j ) {
              sum += arr[j];
          }
      }
      console.log(sum);
      if (sum < min) min = sum;
      if (sum > max) max = sum;
  }
  console.log(min, max)
}
miniMaxSum([1, 2, 3, 4, 5]);

function miniMaxSum1(arr) {
  // Write your code here
  var v = [...arr];
  var max = -Infinity;
  var min = Infinity;
  for (var i = 0; i < v.length; i++) {
      var sum = 0;
      for (var j = 0; j < v.length; j++) {
          if ( i != j ) {
              sum += v[j];
          }
      }
      if (sum < min) min = sum;
      if (sum > max) max = sum;
  }
  console.log(min, max)
}
miniMaxSum1([1, 2, 3, 4, 5]);

function Bird(name){
  this.name = name;
}

Bird.prototype = {
  numLegs: 2,
  eat: ()=> console.log('nom nom nom'),
  describe: ()=> console.log('My name is ' + this.name)
}

let duck = new Bird("Duck");
let tweet = new Bird("Tweety");
console.log(duck.describe);
let ownProp = [];
let prototypeProps = [];
for(let prop in duck){
  if(duck.hasOwnProperty(prop)){
    ownProp.push(prop);
  }else{
    prototypeProps.push(prop);
  }
}
console.log(ownProp);
console.log(prototypeProps);
console.log(duck.constructor === Bird);

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog? true:false;
}
console.log(joinDogFraternity('candidate'));
console.log(typeof Bird);
console.log("Obj " + Object.prototype.isPrototypeOf(Bird));

function ParentObj() {};
ParentObj.prototype = {
  constructor: ParentObj,
  parentFunc: function(){console.log("This is a parent function")}
}

function ChildObj(){};

ChildObj.prototype = Object.create(ParentObj.prototype);
ChildObj.prototype.constructor = ChildObj;
let child = new ChildObj("A child");
console.log('Type of child obj: ' + typeof child);
console.log(child.parentFunc());
console.log(child.constructor)

// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
let bookArray = bookList.slice();
// Change code below this line
function add(bookName) {
  bookArray.push(bookName);
  return bookArray;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookArray.indexOf(bookName);
  if (book_index >= 0) {

    bookArray.splice(book_index, 1);
    return bookArray;

    // Change code above this line
    }
}
console.log("Adding  book")
console.log(add("A New Book"))
console.log(add("Another New Book"))
console.log("Removing  book")
console.log(remove("A New Book"))
console.log("book")
console.log(bookList);

let userArr = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = userArr.map((name, age)=>(name));
console.log(names)