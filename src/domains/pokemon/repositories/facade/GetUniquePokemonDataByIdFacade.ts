import PokemonEntity from "../../infrastructure/pokemon_entity/implementation/PokemonEntity";
import PokemonRepositoryProxy from "../proxy/PokemonRepositoryProxy";

class GetUniquePokemonDataByIdFacade {
  private constructor() {}

  public static async execute(pokemonId: number): Promise<PokemonEntity> {
    return (
      await PokemonRepositoryProxy.getInstance()
    ).getUniquePokemonDataById(pokemonId);
  }
}

export default GetUniquePokemonDataByIdFacade;
