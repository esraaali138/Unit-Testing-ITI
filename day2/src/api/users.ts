
import axios from "axios";
export interface User {
  id: number;
  name: string;
  email: string;
  city: string;
}

export const fetchUsers = () =>
  axios
    .get<User[]>('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data);
