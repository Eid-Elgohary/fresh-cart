import styled from "styled-components";
import useGetAllProducts from "./../../hooks/useGetProducts";
import Spinner from "./../../ui/Spinner";
import Card from "./Card";

import { useGetWishlist } from "./../../hooks/useGetWishlist";
import { useAuth } from "./../../contexts/AuthContext";
import { useState } from "react";

function ProductContent() {
  const { userTKN } = useAuth();
  const { productsData, isPending } = useGetAllProducts();
  const { wishlistData } = useGetWishlist(userTKN);
  const [sortBy, setSortBy] = useState("default");

  if (isPending) return <Spinner />;

  let sortedProducts = [];

  switch (sortBy) {
    case "highestPrice":
      sortedProducts = productsData.data.data
        .slice()
        .sort((a, b) => b.price - a.price);
      break;
    case "lowestPrice":
      sortedProducts = productsData.data.data
        .slice()
        .sort((a, b) => a.price - b.price);
      break;
    case "highestRate":
      sortedProducts = productsData.data.data
        .slice()
        .sort((a, b) => b.ratingsAverage - a.ratingsAverage);
      break;
    case "lowestRate":
      sortedProducts = productsData.data.data
        .slice()
        .sort((a, b) => a.ratingsAverage - b.ratingsAverage);
      break;
    case "highestQuantity":
      sortedProducts = productsData.data.data
        .slice()
        .sort((a, b) => b.quantity - a.quantity);
      break;
    case "lowestQuantity":
      sortedProducts = productsData.data.data
        .slice()
        .sort((a, b) => a.quantity - b.quantity);
      break;
    default:
      sortedProducts = productsData.data.data;
  }

  const wishIds = wishlistData?.data?.data?.map((wish) => wish.id) || [];

  return (
    <div>
      <div style={{ textAlign: "right", paddingRight: "8px" }}>
        <StyledSelect
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">default</option>
          <option value="highestPrice">Sort by highest price</option>
          <option value="lowestPrice">Sort by lowest price</option>
          <option value="highestRate">Sort by highest rate</option>
          <option value="lowestRate">Sort by lowest rate</option>
          <option value="highestQuantity">Sort by highest quantity</option>
          <option value="lowestQuantity">Sort by lowest quantity</option>
        </StyledSelect>
      </div>
      <Grid>
        {sortedProducts.map((item) => (
          <Card key={item.id} item={item} wishIds={wishIds} />
        ))}
      </Grid>
    </div>
  );
}

export default ProductContent;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
const StyledSelect = styled.select`
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #4caf50;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #45a049;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    border-color: #2e7d32;
    box-shadow: 0 0 8px rgba(46, 125, 50, 0.3);
  }
`;
