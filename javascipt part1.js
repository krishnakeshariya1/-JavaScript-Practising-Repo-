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
const nums = [1, 2, 3, 4, 5];
const double = nums.map(num => num * 2);

// used for perfoming an action, not reuring a new array
nums.forEach(num => console.log(num * 2));

// maps and then flatterns the result by one level
const ar2 = [1, 2, 3, 4];
const result = ar2.flatMap(num => [num, num * 2]);
console.log(result);

// reduce an array to a single element
const total = ar2.reduce((acc, curVal) => acc + curVal);