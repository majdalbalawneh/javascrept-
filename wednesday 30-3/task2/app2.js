`use strict`;


document.getElementById("submit").onclick = function(){
    location.href = "./app.js";
}


function callfromlocalstorage() {
    for (let i = 0; i < JSON.parse(localStorage.getItem("data")).length; i++) {
        callarr.push(JSON.parse(localStorage.sitItem("data"))[i]);
    }
}
callfromlocalstorage();