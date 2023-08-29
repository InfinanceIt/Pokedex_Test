import SearchBar from '../../components/SearchBar/SearchBar';
import PokeTrainer from '../../components/PokeTrainer/PokeTrainer';

export default function Pokedex({ repo }: { repo: any }) {
    if (repo === undefined) return <h1> Componente Error </h1>
    if (repo !== undefined) {
        return (
            <div>
                <PokeTrainer />

                <SearchBar
                    pokemons={repo?.results} />
            </div>
        )
    }
}
