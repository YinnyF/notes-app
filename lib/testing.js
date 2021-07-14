'use strict';
let testId = 0;

function expect(a) {
  return {
    toEq: function(b) {
      // compare a and b
      if (a === b) {
        console.log("Pass");
      } else {
        console.log("Fail");
      }
    },

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
    displayLabelOnPage(`Test: ${label}`);
    console.log(`Test: ${label}`);
    testId ++;
    callback();
}

function displayLabelOnPage(text) {
  let listElement = document.createElement('li');
  let label = document.createTextNode(text);
  listElement.appendChild(label);
  listElement.setAttribute('id', testId);
  let listPosition = document.getElementsByTagName('ul')[0];
  listPosition.appendChild(listElement);
  return;
}

// function displayTestOnPage(text) {

// }