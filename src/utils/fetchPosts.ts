import { IPostResponse } from "types/Post";

export async function fetchPosts():Promise<IPostResponse[] >{
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    if (response.status === 200)
        return response.json();
    else
        throw new Error("Invalid Response");
}