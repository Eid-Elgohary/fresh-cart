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
      <Div>
        {categoriesData.data.data.map((category) => (
          <CategoryItem key={category._id} category={category} />
        ))}
      </Div>
    </Section>
  );
}

export default CategoriesList;
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
