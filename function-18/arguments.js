function addNumbers(num1,num2){
    var sum = 0;
    
    for (let i= 0; i<arguments.length; i++){
        const num = arguments[i];
        console.log(num);
    }
    return num1+num2;
        
    }

var result= addNumbers(3,5,8,5,4);
console.log(result);