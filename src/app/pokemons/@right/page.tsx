import { getRandomPokemonId, pokeApi } from "@/utils";

import { PokemonCard } from "../../_components/PokemonCard";

const Right = async () => {
  const pokemon = await pokeApi.getPokemonById(getRandomPokemonId());
  return <PokemonCard data={{ name: pokemon.name, id: pokemon.id }} />;
};

export default Right;
