import { IUser } from "types/User";

export async function fetchUsers():Promise<IUser[]>{
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

    if(response.status === 200)
        return response.json();
    else
        throw new Error("Invalid Response");
    }