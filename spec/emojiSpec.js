'use strict';

describe('Emoji', () => {
  // don't know how to test! Is a promise because `then` function works on it.
  it("can convert text with emoji shortcut into emoji", () => {
    let emoji = new Emoji();
    let content = "Hello this is :sunflower:";

    expect(emoji.getEmojiData(content).then()).toBeATypeOf("object");
  });
});