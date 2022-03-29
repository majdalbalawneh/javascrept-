// /*
// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
// Sample array:
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output:
// [4, 5, 8, 10, 12, 13] */


// function Arrays_sum(array1,array2){
//     let newArray=[];
//     let indexCount=0;

// /************ The First Solution  ************/
//     while(indexCount<array1.length && indexCount<array2.length){ // to sum arrays index values
//         newArray.push(array1[indexCount]+array2[indexCount]);
//         indexCount ++;
//     }
//     if (indexCount === array1.length){ //to check that I add all array2 index values 
//         for (let i=indexCount; i<array2.length;i++){
       
//             newArray.push(array2[i]);
//         }
//     }
//     if (indexCount === array2.length){ //to check that I add all array1 index values 
//         for (let i=indexCount; i<array1.length;i++){
       
//             newArray.push(array1[i]);
//         }
//     }
    
//     return newArray}
        
// /************ The Second Solution  ************/
//        /* 
//         for (let i=0;i<array1.length;i++){
//             indexCount=i;
//             if (i<array1.length && i<array2.length){
//                 newArray.push(array1[i]+array2[i]);
//             }
        
//         if(array2.length>=array1.length){
//             newArray.push(array2[indexCount]);
//         }
//        else if(array2.length<array1.length)
//         newArray.push(array1[indexCount]);}
//         return newArray}*/

// console.log(Arrays_sum([1,0,2,3,4,5],[3,5,6,7,8,13]));
// document.write(Arrays_sum([1,0,2,3,4,5],[3,5,6,7,8,13]))


//  let arr = [1,0,2,3,4];
// let arr2 = [3,5,6,7,8,13];

// let sum = arr.map((a, i) => a + arr2[i]);

// console.log(sum);


let a = [1,0,2,3,4];
let b = [3,5,6,7,8,13];


function sumArray(a, b) {
    let c = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
      c.push((a[i] || 0) + (b[i] || 0));
    }
    return c;
}
console.log( sumArray(a, b) );

