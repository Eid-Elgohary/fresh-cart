import Section from "./../ui/Section";
import axios from "axios";
import Spinner from "../ui/Spinner";
import { useQuery } from "@tanstack/react-query";
import Button from "../ui/Button";
import StyledLink from "../ui/Link";
import StyledTable, { Td, Th, Thead, Tr } from "./../ui/Table";
import formatDate from "../utils/date";
import { Helmet } from "react-helmet";

async function fetchAllOrders(id) {
  return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);
}

function CashOrderDone() {
  let userID = localStorage.getItem("userId");

  const { data, isLoading } = useQuery({
    queryKey: ["allorders"],
    queryFn: () => fetchAllOrders(userID),
  });

  if (isLoading) return <Spinner />;
  const dataArr = data.data;
  const order = dataArr[dataArr.length - 1];

  return (
    <Section>
      <Helmet>
        <title>cash order</title>
      </Helmet>
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
        congratulation your order confirmed{" "}
      </h2>
      <div style={{ overflow: "auto" }}>
        <StyledTable>
          <Thead>
            <tr>
              <Th>name</Th>
              <Th>phone number</Th>
              <Th>shippingAddress</Th>
              <Th>payment method</Th>
              <Th>order items</Th>
              <Th>created at</Th>
              <Th>totalOrderPrice</Th>
            </tr>
          </Thead>
          <tbody>
            <Tr>
              <Td>{order?.user.name}</Td>
              <Td>{order?.shippingAddress.phone}</Td>
              <Td>{order?.shippingAddress.city}</Td>
              <Td>{order?.paymentMethodType}</Td>
              <Td>{order?.cartItems.length}</Td>
              <Td>{formatDate(order?.createdAt)}</Td>
              <Td>
                $ <strong>{order?.totalOrderPrice}</strong>
              </Td>
            </Tr>
          </tbody>
        </StyledTable>
      </div>
      <Button style={{ marginBottom: "20px", marginTop: "20px" }}>
        <StyledLink color="white" to="/allorders">
          go to orders history ➡
        </StyledLink>
      </Button>
      <Button>
        <StyledLink color="white" to="/home">
          go shopping ➡
        </StyledLink>
      </Button>
    </Section>
  );
}

export default CashOrderDone;

// const Table = styled.table`
//   border-color: var(--border);
//   margin-bottom: 1rem;
//   vertical-align: top;
//   width: 100%;
//   white-space: nowrap;
//   font-size: 14px;
//   border-collapse: collapse;
// `;
// const Thead = styled.thead`
//   background: #f0f3f2;
//   border-bottom: 1px solid var(--border);
// `;
// const Th = styled.th`
//   padding: 0.75rem 1.5rem;
//   font-weight: 600;
// `;
// const Td = styled.td`
//   padding: 0.75rem 1.5rem;
//   font-weight: 600;
//   vertical-align: middle;
//   color: var(--text-light);
//   font-size: 14px;
//   font-weight: 500;
//   height: 90px;
//   text-align: center;
// `;
// const Tr = styled.tr`
//   border-bottom: 1px solid var(--border);
// `;
