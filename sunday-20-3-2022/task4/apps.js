let x=prompt('number1');
let y=prompt('number2');
let z=prompt('number3');
let x_num=Number(x);
let y_num=Number(y);
let z_num=Number(z);

if((x_num%3==0) || (y_num%3==0)||(z_num%3==0)){
    console.log('fizz');
    document.write('fizz')
}
else{
    console.log('nothing ');
    document.write('nothing')
}
if((x_num%5==0) || (y_num%5==0)||(z_num%5==0)){
    console.log('buzz');
    document.write('buz')
   
}
else{
    console.log('nothing ');
    document.write('nothing')
}
if(((x_num%3==0) && (x_num%5==0))||((y_num%3==0) &&(y_num%5==0)) || ((z_num%3==0)&&(z_num%5==0))){
    console.log('fizz buzz');
    document.write('fizz buzz')
}
else{
    console.log('nothing ');
    document.write('nothing')
}