'use strict';

class Storage {
  constructor() {
    this.myStorage = window.sessionStorage
    this.noteId = this.myStorage.length + 1;
  }

  store(content) {
    this.myStorage.setItem(this.noteId, content);
    this.noteId++
  }

  get(number) {
    return this.myStorage.getItem(number);
  }
}