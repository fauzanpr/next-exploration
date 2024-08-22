interface ResponseType {
    id: number,
    title: string,
    body: string
}

async function page() {
    // this page using SSG
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json() as ResponseType[];
    return (
        <>
            <p>Hasilnya: </p>
            {data.map(d => (
                <p key={d.id}>{d.title}</p>
            ))}
        </>
    )
}

export default page