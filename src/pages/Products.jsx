import Section from "./../ui/Section";
import ProductContent from "../features/products/ProductContent";
import { Helmet } from "react-helmet";

function Products() {
  return (
    <Section>
      <Helmet>
        <title>all products</title>
      </Helmet>
      <ProductContent />
    </Section>
  );
}

export default Products;
