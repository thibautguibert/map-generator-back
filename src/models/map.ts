import { Biome, BiomeArea, createRandomBiomeArea } from "./biome";

export interface MapConfig {
  availableBiome: Biome[];
  baseBiome: Biome;
  numberOfBiomes: number;
  width: number;
  height: number;
  canOverflow?: boolean;
  squaredBiomes?: boolean;
}

export interface Map {
  biomeAreas: BiomeArea[];
  width: number;
  height: number;
  baseBiome: Biome;
}

export const generateMap = async (config: MapConfig): Promise<Map> => {
  const { availableBiome, numberOfBiomes, width, height, baseBiome, canOverflow, squaredBiomes } = config;
  const biomeAreas: BiomeArea[] = [];

  for (let i = 0; i < numberOfBiomes; i++) {
    const newBiomeArea: BiomeArea = createRandomBiomeArea(availableBiome, width, height, canOverflow, squaredBiomes);
    biomeAreas.push(newBiomeArea);
  }

  biomeAreas.sort((a, b) => b.width * b.height - a.width * a.height);

  return { biomeAreas, width, height, baseBiome };
};
