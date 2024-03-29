import { NoBiomeError } from "../lib/customErrors";
import { getRandomFloor } from "../lib/mathUtils";

export const BIOMES = ["plain", "desert", "forest", "ocean"] as const;
export type Biome = (typeof BIOMES)[number];

interface Area {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface BiomeArea extends Area {
  biome: Biome;
}

export function createRandomBiomeArea(
  availableBiome: Biome[],
  mapWidth: number,
  mapHeight: number,
  canOverflow = true,
  squaredBiomes = false,
): BiomeArea {
  const biome = pickRandomBiome(availableBiome);
  const { x, width, y, height } = createRandomArea(mapWidth, mapHeight, canOverflow, squaredBiomes);

  return { biome, x, width, y, height };
}

function pickRandomBiome(availableBiome: Biome[]): Biome {
  if (availableBiome.length === 0) throw new NoBiomeError({ cause: "createRandomBiomeArea" });
  return availableBiome[getRandomFloor(availableBiome.length)];
}

export function createRandomArea(
  mapWidth: number,
  mapHeight: number,
  canOverflow: boolean,
  squaredBiomes?: boolean,
): Area {
  const x = getRandomFloor(mapWidth);
  const maxWidth = canOverflow ? mapWidth : mapWidth - x;
  const width = getRandomFloor(maxWidth) + 1;

  const y = getRandomFloor(mapHeight);
  const maxHeight = canOverflow ? mapHeight : mapHeight - y;
  const height = squaredBiomes ? width : getRandomFloor(maxHeight) + 1;

  return { x, width, y, height };
}
