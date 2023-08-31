import SearchBar from '../../components/SearchBar/SearchBar';
import PokeTrainer from '../../components/PokeTrainer/PokeTrainer';
import container from '../styles/container.module.scss';

export default function Pokedex({ repo }: { repo: any }) {
    if (repo === undefined) return <h1> Componente Error </h1>
    if (repo !== undefined) {
        return (
            <div className={container.Flex}>
                <PokeTrainer />
                <SearchBar
                    pokemons={repo?.results} />
            </div>
        )
    }
}
