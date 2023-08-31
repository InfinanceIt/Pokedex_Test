import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import TypePokemon from './TypePokemon';
import card from '../../src/styles/card.module.scss';

const fetcher = (urlP: any) => fetch(urlP).then((res) => res.json());

export default function CardByPokemon({ pokemon }: { pokemon: any }) {
    const { data: pokemonF, isLoading } = useSWR(`${pokemon?.url}`, fetcher);

    if (isLoading) return <h1> Cargando </h1>
    if (pokemonF) {
        return (
            <div className={card.Pokemon}>
                <Link href={`/pokemon/${pokemonF?.id}`}>
                    <div className={card.Aling_Text_Card}>
                        <h3> {pokemon?.name} </h3>
                        <h4> {pokemonF?.id} </h4>
                    </div>

                    <Image
                        unoptimized
                        width={200}
                        height={200}
                        priority={true}
                        src={pokemonF?.sprites?.front_default}
                        alt={'Sprite Pokemon'}
                        blurDataURL={'/logo.png'} />

                    <div className={card.Types}>
                        {pokemonF?.types?.map((type: any) =>
                            <TypePokemon
                                key={type?.slot}
                                type={type?.type?.name} />
                        )}
                    </div>

                </Link>
            </div>
        )
    }
}