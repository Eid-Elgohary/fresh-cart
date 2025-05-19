import styled from "styled-components";
import Section from "../../ui/Section";
import useGetAllCategories from "../../hooks/useGetAllCategories";
import Spinner from "../../ui/Spinner";
import CategoryItem from "./CategoryItem";

function CategoriesList() {
  const { categoriesData, isPending } = useGetAllCategories();
  if (isPending) return <Spinner />;

  return (
    <Section>
      <Grid>
        {categoriesData.data.data.map((category) => (
          <CategoryItem key={category._id} category={category} />
        ))}
      </Grid>
    </Section>
  );
}

export default CategoriesList;
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

