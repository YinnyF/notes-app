'use strict';

function expect(a) {
  return {
    toEq: function(b) {
      // compare a and b
      if (a === b) {
        console.log("Pass");
      } else {
        console.log("Fail");
      }
    }

    toBeAnArray: function() {
      if (actual.constructor.name === "Array") {
        console.log("Pass");
      } else {
        console.log("Fail");
      }
    }
  }
}

function it(label, callback) {
  console.log(`Test: ${label}`);
  callback();
}