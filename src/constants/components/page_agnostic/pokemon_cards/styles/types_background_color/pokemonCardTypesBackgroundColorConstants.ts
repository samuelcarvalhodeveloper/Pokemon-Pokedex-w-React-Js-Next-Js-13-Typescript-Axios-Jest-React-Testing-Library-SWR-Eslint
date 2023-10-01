export function POKEMON_CARD_TYPES_BACKGROUND_COLOR(
  pokemonType: string,
  styles: {
    readonly [key: string]: string;
  },
): string {
  return `${styles.type_item} article__item--${pokemonType}`;
}
