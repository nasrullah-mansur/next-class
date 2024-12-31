async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
}

export default async function Blogs() {
    let data = await getPosts();

    return (
        <div>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
