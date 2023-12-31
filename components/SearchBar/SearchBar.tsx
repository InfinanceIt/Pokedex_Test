import { useState } from 'react';
import GridPokemons from '../GridPokemons/GridPokemons';
import container from '../../src/styles/container.module.scss';

export default function SearchBar({ pokemons }: { pokemons: any }) {
    let [search, setSearch] = useState("");

    let searchPokemon = pokemons?.filter((pokemon: any) => {
        return pokemon?.name?.toLowerCase()?.indexOf(search?.toLowerCase()) !== -1 ||
            pokemon?.url?.toLowerCase()?.indexOf(search?.toLowerCase()) !== -1;
    })

    return (
        <div className={container.Align_Items}>
            <div className={container.Left}>
                <div className={container.Search}>
                    <input
                        type={'text'}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder='Search' />
                        
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="PT/Icons/Search">
                            <path d="M8.99624359,2 C5.14268341,2 2,5.16636188 2,9.04895661 C2,12.931551 5.14268341,16.0979132 8.99624359,16.0979132 C10.7662311,16.0979132 12.382164,15.4256534 13.6165655,14.3270691 L14.2434263,14.9586529 L14.2434263,16.0979132 L20.2509391,22 L22,20.2377608 L15.9924872,14.3356741 L14.8617464,14.3356741 L14.2348856,13.7040902 C15.3252545,12.4603882 15.9924872,10.8322801 15.9924872,9.04895661 C15.9924872,5.16636188 12.8498034,2 8.99624359,2 Z M8.99624359,3.76223915 C11.9045409,3.76223915 14.2434263,6.11874667 14.2434263,9.04895661 C14.2434263,11.9791665 11.9045409,14.3356741 8.99624359,14.3356741 C6.08794614,14.3356741 3.7490609,11.9791665 3.7490609,9.04895661 C3.7490609,6.11874667 6.08794614,3.76223915 8.99624359,3.76223915 Z" ></path>
                        </g>
                    </svg>
                </div>
            </div>

            {searchPokemon !== "" ? (
                <GridPokemons
                    pokemons={searchPokemon} />
            ) : (
                <GridPokemons
                    pokemons={pokemons} />
            )}


        </div>
    )
}
