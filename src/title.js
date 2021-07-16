'use strict';

class Title {
  constructor() {
    this.title;
  }

  createTitle(content) {
    this.title = content.length < 21 ? content : content.slice(0, 20);
  }

  getTitle() {
    return this.title;
  }
}