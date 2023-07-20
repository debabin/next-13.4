import { getRandomPokemonId, pokeApi } from "@/utils";

import { PokemonCard } from "../../_components/PokemonCard";

const Left = async () => {
  const pokemon = await pokeApi.getPokemonById(getRandomPokemonId());
  await (() => new Promise((res) => setTimeout(res, 4000)))();

  return <PokemonCard data={pokemon} />;
};

export default Left;
