import { useQuery } from "@tanstack/react-query";
import { getAllBrands } from "../utils/brands";

function useGetAllBrands() {
  const { data: brandsData, isPending } = useQuery({
    queryKey: ["brands"],
    queryFn: getAllBrands,
  });
  return { isPending, brandsData };
}

export default useGetAllBrands;
