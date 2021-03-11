function compute(){
    let userInput=document.getElementById("inp").value;
    let splitted=userInput.split(",");
    let sum = sumFun(splitted);
    document.getElementById("sum").innerHTML=sum;
    document.getElementById("avg").innerHTML=sum/splitted.length;
}
    function sumFun(arr){
        let sum=0;
        for(let n of arr){
             sum+=Number(n)
        }
    return sum;
    } 
