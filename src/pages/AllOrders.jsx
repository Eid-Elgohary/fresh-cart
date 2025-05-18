import Container from "../ui/Container";
import Section from "./../ui/Section";
import axios from "axios";
import Spinner from "../ui/Spinner";
import { useQuery } from "@tanstack/react-query";
import Button from "../ui/Button";
import StyledLink from "../ui/Link";
import StyledTable, { Td, Th, Thead, Tr } from "./../ui/Table";
import styled from "styled-components";
import formatDate from "../utils/date";
import { Helmet } from "react-helmet";

async function fetchAllOrders(id) {
  return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);
}

function AllOrders() {
  let userID = localStorage.getItem("userId");

  const { data: allorders, isLoading } = useQuery({
    queryKey: ["allorders"],
    queryFn: () => fetchAllOrders(userID),
  });

  if (isLoading) return <Spinner />;

  if (allorders.data.length == 0) {
    return (
      <Section>
        <Helmet>
          <title>all orders</title>
        </Helmet>
        <Container>
          <h2 style={{ marginBottom: "20px" }}>
            your first timr here? <br />
            discover a world of great deals
          </h2>
          <Button>
            <StyledLink color="white" to="/home">
              go shopping ➡
            </StyledLink>
          </Button>
        </Container>
      </Section>
    );
  }

  const totalOrdersPrice = allorders.data.reduce(
    (total, order) => total + (order.totalOrderPrice || 0),
    0
  );
  const ordersCount = allorders.data.length;

  return (
    <Section>
      <Container>
        <div style={{ overflow: "auto", marginBottom: "20px" }}>
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
              {allorders.data.map((order) => (
                <Tr key={order.id}>
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
              ))}
            </tbody>
          </StyledTable>
        </div>

        <Div>
          <Button>
            <StyledLink color="white" to="/home">
              go shopping ➡
            </StyledLink>
          </Button>
          <Div>
            <Button as="div">{ordersCount} orders </Button>
            <Button as="div">total ${totalOrdersPrice} </Button>
          </Div>
        </Div>
      </Container>
    </Section>
  );
}

export default AllOrders;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;
