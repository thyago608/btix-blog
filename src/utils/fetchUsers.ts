import { IUser } from "types/User";

export async function fetchUsers():Promise<IUser[]>{
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then(response => response.json());

      return response;
    }