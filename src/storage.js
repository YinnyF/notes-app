'use strict';

class Storage {
  constructor() {
    this.myStorage = window.sessionStorage
  }

  store(content) {
    this.myStorage.setItem(content, content);
  }

  get(content) {
    return this.myStorage.getItem(content);
  }
}