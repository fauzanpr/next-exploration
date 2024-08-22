// this use SSR for data fetching

interface IProps {
    params: {
        postId: string;
    }
}

async function page({ params }: IProps) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
        { cache: 'no-store' }
        // the "no-store" cache property value makes it turns from SSG into SSR
        // it will refetching when the page is loaded
    );
    const data = await res.json();

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{ data.body }</p>
        </div>
    )
}

export default page;