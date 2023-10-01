import { JSX } from "react";
import Image from "next/image";
import { POKEMON_CARD_IMAGE_BACKGROUND_COLOR } from "../../../../../constants/components/page_agnostic/pokemon_cards/styles/image_background_color/pokemonCardImageBackgroundColorConstants";
import FIRST_INDEX_OF_THE_ARRAY from "../../../../../constants/array_utilities/first_index_of_the_array/firstIndexOfTheArrayConstants";
import { POKEMON_CARD_TYPES_BACKGROUND_COLOR } from "../../../../../constants/components/page_agnostic/pokemon_cards/styles/types_background_color/pokemonCardTypesBackgroundColorConstants";
import { POKEMON_CARD_SPRITE_ALT_TEXT } from "../../../../../constants/components/page_agnostic/pokemon_cards/element_alt_text/pokemonCardSpriteAltTextConstants";
import { EMPTY_STRING } from "../../../../../constants/string_utilities/empty_string/emptyStringConstant";
import addHashSignAtBeginningOfIdNumber from "../../../../../utils/formatters/pokemon_pokemon_card/add_hash_sign_at_benning_of_id_number/implementation/addHashSignAtBeginningOfIdNumber";
import styles from "../styles/styles.module.css";
import { ARBITRARY_DIMENSIONS_TO_AVOID_NEXT_IMAGE_HEIGHT_AND_WIDTH_ERROR } from "../../../../../constants/next/images/sizes/page_agnostic/arbitraryDimensionsToAvoidNextImageHeightAndWidthErrorConstants";

function ShowcasePokemonCard(props: {
  pokemonImage: string | undefined;
  pokemonName: string | undefined;
  pokemonTypes: Array<string> | undefined;
  pokemonId: number | undefined;
}): JSX.Element {
  return (
    <article className={styles.pokemon_card}>
      <div
        className={POKEMON_CARD_IMAGE_BACKGROUND_COLOR(
          props.pokemonTypes?.at(FIRST_INDEX_OF_THE_ARRAY)?.toLowerCase(),
          styles,
        )}>
        <Image
          alt={POKEMON_CARD_SPRITE_ALT_TEXT(props?.pokemonName)}
          width={
            ARBITRARY_DIMENSIONS_TO_AVOID_NEXT_IMAGE_HEIGHT_AND_WIDTH_ERROR
          }
          height={
            ARBITRARY_DIMENSIONS_TO_AVOID_NEXT_IMAGE_HEIGHT_AND_WIDTH_ERROR
          }
          className={styles.sprite}
          src={props?.pokemonImage || EMPTY_STRING}
        />
      </div>
      <div className={styles.information_center}>
        <span className={styles.id}>
          {addHashSignAtBeginningOfIdNumber(props?.pokemonId)}
        </span>
        <h3 className={styles.name}>{props?.pokemonName}</h3>
        <div className={styles.types}>
          <ul className={styles.types_list}>
            {props.pokemonTypes?.map((type, index) => (
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
    </article>
  );
}

export default ShowcasePokemonCard;
