import { useMutation } from "@tanstack/react-query";
import { createOrder } from "./../utils/order";
import toast from "react-hot-toast";

function useCreateOrder(values, tkn, cartId) {
  const {
    mutate: orderCreate,
    isPending: isCreating,
    isSuccess,
  } = useMutation({
    mutationFn: () => createOrder(values, tkn, cartId),
    onSuccess: () => {
      toast.success("Order created successfully!");
      return true;
    },
    onError: () => toast.error("an error occured"),
  });

  return { orderCreate, isCreating, isSuccess };
}

export default useCreateOrder;
