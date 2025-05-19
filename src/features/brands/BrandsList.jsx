import styled from "styled-components";
import useGetAllBrands from "../../hooks/useGetAllBrands";
import Spinner from "../../ui/Spinner";
import Section from "../../ui/Section";
import BrandItem from "./BrandItem";
import EmptyStateMessage from "../../ui/EmptyStateMessage";

function BrandsList() {
  const { brandsData, isPending } = useGetAllBrands();
  if (isPending) return <Spinner />;

  return (
    <Section>
      {brandsData.data.data.length === 0 ? (
        <EmptyStateMessage>
          ther is no available data about brands yet .
        </EmptyStateMessage>
      ) : (
        <Grid>
          {brandsData.data.data.map((brand) => (
            <BrandItem key={brand._id} brand={brand} />
          ))}
        </Grid>
      )}
    </Section>
  );
}

export default BrandsList;
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

