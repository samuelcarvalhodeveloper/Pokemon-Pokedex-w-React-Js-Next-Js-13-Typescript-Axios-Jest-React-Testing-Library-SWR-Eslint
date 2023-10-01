export function ID_FORMATTED_WITH_HASH_WITH_ID_NUMBER_LENGTH_OF_ONE_CHARACTER(
  id: number | undefined,
): string {
  return `#00${id}`;
}

export function ID_FORMATTED_WITH_HASH_WITH_ID_NUMBER_LENGTH_OF_TWO_CHARACTERS(
  id: number | undefined,
): string {
  return `#0${id}`;
}

export function ID_FORMATTED_WITH_HASH_WITH_ID_NUMBER_LENGTH_LARGER_THAN_THREE_CHARACTERS(
  id: number | undefined,
): string {
  return `#${id}`;
}
