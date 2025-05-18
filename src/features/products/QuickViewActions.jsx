import styled from "styled-components";
import QuickViewAddCart from "./QuickViewAddCart";
import StarRating from "../../ui/StarRating";

function QuickViewActions({ item,  setIsWishlist, isWishlist }) {
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
    quantity,
    slug,
  } = item;
  const discount = priceAfterDiscount !== undefined;
  const discountPrecantge = Math.floor(
    ((price - priceAfterDiscount) / price) * 100
  );
  return (
    <>
      <Div>
        <H3>{category.name}</H3>
        <H2>{title}</H2>
        <Rate>
          <StarRating rating={ratingsAverage} />

          <span>({ratingsQuantity} reviews)</span>
        </Rate>
        <Price>
          {discount ? (
            <>
              <span>${priceAfterDiscount}</span>
              <OldPrice>${price}</OldPrice>
              <Percentage>{discountPrecantge}% off</Percentage>
            </>
          ) : (
            <span>${price}</span>
          )}
        </Price>
        <Hr></Hr>
        <QuickViewAddCart setIsWishlist={setIsWishlist} isWishlist={isWishlist}  id={id}/>
        <Hr></Hr>
        <table>
          <tr>
            <Td>Product Code:</Td>
            <Td>{id.slice(0,10)}</Td>
          </tr>
          <tr>
            <Td>quantity:</Td>
            <Td>{quantity}</Td>
          </tr>
          <tr>
            <Td>Type:</Td>
            <Td>{slug}</Td>
          </tr>
          <tr>
            <Td>Shipping:</Td>
            <Td>01 day shipping. ( Free pickup today)</Td>
          </tr>
        </table>
      </Div>
    </>
  );
}

export default QuickViewActions;

const Div = styled.div`
  margin-top: 1.5rem;

  @media (min-width: 992px) {
    margin-top: 0;
    padding-left: 1rem;
  }
`;
const H2 = styled.h2`
  margin-bottom: 0.25rem;
  font-size: 27px;
  line-height: 1.2;
  font-weight: 600;
  color: var(--text-dark);
  @media (min-width: 992px) {
    font-size: 34px;
  }
`;
const H3 = styled.h3`
  color: var(--main-color);
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: 500;
`;
const Rate = styled.div`
  font-size: 14px;
  color: var(--main-color);
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
`;
const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const Hr = styled.hr`
  border: 0;
  border-top: 1px solid #dfe2e1;
  color: var(--border);
  margin: 2rem 0;
`;
const Td = styled.td`
  padding: 12px 24px;
  color: var(--text-light);
  font-size: 14px;
  font-weight: 500;
  vertical-align: top;
`;
const OldPrice = styled.span`
  margin-left: 0.5rem;
  text-decoration: line-through;
  color: var(--text-light);
  color: #5e666abf;
`;
const Percentage = styled.span`
  font-size: 12.5px;
  color: var(--danger);
  font-weight: 500;
  margin-left: .5rem;
`;
