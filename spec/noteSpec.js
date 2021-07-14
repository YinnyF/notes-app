'use strict';

it("Note - can store a note", () => {
  let testNote = new Note();
  let content = "Message 1"
  testNote.addNote(content);

  expect(testNote.getNote(1)).toEq(content);
});

it("Note - can retrieve notes", () => {
  let testNote = new Note();
  testNote.addNote("Message 1");
  let content = "Message 2"
  testNote.addNote(content);

  expect(testNote.getNote(2)).toEq(content);
});
