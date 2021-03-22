/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
"use strict";

function mochaTests() {
    describe("pow", function () {
        it("raises to n-th power", function () {
            assert.equal(pow(2, 3), 8);
        });
    });

    describe("add2", function (...args) {
        it("add two numbers", function () {
            assert.equal(add(1, 2, 3), 6);
        });
    });

    describe("computeGrade", function (...args) {
        it("add variable number of arguments", function () {
            assert.equal(add(1, 2, 3), 6);
        });
    });

    describe("add", function (...args) {
        it("add variable number of arguments", function () {
            assert.equal(add(), 0);
        });
    });

    describe("computeGrade", function () {
        it("Compute letter grade", function () {
            assert.equal(computeGrade([90,90,90]), "A");
        });
    });
    describe("computeGrade", function () {
        it("Compute letter grade", function () {
            assert.equal(computeGrade([80,80,80]), "B");
        });
    });
    describe("computeGrade", function () {
        it("Compute letter grade", function () {
            assert.equal(computeGrade([70,70,70]), "C");
        });
    });
    describe("computeGrade", function () {
        it("Compute letter grade", function () {
            assert.equal(computeGrade([60,60,60]), "D");
        });
    });          
    describe("computeGrade", function () {
        it("Compute letter grade", function () {
            assert.equal(computeGrade([59,59,59]), "NC");
        });
    });        }
