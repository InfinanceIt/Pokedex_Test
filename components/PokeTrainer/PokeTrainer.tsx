import Image from 'next/image';

export default function PokeTrainer() {
    let name = 'ASHK123';
    let level = 'Level 1'
    let phrase = 'Work Hard on your test'
    return (
        <div>
            <div>
                <Image
                    unoptimized
                    width={200}
                    height={100}
                    priority={true}
                    src={'/logo.png'}
                    alt={'Logo Pokemon'}
                    blurDataURL={'/logo.png'} />
            </div>

            <div>
                <Image
                    unoptimized
                    width={100}
                    height={100}
                    priority={true}
                    src={'/avatar.png'}
                    alt={'Trainer Pokemon'}
                    blurDataURL={'/avatar.png'} />
            </div>

            <div>
                <h2> {name} </h2>
                <h3> {level} </h3>
                <p> {phrase} </p>
            </div>

            <div>
                <button> LOG OUT </button>
            </div>

        </div>
    )
}
