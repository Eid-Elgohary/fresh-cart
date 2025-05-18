import axios from "axios";

const URL = "https://ecommerce.routemisr.com/api/v1/orders";

export function createCashOrder(body, tkn, cartId) {
  return axios.post(`${URL}/${cartId}`, body, {
    headers: { token: tkn },
  });
}

export function createVisaOrder(cartId, directedurl, values, tkn) {
  return axios.post(
    `${URL}/checkout-session/${cartId}?url=${directedurl}`,
    values,
    {
      headers: {
        token: tkn,
      },
    }
  );
}
