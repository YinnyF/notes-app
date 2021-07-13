'use strict';

  let myStorage = window.sessionStorage;
  let elementId = myStorage.length;

  const storingNote = (elementId, noteText) => {
    myStorage.setItem(noteText, elementId)
  }

  const getTitle = () => {
    let note = myStorage.getItem(elementId);
    return note.length < 20 ? note : note.slice(0, 19)
    }

  const makeClickSubmitCreateLink = () => {
    elementId += 1;
    let noteText = document.getElementById('note-text').value;
    storingNote(noteText, elementId);
    createLink();
}

const createLink = () => {
  let title = getTitle();
  let newEl = document.createElement('li');
  let newText = document.createTextNode(title);
  newEl.appendChild(newText);
  newEl.setAttribute('id', elementId)
  let listPosition = document.getElementsByTagName('ul')[0];
  listPosition.appendChild(newEl);
}
