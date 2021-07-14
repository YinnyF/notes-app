'use strict';

let myStorage = window.sessionStorage;
let elementId = myStorage.length;

document.addEventListener("DOMContentLoaded", () => {
  displayLinksFromStorage();
})

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
  addingNewElement(newEl, newText);
}

const addingNewElement = (newEl, newText) => {
  newEl.appendChild(newText);
  newEl.setAttribute('id', elementId)
  let listPosition = document.getElementsByTagName('ul')[0];
  listPosition.appendChild(newEl);
  makeClickLinkDisplayNote(elementId);
}

const displayLinksFromStorage = () => {
  for (let i = 1; i < elementId + 1; i++) {
    let note = myStorage.getItem(i);
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
    let thisNote = myStorage.getItem(i);
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