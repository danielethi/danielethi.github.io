/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
function nameString(obj) {
    let result = 'name' in obj;
    if(result===true){
        return "object has properties";
    }else{
        return "object has no properties"
    }
  }
    
