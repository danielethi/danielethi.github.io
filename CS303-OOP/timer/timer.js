// Write a function printNumbers(from, to) that outputs a number every second, starting from
//from and ending with to

function printNumbers(from, to){
    for(let i=from;i<=to;i++){
         console.log(i)
    }
}

setInterval(printNumbers,1000,4,9)