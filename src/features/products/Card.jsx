// import StarRating from "../../ui/StarRating";
// import styled from "styled-components";
// import Link from "../../ui/Link";
// import Button from "../../ui/Button";
// import CardImg from "./CardImg";
// import { FaHeart } from "react-icons/fa";

// import { useAuth } from "../../contexts/AuthContext";
// import { useAddItemToCart } from "../../hooks/useAddItemToCart";
// import { useState } from "react";
// import { useRemoveWishlist } from "../../hooks/useRemoveWishlist";
// import { StyledCard } from "../../ui/StyledCard";
// import SmallSpinner from "../../ui/SmallSpinner";
// import { useAddItemWishlist } from "../../hooks/useAddWishlist";

// function Card({ item, wishIds }) {
//   const {
//     id,
//     ratingsAverage,
//     title,
//     category,
//     ratingsQuantity,
//     priceAfterDiscount,
//     price,
//   } = item;

//   const { userTKN } = useAuth();
//   const { isAdding, addItem } = useAddItemToCart(userTKN, id);
//   const { removeItemFromWishlist } = useRemoveWishlist(id, userTKN);
//   const { addItemToWishlist } = useAddItemWishlist(id, userTKN);
//   const [isWishlist, setIsWishlist] = useState(wishIds.includes(id));

//   const newTitle = title.split(" ").slice(0, 3).join(" ");
//   const discount = priceAfterDiscount !== undefined;

//   function handleClickWishlist() {
//     if (isWishlist) {
//       removeItemFromWishlist();
//       setIsWishlist(false);
//     }
//     if (!isWishlist) {
//       setIsWishlist(true);
//       addItemToWishlist();
//     }
//   }

//   return (
//     <StyledCard>
//       <CardBody>
//         <CardImg
//           item={item}
//           isWishlist={isWishlist}
//           setIsWishlist={setIsWishlist}
//           wishIds={wishIds}
//         />

//         <HeadingDiv>
//           {category.name}
//           <DetailsBTN as={Link} to={`/productdetails/id=${id}`}>
//             more details
//           </DetailsBTN>
//         </HeadingDiv>
//         <HeadingDiv>
//           <Link style={{ paddingLeft: 0 }} as="h2">
//             {newTitle}
//           </Link>

//           <WishIcon>
//             <FaHeart
//               style={{ cursor: "pointer" }}
//               onClick={handleClickWishlist}
//               color={isWishlist ? "var(--main-color)" : "white"}
//               size="22px"
//             />
//           </WishIcon>
//         </HeadingDiv>
//         <Rate>
//           <StarRating rating={ratingsAverage} />
//           <span>({ratingsQuantity})</span>
//         </Rate>
//         <Buttons>
//           <div>
//             {discount ? (
//               <>
//                 <span style={{ color: "black" }}>${priceAfterDiscount}</span>
//                 <OldPrice>${price}</OldPrice>
//               </>
//             ) : (
//               <span style={{ color: "black" }}>${price}</span>
//             )}
//           </div>

//           <div style={{ height: "30px" }}>
//             {isAdding ? (
//               <SmallSpinner color="var(--main-color)" />
//             ) : (
//               <Button onClick={addItem} size="small">
//                 + add
//               </Button>
//             )}
//           </div>
//         </Buttons>
//       </CardBody>
//     </StyledCard>
//   );
// }

// export default Card;

// const CardBody = styled.div`
//   padding: 1rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   position: relative;
//   transition: all 0.2s;
//   border: 1px solid var(--border);
//   border-radius: 0.5rem;
//   height: 100%;

//   &:hover {
//     border: 1px solid var(--main-color);
//     box-shadow: 0 5px 12px rgba(0, 0, 0, 0.12);
//   }

//   &:hover :first-child > :last-child {
//     opacity: 1;
//     visibility: visible;
//   }
// `;
// const HeadingDiv = styled.div`
//   font-size: 12px;
//   color: #5c6c75bf;
//   padding: 0.25rem;
//   padding-left: 0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
// const Rate = styled.div`
//   color: #5c6c75bf;
//   font-size: 0.875rem;
//   display: flex;
//   gap: 0.5rem;
// `;
// const Buttons = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 12px;
//   font-size: 14px;
//   color: var(--text-light);
// `;
// const OldPrice = styled.span`
//   font-size: 12px;
//   margin-left: 0.5rem;
//   text-decoration: line-through;
//   color: var(--text-light);
//   color: #5e666abf;
// `;
// const WishIcon = styled.div`
//   padding: 4px 4px 2px;
//   border-radius: 4px;
//   background: #c6cccfbd;
// `;
// const DetailsBTN = styled.div`
//   font-size: 13px;
//   padding: 8px;
//   font-weight: 600;
//   justify-content: start;
//   cursor: pointer;
//   color: black;
//   white-space: nowrap;

//   &:hover {
//     color: var(--main-color);
//     cursor: pointer;
//   }
// `;

import StarRating from "../../ui/StarRating";
import styled from "styled-components";
import Link from "../../ui/Link";
import Button from "../../ui/Button";
import CardImg from "./CardImg";
import { FaHeart } from "react-icons/fa";

import { useAuth } from "../../contexts/AuthContext";
import { useAddItemToCart } from "../../hooks/useAddItemToCart";
import { useState } from "react";
import { useRemoveWishlist } from "../../hooks/useRemoveWishlist";
import { StyledCard } from "../../ui/StyledCard";
import SmallSpinner from "../../ui/SmallSpinner";
import { useAddItemWishlist } from "../../hooks/useAddWishlist";

function Card({ item, wishIds }) {
  const {
    id,
    ratingsAverage,
    title,
    category,
    ratingsQuantity,
    priceAfterDiscount,
    price,
  } = item;

  const { userTKN } = useAuth();
  const { isAdding, addItem } = useAddItemToCart(userTKN, id);
  const { removeItemFromWishlist } = useRemoveWishlist(id, userTKN);
  const { addItemToWishlist } = useAddItemWishlist(id, userTKN);
  const [isWishlist, setIsWishlist] = useState(wishIds.includes(id));

  const newTitle = title.split(" ").slice(0, 3).join(" ");
  const discount = priceAfterDiscount !== undefined;

  function handleClickWishlist() {
    if (isWishlist) {
      removeItemFromWishlist();
      setIsWishlist(false);
    } else {
      setIsWishlist(true);
      addItemToWishlist();
    }
  }

  return (
    <StyledCard>
      <CardBody>
        <CardImg
          item={item}
          isWishlist={isWishlist}
          setIsWishlist={setIsWishlist}
          wishIds={wishIds}
        />

        <HeadingDiv>
          {category.name}
          <DetailsBTN as={Link} to={`/productdetails/id=${id}`}>
            more details
          </DetailsBTN>
        </HeadingDiv>
        <HeadingDiv>
          <Link style={{ paddingLeft: 0 }} as="h2">
            {newTitle}
          </Link>

          <WishIcon>
            <FaHeart
              style={{ cursor: "pointer" }}
              onClick={handleClickWishlist}
              color={isWishlist ? "var(--main-color)" : "white"}
              size="22px"
            />
          </WishIcon>
        </HeadingDiv>
        <Rate>
          <StarRating rating={ratingsAverage} />
          <span>({ratingsQuantity})</span>
        </Rate>
        <Buttons>
          <div>
            {discount ? (
              <>
                <span style={{ color: "black" }}>${priceAfterDiscount}</span>
                <OldPrice>${price}</OldPrice>
              </>
            ) : (
              <span style={{ color: "black" }}>${price}</span>
            )}
          </div>

          <div style={{ height: "30px" }}>
            {isAdding ? (
              <SmallSpinner color="var(--main-color)" />
            ) : (
              <Button onClick={addItem} size="small">
                + add
              </Button>
            )}
          </div>
        </Buttons>
      </CardBody>
    </StyledCard>
  );
}

export default Card;

const CardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: all 0.2s;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  height: 100%;

  &:hover {
    border: 1px solid var(--main-color);
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.12);
  }

  &:hover :first-child > :last-child {
    opacity: 1;
    visibility: visible;
  }
`;
const HeadingDiv = styled.div`
  font-size: 12px;
  color: #5c6c75bf;
  padding: 0.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Rate = styled.div`
  color: #5c6c75bf;
  font-size: 0.875rem;
  display: flex;
  gap: 0.5rem;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  font-size: 14px;
  color: var(--text-light);
`;
const OldPrice = styled.span`
  font-size: 12px;
  margin-left: 0.5rem;
  text-decoration: line-through;
  color: #5e666abf;
`;
const WishIcon = styled.div`
  padding: 4px 4px 2px;
  border-radius: 4px;
  background: #c6cccfbd;
`;
const DetailsBTN = styled.div`
  font-size: 13px;
  padding: 8px;
  font-weight: 600;
  cursor: pointer;
  color: black;
  white-space: nowrap;

  &:hover {
    color: var(--main-color);
  }
`;
