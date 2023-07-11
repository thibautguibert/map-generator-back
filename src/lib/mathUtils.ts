import { MinMaxError } from "./customErrors";

export function getRandomFloor(max: number, min = 0): number {
  if (min >= max) throw new MinMaxError({ cause: "getRandomFloor" });

  return Math.floor(Math.random() * (max - min)) + min;
}

export function mockRandomToMaxValue(): void {
  // ⚠️ Always reset Math.random to its original value after using this function
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.9999999999999999;
  global.Math = mockMath;
}
