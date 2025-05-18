import CategoriesList from "../features/categories/CategoryList";
import { Helmet } from 'react-helmet';

function Categories() {
  return (
    <>
      <Helmet>
        <title>categories</title>
      </Helmet>
      <CategoriesList />;
    </>
  );
}

export default Categories;
