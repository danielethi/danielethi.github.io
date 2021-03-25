/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
"use strict";

function mochaTests() {
    describe("removeEvenCharacters", function () {
        it("non-empty string", function () {
            assert.equal(removeEvenCharacters("abcdefgh"), "bdfh");
        });
	});
	
    describe("removeEvenCharacters", function () {
        it("empty string", function () {
            assert.equal(removeEvenCharacters(""), "");
        });
	});
	
    describe("removeEvenCharacters", function () {
        it("missing argument", function () {
            assert.equal(removeEvenCharacters(), "missing argument");
        });
	});
	
    describe("removeEvenCharacters", function () {
        it("argument not string", function () {
            assert.equal(removeEvenCharacters(5), "argument not string");
        });
	});	

    describe("sumPositiveNumbers", function () {
        it("mixed", function () {
            assert.equal(sumPositiveNumbers([-1, 4, 5, -6, 10]), 19);
        });
	});	

    describe("sumPositiveNumbers", function () {
        it("all positive", function () {
            assert.equal(sumPositiveNumbers([1, 4, 5, 6, 10]), 26);
        });
	});	
	
    describe("sumPositiveNumbers", function () {
        it("all negative", function () {
            assert.equal(sumPositiveNumbers([-1, -4, -5, -6, -10]), 0);
        });
	});	
	
    describe("sumPositiveNumbers", function () {
        it("empty array", function () {
            assert.equal(sumPositiveNumbers([]), 0);
        });
	});	

    describe("ArrayDemo", function () {
        it("mixed", function () {
			let result = new ArrayDemo([1, "a", 2, "b", 3]).numbers.join(".");
            assert.equal(result, "1.2.3");
			
			result = new ArrayDemo([1, "a", 2, "b", 3]).strings.join(".");
            assert.equal(result, "a.b");
        });
	});	

    describe("ArrayDemo", function () {
        it("empty", function () {
			let result = new ArrayDemo([]).numbers.join(".");
            assert.equal(result, "");
			
			result = new ArrayDemo([]).strings.join(".");
            assert.equal(result, "");
        });
	});	

   describe("makePositive", function () {
        it("some negatives", function () {
			let result = makePositive([-1, 2, "a", 3, -4, -5]).join(".");
            assert.equal(result, "1.2.a.3.4.5");			
        });
	});	

   describe("makePositive", function () {
        it("empty array", function () {
			let result = makePositive([]).join(".");
            assert.equal(result, "");			
        });
	});	
	
  describe("removeZeros", function () {
        it("has zeros", function () {
			let result = removeZeros([5, 0, 0, 0, 6, 0,0,5, 0]).join(".");
            assert.equal(result, "5.*.6.*.5.*");			
        });
	});	
		

}
