import styled from "styled-components";
import Modal from "../../ui/Modal";

import { IoEyeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useAddItemWishlist } from "../../hooks/useAddWishlist";
import { useAuth } from "./../../contexts/AuthContext";
import { useState } from "react";
import { useRemoveWishlist } from "./../../hooks/useRemoveWishlist";
import ProductQuickView from "./ProductQuickView";

function CardImg({ item, setIsWishlist, isWishlist }) {
  const {
    imageCover,
    id,
    description,
    images,
    ratingsAverage,
    title,
    category,
    ratingsQuantity,
    priceAfterDiscount,
    price,
  } = item;

  const discountPrecantge = Math.floor(
    ((price - priceAfterDiscount) / price) * 100
  );
  const { userTKN } = useAuth();
  const [quickView, setQuickView] = useState(false);
  const { addItemToWishlist } = useAddItemWishlist(id, userTKN);
  const { removeItemFromWishlist } = useRemoveWishlist(id, userTKN);
  const discount = priceAfterDiscount !== undefined;

  function handleClickWishlist() {
    if (isWishlist) {
      removeItemFromWishlist();
      setIsWishlist(false);
    }
    if (!isWishlist) {
      setIsWishlist(true);
      addItemToWishlist();
    }
  }
  return (
    <>
      {quickView && (
        <Modal width="80%" onclose={() => setQuickView(false)}>
          <ProductQuickView
            height="600px"
            item={item}
            isWishlist={isWishlist}
            setIsWishlist={setIsWishlist}
          />
        </Modal>
      )}

      <Div>
        {discount && <Sale>sale %{discountPrecantge}</Sale>}

        <div>
          <img src={imageCover} width={"100%"} alt={title} />
        </div>
        <Actions>
          <Action onClick={() => setQuickView(true)}>
            <Toltip>quick view</Toltip>
            <IoEyeOutline style={{ transitionDuration: ".1s" }} size="18px" />
          </Action>

          <Action
            onClick={handleClickWishlist}
            style={{
              background: `${isWishlist ? "white" : ""}`,
            }}
          >
            <Toltip>wish list</Toltip>
            <FaHeart
              style={{ transitionDuration: ".1s" }}
              size="18px"
              color={isWishlist ? "var(--main-color)" : ""}
            />
          </Action>
        </Actions>
      </Div>
    </>
  );
}

export default CardImg;

const Div = styled.div`
  position: relative;
  text-align: center;
  transition: all 0.2s;
  &:hover :nth-child(3) {
    opacity: 1;
    visibility: visible;
  }
`;
const Sale = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 4px;
  padding: 2px 4px;
  background: var(--main-color);
  font-size: 12px;
  color: var(--text-lightest);
`;
const Actions = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  opacity: 0;
  transform: translateX(-50%) translateY(-50%);
  transition: all 0.1s;
  visibility: hidden;
  width: 100%;
  z-index: 9;
`;
const Action = styled.div`
  cursor: pointer;
  align-items: center;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px -1px rgba(145, 158, 171, 0.2),
    0 4px 5px 0 rgba(145, 158, 171, 0.14),
    0 1px 10px 0 rgba(145, 158, 171, 0.12);
  display: inline-flex;
  height: 34px;
  justify-content: center;
  transition: all 0.1s;
  width: 34px;
  margin: 0 2px;
  color: var(--text-light);
  position: relative;

  &:hover {
    color: white;
    background: var(--main-color);
  }
  &:hover :first-child {
    display: block;
  }
`;
const Toltip = styled.span`
  background: black;
  /* background: var(--main-color); */
  border-radius: 0.25rem;
  color: var(--text-lightest);
  font-size: 12.5px;
  padding: 0.25rem 0.5rem;
  position: absolute;
  top: -45px;
  display: none;
  /* transition: 5s; */
`;
