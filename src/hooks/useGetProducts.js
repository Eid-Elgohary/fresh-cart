import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../utils/getAllProducts";

function useGetAllProducts() {
  const { data:productsData, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return { productsData, isPending };
}

export default useGetAllProducts;
