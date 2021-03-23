/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
function nameString(obj) {
    let obj = [];
    for(let key of obj){
    if(obj.length===0){
        return "object has no properties";
    }else{
        return key;
    }
        }
    }
