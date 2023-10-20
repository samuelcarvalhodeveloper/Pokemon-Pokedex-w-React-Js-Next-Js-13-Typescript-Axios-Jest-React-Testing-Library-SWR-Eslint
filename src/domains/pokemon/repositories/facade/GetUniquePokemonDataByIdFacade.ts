import PokemonEntity from "../../infrastructure/pokemon_entity/implementation/PokemonEntity";
import PokemonRepositoryProxy from "../proxy/implementation/PokemonRepositoryProxy";

class GetUniquePokemonDataByIdFacade {
  private constructor() {}

  public static async execute(pokemonId: number): Promise<PokemonEntity> {
    return new PokemonRepositoryProxy().getUniquePokemonDataById(pokemonId);
  }
}

export default GetUniquePokemonDataByIdFacade;
