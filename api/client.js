import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// apiClient.get('/users').then(response => {
//     if (!response.ok) {
//         response.problem
//     }
// })

export default apiClient;
