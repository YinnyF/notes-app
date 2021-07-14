'use strict';

let myStorage = new Storage();
let newNoteId;

document.addEventListener("DOMContentLoaded", () => {
  displayLinksFromStorage();
})

const storingNote = (noteText) => {
  return myStorage.store(noteText);
}

const getTitle = () => {
  let note = myStorage.get(newNoteId);
  return note.length < 20 ? note : note.slice(0, 19)
}

const makeClickSubmitCreateLink = () => {
  let noteText = document.getElementById('note-text').value;
  newNoteId = storingNote(noteText);
  createLink();
}

const createLink = () => {
  let title = getTitle();
  let newEl = document.createElement('li');
  let newText = document.createTextNode(title);
  addingNewElement(newEl, newText);
}

const addingNewElement = (newEl, newText) => {
  newEl.appendChild(newText);
  newEl.setAttribute('id', newNoteId)
  let listPosition = document.getElementsByTagName('ul')[0];
  listPosition.appendChild(newEl);
  makeClickLinkDisplayNote(newNoteId);
}

const displayLinksFromStorage = () => {
  for (let i = 1; i < myStorage.getNextId() - 1; i++) {
    let note = myStorage.get(i);
    let title = note.length < 20 ? note : note.slice(0, 19);
    let existingEl = document.createElement('li');
    let existingText = document.createTextNode(title);
    existingEl.appendChild(existingText);
    existingEl.setAttribute('id', i)
    let listPosition = document.getElementsByTagName('ul')[0];
    listPosition.appendChild(existingEl);
    makeClickLinkDisplayNote(i);
  }
}

const makeClickLinkDisplayNote = (i) => {
  document
    .getElementById(i)
    .addEventListener("click", function(clickEvent) {
    let thisNote = myStorage.get(i);
    displayNote(thisNote);
    })
}

const displayNote = (thisNote) => {
// make HTML display message
  document.getElementById('note-pop-up-id').classList.add('note-pop-up');
  makeNoteVisible();
  document.querySelector('.note-pop-up').style.WebkitAnimationPlayState = "running";
  document.getElementById('note').innerText = thisNote;
  closeNote();
}

const makeNoteVisible = () => {
  document.querySelector('.close-btn').style.visibility = 'visible';
  document.querySelector('.note-pop-up').style.visibility = 'visible';
}

const closeNote = () => {
  document.querySelector('.close-btn').addEventListener("click", () => {
    document.querySelector('.note-pop-up').style.visibility = 'hidden';
    document.querySelector('.note-pop-up').style.WebkitAnimationPlayState = "paused";
    document.querySelector('.note-pop-up').classList.remove('note-pop-up');
    document.querySelector('.close-btn').style.visibility = 'hidden';
  });
}