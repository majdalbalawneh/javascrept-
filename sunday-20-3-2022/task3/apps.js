let operation=prompt('entr one of the operation:+,-,/,*');
let first_num_string=prompt('enter the first number');
let second_num_string=prompt('enter the second number');

let first_num_number=Number(first_num_string);
let second_num_number=Number(second_num_string);
switch (operation) {
    case "+":{
        let result=first_num_number+ second_num_number;
        console.log(result);
        alert(result);
        document.write(result)
            break;
    }
        
    
    case "-":{
        let result=first_num_number-second_num_number;
        console.log(result);
        alert(result);
        document.write(result)
            break;
    }
    case "*":{
        let result=first_num_number*second_num_number;
        console.log(result);
        alert(result);
        document.write(result)
            break;
    }
    case "/":{
        let result=first_num_number/ second_num_number;
        console.log(result);
        alert(result);
        document.write(result)
            break;
    }
}