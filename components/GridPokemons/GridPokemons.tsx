import CardByPokemon from '../CardByPokemon/CardByPokemon';
import container from '../../src/styles/container.module.scss';

export default function GridPokemons({ pokemons }: { pokemons: any }) {
    return (
        <div className={container.Pokemons}>
            {pokemons?.map((pokemon: any) => (
                <CardByPokemon
                    key={pokemon?.name}
                    pokemon={pokemon} />
            ))}
        </div>
    )
}
