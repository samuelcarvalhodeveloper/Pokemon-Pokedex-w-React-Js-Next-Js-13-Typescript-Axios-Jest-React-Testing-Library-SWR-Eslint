export function POKEMON_CARD_IMAGE_BACKGROUND_COLOR(
  pokemonType: string | undefined,
  styles: {
    readonly [key: string]: string;
  },
): string {
  return `${styles.pokemon_background} article__illustration--${pokemonType}`;
}
