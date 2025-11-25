import axios from "axios";
import type {User} from "@/interface/User.tsx";
import {toast} from "sonner";

export async function login(username: string, password: string): Promise<User>  {
   try {
       console.log(username, password);
       const res = await axios.put("http://localhost:8080/api/users/login", null,  {
           params: {
               username,
               password
           }
       })
       toast.success("login successful")
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

export async function signUp(username: string, password: string): Promise<User> {
    try {
        console.log(username, password);
        const res = await axios.post("http://localhost:8080/api/users/signup", null, {
              params: {
                  username,
                  password
              }
        })
        toast.success("You have successfully signed up!");
        await login(username, password);
        return res.data as User
    } catch (error) {
        toast.error("Sign Up Failed");
        console.error(error);
        throw error;
    }
}