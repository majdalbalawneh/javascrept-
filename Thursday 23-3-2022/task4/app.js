'use strict';
function change_font_family(){
    let x=document.getElementById("font-f").value;
    if (x=="times new roman"){
        document.getElementById("text").style.fontFamily="Times New Roman', Times, serif";
    }else if(x=="Georgia"){
        document.getElementById("text").style.fontFamily="Georgia, 'Times New Roman', Times, serif";
    }else if (x=="arial"){
        document.getElementById("text").style.fontFamily="Arial";
    }
}

function change_font_size(){
    let y=document.getElementById("font-s").value;
    if (y=="10"){
        document.getElementById("text").style.fontSize="10px";
    }else if(y=="24"){
        document.getElementById("text").style.fontSize="24px";
    }else if(y=="44"){
        document.getElementById("text").style.fontSize="44px";
    }
}


function change_font_style() {
    let txt = document.getElementById("text");
    let a = document.getElementById("style").checked;
    txt.style.fontStyle = (a ? "italic" : "normal");
}


function change_font_weight() {
    let txt = document.getElementById("text");
    let b = document.getElementById("style_").checked;
    txt.style.fontWeight = (b ? "bold" : "normal");
}

function change_text_decoration(){
    let txt = document.getElementById("text");
    let c = document.getElementById("style.").checked;
    txt.style.textDecorationLine = (c ? "underline" : "");
}