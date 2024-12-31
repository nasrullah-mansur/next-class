// export const dynamic = "force-dynamic";

import { unstable_cache } from "next/cache";

const getJoke = unstable_cache(
    async () => {
        let response = await fetch("https://api.chucknorris.io/jokes/random");
        let joke = await response.json();
        return joke;
    },
    ["joke"],
    { revalidate: 10, tags: ["joke"] }
);

// async function getJoke() {
//     let response = await fetch("https://api.chucknorris.io/jokes/random");
//     let joke = await response.json();
//     return joke;
// }

export default async function page() {
    let joke = await getJoke();
    return <div>{joke.value}</div>;
}
