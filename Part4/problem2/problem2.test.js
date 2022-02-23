const pow = require("./problem2");

test("Test 1", () => {
  expect(pow(2, 3)).toEqual(8);
});
test("Test 2", () => {
  expect(pow(7, 2)).toEqual(49);
});
test("Test 3", () => {
  expect(pow(10, 5)).toEqual(100000);
});
test("Test 4", () => {
  expect(pow(17, 6)).toEqual(24137569);
});
test("Test 5", () => {
  expect(pow(5, 3)).toEqual(125);
});
