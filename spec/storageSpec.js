'use strict';



it("can store a note", () => {
  let testStorage = new Storage();
  testStorage.store("Message 1");
  expect(testStorage.get(1)).toEq("Message 1");
});

it("can assign an id number", () => {
  let testStorage = new Storage();
  testStorage.store('Message 1');
  testStorage.store('Message 2');
  expect(testStorage.get(2)).toEq("Message 2");
});

it("can store a note", () => {
  let testStorage = new Storage();
  testStorage.store('Message 1');
  testStorage.store('Message 2');
  testStorage.store("Message 3");
  expect(testStorage.get(3)).toEq("Message 3");
});