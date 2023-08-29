import useSWR from 'swr';
import PokemonData from '../PokemonData/PokemonData';
import PicturesPokemon from '../PicturesPokemon/PicturesPokemon';

const fetcher = (urlP: any) => fetch(urlP).then((res) => res.json());

export default function ViewPokemon({ id }: { id: string }) {

    const { data: poke, isLoading } = useSWR(`https://pokeapi.co/api/v2/pokemon/${id}`, fetcher);

    if (isLoading) return <h1> Cargando Pokemon </h1>
    if (poke) {
        return (
            <div>
                <PicturesPokemon
                    sprites={poke?.sprites} />

                <div>
                    <PokemonData
                        pokemon={poke} />
                </div>

            </div>
        )
    }
}
