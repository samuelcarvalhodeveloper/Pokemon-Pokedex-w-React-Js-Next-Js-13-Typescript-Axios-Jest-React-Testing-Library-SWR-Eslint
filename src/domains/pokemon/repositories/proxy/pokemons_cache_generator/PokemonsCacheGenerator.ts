import PokemonRepository from "../../implementation/PokemonRepository";
import PokemonEntity from "../../../infrastructure/pokemon_entity/implementation/PokemonEntity";

class PokemonsCacheGenerator {
  private constructor() {}

  public static async generatePokemonsCache(
    pokemonsCacheArray: Array<PokemonEntity>,
    repositoryInstance: PokemonRepository,
  ): Promise<void> {
    const arrayOfPokemonsFromRepository: Array<PokemonEntity> =
      await repositoryInstance.getAllFirstGenerationPokemonsData();
    pokemonsCacheArray.push(...arrayOfPokemonsFromRepository);
  }
}

export default PokemonsCacheGenerator;
