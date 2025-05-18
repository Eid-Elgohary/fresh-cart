import { Helmet } from "react-helmet";
import BrandsList from "../features/brands/BrandsList";
import Section from "./../ui/Section";

function Brands() {
  return (
    <Section>
      <Helmet>
        <title>brands</title>
      </Helmet>
      <BrandsList />
    </Section>
  );
}

export default Brands;
