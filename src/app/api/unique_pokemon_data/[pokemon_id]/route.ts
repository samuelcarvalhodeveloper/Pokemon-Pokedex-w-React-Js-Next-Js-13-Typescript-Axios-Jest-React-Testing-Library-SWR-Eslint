/* eslint-disable camelcase */
import { NextResponse, NextRequest } from "next/server";
import GetUniquePokemonDataByIdFacade from "../../../../domains/pokemon/repositories/facade/GetUniquePokemonDataByIdFacade";

export async function GET(
  request: NextRequest,
  { params }: { params: { pokemon_id: string } },
) {
  const { pokemon_id } = params;
  const castedToNumberPokemonId = Number(pokemon_id);

  return NextResponse.json(
    await GetUniquePokemonDataByIdFacade.execute(castedToNumberPokemonId),
  );
}
