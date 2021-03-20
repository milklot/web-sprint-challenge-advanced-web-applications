import axios from "axios";
 
export const fetchApi = () => {
 return axios
   .get("http://localhost:5000/api/colors")
   .then((res) => {
     return res;
   })
   .catch((err) => {
     console.error("something went wrong", err);
   });
};