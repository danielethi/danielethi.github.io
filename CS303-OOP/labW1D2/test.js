/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
"use strict";

function mochaTests() {
    describe("nameString", function () {
        it("object has no properties", function () {
            assert.equal(nameString([]), "object has no properties");
        });
	});
	
    describe("nameString", function () {
        it("no object passed", function () {
            assert.equal(nameString(), "no object passed");
        });
	});	

    describe("nameString", function () {
        it("null argument", function () {
            assert.equal(nameString(null), "null argument");
        });
	});		

    describe("nameString", function () {
        it("object has one property", function () {
            assert.equal(nameString({a:5}), "a");
        });
	});		

    describe("nameString", function () {
        it("object has three properties", function () {
            assert.equal(nameString({a:5, z:6, m:8}), "a.m.z");
        });
	});		
	
}
