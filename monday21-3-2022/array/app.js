"use strict";
console.log ('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7 , 9 , 45 ]

 ["Str" ,"alex","moh"]

 ["the", "fox" ,"over", "lazy", "dog "]

*/


/*
2
What is the index of "Banana”, Tomato"
var fruits=["Tomato","Banana","Watermelon"]

Banana =>1
tomato=>0
*/

//////////////////////////////////////////////////////////////////////////
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

console.log("task3");
let fv=[ "mansaf", "msakhan", "shawerma"];
console.log(fv);
let fs=["tennis","swimming","walking"];
console.log(fs);
let fm=["ann","mb","gg"];
console.log(fm);

document.write ()



////////////////////////////////////////

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

console.log("task4");

// function sol(...arr) {

//    return arr[0] 
// }
// console.log(sol(1,4,5));

let firstOfArray=["1","2","3"]
console.log(firstOfArray[0]);

let firstOfArray_=["t","u","g","x"]
console.log(firstOfArray_[0]);
//////////////////////////////////////////////////////////////////////////////////////
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

console.log("task5");

function lastOfArray_(arr){
    return arr[arr.length -1]
}

console.log(lastOfArray_([1,4,5]));


function lastOfArray_(arr){
    return arr[arr.length -1]
}

console.log(lastOfArray_([1,4,5]));






//////////////////////////////////////////////////////////////////////////////////

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

console.log("task6");

let array=["0","5","7","9"];
array.shift("0");
array.shift("5");
array.shift("7");
array.unshift("1","2","4","6","8");
array.push("10");
console.log(array);
/*
7
Using the console try to figure out what the thing that’s (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
let task7=("task7");
console.log(task7);

let array2 = [5,9,-7,3.5];
array2.push(1 + "   push to add new element in the end");
console.log(array2);
array2.pop(5);
console.log(array2 +  " pop to remove last element" );
array2.unshift(1,2);
console.log(array2 +"   unshift to add element to the first");
array2.shift();
console.log(array2);
///////////////////////////////////////////////////////////////////////////////////////////////


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

console.log("task8");

 let middleOfArray=[1,4,5];
//  let middle = Math.floor(middleOfArray.length / 2);
//  console.log(middle);

let outp= (middleOfArray.length-1)/2;
console.log(outp);


let middleOfArray2=["t","u","g","x"];
let mid = middleOfArray2.length / 2;
let middle2 = [middleOfArray2[mid - 1], middleOfArray2[mid]];

console.log(middle2);
/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

console.log("task9");


let animals = ['cat', 'ele', 'bird'];
animals[0]="zebra";
animals[1]="elephant";
animals.splice(2,1);
console.log(animals);


let nums= [1,2,3,8,9]
nums[0]=5;
nums[1]=-22;
nums[2]=3.5;
nums[3]=44;
nums[4]=98;
nums.push(44);
console.log(nums);

////////////////////////////////////////////////////////////////////////////////////////////////////
// 10
// Create a function called indexOfArray
// that accept an array and index
// and return what this array have in this index

// var nums= [1,2,3,8,9]
// Ex: indexOfArray(nums,3) => 8
// Ex: indexOfArray(nums,1) => 2
// Ex: indexOfArray(nums,4) => 9

// **try more cases by your self
// */

console.log("task10");


function indexOfArray(array, index){
    return array[index];
}

nums = [1,2,3,8,9];
console.log(indexOfArray(nums,3));
console.log(indexOfArray(nums,1));
console.log(indexOfArray(nums,4));


////////////////////////////////////////////////////////////////////////////////////

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
console.log("task11");

let numss= [1,2,3,8,9];
function arrayExceptLast(array){
    array.pop();
    return array;
}

console.log(arrayExceptLast(numss));



///////////////////////////////////////////////////////////////////////////////////////////////
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

console.log("task12");
function addToEnd(array){
    array.pop(4,1);
    array.push(55);
    return array;
}
var numsp= [1,2,3,8,9]
console.log(addToEnd (numsp));

//////////////////////////////////////////////////////////////////////////////////////
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

console.log("task13");

let arr = [1, 2, 3, 8,9];
let sum = 0;

    

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

document.getElementById("para13").innerHTML=`is sumArray[1,2,3,8,9]is ${sum}`;
//////while 
let num= [1,2,3,8,9];
function sumArray(array){
    let d= array.length;
    let sum_2=0;
    let o=0;
    while (o<d){
        sum_2=sum_2+array[o];
        o++;
    }
    return sum_2;
}
console.log(sumArray(num));








//////////////////////////////////////////////////////////////////////////
/*



14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("task14");

// var ar =  [1,2,3,8,9]
// var min = Math.min.apply(Math, ar)
// console.log(min)

let Numbers = [1,2,3,8,9];
let h = Numbers.length;
let min= Infinity;
let i;
for (i = 0; h > i; i++) {

    if (Numbers[i] < min) {

        min = Numbers[i];

    }

}

console.info(min);
document.getElementById("para14").innerHTML=`minInArray[1,2,3,8,9] is ${min}`;
/////////while/////////////////
// let numbers= [1,2,3,8,9];
// function sumArray(array){
//     let min_= numbers.length;
//     let max=Infinity;
//     let i;
//     while (){
//     }
//

////////////////////////////////////////////////////////////////


/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("task15");
function removeFromArray(array, element){
    let l = array.length;
    for(let i=0; i<l; i++){
        if (array[i] == element){
            array.splice(i,1)
        }
    }
    return array;
}
console.log(array);
document.write(array);
/////////////////

// let remove= [1,2,3,8,9]
// function removeFromArray(remove)
// {
// remove.splice(3,1)
// console.log(remove);
// }
// removeFromArray(remove)

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts



var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// console.log("task16");

// let N= [1,2,3,8,9]
// function oddArray(v)
// {
//  if (v%2!==0)
// {
//  console.log(v);
//  return v
// }
// }
// oddArray(v);
console.log("task16");
let arrr = [1,2,3,8,9]

let odds = arr.filter(n => n%2)

console.log(odds)


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("task17");


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("task18");
// function minInArray1(...nums) {
//     let mini=nums[0];
//     i=1;
//     while (i<nums.length) {
//         if (nums[i]<mini) {
//            mini =nums[i];
//         }  
//         i++;
//     }
//         return mini;     
//     }
// console.log( minInArray1);
////////////////////////////

// function shorterInArray(...str) {
//     for (let i = 0; i < str.length; i++) {
//         shorter=str.reduce(function(a, b) {return a.length <= b.length ? a : b;});
// function shorterInArray1(...str) {
//     let i = 0;
//     while (i < str.length) {
//         shorter=str.reduce(function(a, b) {return a.length <= b.length ? a : b;});
//         i++;
//     }  return shorter;
//     }



/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("task19");
let string= "alex mercer madrasa rashed2 emad hala";
function repeatChar(string, char){
    let l= string.length;
    let sum_1= 0;
    for(let i=0; i<l; i++){
        if(string[i]==char){
            sum_1+=1;
        }
    }
    return sum_1;
}




/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

console.log("task20");







console.log( "task21");

// Create a function called powerElementIndex
// that accept an array of number
// and return a new array that have the elemnt power by the index of it self

// var nums= [44, 5, 4, 3, 2, 10]
// Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

console.log("task22");

