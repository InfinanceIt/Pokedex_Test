import useSWR from 'swr';
import PokemonData from '../PokemonData/PokemonData';
import PicturesPokemon from '../PicturesPokemon/PicturesPokemon';
import container from '../../../src/styles/container.module.scss';

const fetcher = (urlP: any) => fetch(urlP).then((res) => res.json());

export default function ViewPokemon({ id }: { id: string }) {

    const { data: poke, isLoading } = useSWR(`https://pokeapi.co/api/v2/pokemon/${id}`, fetcher);

    if (isLoading) return <h1> Cargando Pokemon </h1>
    if (poke) {
        return (
            <div className={container.ViewPokemon}>
                <PicturesPokemon
                    sprites={poke?.sprites} />

                <PokemonData
                    pokemon={poke} />
                    
            </div>
        )
    }
}
