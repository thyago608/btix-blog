import { IPostResponse } from "types/Post";

export async function fetchPostID(postId:number):Promise<IPostResponse>{
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      ).then(response => response.json());

      return response;
}