import { describe, test, expect } from "@jest/globals";
import { NUMBER_OF_POKEMONS_FROM_THE_FIRST_GENERATION } from "../../../../../../../constants/pokemon/pokemon_data/server_request/utilitaries/number_of_pokemon_from_the_first_generation/numberOfPokemonsFromTheFirstGenerationConstant";
import PokemonEntity from "../../../../../../../domains/pokemon/infrastructure/pokemon_entity/implementation/PokemonEntity";
import PokemonRepository from "../../../../../../../domains/pokemon/repositories/implementation/PokemonRepository";
import PokemonsCache from "../../../../../../../domains/pokemon/repositories/proxy/pokemon_cache/PokemonsCache";
import PokemonsCacheGenerator from "../../../../../../../domains/pokemon/repositories/proxy/pokemons_cache_generator/PokemonsCacheGenerator";
import { ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER } from "../../../../../../constants/jest/testConfigurationsConstants";

describe("Test Class PokemonsCache Behavior", () => {
  test(
    'Test If Attribute: "pokemonsCaches"; Describes How Pokemon Cache Should Be Generated And Stored Correctly',
    async () => {
      const pokemonRepositoryInstance: PokemonRepository =
        new PokemonRepository();
      const pokemonsCacheArray: Array<PokemonEntity> =
        PokemonsCache.getInstance().getPokemonsCache();

      await PokemonsCacheGenerator.generatePokemonsCache(
        pokemonsCacheArray,
        pokemonRepositoryInstance,
      );

      expect(pokemonsCacheArray).toBeTruthy();
      expect(pokemonsCacheArray.length).toEqual(
        NUMBER_OF_POKEMONS_FROM_THE_FIRST_GENERATION,
      );
    },
    ARBITRARY_LARGER_TEST_TIMEOUT_NUMBER,
  );
});
