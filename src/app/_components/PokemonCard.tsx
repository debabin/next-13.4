import type { Pokemon } from "pokenode-ts";
import Image from "next/image";

interface PokemonCardProps {
  data: {
    name: string;
    id: number;
  };
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ data }) => (
  <div className="text-center">
    <Image
      width={200}
      height={200}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
      alt={data.name}
    />
    <h2>{data.name}</h2>
  </div>
);
