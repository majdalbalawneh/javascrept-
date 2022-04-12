`use strict`;


// document.getElementById("submit").onclick = function(){
//     location.href = "./app.js";
// }


// function callfromlocalstorage() {
//     let callarr;
//     for (let i = 0; i < JSON.parse(localStorage.getItem("data")).length; i++) {
//         callarr.push(JSON.parse(localStorage.sitItem("data"))[i]);
//         result.innerHTML= `Hello! This is ${i.first}, I was born on ${i.bdate} and my email is: ${i.email}`;
//     }
// }
// callfromlocalstorage();

'use strict';

let result=document.getElementById('result');
function GetDataFromLocalStorage(){
    let storageData=localStorage.getItem('data');
    let parseData=JSON.parse(storageData);
    console.log(parseData);
    renderInformation(parseData)

}
GetDataFromLocalStorage()

function renderInformation(parseData){
    console.log(parseData[0].first);
    parseData.map(function(i){
    // result.innerHTML= `Hello! This is ${i.first}, I was born on ${i.bdate} and my email is: ${i.email}`;
    // console.log("hello");
   let newSpan=document.createElement('span');
        result.appendChild(newSpan);               /////////appendChild
        newSpan.innerHTML= `Hello! This is ${i.first}, I was born on ${i.bdate} and my email is: ${i.email}`;

}
    )}



