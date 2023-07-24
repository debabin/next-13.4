import { pokeApi } from "@/utils";

import { PokemonCard } from "./_components/PokemonCard";
import Link from "next/link";

const Home = async () => {
  const pokemons = await pokeApi.listPokemons(0, 30);

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">next 13.4</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10"></div>
      <div className="flex flex-wrap justify-center">
        {pokemons.results.map((pokemon) => {
          const [[, id]] = pokemon.url.matchAll(/\/(\d+)\//g);

          return (
            <Link prefetch={false} href={`pokemon/${id}`} key={id}>
              <PokemonCard data={{ name: pokemon.name, id: +id ?? 1 }} />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
