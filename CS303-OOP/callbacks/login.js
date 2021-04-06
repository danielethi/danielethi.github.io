//fix the code below
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
    }
    let user = {
    name: 'John',
    loginOk() {
    alert(`${this.name} logged in`);
    },
    loginFail() {
    alert(`${this.name} failed to log in`);
    },
    };
    askPassword(user.loginOk, user.loginFail);

    //use bind to fix this

//askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//or
//use 
//askPassword(() => user.loginOk(), () => user.loginFail());