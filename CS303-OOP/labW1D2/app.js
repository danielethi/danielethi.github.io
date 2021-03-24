/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
function nameString(obj) {
    // if(Object.keys(obj).length===0){
    //     return "object has no properties";
    // }else{
    //     return obj;
    // }
    //or
    // if (obj === undefined) {
    //     return "no object passed";
    // }else if(obj===null){
    //     return "null arguement";
    // }else{

    // }
  
            if (obj === undefined) {
            return "no object passed";
            } else if (obj === null) {
            return "null argument";
            } else {
            if (Object.keys(obj).length === 0) {
            return "object has no properties";
            } else {
            let keys = [];
            let result;
            for (let key in obj) {
            keys.push(key); //[a,z,m]
            result = keys.sort().join("."); //[a,m,z]
            //"a.m.z" 
            }
            return result;
            }
            }
}  
           

    
   
  

  

    
