//=====If-Else======
var age = 18;

if(age >= 18){
    console.log('Yes, Adult');
}
else{
    console.log('No');    
}


//====if-else and else-if condition=====

var time = 40;

if( time < 20){
    console.log('Good Morning');
}
else{
    console.log('Good Night');    
}

var attendance = 20;

if( attendance>= 10){
    console.log('You are allowed in the exam');
}else if( attendance > 10){
    console.log('You are partially allowed in the exam');
}
else{
    console.log('You are not allowed in the exam');    
}


//======Another conditions=====
var letter = 'person';

if ( letter === 'person'){
    console.log('Good job ! spot on');
}
else if ( letter === 'person' || letter === 'other'){
    console.log('Close, But not enough close..')
}
else{
    console.log('Way off....')
}





