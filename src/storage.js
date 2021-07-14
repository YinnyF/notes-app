'use strict';

class Storage {
  constructor() {
    this.myStorage = window.sessionStorage
    this.numberOfNotes = this.myStorage.length
  }

  store(content) {
    this.myStorage.setItem(this.numberOfNotes +1, content);
  }

  get(content) {
    return this.myStorage.getItem(content);
  }
}