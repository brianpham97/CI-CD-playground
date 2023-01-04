const math = require('./run')

test('adding', () => {
  expect(math.add(1, 2)).toBe(3)
})

test("subtract", () => {
  expect(math.subtract(2, 1)).toBe(1);
});

test("multiply", () => {
  expect(math.multiply(2, 2)).toBe(4);
});

test("divide", () => {
  expect(math.divide(2, 1)).toBe(2);
});

