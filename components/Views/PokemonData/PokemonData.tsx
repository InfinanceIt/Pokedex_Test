import Image from 'next/image';
import PokemonDataShow from './PokemonDataShow/PokemonDataShow';

export default function PokemonData({ pokemon }: { pokemon: any }) {
    let { id, height, weight, name, types, sprites } = pokemon;
    return (
        <div>
            <h1> {name} </h1>

            <div>
                {types?.map((type: any) => (
                    <p key={type?.slot}> {type?.type?.name} </p>
                ))}
            </div>

            <PokemonDataShow
                text={'Pokedex Number'}
                data={id} />
            <PokemonDataShow
                text={'Height'}
                data={height} />
            <PokemonDataShow
                text={'Weight'}
                data={weight} />

            <div>
                <h3> Shiny </h3>
                <div>
                    <div><Image
                        unoptimized
                        width={100}
                        height={100}
                        priority={true}
                        src={sprites?.front_shiny}
                        alt={'Sprite Pokemon'}
                        blurDataURL={'/logo.png'} />
                    </div>
                    <div>
                        <Image
                            unoptimized
                            width={100}
                            height={100}
                            priority={true}
                            src={sprites?.back_shiny}
                            alt={'Sprite Pokemon'}
                            blurDataURL={'/logo.png'} />
                    </div>
                </div>
            </div>

        </div>
    )
}
