import CardByPokemon from '../CardByPokemon/CardByPokemon';

export default function GridPokemons({ pokemons }: { pokemons: any }) {
    return (
        <div>
            {pokemons?.map((pokemon: any) => (
                <CardByPokemon
                    key={pokemon?.name}
                    pokemon={pokemon} />
            ))}
        </div>
    )
}
