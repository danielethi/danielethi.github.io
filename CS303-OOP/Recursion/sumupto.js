
//this will return the sum of numbers up to a given number

function sumUpTo(num) {

    if (num == 1) {
    
    return 1;
    
    }
    
    return num + sumUpTo(num - 1);
    
    }
    
    console.log( sumUpTo(10) );