import PokemonEntity from "../../infrastructure/pokemon_entity/implementation/PokemonEntity";
import PokemonRepositoryProxy from "../proxy/implementation/PokemonRepositoryProxy";

class GetAllFirstGenerationPokemonsFacade {
  private constructor() {}

  public static async execute(): Promise<Array<PokemonEntity>> {
    return new PokemonRepositoryProxy().getAllFirstGenerationPokemonsData();
  }
}

export default GetAllFirstGenerationPokemonsFacade;
