import { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { POKEMON_CARD_LINK_URL_PATHNAME } from "@/constants/components/page_agnostic/pokemon_cards/withLink/pokemonCardLinkURLPathnameConstants";
import { POKEMON_CARD_IMAGE_BACKGROUND_COLOR } from "@/constants/components/page_agnostic/pokemon_cards/styles/image_background_color/pokemonCardImageBackgroundColorConstants";
import FIRST_INDEX_OF_THE_ARRAY from "@/constants/array_utilities/first_index_of_the_array/firstIndexOfTheArrayConstants";
import { POKEMON_CARD_SPRITE_ALT_TEXT } from "@/constants/components/page_agnostic/pokemon_cards/element_alt_text/pokemonCardSpriteAltTextConstants";
import { ARBITRARY_DIMENSIONS_TO_AVOID_NEXT_IMAGE_HEIGHT_AND_WIDTH_ERROR } from "@/constants/next/images/sizes/page_agnostic/arbitraryDimensionsToAvoidNextImageHeightAndWidthErrorConstants";
import addHashSignAtBeginningOfIdNumber from "@/utils/formatters/pokemon_pokemon_card/add_hash_sign_at_benning_of_id_number/implementation/addHashSignAtBeginningOfIdNumber";
import { POKEMON_CARD_TYPES_BACKGROUND_COLOR } from "@/constants/components/page_agnostic/pokemon_cards/styles/types_background_color/pokemonCardTypesBackgroundColorConstants";
import styles from "../styles/styles.module.css";

function PokemonCardWithLink(props: {
  pokemonImage: string;
  pokemonName: string;
  pokemonTypes: Array<string>;
  pokemonId: number;
}): JSX.Element {
  const { pokemonImage, pokemonName, pokemonTypes, pokemonId } = props;

  return (
    <Link
      href={{
        pathname: POKEMON_CARD_LINK_URL_PATHNAME(pokemonId),
      }}
      className={styles.pokemon_card}>
      <div
        className={POKEMON_CARD_IMAGE_BACKGROUND_COLOR(
          pokemonTypes[FIRST_INDEX_OF_THE_ARRAY].toLowerCase(),
          styles,
        )}>
        <Image
          alt={POKEMON_CARD_SPRITE_ALT_TEXT(pokemonName)}
          width={
            ARBITRARY_DIMENSIONS_TO_AVOID_NEXT_IMAGE_HEIGHT_AND_WIDTH_ERROR
          }
          height={
            ARBITRARY_DIMENSIONS_TO_AVOID_NEXT_IMAGE_HEIGHT_AND_WIDTH_ERROR
          }
          className={styles.sprite}
          src={pokemonImage}
        />
      </div>
      <div className={styles.information_center}>
        <span className={styles.id}>
          {addHashSignAtBeginningOfIdNumber(pokemonId)}
        </span>
        <h3 className={styles.name}>{pokemonName}</h3>
        <div className={styles.types}>
          <ul className={styles.types_list}>
            {pokemonTypes.map((type, index) => (
              <li
                className={POKEMON_CARD_TYPES_BACKGROUND_COLOR(
                  type.toLowerCase(),
                  styles,
                )}
                key={index}>
                {type}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default PokemonCardWithLink;
