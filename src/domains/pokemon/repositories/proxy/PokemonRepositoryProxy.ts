import FIRST_INDEX_OF_THE_ARRAY from "../../../../constants/array_utilities/first_index_of_the_array/firstIndexOfTheArrayConstants";
import PokemonEntity from "../../infrastructure/pokemon_entity/implementation/PokemonEntity";
import PokemonRepository from "../implementation/PokemonRepository";

class PokemonRepositoryProxy {
  private static instance: PokemonRepositoryProxy | null = null;

  private repository: PokemonRepository = new PokemonRepository();

  private pokemonsCacheArray: Array<PokemonEntity> = [];

  private constructor() {}

  public static async getInstance(): Promise<PokemonRepositoryProxy> {
    if (this.instance === null) {
      this.instance = new PokemonRepositoryProxy();
      await this.instance.generatePokemonsCache(
        this.instance.pokemonsCacheArray,
        this.instance.repository,
      );
    }
    return this.instance;
  }

  private async generatePokemonsCache(
    pokemonsCacheArray: Array<PokemonEntity>,
    repositoryInstance: PokemonRepository,
  ): Promise<void> {
    const arrayOfPokemonsFromRepository: Array<PokemonEntity> =
      await repositoryInstance.getAllFirstGenerationPokemonsData();
    pokemonsCacheArray.push(...arrayOfPokemonsFromRepository);
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
