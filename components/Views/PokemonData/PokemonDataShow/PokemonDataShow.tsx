
export default function PokemonDataShow({ text, data }: { text: string, data: string }) {
    return (
        <div>
            <h3>{text}</h3>
            <h4>{data}</h4>
        </div>
    )
}
