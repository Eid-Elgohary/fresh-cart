import styled from "styled-components";
import CatLinks from "./CatLinks";
import RestOfLinks from "./RestOfLinks";
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function FooterLinks() {
  return (
    <Div>
      <CatLinks />
      <RestOfLinks />
    </Div>
  );
}

export default FooterLinks;

