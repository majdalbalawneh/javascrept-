'use strice';


let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

let Avm = 0;

for (let a=0; a < students.length; a++) {
        Avm += students[a][1];
        let Avg = (Avm/students.length);
}

console.log ("Average grade: " + (Avm)/students.length);

        if ( Avm < 60)
        {
          console.log("Grade : F");      
          } 
        else if (Avm < 70) {
                console.log("Grade : D"); 
                  } 
        else if (Avm  < 80) 
             {
                console.log("Grade : C"); 
        } else if (Avm  < 90) {
                console.log("Grade : B"); 
        } else if (Avm  < 100) {
                console.log("Grade : A"); 
}
