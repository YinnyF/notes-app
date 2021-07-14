'use strict';
let testId = 0;

function expect(a) {
  return {
    toEq: function(b) {
      // compare a and b
      if (a === b) {
        displayPass();
      } else {
        displayFail();
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
    callback();
}