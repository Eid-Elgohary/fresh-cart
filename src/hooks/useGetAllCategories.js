import { useQuery } from "@tanstack/react-query"
import { getAllCategories } from "../utils/categories"

function useGetAllCategories() {

  const {data:categoriesData, isPending}= useQuery({
    queryKey:['categories'],
    queryFn:getAllCategories
  })
  return {categoriesData,isPending}
}

export default useGetAllCategories
