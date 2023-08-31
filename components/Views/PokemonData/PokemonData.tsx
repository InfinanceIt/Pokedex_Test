import Image from 'next/image';
import PokemonDataShow from './PokemonDataShow/PokemonDataShow';
import card from '../../../src/styles/card.module.scss';

export default function PokemonData({ pokemon }: { pokemon: any }) {
    let { id, height, weight, name, types, sprites } = pokemon;
    return (
        <div className={card.Pokemon_Data}>

            <div className={card.Aling_Left}>
                <h1> {name} </h1>

                <div className={card.Types_Data}>
                    {types?.map((type: any) => (
                        <span key={type?.slot}> {type?.type?.name} </span>
                    ))}
                </div>

                <div className={card.Data_Items}>
                    <PokemonDataShow
                        text={'Pokedex Number'}
                        data={id} />
                    <PokemonDataShow
                        text={'Height'}
                        data={height} />
                    <PokemonDataShow
                        text={'Weight'}
                        data={weight} />
                </div>


                <div>
                    <h3> Shiny </h3>
                    <div>
                        <Image
                            unoptimized
                            width={100}
                            height={100}
                            priority={true}
                            src={sprites?.front_shiny}
                            alt={'Sprite Pokemon'}
                            blurDataURL={'/logo.png'} />
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
