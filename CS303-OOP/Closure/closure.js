//this code is corrected to print the desired output 

function makeArmy() {
    let shooters = [];
    let i = 0;
      while (i < 10) {
    let shooter = function() {
      console.log(i);
    };
    shooters.push(i);
    i++;
    }
    return shooters;
    }
    let army = makeArmy();
    console.log(army)//this will alert numbers from 0-10 after code correction
    console.log(army[0]);//this will alert 0