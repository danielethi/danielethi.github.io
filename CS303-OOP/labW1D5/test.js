/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
"use strict";

function mochaTests() {
    describe("countSubstring", function () {
        it("substring present", function () {
			let result = countSubstring("5abdxyxabdabd", "abd");
            assert.equal(result, 3);
        });
	});		

    describe("countSubstring", function () {
        it("substring not present", function () {
			let result = countSubstring("5abdxyxabdabd", "xxx");
            assert.equal(result, 0);
        });
	});		
	
    describe("saveInLocalStorage", function () {
        it("save", function () {
			saveInLocalStorage("CS303test", {name:"bob", country:"usa", grades:[80,90]});
			let result = JSON.parse(localStorage.getItem("CS303test"));
            assert.equal(result.name, "bob");
        });
	});		
    
	describe("getFromLocalStorage", function () {
        it("get", function () {
			let result = getFromLocalStorage("CS303test");
            assert.equal(result.country, "usa");
        });
	});		

	describe("addMissingProperties", function () {
        it("location not present", function () {
			let obj = {name:"bob", school:"miu"};
			obj.f = addMissingProperty;
			obj.f({location:"fairfield"});
            assert.equal(obj.location, "fairfield");
        });
	});	

	describe("addMissingProperties", function () {
        it("location present", function () {
			let obj = {name:"bob", school:"miu", location:"india"};
			obj.f = addMissingProperty;
			obj.f({location:"fairfield"});
            assert.equal(obj.location, "india");
        });
	});			
	
	describe("Person", function () {
        it("date", function () {
			let person = new Person("bob", "usa");
			let date = new Date();
            assert.equal(person.creationDate.getFullYear(), 2021);
			assert.equal(person.creationDate.getMonth(), 2);
        });
	});			

	describe("Register", function () {
        it("assign", function () {
			let students = [{name:"bob", country:"usa"}, {name:"jill", country:"usa"}];
			let course = register(students);
			assert.equal(course.get(students[0]), 0);
			assert.equal(course.get(students[1]), 0);
        });
	});			

	describe("incrementAbsences", function () {
        it("mark absent", function () {
			let students = [{name:"bob", country:"usa"}, {name:"jill", country:"usa"}];
			let course = register(students);
			let student = students[0];
			incrementAbsences(course, student);
			incrementAbsences(course, student);
			incrementAbsences(course, student);
			assert.equal(course.get(student), 3);
        });
	});			
}
