import Section from "../ui/Section";
import HomeContent from "./../features/home/HomeContent";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <Section>
      <Helmet>
        <title>fresh cart</title>
      </Helmet>
      <HomeContent />
    </Section>
  );
}
export default Home;
