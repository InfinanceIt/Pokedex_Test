import { useState } from 'react';
import GridPokemons from '../GridPokemons/GridPokemons';

export default function SearchBar({ pokemons }: { pokemons: any }) {
    let [search, setSearch] = useState("");

    let searchPokemon = pokemons?.filter((pokemon: any) => {
        return pokemon?.name?.toLowerCase()?.indexOf(search?.toLowerCase()) !== -1 ||
            pokemon?.url?.toLowerCase()?.indexOf(search?.toLowerCase()) !== -1;
    })

    return (
        <div>
            <div>
                <input
                    type={'text'}
                    value={search}
                    onChange={e => setSearch(e.target.value)} />
            </div>

            <div>
                {searchPokemon !== "" ? (
                    <GridPokemons
                        pokemons={searchPokemon} />
                ) : (
                    <GridPokemons
                        pokemons={pokemons} />
                )}
            </div>


        </div>
    )
}
