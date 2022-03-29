'use strict'
let formDiv= document.getElementById("mobForm");
let thElement=document.getElementById("headTa")
let tbElement=document.getElementById("boadTa");
let userinfo=[];
function phone(useName,typeNameD){
    this.useName=useName;
    this.typeNameD=typeNameD;
    this.price=pricephone(50,500);
    this.conditon=conditon();
      

    userinfo.push(this);
    renderType();
    console.log(userinfo);
}
function pricephone(min,max){
    return Math.ceil(Math.random() * (max - min) + min);
}


function conditon() {
    let pricephone=phone.price;
    if (pricephone <= 50) {
        return 'used';
    } 
    else {
        return 'new Device';
    }
  
      
}
formDiv.addEventListener("submit",handleSubmit);
 function handleSubmit(event){
    event.preventDefault();
    
    let useName=event.target.useName.value;
    
    
    let typeNameD=event.target.typeNameD.value;
    

    new phone(useName,typeNameD);
    console.log(phone);

 }
 handleSubmit();
 function renderType() {
    boadTa.textContent="";
  
    for (let a = 0; a < userinfo.length; a++) {
        let trElement = document.createElement("tr");
        let tdElement4 = document.createElement("td");
        let tdElement1 = document.createElement("td");
        let tdElement2 = document.createElement("td");
        let tdElement3 = document.createElement("td");

      tbElement.appendChild(trElement);
      trElement.appendChild(tdElement4);
      trElement.appendChild(tdElement1);
      trElement.appendChild(tdElement2);
      trElement.appendChild(tdElement3);
  
      tdElement4.textContent = userinfo[a].useName;
      tdElement1.textContent = userinfo[a].typeNameD;
      tdElement2.textContent = userinfo[a].price;
      tdElement3.textContent = userinfo[a].conditon;
    }
}
