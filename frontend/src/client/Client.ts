import axios from "axios";

async function login(username: string, password: string)  {
   axios.put("http://localhost:8080/api/users/login", {
        username: username,
        password: password
    }).then((data) => {return data})
       .catch((error) => console.error(error));

}