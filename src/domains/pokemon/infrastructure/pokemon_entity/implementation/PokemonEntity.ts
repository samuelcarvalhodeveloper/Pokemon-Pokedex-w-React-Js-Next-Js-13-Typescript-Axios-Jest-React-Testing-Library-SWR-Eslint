class PokemonEntity {
  public pokemonId: number;

  public pokemonName: string;

  public pokemonImage: string;

  public pokemonTypes: Array<string>;

  public constructor(
    pokemonId: number,
    pokemonName: string,
    pokemonImage: string,
    pokemonTypes: Array<string>,
  ) {
    this.pokemonId = pokemonId;
    this.pokemonName = pokemonName;
    this.pokemonImage = pokemonImage;
    this.pokemonTypes = pokemonTypes;
  }
}

export default PokemonEntity;
