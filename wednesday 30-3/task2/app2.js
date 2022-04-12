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
let result=document.getElementById('text');

function GetDataFromLocalStorage(){
    let storageData=localStorage.getItem('storeInlocalStorage');
    let parseData=JSON.parse(storageData);
    console.log(parseData);
    renderInformation(parseData)
}
GetDataFromLocalStorage()

function renderInformation(parseData){
    parseData.map(function(i){
    result.innerHTML= `Hello! This is ${i.first}, I was born on ${i.bdate} and my email is: ${i.email}`;
    })
}
