'use strict';

class Storage {
  constructor() {
    this.myStorage = window.sessionStorage;
    this.noteId = this.myStorage.length + 1;
  }

  store(content) {
    this.myStorage.setItem(this.noteId, content);
    this.noteId++;
    return this.noteId - 1;
  }

  get(noteId) {
    return this.myStorage.getItem(noteId);
  }

  getNextId() {
    return this.noteId;
  }

  clear() {
    this.myStorage.clear();
  }

  isEmpty() {
    return this.getNextId() === 1;
  }
};