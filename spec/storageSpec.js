'use strict';

it("Storage - can store a note", () => {
  let testStorage = new Storage();
  testStorage.store("Message 1");

  expect(testStorage.get(1)).toEq("Message 1");
});

it("Storage - storing note returns the id number", () => {
  let testStorage = new Storage();
  testStorage.store('Message 1');

  expect(testStorage.store('Message 2')).toEq(2);
});

it("Storage - can retrieve the note from id number", () => {
  let testStorage = new Storage();
  testStorage.store('Message 1');
  testStorage.store('Message 2');
  expect(testStorage.get(2)).toEq("Message 2");
});

it("Storage - can get the next id number", () => {
  let testStorage = new Storage();
  expect(testStorage.getNextId()).toEq(1);
});

it("Storage - can be cleared", () => {
  let testStorage = new Storage();
  testStorage.clear();

  expect(testStorage.isEmpty()).toEq(true);
});
