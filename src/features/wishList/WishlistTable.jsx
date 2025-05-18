import styled from "styled-components";
import WishlistTableBody from "./WishlistTableBody";
import { useGetWishlist } from "./../../hooks/useGetWishlist";
import { useAuth } from "../../contexts/AuthContext";
import Spinner from "../../ui/Spinner";

function WishlistTable() {
  const { userTKN } = useAuth();
  const { wishlistData, isLoading } = useGetWishlist(userTKN);

  if (isLoading) return <Spinner />;
  return (
    <div style={{ overflow: "auto" }}>
      <Table>
        <Thead>
          <tr>
            <Th>product img</Th>
            <Th>product</Th>
            <Th>price</Th>
            <Th>action</Th>
            <Th>remove</Th>
          </tr>
        </Thead>
        <tbody>
          {wishlistData.data.data.map((item) => (
            <WishlistTableBody key={item.id} item={item} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default WishlistTable;

const Table = styled.table`
  border-color: var(--border);
  margin-bottom: 1rem;
  vertical-align: top;
  width: 100%;
  white-space: nowrap;
  font-size: 14px;
  border-collapse: collapse;
`;
const Thead = styled.thead`
  background: #f0f3f2;
  border-bottom: 1px solid var(--border);
`;
const Th = styled.th`
  padding: 0.75rem 1.5rem;
  font-weight: 600;
`;
