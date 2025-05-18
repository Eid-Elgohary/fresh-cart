import styled from "styled-components";
import Button from "../../ui/Button";
import { Link } from 'react-router-dom';

function CartSummary({ totalCartPrice, itemsCount }) {
  return (
    <Div>
      <h2>summary</h2>
      <Card>
        <Ul>
          <Li>
            <div>Item Subtotal</div>
            <div>${totalCartPrice}</div>
          </Li>
          <Li>
            <div>number of items</div>
            <div>{itemsCount} items</div>
          </Li>
          <Li>
            <div>Service Fee</div>
            <div>$0.00</div>
          </Li>
          <Li>
            <div>Subtotal</div>
            <div>${totalCartPrice}</div>
          </Li>
        </Ul>
      </Card>

      
      <Btn as={Link} to='/checkout'>
        <span>checkout now</span>
        <span style={{ marginLeft: "auto" }}>${totalCartPrice}</span>
      </Btn>

      <p>
        <small>
          By placing your order, you agree to be bound by the Freshcart
          <Span> Terms of Service </Span>
          and
          <Span> Privacy Policy.</Span>
        </small>
      </p>
    </Div>
  );
}

export default CartSummary;

const Div = styled.div`
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: auto;
  @media (min-width: 992px) {
    width: 33%;
  }
`;
const Card = styled.div`
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  font-size: 14px;
  font-weight: 500;
`;
const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;
const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--border);
`;
const Span = styled.span`
  color: var(--main-color);
`;
const Btn = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: .5rem 0;
  font-size: 17px;
  padding: 1rem 1.5rem;
  text-decoration: none;
`;
