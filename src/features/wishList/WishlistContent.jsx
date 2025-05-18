import { useAuth } from "../../contexts/AuthContext";
import { useGetWishlist } from "../../hooks/useGetWishlist";
import Container from "./../../ui/Container";
import WishlistHeader from "./WishlistHeader";
import WishlistTable from "./WishlistTable";
import Spinner from "../../ui/Spinner";
import Section from "./../../ui/Section";
import EmptyStateMessage from "./../../ui/EmptyStateMessage";

function WishListContent() {
  const { userTKN } = useAuth();
  const { wishlistData, isLoading } = useGetWishlist(userTKN);

  if (isLoading) return <Spinner />;
  const count = wishlistData.data.count;

  return (
    <Section>
      <Container>
        {count == 0 ? (
          <EmptyStateMessage>your wishlist is empty ... </EmptyStateMessage>
        ) : (
          <>
            <WishlistHeader count={count} />
            <WishlistTable />
          </>
        )}
      </Container>
    </Section>
  );
}

export default WishListContent;
