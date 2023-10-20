import FIRST_INDEX_OF_THE_ARRAY from "../../../../../constants/array_utilities/first_index_of_the_array/firstIndexOfTheArrayConstants";
import PokemonEntity from "../../../infrastructure/pokemon_entity/implementation/PokemonEntity";
import PokemonRepository from "../../implementation/PokemonRepository";
import PokemonsCache from "../pokemon_cache/PokemonsCache";
import PokemonsCacheGenerator from "../pokemons_cache_generator/implementation/PokemonsCacheGenerator";

class PokemonRepositoryProxy {
  private static instance: PokemonRepositoryProxy | null = null;

  private repository: PokemonRepository = new PokemonRepository();

  private pokemonsCacheArray: Array<PokemonEntity> =
    PokemonsCache.getInstance().getPokemonsCache();

  public async getUniquePokemonDataById(
    pokemonId: number,
  ): Promise<PokemonEntity> {
    await PokemonsCacheGenerator.generatePokemonsCache(
      this.pokemonsCacheArray,
      this.repository,
    );
    return this.pokemonsCacheArray.filter(
      (pokemon) => pokemon.pokemonId === pokemonId,
    )[FIRST_INDEX_OF_THE_ARRAY];
  }

  public async getAllFirstGenerationPokemonsData(): Promise<
    Array<PokemonEntity>
  > {
    await PokemonsCacheGenerator.generatePokemonsCache(
      this.pokemonsCacheArray,
      this.repository,
    );
    return this.pokemonsCacheArray;
  }
}

export default PokemonRepositoryProxy;
