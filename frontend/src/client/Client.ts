import axios from "axios";
import type {User} from "@/interface/User.tsx";

export async function login(username: string, password: string): Promise<User>  {
   try {
       console.log(username, password);
       const res = await axios.put("http://localhost:8080/api/users/login", null,  {
           params: {
               username,
               password
           }
       })
       return res.data as User;
   } catch(error) {
       console.error(error);
       throw error;
   }
}


export async function getUserById(id: number) :Promise<User> {
    try {
        const res = await axios.get("http://localhost:8080/api/users/" + id)
        return res.data as User;
    } catch(error) {
        console.log(error);
        throw error;
    }
}