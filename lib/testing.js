'use strict';
let testId = 0;

function expect(a) {
  return {
    toEq: function(b) {
      // compare a and b
      if (a === b) {
        displayTestOnPage("Pass");
        console.log("Pass");
      } else {
        displayTestOnPage("Fail");
        console.log("Fail");
      }
    },

    toBeAnArray: function() {
      if (actual.constructor.name === "Array") {
        displayTestOnPage("Pass");
        console.log("Pass");
      } else {
        displayTestOnPage("");
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

function displayTestOnPage(text) {
  let spanElement = document.createElement('span');
  let lineBreak = document.createElement('br');
  let result = document.createTextNode("Result: " + text);
  spanElement.appendChild(lineBreak);
  spanElement.appendChild(result);

  let listPosition = document.getElementsByTagName('ul')[0];
  let testPosition = listPosition.lastChild;
  testPosition.appendChild(spanElement);
}