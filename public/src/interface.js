'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const myStorage = window.sessionStorage;

  document.querySelector("#create-note").addEventListener("click", function(e) {
    const noteText = document.getElementById('note-text').value;
    e.preventDefault();
    myStorage.setItem('noteText', noteText);
    let note = myStorage.getItem('noteText');
    let title;
    if (note.length < 20) {
      title = myStorage.getItem('noteText');
    } else {
      console.log('hello');
      title = myStorage.getItem('noteText').slice(0, 19);
    }

    let newEl = document.createElement('li');
    let newText = document.createTextNode(`${title}`);
    newEl.appendChild(newText);
    let listPosition = document.getElementsByTagName('ul')[0];
    listPosition.appendChild(newEl);
  })

  document.querySelector('#note-list').addEventListener("click", (e) => {
    e.preventDefault();
    console.log('ewrwfef');
  })

});
