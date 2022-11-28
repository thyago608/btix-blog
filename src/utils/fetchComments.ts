import { IComment } from "types/Comment";

export async function fetchComments(postId:number):Promise<IComment[]>{
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      ).then(response => response.json());

      return response;
}