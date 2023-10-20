import PokemonRepository from "../../../implementation/PokemonRepository";
import PokemonEntity from "../../../../infrastructure/pokemon_entity/implementation/PokemonEntity";
import isPokemonsCacheArrayEmpty from "../infrastructure/specifications/isPokemonsCacheArrayEmpty";

class PokemonsCacheGenerator {
  private constructor() {}

  public static async generatePokemonsCache(
    pokemonsCacheArray: Array<PokemonEntity>,
    repositoryInstance: PokemonRepository,
  ): Promise<void> {
    if (isPokemonsCacheArrayEmpty(pokemonsCacheArray)) {
      const arrayOfPokemonsFromRepository: Array<PokemonEntity> =
        await repositoryInstance.getAllFirstGenerationPokemonsData();
      pokemonsCacheArray.push(...arrayOfPokemonsFromRepository);
    }
  }
}

export default PokemonsCacheGenerator;
