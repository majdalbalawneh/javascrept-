`use strict`;
// *
// Instructions: 
//  - You should solve all these questions using .map() function 
// */


/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/

console.log("Exercise 1:");

  let array= [2, 5, 100];
  let _map=[];
function doubleNumbers(arr){
 _map=arr.map(function(f){
     return(f*2);
 });
 }
     doubleNumbers(array);
   
  console.log(_map);

  /////////////////////////////////////////////////////////////////////
/*
 * Exercise 2 : 
 * 
 * Take an array of numbers and make them strings
 *
 * Test Case: 
 *
 * console.log(stringItUp([2, 5, 100]));
 * 
 * Result:
 * ["2", "5", "100"]
*/


console.log("Exercise 2:");

// var num =[2, 5, 100] ;
//  var result=num.toString().split(",").map(Number);
//  console.log(result);


 let num=[2, 5, 100]
 let Result=num.map(function (s)
 {
   return s.toString()
   
 
 });
 console.log(Result);


  // your code here






/*
 * Exercise 3:  
 * 
 * Capitalize each of an array of names
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/
console.log("Exercise 3:");

function capitalizeWords(arr) {
  // your code here
  


    return arr.map(element => {
      return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
    });
  }
  
  console.log(capitalizeWords(["john", "JACOB", "jinGleHeimer", "schmidt"]));
  
 

/*
 * Exercise 4:  
 * 
 * Make an array of strings of the names
 *
 * Test Case: 
 *
 * console.log(namesOnly([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 *   ])); 
 * 
 * Result:
 *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
*/
  let namesOnly=([{
          name: "Angelina Jolie",
       age: 80
   },
   {
       name: "Eric Jones",
       age: 2
   },
   {
       name: "Paris Hilton",
       age: 5
   },
   {
       name: "Kayne West",
       age: 16
   },
   {
       name: "Bob Ziroll",
       age: 100
   }
]);
console.log("Exercise 4:");

let firstn=namesOnly.map(function(v){
    return v.name;
})
console.log(firstn);
//////////////////////////////////////////////////////////////////////////////////////////
/*
 * Exercise 5:  
 * 
 * Make an array of strings of the names saying whether or not they can go to The Matrix
 *
 * Test Case: 
 *
 * console.log(makeStrings([
 *    {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ]));  
 * 
 * Result:
 * 
 * ["Angelina Jolie can go to The Matrix", 
 * "Eric Jones is under age!!", 
 * "Paris Hilton is under age!!", 
 * "Kayne West is under age!!", 
 * "Bob Ziroll can go to The Matrix"]
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */
console.log(" Exercise 5 ");

let array4;
makeStrings([{
    name: "Angelina Jolie",
 age: 80
},
{
 name: "Eric Jones",
 age: 2
},
{
 name: "Paris Hilton",
 age: 5
},
{
 name: "Kayne West",
 age: 16
},
{
 name: "Bob Ziroll",
 age: 100
}
]);


function makeStrings(arr){
    array=arr.map(function (a,index) {
        let aa='';
        if(a.age<20){
            aa='is under age!!';
        }
        else{
            aa='can go to The Matrix';
        }
        return a.name + aa;
        
    })
}
    console.log(  array4);
  /////////////////////////////////////////////////////////////////////////////////////////

/*
 * Exercise 6:  
 * 
 * Make an array of the names in h1s, and the ages in h2s
 *
 * Test Case: 
 *
 * console.log(readyToPutInTheDOM([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ])); 
 * 
 * Result:
 * 
 * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
 * "<h1>Eric Jones</h1><h2>2</h2>", 
 * "<h1>Paris Hilton</h1><h2>5</h2>", 
 * "<h1>Kayne West</h1><h2>16</h2>", 
 * "<h1>Bob Ziroll</h1><h2>100</h2>"]
 */
console.log("Exercise 6");

let array5=([{
    name: "Angelina Jolie",
 age: 80
},
{
 name: "Eric Jones",
 age: 2
},
{
 name: "Paris Hilton",
 age: 5
},
{
 name: "Kayne West",
 age: 16
},
{
 name: "Bob Ziroll",
 age: 100
}
]);

function readyToPutInTheDOM(arr){
  // your code here
  
 
    return arr.map(index => "<h1>"+index.name+"</h1>" + "<h2>"+index.age+"</h2>" )
}
   console.log(readyToPutInTheDOM(array5));


////////////////////////////////////////////////////////////////////////////////////


/*
* Exercise 7:
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Cases:
*   Test Case 1:  doubleValues([1,2,3]) 
*   Test Case 2:  doubleValues([1,-2,-3])  
*
* Result:
* Test Case 1: [2,4,6] 
* Test Case 2: [2,-4,-6]
*/


  console.log("Exercise 7");
console.log("TEST1");
let numbers_=[1,2,3];
let numbersDouble=numbers_.map(double);
function double(value,index){
return value*2;
}
console.log(numbersDouble);

console.log("TEST2");
let number=[1,-2,-3];
let numbersDouble_=number.map(double);
function double(v,index){
return v*2;
}
console.log(numbersDouble_);

  //////////////////////////////////////////////////////////////////////////////////
  /*
  * Exercise 8:
  * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
  *
  *
  * Test Cases :
  *   Test Case 1:  valTimesIndex([1,2,3])  
  *   Test Case 2:  valTimesIndex([1,-2,-3]) 
  * 
  * Result
  * Test Case 1: [0,2,6]
  * Test Case 2: [0,-2,-6]
  */
 console.log("Exercise 8");
  console.log("Test Case 1:");
  
  let array6=[1,2,3];
  let item=array6.map(function (v,index) {
      console.log(v*[index]);
  })
  console.log("Test Case 2:");
  
  let array7=[1,-2,-3];
  let item_=array7.map(function (v,index) {
      console.log(v*[index]);
  })
  /////////////////////////////////////////////////////////////////////////////////////////////
  
  /*
  * Exercise 9:
  * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
  * of that key in each object.
  * 
  * Test Case:
  * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
  * 
  * Result:
  * ['Elie', 'Tim', 'Matt', 'Colt']
  */
 console.log("Exercise 9");
 
let fN;
  extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name');

  function extractKey(arr, key){
    fN=arr.map(function(a,index){
                return a[key];
            })
}
 
 console.log(fN);

  
//  /////////////////////////////////////////////////////////////////////////////////// 
  /*
  * Exercise 10:
  * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
  * 
  * Examples:
  * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
  */console.log("Exercise 10");


  extractFullName=([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) 


 extract=extractFullName.map(arr => arr.first+" "+arr.last)
console.log(extract);
