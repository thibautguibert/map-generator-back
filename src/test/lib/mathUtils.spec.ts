import { getRandomFloor, mockRandomToMaxValue } from "../../lib/mathUtils";
import { MinMaxError } from "../../lib/customErrors";

describe("getRandomFloor", () => {
  test("should return a random number between min and max", () => {
    const min = 5;
    const max = 10;
    const result = getRandomFloor(max, min);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(max);
  });

  test("should return a random number between 0 and max when no min", () => {
    const max = 10;
    const result = getRandomFloor(max);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(max);
  });

  test("should return an error if min is superior or equal to max", () => {
    const min = 12;
    const max = 10;
    expect(() => getRandomFloor(max, min)).toThrowError(MinMaxError);
  });

  test("should not return max value", () => {
    const min = 5;
    const max = 10;

    // Mock Math.random to always return the maximum value
    const originalMath = global.Math;
    mockRandomToMaxValue();

    const result = getRandomFloor(max, min);
    expect(result).not.toBe(max);
    global.Math = originalMath;
  });
});
