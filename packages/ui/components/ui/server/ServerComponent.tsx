

export default async function ServerComponent() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await res.json();

    console.log(process.env.HOSTEST);

    return (
        <>
            <div>{process.env.HOSTEST}</div>
        </>

    );
}