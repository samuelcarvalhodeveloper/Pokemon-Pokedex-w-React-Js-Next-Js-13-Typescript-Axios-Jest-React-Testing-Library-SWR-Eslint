import PokemonEntity from "../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import PokemonRepository from "../../../../domains/pokemon/repositories/implementation/PokemonRepository";

async function fillPokemonDataArrayWithDataFromServer(
  arrayOfAllPokemonFromFirstGenerationWithCompleteInformation: Array<PokemonEntity>,
): Promise<void> {
  const arrayOfAllPokemonsDataFromServer: Array<PokemonEntity> =
    await new PokemonRepository().getAllFirstGenerationPokemonsData();

  arrayOfAllPokemonFromFirstGenerationWithCompleteInformation.push(
    ...arrayOfAllPokemonsDataFromServer,
  );
}

export default fillPokemonDataArrayWithDataFromServer;
