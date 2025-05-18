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
        <Div>
          {brandsData.data.data.map((brand) => (
            <BrandItem key={brand._id} brand={brand} />
          ))}
        </Div>
      )}
    </Section>
  );
}

export default BrandsList;
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
