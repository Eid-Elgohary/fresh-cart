import axios from "axios";

const BASE_URL = "https://ecommerce.routemisr.com";

export async function getAllProducts() {
  return axios.get(`${BASE_URL}/api/v1/products`);
}
