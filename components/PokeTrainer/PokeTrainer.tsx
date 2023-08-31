import Image from 'next/image';
import container from '../../src/styles/container.module.scss';

export default function PokeTrainer() {
    let name = 'ASHK123';
    let level = 'Level 1'
    let phrase = '"Work hard on your test"'
    return (
        <div className={container.PokeTrainer}>
            <aside>
                <svg>
                    <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <g>
                            <path d="M2,5 L2,7 L22,7 L22,5 L2,5 Z M2,11 L2,13 L22,13 L22,11 L2,11 Z M2,17 L2,19 L22,19 L22,17 L2,17 Z"></path>
                        </g>
                    </svg>
                </svg>
                <Image
                    unoptimized
                    width={125}
                    height={50}
                    priority={true}
                    src={'/logo.png'}
                    alt={'Logo Pokemon'}
                    blurDataURL={'/logo.png'} />

                <div className={container.Trainer}>
                    <Image
                        unoptimized
                        width={170}
                        height={170}
                        priority={true}
                        src={'/avatar.png'}
                        alt={'Trainer Pokemon'}
                        blurDataURL={'/avatar.png'} />

                    <h2> {name} </h2>
                    <h3> {level} </h3>
                    <p> {phrase} </p>

                </div>
                <div className={container.LogOut}>
                    <button>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                            <g id="PT/Icons/Logout" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <path d="M12,2 C6.4856775,2 2,6.4856775 2,12 C2,17.5143233 6.4856775,22 12,22 C16.6484375,22 20.5481775,18.8066408 21.6614583,14.5 L19.9427083,14.5 C18.878255,17.8789067 15.7239583,20.3333333 12,20.3333333 C7.40364583,20.3333333 3.66666667,16.5963542 3.66666667,12 C3.66666667,7.40364583 7.40364583,3.66666667 12,3.66666667 C15.7239583,3.66666667 18.878255,6.12109417 19.9427083,9.5 L21.6614583,9.5 C20.5481775,5.19335917 16.6484375,2 12,2 Z M12.546875,8.06770833 L9.21354167,11.4010417 L8.640625,12 L9.21354167,12.5989583 L12.546875,15.9322917 L13.7447917,14.734375 L11.84375,12.8333333 L22,12.8333333 L22,11.1666667 L11.84375,11.1666667 L13.7447917,9.265625 L12.546875,8.06770833 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
                            </g>
                        </svg>
                        LOG OUT
                    </button>
                </div>
            </aside>

        </div>
    )
}
