'use strict';

class Note {
  constructor() {
    this.notes = [];
  }

  addNote(content) {
    this.notes.push(content);
  }

  getNote(i) {
    return this.notes[i -1];
  }

  getNotes() {
    return this.notes;
  }
}