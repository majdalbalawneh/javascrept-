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

// 'use strict';
// let locform = document.getElementById("mobForm");
// let pargloc =  document.getElementById("cityResult")




// function getvalue(loccation)
// {
//      this.loccation = loccation;
     
//      outputlocation(loccation);

// }

// async function outputlocation(x)
// {
    // let respone = await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.03928755c8eb5e28e3663800b378b4c6&q=${x}&format=json`)
    // let data = await respone.json()
   
    
    async function getData(x) {
        let responce = await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.03928755c8eb5e28e3663800b378b4c6&q=${x}&format=json`);
        let data = await responce.json( );
       console.log(responce);
        console.log(data[0]);
        localPara.innerHTML=`City name is :${data[0].display_name.split(",",2)} || Longitude is :${data[0].lon} || latitude is:${data[0].lat}`;
        document.querySelector(`#icon`).src= data[0].icon;
    };

    let localForm=document.getElementById("locForm");
    let localPara=document.getElementById("cityResult");
    let button=document.getElementById("submit2");
    
    localForm.addEventListener("submit", function(event){
        event.preventDefault( );
        let x=event.target.locName.value;
        getData(x);
      });
//    let createname = document.createElement("span");
//    pargloc.appendChild(createname)
//    createname.innerHTML= `Location Name: ${data[0].display_name} <br>
//    lot: ${data[0].lat}
//    lon: ${data[0].lon}
//    <br>`
//    let imgsrc = data[0].icon
//    console.log(imgsrc);
//    document.getElementById("img1").src = `${imgsrc}`
    
//     console.log(data);


// }

// locform.addEventListener("submit" , getfromform ) 
// function getfromform(event) 
// {
//     event.preventDefault();

//     let loccation = event.target.locName.value ; 
//     console.log(loccation);
//     new getvalue(loccation)



// }
// getfromform();
