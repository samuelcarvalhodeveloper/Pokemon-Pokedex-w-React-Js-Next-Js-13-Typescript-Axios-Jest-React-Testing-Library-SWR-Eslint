import PokemonEntity from "../../../infrastructure/pokemon_entity/implementation/PokemonEntity";

class PokemonsCache {
  private static instance: PokemonsCache | null = null;

  private pokemonsCache: Array<PokemonEntity> = [];

  private constructor() {}

  public static getInstance(): PokemonsCache {
    if (this.instance === null) {
      this.instance = new PokemonsCache();
    }

    return this.instance;
  }

  public getPokemonsCache(): Array<PokemonEntity> {
    return this.pokemonsCache;
  }
}

export default PokemonsCache;
