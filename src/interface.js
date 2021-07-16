'use strict';

const emoji = new Emoji();
let myStorage = new Storage();
let newNoteId;
let title = new Title();

document.addEventListener("DOMContentLoaded", () => {
  displayLinksFromStorage();
})

const makeClickSubmitCreateLink = () => {
  let noteText = document.getElementById('note-text').value;
  newNoteId = emoji.convert(noteText).then(data => {
    myStorage.store(data);
    location.reload();
  });

  title.createTitle(noteText);
  createLink();
}

const createLink = () => {
  let thisTitle = title.getTitle();
  let newEl = document.createElement('p');
  let newText = document.createTextNode(thisTitle);
  addingNewElement(newEl, newText);
}

const addingNewElement = (newEl, newText) => {
  newEl.appendChild(newText);
  newEl.setAttribute('id', newNoteId)
  let listPosition = document.getElementsByTagName('h4')[0];
  listPosition.appendChild(newEl);
  makeClickLinkDisplayNote(newNoteId);
}

const displayLinksFromStorage = () => {
  for (let i = 1; i < myStorage.getNextId(); i++) {
    let note = myStorage.get(i);
    title.createTitle(note);
    let thisTitle = title.getTitle();
    let existingEl = document.createElement('p');
    let existingText = document.createTextNode(thisTitle);
    existingEl.appendChild(existingText);
    existingEl.setAttribute('id', i)
    let listPosition = document.getElementsByTagName('h4')[0];
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
  document.querySelector('main').style.filter = "blur(1px)";
  document.querySelector('section').style.filter = "blur(1px)";
}

const closeNote = () => {
  document.querySelector('.close-btn').addEventListener("click", () => {
    document.querySelector('.note-pop-up').style.visibility = 'hidden';
    document.querySelector('.note-pop-up').style.WebkitAnimationPlayState = "paused";
    document.querySelector('.note-pop-up').classList.remove('note-pop-up');
    document.querySelector('.close-btn').style.visibility = 'hidden';
    document.querySelector('main').style.filter = "blur(0px)";
  document.querySelector('section').style.filter = "blur(0px)";
  });
}