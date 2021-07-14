'use strict';

let testStorage = new Storage();

it("can store a note", () => {
  testStorage.store("Message 1");
  expect(testStorage.get("Message 1")).toEq("Message 1");
});