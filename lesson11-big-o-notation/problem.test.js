const isLeapYear = require("./problem");

// Test cases
describe("isLeapYear", () => {
  test("Is it a Leap year for 2000", () => {
    expect(isLeapYear(2000)).toBe(true); // Expected output: true
  });

  test("Is it a Leap year for 1900", () => {
    expect(isLeapYear(1900)).toBe(false); // Expected output: false
  });

  test("Is it a Leap year for 2024", () => {
    expect(isLeapYear(2024)).toBe(true); // Expected output: true
  });

  test("Is it a Leap year for 2021", () => {
    expect(isLeapYear(2021)).toBe(false); // Expected output: false
  });

  test("Is it a Leap year for 1600", () => {
    expect(isLeapYear(1600)).toBe(true); // Expected output: true
  });

  test("Is it a Leap year for 1700", () => {
    expect(isLeapYear(1700)).toBe(false); // Expected output: false
  });

  test("Is it a Leap year for 1800", () => {
    expect(isLeapYear(1800)).toBe(false); // Expected output: false
  });

  test("Is it a Leap year for 2100", () => {
    expect(isLeapYear(2100)).toBe(false); // Expected output: false
  });
});
