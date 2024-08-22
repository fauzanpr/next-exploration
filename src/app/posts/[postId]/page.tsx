interface IProps {
    params: {
        postId: string;
    }
}

async function page({ params }: IProps) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${params.postId}`,
        { cache: 'no-store' }
    );
    const data = await res.json();

    return (
        <div>{data.title}</div>
    )
}

export default page;