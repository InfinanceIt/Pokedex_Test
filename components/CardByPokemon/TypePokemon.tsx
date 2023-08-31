import card from '../../src/styles/card.module.scss';

export default function TypePokemon({ type }: { type: any }) {
    console.log(type)
    switch (type) {
        case 'grass':
            return <span className={card.Grass}>{type}</span>
        case "fire":
            return <span className={card.Fire}>{type}</span>
        case "water":
            return <span className={card.Water}>{type}</span>
        case "poison":
            return <span className={card.Poison}>{type}</span>
        case "ghost":
            return <span className={card.Ghost}>{type}</span>
        case "rock":
            return <span className={card.Rock}>{type}</span>
        case "ground":
            return <span className={card.Ground}>{type}</span>

        case "ice":
            return <span className={card.Ice}>{type}</span>

        case "fairy":
            return <span className={card.Fairy}>{type}</span>


        case "bug":
            return <span className={card.Bug}>{type}</span>


        case "psychic":
            return <span className={card.Psychic}>{type}</span>


        case "fighting":
            return <span className={card.Fighting}>{type}</span>


        case "electric":
            return <span className={card.Electric}>{type}</span>


        case "normal":
            return <span className={card.Normal}>{type}</span>

        case "No such data exist!":
            return <span className={card.Grass}>{type}</span>
    }
}
