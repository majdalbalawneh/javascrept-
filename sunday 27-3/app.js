"use strict";
let mobileForm= document.getElementById("mobForm");
let tableBody=document.getElementById("boadTa");
let arraymob = [ ];

///////////////////////////reloud////////////////////////////////////////////

mobileForm.addEventListener( "submit" , handleSubmit);

function handleSubmit( event ){
   event.preventDefault();
   let userName=event.target.useName.value;
   let typeDevice=event.target.typeNameD.value;
   new phon (userName , typeDevice); 
}
// handleSubmit();

////////////////////////condition//////////////////////////////////////////////

function phon ( userName , typeDevice ){
    this.userName = userName ;
    this.typeDevice = typeDevice ;
    this.price = price (50 , 500);
    let x;
    if (this.price<100){
        x= 'Used';
    }else{
        x= 'New Device';
    };
    this.conditionOfMobile= x;

    arraymob.push(this);
    showData( );
    storeInLocalStorage( );
    console.log(arraymob);
}
////////////////////////////////////////////////////////////////

function price(min , max ){
    var x=Math.ceil(Math.random() * (max - min) + min);
    return x;
}
//////////////////////price////////////////////////////////////////

function condition (){
    if ( phon.price < 100){
        return "used";
    }else {
        return "new Device";
    }
}
///////////////////////////tabel////////////////////////////////////

function showData( ){
    tableBody.textContent=" ";

    for (let i = 0; i < arraymob.length; i++) {
        let tableRow = document.createElement("tr")
        let tablecol_1 = document.createElement("td");
        let tablecol_2  = document.createElement("td");
        let tablecol_3 = document.createElement("td");
        let tablecol_4  = document.createElement("td");
        
        tableBody.appendChild(tableRow);
        tableRow.appendChild(tablecol_1);
        tableRow.appendChild(tablecol_2);
        tableRow.appendChild(tablecol_3);
        tableRow.appendChild(tablecol_4);

        tablecol_1.textContent = arraymob[i].userName;
        tablecol_2.textContent = arraymob[i].typeDevice;
        tablecol_3.textContent = arraymob[i].price;
        tablecol_4.textContent = arraymob[i].conditionOfMobile;
    }
}
//////////////////////local//////////////////////////////

function storeInLocalStorage ( ){
    let stringArray=JSON.stringify(arraymob);
    localStorage.setItem("data",stringArray);
}

function callFromLocalStorage(){
    let dataObj=localStorage.getItem("data");
    let strToObject=JSON.parse(dataObj);
    if(strToObject != null){
        arraymob=strToObject;
    }
    showData( ); 
}
callFromLocalStorage( );