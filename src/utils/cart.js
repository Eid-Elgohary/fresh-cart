import axios from "axios";
const URL = "https://ecommerce.routemisr.com/api/v1/cart";

export function getCart(tkn) {
  return axios.get(URL, {
    headers: { token: tkn },
  });
}

export function addToCart(tkn, id) {
  return axios.post(
    URL,
    { productId: id },
    {
      headers: { token: tkn },
    }
  );
}

export function removeFromCart(tkn, id) {
  return axios.delete(`${URL}/${id}`, { headers: { token: tkn } });
}

export function updateQuantityCart(tkn, id, count) {
  return axios.put(
    `${URL}/${id}`,
    { count: count },
    {
      headers: {
        token: tkn,
      },
    }
  );
}

export function clearCartFn(tkn) {
  axios.delete(URL, { headers: { token: tkn } });
}
