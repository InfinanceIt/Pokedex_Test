import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';

const fetcher = (urlP: any) => fetch(urlP).then((res) => res.json());

export default function CardByPokemon({ pokemon }: { pokemon: any }) {
    const { data: pokemonF, isLoading } = useSWR(`${pokemon?.url}`, fetcher);

    if (isLoading) return <h1> Cargando </h1>
    if (pokemonF) {
        return (
            <>
                <Link href={`/pokemon/${pokemonF?.id}`}>
                    <div>
                        <div>
                            <h4> {pokemon?.name} </h4>
                            <h3> {pokemonF?.id} </h3>
                        </div>

                        <div>
                            <Image
                                unoptimized
                                width={200}
                                height={100}
                                priority={true}
                                src={pokemonF?.sprites?.front_default}
                                alt={'Sprite Pokemon'}
                                blurDataURL={'/logo.png'} />
                        </div>

                        <div>
                            {pokemonF?.types?.map((type: any) =>
                                <p key={type?.slot}>
                                    {type?.type?.name}
                                </p>)}
                        </div>

                    </div></Link>
            </>
        )
    }
}