import { pokeApi } from "@/utils";

import { PokemonCard } from "../../_components/PokemonCard";

import styles from "./page.module.css";

const PokemonModal = async ({ params: { id } }: { params: { id: string } }) => {
  const pokemon = await pokeApi.getPokemonById(+id);

  return (
    <div className="flex justify-center">
      <div className="bg-white p-4 px-6 flex justify-center flex-col gap-1">
        <PokemonCard data={{ name: pokemon.name, id: +id ?? 1 }} />

        <div className="flex flex-wrap gap-1 justify-center">
          {pokemon.types.map(({ type }) => (
            <div className={`${styles[type.name]} ${styles.type}`}>
              {type.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
