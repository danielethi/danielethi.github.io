

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(?, ?); // ?

    // this code should be rewritten as
   //using arrow function 
   //askPassword(() => user.login(true), () => user.login(false));
   //or using bind
   //askPassword(user.login.bind(user, true), user.login.bind(user, false));

