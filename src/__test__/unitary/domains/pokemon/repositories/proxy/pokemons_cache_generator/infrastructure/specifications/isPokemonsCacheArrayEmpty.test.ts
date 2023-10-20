import { describe, expect, test } from "@jest/globals";
import PokemonsCache from "../../../../../../../../../domains/pokemon/repositories/proxy/pokemon_cache/PokemonsCache";
import isPokemonsCacheArrayEmpty from "../../../../../../../../../domains/pokemon/repositories/proxy/pokemons_cache_generator/infrastructure/specifications/isPokemonsCacheArrayEmpty";

describe("Test Module isPokemonsCacheArrayEmpty Behavior", () => {
  test('Test If Function: "isPokemonsCacheArrayEmpty()"; Returns True If Pokemon Cache Array Is Not Empty Correctly', () => {
    expect(
      isPokemonsCacheArrayEmpty(PokemonsCache.getInstance().getPokemonsCache()),
    ).toBeTruthy();
  });
});
