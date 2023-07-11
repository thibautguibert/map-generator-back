import { BIOMES, Biome } from "../models/biome";
import { MapConfig } from "../models/map";

const isBiome = (value: unknown): value is Biome => {
  return BIOMES.includes(value as Biome);
};

export const isMapConfig = (value: unknown): value is MapConfig => {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const { availableBiome, baseBiome, numberOfBiomes, width, height } = value as MapConfig;

  return (
    Array.isArray(availableBiome) &&
    availableBiome.every(isBiome) &&
    isBiome(baseBiome) &&
    typeof numberOfBiomes === "number" &&
    typeof width === "number" &&
    typeof height === "number"
  );
};
