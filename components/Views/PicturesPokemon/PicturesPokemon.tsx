import Image from 'next/image';

export default function PicturesPokemon({ sprites }: { sprites: any }) {
    return (
        <div>
            <div>
                <Image
                    unoptimized
                    width={300}
                    height={300}
                    priority={true}
                    src={sprites?.front_default}
                    alt={'Sprite Pokemon'}
                    blurDataURL={'/logo.png'} />
            </div>

            <div>
                <div>
                    <Image
                        unoptimized
                        width={100}
                        height={100}
                        priority={true}
                        src={sprites?.front_default}
                        alt={'Sprite Pokemon'}
                        blurDataURL={'/logo.png'} />
                </div>
                <div>
                    <Image
                        unoptimized
                        width={100}
                        height={100}
                        priority={true}
                        src={sprites?.back_default}
                        alt={'Sprite Pokemon'}
                        blurDataURL={'/logo.png'} />
                </div>
            </div>

        </div>
    )
}
