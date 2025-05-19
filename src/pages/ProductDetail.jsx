import { useParams } from "react-router-dom";
import Section from "./../ui/Section";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ProductQuickView from "./../features/products/ProductQuickView";
import { useAuth } from "./../contexts/AuthContext";
import { useGetWishlist } from "./../hooks/useGetWishlist";
import { useEffect, useState } from "react";
import Spinner from "./../ui/Spinner";
import { Helmet } from "react-helmet";

function ProductDetails() {
  const { userTKN } = useAuth();
  const { wishlistData } = useGetWishlist(userTKN);

  const { id } = useParams();
  const slicedID = id.slice(id.indexOf("=") + 1);

  const [isWishlist, setIsWishlist] = useState(false);

  useEffect(() => {
    const wishIds = wishlistData?.data?.data?.map((wish) => wish.id) || [];

    setIsWishlist(wishIds.includes(slicedID));
  }, [slicedID, wishlistData.data.data]);

  function getProductDetails() {
    return axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${slicedID}`
    );
  }

  const { data, isLoading } = useQuery({
    queryKey: ["product", slicedID],
    queryFn: getProductDetails,
  });

  if (isLoading) return <Spinner />;
  if (!data) return <Spinner />;


  return (
    <Section>
      <Helmet>
        <title>product detail</title>
      </Helmet>
      <ProductQuickView
        item={data?.data?.data}
        isWishlist={isWishlist}
        setIsWishlist={setIsWishlist}
      />
    </Section>
  );
}

export default ProductDetails;
