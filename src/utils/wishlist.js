import axios from "axios";

const URL = "https://ecommerce.routemisr.com/api/v1/wishlist";

export function addToWishlist(id, tkn) {
  return axios.post(
    URL,
    { productId: id },

    {
      headers: {
        token: tkn,
      },
    }
  );
}

export function removeFromWishlist(id, tkn) {
  return axios.delete(`${URL}/${id}`, {
    headers: { token: tkn },
  });
}

export function getWishlists(tkn) {
  return axios.get(URL, {
    headers: { token: tkn },
  });
}


 
