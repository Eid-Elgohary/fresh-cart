import axios from "axios";

const URL = "https://ecommerce.routemisr.com/api/v1/categories";
export function getAllCategories() {
  return axios.get(URL);
}
