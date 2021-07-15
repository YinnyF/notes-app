'use strict';

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

    // // expect(actual).toThrowError(error);
    // toThrowError: function(error) {
    //   try {
    //     actual
    //   } catch (error) {
    //     displayPass()
    //   }

    //   displayTestOnPage("HELLO THROW ERROR") 
    //   // return displayFail(actual, error)
    // }
  }
}

function it(label, callback) {
  window.sessionStorage.clear();
  displayTestInExampleGroup(`${label}`);
  try {
    callback();
  } catch (error) {
    displayResultUnderTest(error);
  }
}

function describe(exampleGroup, callback) {
  displayExampleGroupCard(`${exampleGroup}`);
  callback();
}