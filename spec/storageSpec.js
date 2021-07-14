'use strict';

let testStorage = new Storage();

it("can store a note", () => {
  testStorage.store("Message 1");
  expect(testStorage.get("Message 1")).toEq("Message 1");
});

it("can assign an id number", () => {
  testStorage.store('Message 2');
  expect(testStorage.get(2)).toEq("Message 2");
});
