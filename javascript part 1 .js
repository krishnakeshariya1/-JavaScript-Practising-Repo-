const book = {
    author: "krishna",
    page: 320,
    title: "The fight",
    descibe() {
        return `The book  ${this.title} has ${this.page} page and written by ${this.author}`;
    },
};
console.log(book.descibe())

// question number 2 
const person = {
    name: "krishna",
    age: 20,
    address: {
        city: "Gwalior",
        state: "MP",
    },
}
console.log(person["address"]["state"]);

// question  number 3 
// cloning  the Object 

// const books = {...book};
// books.author = "Amrita"
// console.log(books.descibe())

// use object.keys()
// function printkey(obj){
//     Object.keys(obj).forEach(val=>{
//         if(typeof(obj[val]) === "object"){
//             printkey(obj[val])
//         }
//         console.log(val)
//     })
// }
// printkey(person)
// use object.entries to print all the keys and values of the perosn
//  Object.entries(person).forEach(([key,val])=>{
//     console.log(key, val)
//  })

// make two object and merge them using spread and assign operator
//  const obj1 ={
//     name : "krishna",
//     course : "bca",
//     age :20,
//  }
//  const obj2 ={
//     address : {
//         city : "gwalior",
//         state : "MP",
//     },
//     pin :474003,
//  }
/// dono obj ko merege kerne ke liye ham object assign ka use kerte  hai  
//  const merged = Object.assign({}, obj1,obj2) // we se {} as the target  to avoid changing obj1 or obj2
// it is widely use in modern js

//  const merger =  {...obj1, ...obj2}

//  function isemp(obj){
//     return Object.keys(obj).length === 0;
//  }
//  console.log(isemp(person));
//  console.log(isemp({}))
// it is the best way to check that the obj is empty or not


// trying to deep cloning the obj without using the assignn and spread
// let deepclone = (obj)=>{
//     if(typeof(obj) !== "object" || obj === null) return obj

//     const clone = Array.isArray(obj) ? [] : {};

//     for(let key in obj){
//         clone[key] = deepclone(obj[key])
//     }
//     return clone;
// }
// const copy  = deepclone(person);
// console.log(copy)

// yha mane sikha ki ham deep clone kase kerte hai bina spread ke use kiya ya bina assign e use kiye 

// const clone = deepclone(person)

// check if two object have same key or not 

// ek function bnao phle jisme 2 parameter honge  
// let equal = ( obj1, obj2) =>{
//     if( obj1 === obj2) return true;

//     if(typeof(obj1) !== "object" || obj1 === null || typeof(obj2) !== "object" || obj2 === null) return false;

//     const key1 = Object.keys(obj1);
//     const key2 = Object.keys(obj2);

//     if(key1.length !== key2.length) return false;

//     for(let char of key1){
//         if(!key2.includes(char)) return false;
//         if(!equal(obj1[char], obj2[char])) return false;
//     }
//     return true;
// }
// const a ={
//     name :"krishna",
//     age :20,
//     course :"bca",
// }
// const b = {
//     name : "krishna",
//     age :20,
//     course : "bca",
// }
// const c = {
//     name :"amrita",
//     age :20,
//     course :"chef",
// }
// console.log(equal(a,b))
// console.log(equal(a,c))
// let aa = JSON.stringify(a);
// let bb = JSON.stringify(b);
// let cc = JSON.stringify(c);

// if(aa === cc){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// make array of students objects with name and marks
// let student =[
//     {name:"krishna", marks :320},
//     {name :"amrita", marks :400},
//     {name: "bhawna", marks : 450},
// ];
// let highestMarks =(arr)=>{
//     let studentDetail = arr[0];
//     for(let i =1; i<arr.length; i++){
//         if(arr[i].marks  > studentDetail.marks ){
//             studentDetail = arr[i];
//         }
//     }
//     return studentDetail;
// }
// console.log(highestMarks(student))

// let averageMarks =(arr)=>{
//     let total = 0;
//     for(let i =0; i<arr.length; i++){
//         total += arr[i].marks;
//     }
//     return total/arr.length;
// }
// console.log(averageMarks(student))

//make a expense tracker  (object based)

// const expenseTracker = {
//     expense :[],

//     addexpense(name, amount, date){
//         this.expense.push({name : name, amount : amount, date : date })
//     },

//     getTotal(){
//         let total = 0;
//         for(let  i= 0; i< this.expense.length; i++){
//             total += this.expense[i].amount;
//         }
//         return total;
//     },
//     getSummary(){
//         return {totalExpense : this.getTotal(),
//             numberOfItem : this.expense.length 
//         } 
//     },

// }
// console.log(expenseTracker.addexpense("Laptop purcase", 37000, "12/10/2025"));
// console.log(expenseTracker.addexpense("bike repair", 2000, "12/10/2025"))
// console.log(expenseTracker.addexpense("tv assesories", 799, "12/10/2025"))
// console.log(expenseTracker.getTotal())
// console.log(expenseTracker.getSummary())


// // make a small library system 

// const librarySystem = {
//      books : [],

//      addBook(title, author){
//         this.books.push({title : title, author: author, avaliable : true});
//      },
//      removeBook(title){
//         this.books = this.books.filter((val)=>{
//             return val.title !== title
//         });
//      },
//      listAvailable(){
//         return this.books.filter(book => book.avaliable);
//      },
//      borrowBook(title){
//         for(let i =0; i<this.books.length; i++){
//             if(this.books[i].title === title && this.books[i].avaliable){
//                 this.books[i].avaliable = false;
//                 console.log(`${title} has been borrrowed`)
//                 return;
//             }
//         }
//          console.log(`${title} has not avaliable`);
//      },
// };
// console.log(librarySystem.addBook("geeta", "krishna"));
// console.log(librarySystem.addBook("harry potter", "ptta nhi"));
// console.log(librarySystem.listAvailable());
// console.log(librarySystem.borrowBook("geeta"))
// console.log(librarySystem.listAvailable());
// console.log(librarySystem.removeBook("harry potter"));
// console.log(librarySystem.listAvailable());

// const squareNum = function(num){
//     return num**2;
// }
// console.log(squareNum(12));

// question number 2 
// let square = (num => num **2)
// console.log(square(5))

// let greetUser =(name = "krishna")=>{
//     return `Good Afternone ${name}`;
// }
// console.log(greetUser())

// question number 4
// let sum = (a,b)=>a+b;
// const result  = sum(10,5)

// question  number 5
// const evenOddCheck =(number) => number%2 === 0 ? "even " : "odd";

// console.log(evenOddCheck(500))
// make a calculator function and usee call back
// const add=(a,b)=> a+b;
// const subtract =(a,b)=> a-b;
// const calculator = (a,b,oper)=>{
//     return oper(a,b);
// };

// console.log(calculator(9,7,subtract))

// make 2 function and pass them as an callback
// let add =(a,b)=> a+b;
// let multy = (a,b)=> a*b;
// let calculator = (a,b,operation)=> operation(a,b);
// console.log(calculator(12,15,add))

// let fullname=(first , last)=> first+ " "+last
// console.log(fullname("krishna","keshya"));
// let repeatmessage = (msg,time)=> {
//     for(let i =1; i<=time;i++){
//         console.log(msg)
//     }
// }
// console.log(repeatmessage("hello",8))
// for(let i =1; i<=1000;i++){
//     console.log(i)
// }
//create a funtion outer with a variable x and inside it define a functin inner that print x call inner frm insde outer
// let outer =()=>{
//     let x = 44;
//     let inner =()=> {
//         console.log(x)
//     };
//     inner()
// }
// console.log(outer())
// clousers 
// let counter =()=>{
//     let count =0;
//     return () => ++count;
// }
// const rem = counter();
// console.log(rem())
// console.log(rem())
// console.log(rem())

// let multiplier =(multy)=>{
//     return (num)=> num*multy;
// };
// const double = multiplier(2);
// const triple = multiplier(3)
// console.log(double(5))

//find 2 largest in the array
// let ar =[12,42,45,56,2,89,44];
// let larges =-Infinity;
// let secondLargest = -Infinity;
// for(let i =0; i<ar.length;i++){
//     if(larges < ar[i]){
//         secondLargest =larges;
//         larges=ar[i];
//     }
//     else if(secondLargest <ar[i] && ar[i] !== larges){
//         secondLargest =ar[i];
//     }
// }
// console.log(secondLargest);

// let str = "n a ma n";
// str = str.replaceAll(" ","")
// let reverse ="";
// for(let i =str.length-1; i>=0; i--){
//     reverse+=str[i];
// }
// if(reverse === str){
//     console.log("yes it is done")
// }

// filtering and searching in array 
// filter is used to return all element that pass the condition and return a new array 
// let ar =[1,2,3,4,5,6,7,9];
// let arr = ar.filter(val => val%2 === 0)
// find is used to return a only one element that pass the condition and it return a new variable 
// let ar2 = ar.find(val => val>3);

// start practicing 
// filter words by length >4
// let words = ["krishna","amrita","bhawna","ram","raj","rani"];
// let longWords = words.filter(val => val.length > 4);
// console.log(longWords)

// filter the student who passed 
// let student = [{name : "krishna", marks : 72},{name :"amrita", marks: 75},{name : "raj", marks : 30}];
// let passedStudents = student.filter(val => val.marks > 33)

// filter first negative number
// let number =[1,2,3,4,5,-4,-4,-8,-6,3,7,8,0];
// let negative = number.find(val => val <0)

// filter the number between a range
// let range = [1,2,3,41,10,11,15,17,18,20,55,90,50,49,34,2,4,6,34,23,34,45,56,60,90];
// let fixRange = range.filter(val=> val>10 && val <51);
// console.log(fixRange)

// check if a value exists
// let findValue = range.includes(41)

//search product by name
// let stuu = student.find(val => val.name === "krishna")
// let dublicate =[1,2,3,4,2,3,4,5,6,7,6,5]
// let unique = dublicate.filter((value, index)=>{
//    return  dublicate.indexOf(value) === index
// });
// console.log(unique)
//filter name starting with A
// let a = words.filter((val)=>{
//    return val[0] === "a"
// })
// find longest word
// let long = words.find((val)=>{
//     let max = 0;
//     let word;
//     if(max < val.length){
//         max = val.length
//         word = val; 
//     }
//     return word
// })
// filter numbr greater than 10 and multiply each filtered number by 2 and return final resut
// let ar3 = [5,6,10,11,15,20,25,30];
// let multy = ar3.filter(val => val > 10).map(val => val*2);

// sort an array in ascending order 

// let ar = [1,5,99,12,4,5,8,9,0]
// let arr = ar.sort((a,b)=> b-a)
// sort an array of strings alphabetically
// let ar =["banana","lichi","orange","mango","apple"];
// let arr = ar.sort();

// reverse an aray 
let ar = [10, 20, 30, 40, 50];
// ar = ar.reverse()

// find the sum of all elements using reduce
// let arr = ar.reduce((acc,curval)=>{
//     return acc+curval;
// }) 
// let product = ar.reduce((acc,curval)=>{
//     return acc*curval;
// },1)
// find max using reduce
let arr = [12, 45, 3, 23, 67, 43, 78, 21];
// let max = arr.reduce((acc,curVal)=>{
//     return curVal > acc  ? curVal : acc;
// })

// find minimum using reduce 
// let min = arr.reduce((acc,curVal)=>{
//     return curVal < acc ? curVal : acc;
// });

// you have given a marks of student and now return the students marks in asending order
// const student = [
//     {name :"divyansh" , marks :48},
//     {name :"krishna" , marks :99},
//     {name :"amrita" , marks :78},
//     {name :"bhawna" , marks :89},
// ];
// let marks = student.sort((a,b)=> a.marks-b.marks)

// using same aray find the average marks 
// let average = student.reduce((acc,curval)=>{
//    return acc+curval.marks;
// },0)
// const aver = average/student.length
// let filter = student.filter(val => val.marks > 80).map(val => val.marks).reduce((acc,curval)=> acc+curval)
// make a funtion that return a object of studetnt how have highest marks
// let highestMarks = (arr)=>{
//     return arr.reduce((acc,curval)=>{
//         return acc.marks > curval.marks ? acc : curval;
//     })
// }
// console.log(highestMarks(student))

// const cart = [
//     {item :"shirt" , price :1000 , quantity : 1},
//     {item : "pant", price :1000 , quantity : 1},
//     {item :"pen" , price : 10, quantity : 2},
//     {item : "shoes", price : 2500, quantity : 1},
//     {item : "cap", price :200 , quantity : 3},
// ];
// let totalPrice = (arr)=>{
//    return arr.reduce((acc,curval)=> acc + curval.price * curval.quantity,0)
// }
// console.log("The total price of your cart is ",totalPrice(cart))

// const sroted = [...cart].sort((a,b) => b.price - a.price);
// function greet(name){
//     return function(){
//         return `hello ${name}`
//     }
// }

// let sayhello = greet("krishna");
// let createcount =()=>{
//     let count =0;
//     function increment(){
//         count++;
//     }
//    function shirt(){
//         return count++;
//     }
//     return {
//         increment,
//         shirt
//     }
// }
// let counter = createcount()
// counter.increment();
// counter.increment();
// console.log(counter.shirt());

// function secretHolder(secret){
//     function getsecret(){
//         return secret;
//     }
//     function setsecret(newwsec){
//         secret =  newwsec;
//     }
//     return {
//         getsecret, setsecret
//     };
// };
// let seccc = secretHolder("krishnaa sir")
// console.log(seccc.getsecret());
// seccc.setsecret("js is my love");
// console.log(seccc.getsecret());

// function multiply(factor){
//     return function(number){
//         return number * factor
//     }
// }
// let double = multiply(2);
// let triple = multiply(3);
// console.log(double(5));

// return an array after applying an function to each element 
// const nums = [1, 2, 3, 4, 5];
// const double = nums.map(num => num * 2);

// used for perfoming an action, not reuring a new array
// nums.forEach(num => console.log(num * 2));

// maps and then flatterns the result by one level
// const ar2 = [1, 2, 3, 4];
// const result = ar2.flatMap(num => [num, num * 2]);
// console.log(result);

// reduce an array to a single element
// const total = ar2.reduce((acc, curVal) => acc + curVal);

// use map to convert the arrray of numbers into their squares
const num = [1, 2, 3, 4, 5, 6];
const square = num.map(val => val * 2);
console.log(`The square of the elements of given array are :- ${square}`);

//create an array of names and use map() to capitalize the first letter of the name

const name = ["krishna", "manu", "raj", "ram"];
const capitalize = name.map(ele => (ele[0].toUpperCase() + ele.slice(1)));
console.log(capitalize);

// create an array of string and return their lengths using map()
const length = name.map(ele => ele.length);
console.log(length);

// use forEach() to print every element multiplied by 3
num.forEach(val => val * 3);
console.log(num);

// use map() to convert an array of prices  into prices witth 10% discount
const prices = [1000, 1200, 340, 4550];
const discountPrices = prices.map(val => val * 0.9);
console.log(discountPrices);

// given an array [1,2,3,4,5] use flatmap to return number and there multiple [1,1,2,2,3,3,4,4,5,5];
const series = [1, 2, 3, 4, 5];
const multiplySeries = series.flatMap(x => [x, x * 1]);
console.log(multiplySeries);

// combine the  map and reduce to find the sum of the squares of element
const sum = series.map(val => val ** 2).reduce((acc, curVal) => acc + curVal);
console.log(sum);

// you have an array of words use flatmap to split each word into letters and create one flat map
const words = ["hello", "world", "javascript"];
const letter = words.flatMap(x => x.split(""));
console.log(letter);

// you have an array of students marks , use map() to convert them into grades
const student = [60, 70, 50, 33, 90];
const grades = student.map(val => {
    if (val >= 80 && val <= 100) return `A`;
    else if (val >= 60 && val < 80) return "B";
    else if (val >= 35 && val < 60) return "c";
    return "Fail";
});
console.log(grades);

// use reduce to count the total character in an array 
const count = words.reduce((acc, curVal) => acc + curVal.length, 0);
console.log(count);

//  given an array of transactions use reduce() to calculate the net balance 
const transactions = [100, -50, 200, -150, 50, -100, -100]
const netBalance = transactions.reduce((acc, curVal) => {
    return curVal > 0 ? acc + curVal : curVal - acc;
}, 0);
console.log(netBalance);

// we have given an nested array use flatmap to make a array and use reduce to find total  of the array element
const nested = [1, 2, [3, 4, 5], 6];
const flattern = nested.flatMap(x => x).reduce((acc, curVal) => acc + curVal);

// convert an aray of string  into a single string seperated by commas using reduce()
const arrString = ["krishna", "keshariya", "javascript"];
const join = arrString.reduce((acc, curVal, index) => {
    return acc + (index === 0 ? curVal : ", " + curVal)
}, " ");
console.log(join);

//count the even number from an aray using reduce()
const longArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const even = longArr.reduce((acc, curVal) => {
    if (curVal % 2 === 0) {
        acc++;
    }
    return acc;
}, 0);

// given an array of object with name and age then find the total age of all people
let data = [
    { name: "krishna", age: 20 },
    { name: "raj", age: 32 },
    { name: "ram", age: 20 },
    { name: "raju", age: 18 },
];
const ageTotal = data.reduce((acc, curVal) => {
    return curVal.age + acc
}, 0);
console.log(ageTotal);

// count the frequency of the array of object 
let letters = ["a", "b", "c", "d", "a", "b", "d", "d", "d"];
const frequency = letters.reduce((acc, curVal) => {
    acc[curVal] = (acc[curVal] || 0) + 1;
    return acc;
}, {})


// create a simple object and access object properties using dot notation and bracket notation
const obj = {
    name: "krishna",
    age: 20,
    course: "BCA",
};
console.log(obj.age);
console.log(obj["course"]);

// add and update properties 
obj.city = "Gwalior";
obj.age = 21;
console.log(obj);

// delete a property 
delete obj.age;
console.log(obj);

// loop through the object
for (let ele in obj) {
    console.log(`The keys of object is "${ele}" and there values are "${obj[ele]}"`);
};

// count total properties
const totalProperties = Object.keys(obj).length;
console.log(`Total properties of an obj is :- ${totalProperties}`);

// or we can use loop to count the total properties.
let properties = 0;
for (let ele in obj) {
    properties++;
}
console.log(`Total properties of an object is :- ${properties}`);

// merge two objects 
const address = {
    pin: 474003,
    city: "Gwalior",
    state: "MP",
    country: "INDIA"
};

// There are 2 ways to do this 
// using spread operator
const merege = { ...obj, ...address };
console.log(merege); // it does not change the original objects.

// using object.assign
const merged = Object.assign({}, obj, address);
console.log(merged);

// check a function exist in the key or not 
const haskey = (obj, key) => {
    return obj.hasOwnProperty(key);
};
console.log(haskey(merege, "pin"));

// object to array 

// convert to array of keys
const keys = Object.keys(address);
console.log(keys, typeof (keys)); // but the problem is the type of this keys is still object

// convert to array of values
const values = Object.values(address);
console.log(values, typeof (values)); // we are facing same problem here;

// convert keys and values both to the array
const entries = Object.entries(address);
console.log(entries, typeof (entries)); // it return a nested array but the type is still a object

// lets check are they really a array by using Array.isArray();
console.log(Array.isArray(keys)); // True
console.log(Array.isArray(values)); // true
console.log(Array.isArray(entries)); // ture

// create a nested object and acess properties using dot and bracket notation
const me = {
    name: "krishna",
    age: 20,
    course: "BCA",
    address: {
        city: "Gwalior",
        pin: 474003,
    }
};
console.log(`The city of the nested object is ${me.address.city}`);
console.log(`The pincode of the nested object is ${me["address"]["pin"]}`);

//  adding and updating nested property
me.address.city = "Mumbai";
me.address.state = "Mp";
console.log(me);


// create a object and prevent any changes to it using object.freeze().
const car = {
    brand: "BMW",
    model: "M4 competion"
};
Object.freeze(car);
car.brand = "Audi";
console.log(car); // no change happend
// but if the car was nested object the inner object can modified. Because it is shallow freeze

// deep freezing 
const freeze = (obj) => {
    Object.freeze(obj);
    Object.values(obj).forEach(val => {
        if (typeof (val) === "object" && val !== null) {
            freeze(val);
        }
    });
};
console.log(freeze(me));
me.address.city = "delhi";
console.log(me); // the task is done 

// destructuring an object person 
const people = {
    id: 2427,
    age: 20,
    city: "pune"
};
const { id, age, city } = people;
console.log(id);
console.log(age);

// nested desructuring 
const personDetail = {
    ids: 2247,
    grade: "B",
    school: {
        standard: "12th",
        section: "B",
    },
};
const { ids, grade, school: { standard, section }, } = personDetail;
console.log(ids);
console.log(standard);

// destructure with default value when key does not exist

const marks = {
    maths: 75,
    science: 60,
    english: 80,
};
const { maths, science, english, hindi = 90 } = marks;
console.log(maths);
console.log(hindi);

// extract remaining keys using the rest operator.
const product = {
    serial: 101,
    productName: "Laptop",
    brand: "HP",
    cost: 50000,
};
const { serial, productName, ...rest } = product;
console.log(rest);

// merge two objects with spread operator and if both contain same key which key remains
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
};
const obj2 = {
    c: 1,
    d: 2,
    e: 3,
};
const obj3 = { ...obj1, ...obj2 };
console.log(obj3) // obj2's c stay bcz when keys consflict like "c" the last object value overwrites the previous one.

// write a function that take 2 objects as parameter and return merged object
const mergedObj = (firstObj, secondObj) => {
    return { ...firstObj, ...secondObj };
};
console.log(mergedObj(obj1, obj2));

// use freeze and try to modify and delete properties and see the behaviour
Object.freeze(obj3);
obj3.f = 4;
obj3.a = 0;
delete obj3.c;
console.log(obj3); // we can not add, modify, delete the property of freezed object

// object seal
Object.seal(obj1);
obj1.d = 4;
delete obj1.a;
obj1.a = 0;
console.log(obj1); // we can only modify the seal object 

// write a function to check that both object have same keys or not
const compareObj = (obj1, obj2) => {
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);

    if (key1.length !== key2.length) return false;

    for (let key of key1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
};

const b1 = { name: "kk", age: 20 };
const b2 = { name: "kk", age: 20 };
const b3 = { naam: "kk", age: 20 };
console.log(compareObj(b1, b2));
console.log(compareObj(b1, b3));

// deep copy the nested object
const original = {
    name: "krishna",
    course: "BCA",
    address: {
        city: "Gwalior",
        pincode: 47400,
    }
};
const deepclone = JSON.parse(JSON.stringify(original)); // method 1 

const deepCopy = (obj) => {
    if (obj === null || typeof (obj) !== "object") return obj;

    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }
    return copy;
};
const deep = deepCopy(original)
deep.address.pincode = 474003;
console.log(deep);
console.log(original);

//count the keys 
console.log(Object.keys(obj3).length);

// print name form the array of object
const users = [
    { name: "krishna", age: 20 },
    { name: "bhawna", age: 20 },
    { name: "Amrita", age: 17 },
];
for (let { name } of users) {
    console.log(name);
}

// combine two object and display the with the help of object.entries 
const basicInfo = { name: "krishna", age: 20 };
const contactInfo = { email: "krishnakeshariya@gmail.com", phoneNumber: 91999999 };
const allInfo = { ...basicInfo, ...contactInfo };
for (let [key, value] of Object.entries(allInfo)) {
    let formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
    console.log(`${formattedKey} :- ${value}`);
}

// create a class person with properties name and age and a method introduce()
class men {
    constructor(name, age = 21) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, I'am ${this.name} and i'm ${this.age} year old`;
    }
    isAdult() {
        return age >= 18 ? `${this.name} is adult` : `${this.name} is not adult`
    }
    static compareAge(men1, men2) {
        return men1 > men2 ? `${men1.name} is older ` : `${men2.name} is older`;
    }
};

class students extends men {
    constructor(name, age, rollNo, course) {
        super(name, age);
        this.rollNo = rollNo;
        this.course = course;
    }
}
const men1 = new men("krishna", 20);
const men2 = new men("divyansh", 22)
console.log(men1, men2);

// default parameter 
const men3 = new men("jatin",);
console.log(men3.introduce());
console.log(men3.isAdult());
console.log(men.compareAge(men1, men3));
const men5 = new students("krishnaaa", 19, 101, "computer science");
console.log(men5.introduce());

class Animal {
    constructor(species, age) {
        this.species = species;
        this.age = age;
    }
    info() {
        return ` This is a ${this.species} and it is a ${this.age} years old`;
    }
}

class Dog extends Animal {
    constructor(species, age, name, breed) {
        super(species, age);
        this.name = name;
        this.breed = breed;
    }
    dogInfo() {
        return `${this.name} is a ${this.breed} and ${this.age} year old`;
    }
}
const d1 = new Dog("dog", 5, "Rockey", "labrador");
console.log(d1.info());

// override the info method of the parent class in the subclass
class device {
    constructor(name, cost, deviceType) {
        this.name = name;
        this.deviceType = deviceType;
        this.cost = cost;
    }
    info() {
        return `recently i have purchased new ${this.name} that is a ${this.deviceType} device and ${this.cost} for just one`
    }
}
class Laptop extends device {
    constructor(name, cost, gen, deviceType) {
        super(name, cost)
        this.gen = gen;
        this.deviceType = deviceType;
    }
    LaptopInfor() {
        return `I have ${this.name} ${this.deviceType}  and its cost is ${this.cost} it is a ${this.gen} ${this.deviceType}`
    }

    info() {
        return `recently i have purchase new ${this.name} that is ${this.deviceType} and its price is ${this.cost}`
    }
}
const l1 = new Laptop("dell", 40000, 12, "laptop");
console.log(l1.info());

class bankAccount {
    #balance;

    constructor(accountNumber, ownerName, balance = 0) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.#balance = balance;
    }
    getBlance() {
        return this.#balance;
    }
    setBalance(amount) {
        if (amount < 0 && typeof (this.#balance !== "amount")) return ` Invalide balance ! can not be negative or balance must be a number`;
        else {
            this.#balance = amount;
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) this.#balance -= amount;
        else { console.log("insucfficient funds or invalid amount") }
    }
    deposite(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return ` The Balance is ${this.#balance}`
        }
        else console.log("deposite must be positive");
    }
    get balanceInfo() {
        return ` Current Balance is :- ${this.#balance}`;
    }
    set owner(newName) {
        if (typeof newName !== "string" || newName.trim().length <= 3) {
            return `Invalide name or must be greater than 3`;
        }
        else {
            this.ownerName = newName.trim();
            console.log(`Owner name updated to : ${this.ownerName}`);
        }
    }
}
class savingAcount extends bankAccount {
    constructor(accountNumber, ownerName, balance, intrestRate) {
        super(accountNumber, ownerName);
        this.intrestRate = intrestRate;
        this.balance = balance;
    }
    addIntrest() {
        const intrest = (this.balance * this.intrestRate) / 100;
        this.balance += intrest;
        return this.balance;
    }
    withdraw(amount) {
        const Min_Balance = 500;
        const current = this.getBlance();
        if (amount <= 0) {
            console.log(`Invaide withdraw amount`);
        }

        else if (current - amount <= Min_Balance) {
            console.log(` Can not withdraw ${amount}. Minimum balance ${Min_Balance} must be maintained`)
            return;
        }
        else {
            current -= amount;
            console.log(`Remaning balance is ${this.balance}`)
            return;
        }
    }
}

const acc1 = new bankAccount(1234567, "karan", 500)
console.log(acc1.getBlance());
console.log(acc1);
acc1.deposite(200);
console.log(acc1.getBlance());
acc1.withdraw(100);
console.log(acc1.getBlance());
acc1.setBalance(-50)
console.log(acc1.getBlance());
acc1.owner = "krishna"

const acc2 = new savingAcount(123123, "amrita", 2000, 5);
console.log(acc2.deposite(100));
console.log(acc2.withdraw(2000));


class newBank {
    static bankName = "Tech bank of India";
    static totalAccounts = 0;
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        newBank.totalAccounts++;
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) this.balance -= amount;
        else { console.log("insucfficient funds or invalid amount") }
    }
    deposite(amount) {
        if (amount > 0) {
            this.balance += amount;
            return ` The Balance is ${this.balance}`
        }
        else console.log("deposite must be positive");
    }
    static bankInfo() {
        return `The Bank name is "${this.bankName}" and total accounts are ${this.totalAccounts};`
    }
}
class savingAcounts extends newBank {
    static changeBankName(newName) {
        newBank.bankName = newName;
    }
    withdraw(amount) {
        const Min_Balance = 500;
        if (amount <= 0) {
            console.log(`Invaide withdraw amount`);
        }

        else if (this.balance - amount <= Min_Balance) {
            console.log(` Can not withdraw ${amount}. Minimum balance ${Min_Balance} must be maintained`)
            return;
        }
        else {
            this.balance -= amount;
            console.log(`Remaning balance is ${this.balance}`);
            return;
        }
    }
    static info() {
        return `Balance can not be less than 500`;
    }
}
class currentAccount extends newBank {
    withdraw(amount) {
        const overdraft =1000;
        if (amount <= 0) {
            console.log(`Invaide withdraw amount`);
        }
        else if(this.balance + overdraft >=- amount){
         this.balance -= amount;
            console.log(`The owner wihdraw ${amount} and remaning balnce is ${this.balance}`);
        }
    }
    static info(){
        return ` you can take overdraft upto 1000rs`;
    }
}
const account1 = new newBank(121, 2000);
const account2 = new newBank(122, 2000);
const account3 = new newBank(123, 2000);
const account4 = new newBank(124, 2000);
const account5 = new newBank(125, 2000);
const account6 = new newBank(126, 2000);
console.log(newBank.bankInfo());

savingAcounts.changeBankName("Best bank of India");
console.log(newBank.bankInfo());
const account7 = new savingAcounts(1233,1000);
console.log(account7.withdraw(800));
const account8 = new currentAccount(123444,2000);
console.log(account8.withdraw(2700));
console.log(savingAcounts.info())
console.log(currentAccount.info());

class Animals {
    makeSound(){
        console.log("some genric animal sound")
    }
}
class dog extends Animals{
    makeSound(){
        console.log("bark")
        return;
    }
}
class cat extends Animals{
    makeSound(){
        console.log("meow")
        return;
    }
}
class cow extends Animals{
    makeSound(){
        console.log("moo")
        return;
    }
}
const animalList = [new dog(), new cow(),new cat()];
animalList.forEach(val =>{
    console.log(val.makeSound());
})

class vehicle {
    static totalvehicle = 0;
    constructor (brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
        vehicle.totalvehicle++;
    }
    displayInfo(){
        console.log(`The brand of the vehicle is ${this.brand} and it's model is ${this.model} and it was launch in ${this.year}`);
    }
    startEngine(){
        console.log("Engine started 🚀");
    }
    static showTotalVehicles(){
        return ` Total vehicles are ${this.totalvehicle}`;
    }
}
class cars extends vehicle {
   startEngine(){
    console.log("cars Engine started 🚗");
   }
}
class bike extends vehicle {
    startEngine(){
        console.log("Bike Engine started 🏍️")
    }
}
class truck extends vehicle {
    startEngine(){
        console.log("Truck Engine started 🚛");
    }
}

const car1 = new cars("BMW","M4 competion", 2024);
const bike1 = new bike("Royal Enfield","Classic 350 cc", 2022);
const truck1 = new truck("volvo", "volvo S900",2020);
const vehicles = [car1,bike1,truck1];

vehicles.forEach(val => {
    val.displayInfo();
    val.startEngine();
});
console.log(vehicle.showTotalVehicles())

class shape {
    constructor(){
        if(new.target === shape){
            throw new Error("❌ can not instantiate abstract class 'shape' directly");
        }
    }
    calculateArea(){
        throw new Error("method calculateArea must be implemented in subclass ❌");
    }
}
class rectangle extends {
    constructor(parameters) {
        
    }
}