'use strict';
let testId = 0;

function expect(actual) {
  return {
    toEq: function(expected) {
      // compare a and b
      if (actual === expected) {
        displayPass();
      } else {
        displayFail(actual, expected);
      }
    },

    toBeAnArray: function() {
      if (actual.constructor.name === "Array") {
        displayPass();
      } else {
        displayFail();
      }
    }
  }
}

function it(label, callback) {
    displayLabelOnPage(`Test: ${label}`);
    testId ++;
    try {
      callback();
    } catch (error) {
      displayTestOnPage(error);
    }
}