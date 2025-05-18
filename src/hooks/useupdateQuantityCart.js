import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateQuantityCart } from "../utils/cart";
import toast from "react-hot-toast";

export function useUpdateQuantityCart(tkn, id, count) {
  const queryClient = useQueryClient();
  const { mutate: updateQuantity, isPending:isUpdating } = useMutation({
    mutationFn: () => updateQuantityCart(tkn, id, count),
    mutationKey: ["cart"],
    onError: () => {
      toast.error("an error occcured");
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });
  return { updateQuantity, isUpdating };
}
