"use strict"
let x=document.getElementById("mydiv");
x.style.backgroundColor="blue";

let y=0;
function change() {
    let change=["blue" ,"red" ,"green", "blue"];

    x.style.backgroundColor=change[y];
    y++;
    if(y===change.length)y=0;
}