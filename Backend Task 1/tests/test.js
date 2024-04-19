const payroll = require("./payroll");

describe("payroll", () => {
  test("calculates total pay for regular hours correctly", () => {
    expect(payroll(40, 0, 20)).toBe(800);
  });

  test("throws error for negative regular hours", () => {
    expect(() => payroll(-1, 0, 20)).toThrow("Invalid input");
  });

  test("throws error for negative overtime hours", () => {
    expect(() => payroll(40, -1, 20)).toThrow("Invalid input");
  });

  test("throws error for negative hourly rate", () => {
    expect(() => payroll(40, 0, -1)).toThrow("Invalid input");
  });

  test("throws error for zero hourly rate", () => {
    expect(() => payroll(40, 0, 0)).toThrow("Invalid input");
  });

  test("calculates total pay with no overtime correctly", () => {
    expect(payroll(40, 0, 20)).toBe(800);
  });

  test("calculates total pay with zero regular hours correctly", () => {
    expect(payroll(0, 5, 20)).toBe(100); // 5 * 1.5 * 20 = 150
  });

  test("calculates total pay with zero overtime hours correctly", () => {
    expect(payroll(40, 0, 20)).toBe(800);
  });

  test("calculates total pay with zero regular and overtime hours correctly", () => {
    expect(payroll(0, 0, 20)).toBe(0);
  });

  test("handles regular hours at boundary (exactly 40 hours)", () => {
    expect(payroll(40, 0, 20)).toBe(800); // 40 * 20 = 800
  });

  test("handles regular hours 1 hour less than 40", () => {
    expect(payroll(39, 0, 20)).toBe(780); // 39 * 20 = 780
  });

  // Error handling for non-numeric inputs
  test("throws error for non-numeric regular hours", () => {
    expect(() => payroll("invalid", 0, 20)).toThrow("Invalid input");
  });

  test("throws error for non-numeric overtime hours", () => {
    expect(() => payroll(40, "invalid", 20)).toThrow("Invalid input");
  });

  test("throws error for non-numeric hourly rate", () => {
    expect(() => payroll(40, 0, "invalid")).toThrow("Invalid input");
  });

  // Error handling for missing parameters
  test("throws error for missing regular hours", () => {
    expect(() => payroll(undefined, 0, 20)).toThrow("Invalid input");
  });

  test("throws error for missing overtime hours", () => {
    expect(() => payroll(40, undefined, 20)).toThrow("Invalid input");
  });

  test("throws error for missing hourly rate", () => {
    expect(() => payroll(40, 0, undefined)).toThrow("Invalid input");
  });
});
