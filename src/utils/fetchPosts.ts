import { IPostResponse } from "types/Post";

export async function fetchPosts():Promise<IPostResponse[] >{
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    ).then(response => response.json());

    return response;
}