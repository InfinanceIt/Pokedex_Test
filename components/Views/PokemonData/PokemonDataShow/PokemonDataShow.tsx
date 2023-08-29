
export default function PokemonDataShow({ text, data }: { text: string, data: string }) {
    return (
        <div>
            <h3>{text}</h3>
            <h5>{data}</h5>
        </div>
    )
}
