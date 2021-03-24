/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
"use strict";

function mochaTests() {
    describe("Person object", function () {
        it("has name", function () {
            assert.equal(new Person("bob", "usa", [100, 100]).name, "bob");
        });
	});

    describe("Person object", function () {
        it("has country", function () {
            assert.equal(new Person("bob", "usa", [100, 100]).country, "usa");
        });
	});
	
    describe("Person object", function () {
        it("has grade", function () {
            assert.equal(new Person("bob", "usa", [100, 90]).computeGrade(), 95);
        });
	});	

    describe("Analyser", function () {
        it("analysis properties", function () {
			let person = new Person("bob", "usa", [100, 90]);
			person.f = analyzer;	// name too short
			person.x = 0;			// name too short
			let analysis = person.f();
            assert.equal(analysis.numProperties, 6);
			assert.equal(analysis.cntShortName, 2);
			assert.equal(analysis.cntReference, 1);	// the grades array is a reference.
        });
	});	
	
}
