"use strict";

///////////////////////////////task1/////////////////////////////////////////
console.log("task1");

function user(firstName,lastName,age,dob,favoritefood, favoritemovie) {
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.dob=dob;
    this.favoritefood=favoritefood;
    this.favoritemovie=favoritemovie;
}

const user1= new user('Majd','Albalawneh','22','14January','Msakhan','Ann');
console.log(user1);



/////////////////////////////////task2/////////////////////////////////////////
console.log("task2");

//   2
//   Using the varabile persons
//   Create a function called firstName
//   that accept an object
//   and return all the first name of the person insides
  
//   Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
//   */
  
  
  let persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];

function firstName(arr) {
     let array =[];
    for (let a= 0; a <arr .length;a++){
    array.push(arr[a].name.first);
        
    }
    return array
}
console.log(firstName(persons));
  
////////////////////////task3//////////////////////////////////////////////////////////////////////////

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
console.log("task3");


function averageAge(arr) {
    let result=0;
    for(let a=0; a<arr.length;a++){
        result=result+arr[a].age;
    }
    return result / arr.length;
}
console.log(averageAge(persons));

////////////////task4//////////////////////////////////////////////////////////////////////////////////////

// 4
// Using the varabile persons
// Create a function called olderPerson
// that accept an object
// and return the full name of the older person

// Ex: olderPerson(persons) => "Soso Al-Amora"
// */

// function olderPerson(x) {
//     let older=0;
//     for(let a=0; a < x.length-1;a++){
//         if (x[a].age<x[a+1].age) {
//             older=x[a+1].age;
//         }
//        return older;
//     }
    
// }
// console.log(olderPerson(persons));

console.log("task4");

function olderPerson(x) {
    let older=0;
    let a;
    for(let a=0; a < x.length;a++){
        if (x[a].age>older) {
            older=x[a];
            a=x[a];
        }
       
     
    }
      return older;
}
console.log(olderPerson(persons));



/////////////////////////////////////////////////////////////////////////////////////////////
/*
5console.log("task5");
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

////////////////////////////////////////////////////////////////////////////////////////////////

// function longestName(x) {
//     let max=((x[0]).name.first+ x[0].name.last).length);
// for(let f =0 ,a < x.length-1;a++){
//     if(max<(x[a+1].name.first+x[a+1].name.last).length){
//         max=((x[a+1]).name.first+x[a+1].name.last).length);

//     }


// }
//     return max;
// }

// console.log(longestName(persons));
//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
console.log("task7");




let myGreeting  = 'My name is alex mercer class name B baba mama hello Hello HELLO';

console.log(myGreeting.toLowerCase());
let str = "my name is alex mercer class name b baba mama hello hello hello",

   split = str.split(" ");
    split=split ;
   let obj = {};

for (let i = 0; i < split.length; i++) {
  if (obj[split[i]] === undefined) {
    obj[split[i]] = 1;
  } else {
    obj[split[i]]++;
  }
}
console.log(obj)




/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/console.log("task8");
  console.log(repeatChar("mamababatetacedo"));
function repeatChar(str) {
  var obj={};
  for(let x = 0, length = str.length; x < length; x++) {
      var a = str.charAt(x)
      obj[a] = (isNaN(obj[a]) ? 1 : obj[a] + 1);
    }
    return obj;
  };


 


// let stt = "My name is alex mercer class name B baba mama hello Hello HELLO",

//    split = str.split(" ");
//     split=split+Character ;
//    let obj = {};

// for (let i = 0; i < split.length; i++) {
//   if (obj[split[i]] === undefined) {
//     obj[split[i]] = 1;
//   } else {
//     obj[split[i]]++;
//   }
// }
// console.log(obj)

/*
9


Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  
*/
console.log("task9");


function selectFromObject(x,y){
  let obj = {};
      for(let i =0 ; i<y.length ; i++)
      {
        
          if(Object.keys(x)[i]==y[i])
          {
              
              obj[y[i]] = x[y[i]];
          }
      }
  return obj
  }
  console.log(selectFromObject({a: 1, cat: 3 }, ['a', 'cat', 'd']));
 console.log({a: 1, cat: 3});
  ///////////////////////////

/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
console.log("task10");

  function objectToArray(obj){
    let arr=[];
    let objkeys= Object.keys(obj);
    let objv=Object.values(obj);
    let l=objkeys.length;
    for(let i=0; i<l; i++){
        arr.push(objkeys[i]);
        arr.push(objv[i]);
    }
    return arr; 
  }
  
  console.log(objectToArray({firstName:"Moh",age:24}));
  
  
/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
console.log("task11");

function objectToArray(obj){
  let arr=[];
  let objkeys= Object.keys(obj);
  let objv=Object.values(obj);
  let l=objkeys.length;
  for(let i=0; i<l; i++){
      arr.push(objkeys[i]);
      arr.push(objv[i]);
  }
  return arr; 
}

console.log(objectToArray({firstName:"Moh",age:24}));


/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
console.log("task12");
function onlyNumber(obj) {
  let newObj={};
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (typeof(Object.values(obj)[i]) == `number`) {
      newObj[Object.keys(obj)[i]] = Object.values(obj)[i];
    }
  } return newObj;
}
console.log(onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]}));

/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
console.log("task13");

function onlyString(obj) {
  let newObj={};
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (typeof(Object.values(obj)[i]) == `string`) {    ///////////////
      newObj[Object.keys(obj)[i]] = Object.values(obj)[i];
    }
  } return newObj;
}
console.log(onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]}));

/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
console.log("task14");
function onlyArray(obj) {
  let newObj={};
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (typeof(Object.values(obj)[i]) == `...arr`) {    ///////////////
      newObj[Object.keys(obj)[i]] = Object.values(obj)[i];
    }
  } return newObj;
}
console.log(onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));



/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/
console.log("task15");
function keysArray(obj){
  let list=Object.keys(obj);
  return list;
}

console.log(keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));