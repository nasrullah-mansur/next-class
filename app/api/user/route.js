export async function GET() {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    // const data = await res.json();

    // return Response.json({ data });

    let myObj = {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };

    return new Response(JSON.stringify(myObj));
}
