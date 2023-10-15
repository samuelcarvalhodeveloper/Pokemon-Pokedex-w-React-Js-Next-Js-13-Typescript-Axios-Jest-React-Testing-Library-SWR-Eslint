import PokemonEntity from "../../infrastructure/pokemon_entity/implementation/PokemonEntity";
import PokemonRepositoryProxy from "../proxy/implementation/PokemonRepositoryProxy";

class GetAllFirstGenerationPokemonsFacade {
  private constructor() {}

  public static async execute(): Promise<Array<PokemonEntity>> {
    return (
      await PokemonRepositoryProxy.getInstance()
    ).getAllFirstGenerationPokemonsData();
  }
}

export default GetAllFirstGenerationPokemonsFacade;
