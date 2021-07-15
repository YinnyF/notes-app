'use strict';

describe('Title', () => {
  it("can generate a title", () => {
    let testTitle = new Title();
    let content = "this is a note."
    testTitle.createTitle(content);

    expect(testTitle.getTitle()).toEq(content);
  });

  it("can generate a title and limit it to 20 chars", () => {
    let testTitle = new Title();
    let content = "123456789012345678900"
    testTitle.createTitle(content);

    expect(testTitle.getTitle()).toEq("12345678901234567890");
  });

});