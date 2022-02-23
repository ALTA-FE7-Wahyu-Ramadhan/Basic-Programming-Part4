const munculSekali = require("./problem4");

test("Test 1", () => {
  expect(munculSekali("1234123")).toEqual([4]);
});
test("Test 2", () => {
  expect(munculSekali("76523752")).toEqual([6, 3]);
});
test("Test 3", () => {
  expect(munculSekali("12345")).toEqual([1, 2, 3, 4, 5]);
});
test("Test 4", () => {
  expect(munculSekali("1122334455")).toEqual([]);
});
test("Test 5", () => {
  expect(munculSekali("0872504")).toEqual([8, 7, 2, 5, 4]);
});
