import { mockRandomToMaxValue } from "../../lib/mathUtils";
import { NoBiomeError } from "../../lib/customErrors";
import { createRandomBiomeArea, createRandomArea } from "../../models/biome";

describe("createRandomBiomeArea", () => {
  it("should throw custom error if availableBiome array is empty", () => {
    expect(() => createRandomBiomeArea([], 10, 10, false)).toThrowError(NoBiomeError);
  });
});

describe("createRandomArea", () => {
  test("should create an area within the map boundaries when canOverflow is false", () => {
    const mapWidth = 10;
    const mapHeight = 10;
    const canOverflow = false;

    // Mock Math.random to always return the maximum value
    const originalMath = global.Math;
    mockRandomToMaxValue();

    const { x, y, width, height } = createRandomArea(mapWidth, mapHeight, canOverflow);
    expect(x).toBeGreaterThanOrEqual(0);
    expect(x + width).toBeLessThanOrEqual(mapWidth);
    expect(y).toBeGreaterThanOrEqual(0);
    expect(y + height).toBeLessThanOrEqual(mapHeight);

    global.Math = originalMath;
  });

  test("should create an area that can overflow the map boundaries when canOverflow is true", () => {
    const mapWidth = 10;
    const mapHeight = 10;
    const canOverflow = true;

    const { x, y, width, height } = createRandomArea(mapWidth, mapHeight, canOverflow);
    expect(x).toBeGreaterThanOrEqual(0);
    expect(width).toBeGreaterThanOrEqual(1);
    expect(y).toBeGreaterThanOrEqual(0);
    expect(height).toBeGreaterThanOrEqual(1);
  });
});
