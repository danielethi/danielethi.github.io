/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

/*
Function analyzer
Has an unbound this
Creates an object that contains the following information from the "this" object.
{
	numProperties  	// number of properties
	cntShortName	// count of property names shorter than 3 characters
	cntReferences	// count of reference properties (use the typeof operator to compute this)
}	

function analyzer() {
	let output = {};
	let k = Object.keys(this);
	let v = Object.values(this);

	output.numProperties = k.length;
  
	let countNum = 0;
	for (let elem of k) {
	 
	  if (elem.length < 3) countNum++;
	}
	output.cntShortName = countNum;
  
	let countObj = 0;
	for (let elem of v) {
	 
	  if (typeof elem === "object") {
		countObj++;
	  }
	}
	output.cntReference = countObj;
  
	return output;
  }
  

/* Constructor for a person object
	Person(name, country, grades) creates object
	{
		name: name,  // person's name
		county: country, // person's country
		grades: grades,  // integer array of grades
		computeGrade     // function that computes the grade from grades
	}
*/

function Person(name, country, grades) {
	this.name = name;
	this.country = country;
	this.grades = grades;
	this.computeGrade = function () {
	let sum = 0;
	for (let grade of this.grades) {
	sum += grade;
	}
	let avg = sum / this.grades.length;
	return avg;
	}
   }
	

