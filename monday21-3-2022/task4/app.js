/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
console.log('Task2');
function tellFortune(jobTitle, location, partner, numOfChilds){
  return ("You will be a "+jobTitle+" in "+location+", and married to "+partner+" with "+numOfChilds+" kids.");

}

console.log(tellFortune('software engineer', 'Jordan', 'Alice', 3));






/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
console.log('Task2');
function calculateDogAge(puppyAge){
    let age = puppyAge*7;
    return ("Your doggie is "+age+" years old in dog years!");
}


console.log(calculateDogAge(1));




/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
console.log('Task3');

function calculateSupply(age, ammountPerDay){
    let teaAmmount= (100-age)*365*ammountPerDay;
    return ("You will need "+teaAmmount+ " cups of tea to last you until the ripe old age of 100.")
}


console.log(calculateSupply(30, 3));




/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
console.log('Task4');
function greet(name){
    return ("Hello "+name);
}


console.log(greet("Adam"));


/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
console.log('Task5 done');
function double(x) {
  return 2 * x;
}

function double(num) {
  return 2 * num;
}

function double(y) {
  return 2 * y;
}


console.log('Task6 done');

/*
6
fix these functions:
funcion double1(x ){
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function  double3(x) {
  return 2 * x;
}
*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
console.log('Task7 done');
  function cube(num){
    return Math.pow(num,3);
}


console.log(cube(4));




/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
console.log('Task8');
function multiply(num1, num2){
    return (num1*num2);
}


console.log(multiply(3,4));
console.log(multiply(5,4));




/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

console.log('Task9');
function canIGetADrivingLicense(age){
    if(age >= 20){
        return "Yes you can"
    }else{
        return ("Please come back after "+(20-age)+" years to get one")
    }
}


console.log(canIGetADrivingLicense(21));
console.log(canIGetADrivingLicense(17));
console.log(canIGetADrivingLicense(20));



/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

console.log('Task10');
function sameLength(string1, string2){
    let a1= string1.length;
    let a2= string2.length;
    if(a1 == a2){
        return true;
    }else{
        return false;
    }
}

console.log(sameLength("tree","clue"));
console.log(sameLength("tree","car"));



/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
console.log('Task11');
function largerNumber(num1, num2){
    let largestNum= num1;
    if (num2>num1){
        largestNum= num2;
    }
    return largestNum;
}


console.log(largerNumber(5,6));
console.log(largerNumber(5,3));


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

console.log('Task12');
function smallerNumber(num1, num2, num3){
    let smallest= num1;
    if (num2<num1){
        smallest=num2;
    }
    if(num3<num1 && num3<num2){
            smallest=num3;
    }
    return smallest;
}


console.log(smallerNumber(8,6,7));
console.log(smallerNumber(5,99,34));
console.log(smallerNumber(5,99,3));
console.log(smallerNumber(5,3,3));



/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

	console.log('Task13');
	console.log('Task13:---------');
	function shorterString(s1,s2,s3,s4,s5){
	    let s1l= s1.length;
	    let s2l= s2.length;
	    let s3l= s3.length;
	    let s4l= s4.length;
	    let s5l= s5.length;
	    shortest=s1;
	    if (s2l<s1l){
	        shortest=s2;
	    }
	    if (s3l<s1l && s3l<s2l){
	        shortest=s3;
	    }
	    if (s4l<s1l && s4l<s2l && s4l<s3l){
	        shortest=s4;
	    }
	    if (s5l<s1l && s5l<s2l && s5l<s3l && s5l<s4l){
	        shortest=s5;
	    }
	    return shortest;
	}
	

	console.log(shorterString("air","school","car","by","github"));
	console.log(shorterString("air","tr","car","by","github"));
	console.log(shorterString("by","tr","car","air","github"));
	console.log(shorterString("air","by","car","school","github"));
	console.log(shorterString("air","tr","by","car","github"));
	console.log(shorterString("air","tr","car","github","by"));


/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

console.log('Task14');
function longerString(s1,s2,s3,s4){
    let s1l= s1.length;
    let s2l= s2.length;
    let s3l= s3.length;
    let s4l= s4.length;
    longest=s1;
    if (s2l>s1l){
        longest=s2;
    }
    if (s3l>s1l && s3l>s2l){
        longest=s3;
    }
    if (s4l>s1l && s4l>s2l && s4l>s3l){
        longest=s4;
    }
    return longest;
}


console.log(longerString("air","school","car","github"));
console.log(longerString("air","github","car","school"));





/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
console.log('Task15');
function isEven(number){
    if(number %2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(1));
console.log(isEven(2));


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
console.log('Task16');
function isOdd(number){
    if(number %2 != 0){
        return true;
    }else{
        return false;
    }
}


console.log(isOdd(4));
console.log(isOdd(5));


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
console.log('Task17');
function positive(number){
    return Math.abs(number);
}


console.log(positive(4));
console.log(positive(-5));



/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
console.log('Task18');
function fullName(firstName, lastNname){
    return firstName+' '+lastNname;
}

console.log(fullName("Adam","McCallen"));
console.log(fullName("Alex", "Mercer"));




/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
console.log('Task19');
function average(h1, h2, h3, h4, h5){
    let sum= h1+h2+h3+h4+h5;
    let average= sum/5;
    return average;
}


console.log(average(1,2,3,4,5));
console.log(average(5,7,9,3,5));

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

console.log('Task20');
function randomNumber(){
    return Math.random();
}


console.log(randomNumber());
console.log(randomNumber());

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
console.log('Task21');
function randomBetweenNumbers(num1, num2){
    return (num2-num1)*Math.random()+num1;
}


console.log(randomBetweenNumbers(1,8));
console.log(randomBetweenNumbers(3,100));


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
console.log('Task22');
function scoreInUniversity(mark){
    let grade= '';
    if (0<=mark && mark<=49){
        grade= 'F';
    }
    if (50<=mark && mark<=69){
        grade= 'D';
    }
    if (70<=mark && mark<=84){
        grade= 'C';
    }
    if (85<=mark && mark<=94){
        grade= 'B';
    }
    if (95<=mark && mark<=100){
        grade= 'A';
    }
    return grade;
}


console.log(scoreInUniversity(96));
console.log(scoreInUniversity(3));
console.log(scoreInUniversity(71));


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
console.log('Task23');
let countNum=0;
function counter(){
    return ++countNum;
}


console.log(counter());
console.log(counter());
console.log(counter());




/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/