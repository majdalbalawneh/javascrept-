"use strict"

function pic(){
    // let x=document.getElementById('flower').value;
let m= document.getElementById("chose").value;



if (m=="red flower"){

    document.getElementById("image") .setAttribute('src',`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjC9fBpbUqZZ2wV_gl1-62Lgt7cWDzEMKyLA&usqp=CAU`);
}

else if (m == "whit flower") {
    document.getElementById("image").setAttribute('src',`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-dp8F3xaczKS6YkSxUuVYj8rlDTUfnKPyfA&usqp=CAU`);

}

else if (m == "pink flower") {
    document.getElementById('image').setAttribute('src',`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0gEkEMGhrqnukwE-zs12L9vQLqACdAyAjw&usqp=CAU`);
}
};



  