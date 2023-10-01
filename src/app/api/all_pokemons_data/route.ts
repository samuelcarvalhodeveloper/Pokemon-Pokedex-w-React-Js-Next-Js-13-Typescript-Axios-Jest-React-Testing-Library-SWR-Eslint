import { NextResponse } from "next/server";
import GetAllFirstGenerationPokemonsFacade from "../../../domains/pokemon/repositories/facade/GetAllFirstGenerationPokemonsFacade";

export async function GET() {
  return NextResponse.json(await GetAllFirstGenerationPokemonsFacade.execute());
}
