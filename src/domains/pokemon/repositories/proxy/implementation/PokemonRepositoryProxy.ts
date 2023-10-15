import FIRST_INDEX_OF_THE_ARRAY from "../../../../../constants/array_utilities/first_index_of_the_array/firstIndexOfTheArrayConstants";
import PokemonEntity from "../../../infrastructure/pokemon_entity/implementation/PokemonEntity";
import PokemonRepository from "../../implementation/PokemonRepository";
import PokemonsCache from "../pokemon_cache/PokemonsCache";
import PokemonsCacheGenerator from "../pokemons_cache_generator/PokemonsCacheGenerator";

class PokemonRepositoryProxy {
  private static instance: PokemonRepositoryProxy | null = null;

  private repository: PokemonRepository = new PokemonRepository();

  private pokemonsCacheArray: Array<PokemonEntity> =
    PokemonsCache.getInstance().getPokemonsCache();

  private constructor() {}

  public static async getInstance(): Promise<PokemonRepositoryProxy> {
    if (this.instance === null) {
      this.instance = new PokemonRepositoryProxy();
      await PokemonsCacheGenerator.generatePokemonsCache(
        this.instance.pokemonsCacheArray,
        this.instance.repository,
      );
    }
    return this.instance;
  }

  public getUniquePokemonDataById(pokemonId: number): PokemonEntity {
    return this.pokemonsCacheArray.filter(
      (pokemon) => pokemon.pokemonId === pokemonId,
    )[FIRST_INDEX_OF_THE_ARRAY];
  }

  public getAllFirstGenerationPokemonsData(): Array<PokemonEntity> {
    return this.pokemonsCacheArray;
  }
}

export default PokemonRepositoryProxy;
