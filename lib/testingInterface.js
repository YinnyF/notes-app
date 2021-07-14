// These are for the testing interface.

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
  spanElement.style.color="#f3969a";

  let listPosition = document.getElementsByTagName('ul')[0];
  let testPosition = listPosition.lastChild;
  testPosition.appendChild(spanElement);
}

function displayPass() {
  let spanElement = document.createElement('span');
  let lineBreak = document.createElement('br');
  let result = document.createTextNode("Result: Pass");
  spanElement.appendChild(lineBreak);
  spanElement.appendChild(result);
  spanElement.style.color="#78c2ad";

  let listPosition = document.getElementsByTagName('ul')[0];
  let testPosition = listPosition.lastChild;
  testPosition.appendChild(spanElement);
}

function displayFail(actual, expected) {
  let spanElement = document.createElement('span');
  let lineBreak = document.createElement('br');
  let result = document.createTextNode(`Result: Fail - expected "${expected}" but got "${actual}"`);
  spanElement.appendChild(lineBreak);
  spanElement.appendChild(result);
  spanElement.style.color="#f3969a";

  let listPosition = document.getElementsByTagName('ul')[0];
  let testPosition = listPosition.lastChild;
  testPosition.appendChild(spanElement);
}