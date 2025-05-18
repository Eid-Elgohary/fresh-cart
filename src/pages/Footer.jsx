import styled from "styled-components";
import Container from "./../ui/Container";
import FooterLinks from "../features/footer/FooterLinks";
import FooterPayLinks from "../features/footer/FooterPayLinks";
import FooterCopyRights from "../features/footer/FooterCopyRights";

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterLinks />
        <FooterPayLinks />
        <FooterCopyRights />
      </Container>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  border-top: 1px solid var(--border);
  background: #f0f3f2;
  padding: 4rem 0;
`;
