import axios from "axios";

const URL = "https://ecommerce.routemisr.com/api/v1/brands";

export function getAllBrands() {
  return axios.get(URL);
}
